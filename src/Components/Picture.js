
import img from "./IMG_3726_Home.jpg"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Picture() {
   return (
      <div className="header-container">
         <img src={img} />

         <p>Josue Makuta</p>
         <p>Full Stack Web Devolopper</p>
         <p>josuemakuta@gmail.com</p>
         <div>
            <button> <FaEnvelope></FaEnvelope>Email</button>
            <button><FaLinkedin></FaLinkedin>LinkedIn</button>
         </div>
      </div>
   )
}

export default Picture