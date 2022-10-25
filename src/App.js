import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { default as whatsapp } from './assets/whatsapp.svg';
import Places from './components/Places';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <img src={require('./assets/home.jpeg')} alt="loading!" style={{width:'100%',height:'90vh'}}/>
        <h1 style={{position:'absolute', top:'60vh',left:'35vw',color:'#FFF'}}>Lose Yourself in Nature!</h1>
      </div>
      <div>
         <p style={{textAlign:'center', marginTop:'10px', fontWeight:800,fontFamily:'Poppins', fontSize:'25px'}}> A place to unwind!</p>
         <p style={{textAlign:'center', marginTop:'10px', fontFamily:'Poppins', marginLeft:'2vw', marginRight:'2vw'}}> At Saragodu jungle home stay, we provide you with an experience of living at home, though you are away from home. At every step you are well taken care off. Our guests have come here with their families and friends ; During their stay they have always picked up more friends and enjoyed their stay yo the fullest. </p>
      </div>
      <Gallery/>
      <Places/>
      <Footer/>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/918553351789" style={{position:'absolute', right:15, top:'80vh'}}> <img height={60} src={whatsapp}  alt="Chat on WhatsApp" /></a>
    </div>
  );
}

export default App;
