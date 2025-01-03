import React from 'react'
import remove_icon from '../Assets/remove_icon.png'
import user from '../Assets/user.png'
import './Attributes.css'
function Attributes() {
  return (
    <div className='Attributes'>
        <img src={remove_icon} alt=''></img>
        <a href="https://www.flaticon.com/free-icons/cancel" title="cancel icons">Cancel icons created by hqrloveq - Flaticon</a>
        <img src={user}></img>
        <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>

        
    </div>
  )
}

export default Attributes