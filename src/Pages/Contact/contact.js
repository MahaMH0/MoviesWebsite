import { MdEmail } from "react-icons/md";
import {BsTelephoneFill} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import {TbBrandTwitter} from "react-icons/tb"
import {AiOutlineLinkedin} from "react-icons/ai"

export default function Contact() {

    return (
        <>
         <div id="contact" className="row">
             <div className="footerdata col-4">
                 <h4>Get In Touch</h4>
                 <p><MdEmail/>mahamahoud2611@yahoo.com</p>
                 <p><BsTelephoneFill/>01226655614</p>
             </div>
             <div className="col-5">
               <button className="btn btn-dark">Contact us</button>
             </div>
             <div className="footerdata col-3">
               <FiFacebook/>
               
               <TbBrandTwitter/>
               <AiOutlineLinkedin/>
                 <p>Copy Rights @2022</p>
             </div>
         </div>
        </>
    );
}