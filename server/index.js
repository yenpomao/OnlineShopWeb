import express from 'express';
import mongoose from 'mongoose';
// import { JsonWebToken } from 'jsonwebtoken';
import multer from 'multer';
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
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


mongoose.connect(DB_Server)
.then(() => app.listen(PORT, () => console.log(`It is alive on http://localhost:${PORT}`)))
.catch((error) => console.log(error.message));