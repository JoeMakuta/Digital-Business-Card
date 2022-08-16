import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
   return (
      <div className="footer-container" >
         <FaTwitterSquare color='#918E9B' size={30} className = "social-media-link" />
         <FaFacebookSquare color='#918E9B' size={30} className = "social-media-link"/>
         <FaGithubSquare color='#918E9B' size={30} className = "social-media-link"/>
         <FaInstagramSquare color='#918E9B' size={30} className = "social-media-link"/>
      </div>
   )
}

export default Footer