import React from 'react';
import './footer.css';

export default function Footer(){
    return(
        <div className='col-md-12 footer'>
        <div style={{textAlign:'center'}}>
             <p className="text_orange font_family_montserrat" style={{paddingTop:'30px',color:'#fff',fontWeight:800,fontSize:'18px'}}>SARGODU JUNGLE HOMESTAY</p>
             <p className="text_orange font_family_montserrat" style={{color:'#fff'}}>© Copyright 2022. All rights reserved</p>
        </div>
     </div>
    )
}