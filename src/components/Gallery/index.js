import React from 'react';

export default function Gallery(){
    return(
        <div className="col-md-12" style={{paddingRight:'5vw',paddingLeft:'5vw',marginTop:'5vh'}}>
            <p style={{fontFamily:'Poppins',textAlign:'center',fontSize:'25px',fontWeight:800,paddingBottom:'20px'}}>Gallery</p>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={require('../../assets/home1.jpeg')} alt="loading"  height={250} style={{borderRadius:'25px',width:'100%'}} />
                </div>
                <div className='col-md-4'>
                    <img src={require('../../assets/home2.jpeg')} alt="loading" width={300} height={250} style={{borderRadius:'25px',width:'100%'}} />
                </div>
                <div className='col-md-4'>
                    <img src={require('../../assets/home3.jpeg')} alt="loading" width={300} height={250} style={{borderRadius:'25px',width:'100%'}} />
                </div>
            </div>

            <div className='row' style={{marginTop:'20px'}}>
                <div className='col-md-4'>
                    <img src={require('../../assets/home4.jpeg')} alt="loading" width={300} height={250} style={{borderRadius:'25px',width:'100%'}} />
                </div>
                <div className='col-md-4'>
                    <img src={require('../../assets/home5.jpeg')} alt="loading" width={300} height={250} style={{borderRadius:'25px',width:'100%'}} />
                </div>
                <div className='col-md-4'>
                    <img src={require('../../assets/home6.jpeg')} alt="loading" width={300} height={250} style={{borderRadius:'25px',width:'100%'}} />
                </div>
            </div>
        </div>
    );
}