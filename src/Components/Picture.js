

import img1 from './profil_pic.png'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Picture() {
   return (
      <div className="header-container">
         <img src={img1} />

         <p>Josue Makuta</p>
         <p>Full Stack Web Devolopper</p>
         <p>makutajosue@gmail.com</p>
         <div>
            <button> <FaEnvelope></FaEnvelope>Email</button>
            <button><FaLinkedin></FaLinkedin>LinkedIn</button>
         </div>
      </div>
   )
}

export default Picture