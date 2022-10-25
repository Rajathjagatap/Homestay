import React from 'react';

export default function Places(){
    return(
        <div className='col-md-12' style={{paddingLeft:'5vw', paddingRight:'5vw',marginTop:'5vh'}}>
            <p style={{fontFamily:'Poppins',textAlign:'center',fontSize:'25px',fontWeight:800}}>Tourist Places NearBy</p>
            <div className='row' style={{margin:'20px'}}>
                <div className='col-md-6' style={{backgroundColor:'#F8F9FB'}}>
                    <img src={require('../../assets/baba-budangiri.jpeg')} alt="loading" style={{width:'100%',borderRadius:'25px'}} height={300} />
                </div>
                <div className='col-md-6'>
                    <p style={{fontSize:'16px', fontFamily:'Poppins', fontWeight:800,paddingTop:'20px'}}>Baba Budangiri Hills!</p>
                    <p style={{fontFamily:'Poppins'}}>There are three caves here. Three Siddhas are buried here. Siddhas are religious oracles. An annual ceremony is held in these caves. When you are at the Baba Budan Giri mountain range, do try to make it to these caves. The scenery around this region is spectacular. The combination of scenic beauty and the intriguing caves makes this place a frequented one. During the Deepavali or Diwali festival, a beacon is lighted. The beacon is placed here.</p>
                </div>
            </div>

            <div className='row' style={{margin:'20px',paddingTop:'20px'}}>
                <div className='col-md-6' style={{backgroundColor:'#F8F9FB'}}>
                    <p style={{fontSize:'16px', fontFamily:'Poppins', fontWeight:800,paddingTop:'20px'}}>Bhadra Dam!</p>
                    <p style={{fontFamily:'Poppins'}}>There are three caves here. Three Siddhas are buried here. Siddhas are religious oracles. An annual ceremony is held in these caves. When you are at the Baba Budan Giri mountain range, do try to make it to these caves. The scenery around this region is spectacular. The combination of scenic beauty and the intriguing caves makes this place a frequented one. During the Deepavali or Diwali festival, a beacon is lighted. The beacon is placed here.</p>
                </div>
                <div className='col-md-6'>
                    <img src={require('../../assets/bhadra.jpeg')} alt="loading" style={{width:'100%',borderRadius:'25px'}} height={300} />
                </div>
            </div>

            <div className='row' style={{margin:'20px'}}>
                <div className='col-md-6' style={{backgroundColor:'#F8F9FB'}}>
                    <img src={require('../../assets/Kallatagiri.jpeg')} alt="loading" style={{width:'100%',borderRadius:'25px'}} height={300} />
                </div>
                <div className='col-md-6'>
                    <p style={{fontSize:'16px', fontFamily:'Poppins', fontWeight:800,paddingTop:'20px'}}>Kallathgiri Falls!</p>
                    <p style={{fontFamily:'Poppins'}}>There are three caves here. Three Siddhas are buried here. Siddhas are religious oracles. An annual ceremony is held in these caves. When you are at the Baba Budan Giri mountain range, do try to make it to these caves. The scenery around this region is spectacular. The combination of scenic beauty and the intriguing caves makes this place a frequented one. During the Deepavali or Diwali festival, a beacon is lighted. The beacon is placed here.</p>
                </div>
            </div>

        </div>
    );
}