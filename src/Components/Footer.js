import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
   return (
      <div className="footer-container" >
         <FaTwitterSquare color='#918E9B' size={30} />
         <FaFacebookSquare color='#918E9B' size={30} />
         <FaGithubSquare color='#918E9B' size={30} />
         <FaInstagramSquare color='#918E9B' size={30} />
      </div>
   )
}

export default Footer