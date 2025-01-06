import express from 'express';
import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import multer from 'multer';
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { type } from 'os';
import { error } from 'console';
dotenv.config();

const PORT = 4000;
const app = express();
const DB_Server = process.env.DB_Server

app.use(express.json());
app.use(cors());

// API 
app.get('/', (req, res) => {
    res.send("Express APP is runinng")
})

// Images Storage 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images');
    },
    filename: (req, file, cb) => {
     
        const uniqueSuffix = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, `${file.fieldname}_${uniqueSuffix}`);
    }
})



const upload = multer({ storage: storage })


// POST 
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}` 
    });
});


// Schema for Creating Products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type:String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type:String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    available: {
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async (req, res) =>{
    let products = await Product.find({});
    let id = 1;
    if (products.length > 0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Delete API
app.post('/removeproduct', async (req, res) =>{
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

// Get all products API
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})

// Sheam create for user
const users = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type:String,
        unique: true,
    },
    password: {
        type:String,
    },
    cartDate: {
        type:Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// Endpoint for register user
app.post('/signup', async (req, res) => {
    let check = await users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, error: "existing users found with same email"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jsonwebtoken.sign(data, 'secret_ecom');
    res.json({ success: true, token})
})

// endpoint for user login 
app.post('/login', async (req, res) => {
    let user = await users.findOne({ email: req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jsonwebtoken.sign(data, 'secret_ecom');
            res.json({ success: true, token})
        }
        else {
            res.json({ success: false, error: "Wrong Password"})
        }
    }
    else {
        res.json({
            success: false,
            error: 'Wrong email id'
        })
    }
})

// endpoint for new collection
app.get('/newcollection', async (req, res) => {
    let products = await Product.find({});
    let new_collections = products.slice(1).slice(-8);
    console.log("New Collections fetehed");
    res.send(new_collections);
})

// endpoint for women popular section
app.get('/popularinwomen', async (req, res) => {
    let products = await Product.find({category: "women"});
    let pop_women_collections = products.slice(0, 4);
    console.log("Pop women collection fetched");
    res.send(pop_women_collections);
})

// middleware for adjust proudcts in cart
const fetch_user = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error:"Please use valid token" })
    }
    else {
        try {
            const data = jsonwebtoken.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ error: "Please use valid token"})
        }
    }
}

// endpoint for add products in cart
app.post('/addtocart', fetch_user, async (req, res) => {
    console.log("ADD", req.body.itemId)
    let userData = await users.findOne({_id: req.user.id})
    userData.cartData[req.body.itemId] += 1;
    await users.findOneAndUpdate({ _id: req.user.id}, {cartData: userData.cartData});
    res.send("add product to cart")
})

// endpoint for remove products in cart
app.post('/removecart', fetch_user, async (req, res) => {
    console.log("REMOVE", req.body.itemId)
    let userData = await users.findOne({_id: req.user.id})
    if (userData.cartData[req.body.itemId] > 0 ) {
        userData.cartData[req.body.itemId] -= 1;
    }
    await users.findOneAndUpdate({ _id: req.user.id}, {cartData: userData.cartData});
    res.send("remove product from cart")
})

// endpoint for get cart product
app.post('/getcart', fetch_user, async (req, res) => {
    console.log("GET CART")
    let userData = await users.findOne({_id: req.user.id})
    res.json(userData.cartData)
})


mongoose.connect(DB_Server)
.then(() => app.listen(PORT, () => console.log(`It is alive on http://localhost:${PORT}`)))
.catch((error) => console.log(error.message));