import "./contact.scss";
import { BiSend } from "react-icons/bi";
import Phone from "../../assets/phone.png";
import Mail from "../../assets/mail.png";
import Address from "../../assets/address.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contacts = () => {

  const formRef = useRef()

  const handleSubmit = (e) => {

    e.preventDefault(); 

    emailjs.sendForm('service_ahf2cir', 'template_3ge1ifs', formRef.current, 'CHybQzL71zjlLO8mY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div className="contacts" id="contacts">
      <div className="contact-bg"> </div>

      <div className="wrapper">
        <div className="left">
          <h1 className="title">Contact me</h1>
          <div className="info">
            <div className="info-item">
              <img src={Phone} alt="" className="icon" />
              +978 9816860874
            </div>

            <div className="info-item">
              <img src={Mail} alt="" className="icon" />
              k.romann413@gmail.com
            </div>

            <div className="info-item">
              <img src={Address} alt="" className="icon" />
              Mandikhatar, Kathmandu
            </div>
          </div>
        </div>

        <div className="right">
          <div className="desc">
            Lorem ipsumet consectetur adipisicing elit. Alias praesentium
            voluptatibus consequatur officiis fugit officia minus magni dicta
            deserunt nostrum adipisci, exercitationem minima ad vel po
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name"  name="user_name"/>
            <input type="text" placeholder="Subject" name='user_subject'/>
            <input type="text" placeholder="Email" name='user_email'/>
            <textarea rows='5' placeholder="Message" name='user_message'></textarea>

            <div className="btnCon">
            <button type="submit" className="btnC">
              Send
              <BiSend className="iconS" />
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
