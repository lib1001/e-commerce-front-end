import React from 'react';
import './Mailing.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Mailing = () => {
  return (
    <div className='mailing'>
        <div className="wrapper">
            <span>JOIN OUR MAILING LIST</span>
            <div className="mail">
                <input type="text" placeholder='Enter email' />
                <button>SIGN ME UP</button>
            </div>
            <div className="icons">
<FacebookIcon />
<TwitterIcon />
<InstagramIcon />
<GoogleIcon />
<PinterestIcon />
            </div>
        </div>
    </div>
  )
}

export default Mailing