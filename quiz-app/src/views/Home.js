import Navbar from '../components/Navbar';
import Img1 from '../assets/images/thinkingMan.png'

function Home() {
    return (
      <div style={{backgroundColor: '#F4FFFE',height:'918px'}}>
        <Navbar />
        <div className='d-flex justify-content-center mt-3'>
            
            <img src={Img1} width='300' height='350'  alt='img'/>
        </div>
      </div>
    );
  }
  
  export default Home;
  