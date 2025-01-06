import React from 'react'
import logo from '../Assets/logo.png'
import remove_icon from '../Assets/remove_icon.png'
import user from '../Assets/user.png'
import add_product from '../Assets/add_product.png'
import upload from '../Assets/upload.png'
import list_product from '../Assets/list_product.png'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import arrow from '../Assets/arrow.png'
import cart from '../Assets/cart.png'
import hand from '../Assets/hand.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_logo from '../Assets/whatsapp_logo.png'
import facebook_logo from '../Assets/facebook_logo.png'
import dropdown_icon from '../Assets/dropdown-icon.png'
import { imageMap } from '../Assets/all_products' 
import hero_model from '../Assets/hero_model.jpg'
import banner_kid from '../Assets/banner_kid.jpg'
import banner_mens from '../Assets/banner_mens.jpg'
import banner_women from '../Assets/banner_women.jpg'
import exclusive_image from '../Assets/exclusive_image.jpg'
import './Attributes.css'

function Attributes() {
  return (
    <div className='Attributes'>
      <div className="flaticon">
        <img src={logo} alt=''></img>
        <a href="https://www.flaticon.com/free-icons/logo" title="logo icons">
          Logo icons created by LAFS - Flaticon
        </a>

        <img src={remove_icon} alt="Remove icon" />
        <a href="https://www.flaticon.com/free-icons/cancel" title="cancel icons">
          Cancel icons created by hqrloveq - Flaticon
        </a>
        
        <img src={user} alt="User icon" />
        <a href="https://www.flaticon.com/free-icons/user" title="user icons">
          User icons created by Freepik - Flaticon
        </a>
        
        <img src={add_product} alt="Add product icon" />
        <a href="https://www.flaticon.com/free-icons/add-product" title="add product icons">
          Add product icons created by paonkz - Flaticon
        </a>
        
        <img src={list_product} alt="Product list icon" />
        <a href="https://www.flaticon.com/free-icons/product" title="product icons">
          Product icons created by Uniconlabs - Flaticon
        </a>
        
        <img src={upload} alt="Cloud upload icon" />
        <a href="https://www.flaticon.com/free-icons/cloud-computing" title="cloud computing icons">
          Cloud computing icons created by Smartline - Flaticon
        </a>
        
        <img src={star_icon} alt="Star icon" />
        <a href="https://www.flaticon.com/free-icons/rating" title="rating icons">
          Rating icons created by O.moonstd - Flaticon
        </a>
        
        <img src={star_dull_icon} alt="Unfavorite star icon" />
        <a href="https://www.flaticon.com/free-icons/unfavorite" title="unfavorite icons">
          Unfavorite icons created by juicy_fish - Flaticon
        </a>
        
        <img src={arrow} alt="Arrow icon" />
        <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">
          Arrows icons created by BizzBox - Flaticon
        </a>
        
        <img src={cart} alt="Cart icon" />
        <a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">
          Smart cart icons created by Freepik - Flaticon
        </a>
        
        <img src={hand} alt="Hand wave icon" />
        <a href="https://www.flaticon.com/free-icons/hello" title="hello icons">
          Hello icons created by Freepik - Flaticon
        </a>
        
        <img src={instagram_icon} alt="Instagram icon" />
        <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">
          Instagram icons created by Freepik - Flaticon
        </a>
        
        <img src={whatsapp_logo} alt="WhatsApp logo" />
        <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">
          WhatsApp icons created by cobynecz - Flaticon
        </a>
        
        <img src={facebook_logo} alt="Facebook logo" />
        <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">
          Facebook icons created by Pixel perfect - Flaticon
        </a>
        
        <img src={dropdown_icon} alt="Dropdown arrow icon" />
        <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">
          Arrow icons created by Freepik - Flaticon
        </a>
      </div>
      
      <div className="unsplash">
        {[
          {
            src: hero_model,
            photographer: "Daniel Monteiro",
            profile: "https://unsplash.com/@danielmonteirox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            photoUrl: "https://unsplash.com/photos/woman-sitting-on-floor-tiles-inside-building-VMeHP3mNJL4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: banner_kid,
            photographer: "Senjuti Kundu",
            profile: "https://unsplash.com/@senjuti?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            photoUrl: "https://unsplash.com/photos/girl-with-paint-of-body-JfolIjRnveY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: banner_mens,
            photographer: "Kazi Mizan",
            profile: "https://unsplash.com/@kaziminmizan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            photoUrl: "https://unsplash.com/photos/man-in-black-suit-jacket-61Idm7r4ERE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: banner_women,
            photographer: "Brooke Cagle",
            profile: "https://unsplash.com/de/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            photoUrl:  "https://unsplash.com/de/fotos/woman-sitting-on-picnic-table-pJqfhKUpCh8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: exclusive_image,
            photographer: "Farshad Sheikhzad",
            profile: "https://unsplash.com/@farshadsheikhzad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            photoUrl: "https://unsplash.com/photos/a-man-wearing-a-jean-jacket-and-sunglasses-standing-in-front-of-a-bridge-qKa5sx-Aa_o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          }
          // Add more objects for each image and credit text pair.
        ].map(({ src, photographer, profile, photoUrl }, index) => (
          <div key={index} className="image-block">
            <img src={src} alt="" />
            <p>
              Photo by <a href={profile}>{photographer}</a> on{" "}
              <a href={photoUrl}>Unsplash</a>
            </p>
          </div>
        ))}

        {Object.keys(imageMap).map((key, index) => (
          <div key={`imageMap-${index}`} className="image-block">
            <img src={imageMap[key]} alt="" />
            <p>
              Photo by <a href="...">Photographer Name</a> on{" "}
              <a href="...">Unsplash</a>
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Attributes