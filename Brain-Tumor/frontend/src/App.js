
import './App.css';
import Navbar from './Navbar';
import img from './3.jpg';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <>
   <Navbar />
   <div className='image' style={{width:'1300px' , marginTop:'0px', marginLeft:'0px' , marginRight:'50px'} }>
   {/* <img src={img} height="600px" width="1255px"  /> */}
   <img src={img} height="600px" width="1350px" style={{marginLeft:'0px'}}  /> 
   </div>
   <div className='upload'>
   <ImageUpload />
   </div>
   </>
    // <>
    // <div className='Navbar'>
    //   <h1>DetectX</h1>
    //   <ul>
    //     <li><a href="#">Home </a></li>
    //     <li><a href="#">News</a></li>
    //     <li><a href="#">Contact</a></li>
    //     <li><a href="#">About</a></li>
    // </ul>
    // </div>
    // </>

  );
}

export default App;
