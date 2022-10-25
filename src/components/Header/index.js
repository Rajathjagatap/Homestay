import React from 'react';
import './header.css'

export default function Header(){
    return(
        <div>
            <p style={{textAlign:'center',marginBottom:0, backgroundColor:"#F9F9F9",paddingTop:'10px', paddingBottom:'10px'}}>For Booking: <span style={{color:'#278c45'}}>+91 9632564469 | +91 9731111033 </span></p>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg py-lg-0"  style={{borderBottom: '0.5px solid', borderBottomColor: '#D3D3D3',flexWrap:'wrap'}}>
              <div className='navbar-logo-name'>
                <span style={{margin:'10px',marginTop:'15px',color:'#278c45'}}><i class="fa fa-home icon-large" style={{fontSize: '30px'}} aria-hidden="true"></i></span>
                <p className='header-font header-font-size' style={{alignSelf:'center',color:'#278c45',marginTop:'10px'}}>SARGODU JUNGLE HOMESTAY</p>
                {/* <p  style={{alignSelf:'center', fontFamily:'Dancing Script'}}>Never Ending Zeal</p> */}
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse header-list" id="navbarResponsive">
                <ul className="navbar-nav ms-auto" style={{marginRight:'10px'}}>
                  <li className="nav-item" id="home">
                    <a className="nav-link header-font txt" style={{color:'#4F4F4F'}} href="/">HOME
                    </a>
                  </li>
                  <li className="nav-item" id="about" >
                    <a className="nav-link txt header-font" style={{color:'#4F4F4F'}} href="/aboutus" >ABOUT US</a>
                  </li>
                  <li className="nav-item" id="vision">
                    <a className="nav-link txt header-font"  style={{color:'#4F4F4F'}} href="/vision" >VISION</a>
                  </li>
                  <li className="nav-item" id="csr">
                    <a className="nav-link txt header-font" style={{color:'#4F4F4F'}} href="/csr" >CSR</a>
                  </li>
                  <li className="nav-item" id="services">
                    <a className="nav-link txt header-font" style={{color:'#4F4F4F'}} href="/services" >SERVICES</a>
                  </li>
                  <li className="nav-item" id="contact">
                    <a className="nav-link txt header-font"  style={{color:'#4F4F4F'}} href="/contactus" >CONTACT US</a>
                  </li>
                </ul>
          
            </div>
          </nav>
        </div>
    );
}