import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./footer.css"
import { NavLink } from 'react-router-dom';




 function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: "#191919",
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        padding: "50px 0",
        marginTop: "100px",
        }}>

        <div 
          style={{
            display: "flex",
            justifyContent: "flex-start",
         }}>
          <a href='#!' className='textLink'>Terms Of Use</a>
          <a href='#!' className='textLink'> Privacy-Policy</a>
          <a href='#!' className='textLink'>FAQ</a>
          <a href='#!' className='textLink'>Watch List</a>
        </div>
     
        <p>
          © 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all 
          related images and content are the property of, Streamit Inc. Duplication and copy of this strictly
          prohibited. All rights reserved.
        </p>

        <div>
          <p>Follow Us:</p>
          
         <InstagramIcon className='icon' fontSize="large" style={{margin: "10px"}}/>
          <FacebookIcon className='icon' fontSize="large" style={{margin: "10px"}}/>
          <GoogleIcon className='icon' fontSize="large" style={{margin: "10px"}}/> 
          <GitHubIcon className='icon' fontSize="large" style={{margin: "10px"}}/>
          
        </div>
     
    </footer>
  );
}



export default Footer;









