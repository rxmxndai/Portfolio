import "./contact.scss";
import { BiSend } from "react-icons/bi";

import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [send, setSend] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_ahf2cir",
    //     "template_3ge1ifs",
    //     formRef.current,
    //     "CHybQzL71zjlLO8mY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setSend(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="contacts" id="contacts">
      <div className="wrapper">
        <div className="left">
          <h1 className="title">Contact me</h1>
          <div className="info">
            <div className="info-item">
              <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/phone.png?raw=true" alt="" className="icon" />
              +978 9816860874
            </div>

            <div className="info-item">
              <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/mail.png?raw=true" alt="" className="icon" />
              k.romann413@gmail.com
            </div>

            <div className="info-item">
              <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/address.png?raw=true" alt="" className="icon" />
              Mandikhatar, Kathmandu
            </div>

            <div className="links">
              <a href="https://github.com/rxmxndai" target="_blank">
                <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/github.png?raw=true" alt="github" />
              </a>
              <a
              
                href="https://www.messenger.com/t/100013434455527/"
                target="_blank"
              >
                <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/messenger.png?raw=true" alt="linkedin" />
              </a>
              <a href="https://www.linkedin.com/in/roman-karki-bb3338241/"
                 target="_blank">
                <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/linkedin.png?raw=true" alt="messenger" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="desc">
            I am always more than happy to connect with you. <br></br>
            Feel free to contact me.
            A good project is what makes my portfolio better. So, I will give my best.
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className="input"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="user_message"
            ></textarea>

            <div className="btnCon"  > 
              <button type="submit" className="btnC" >
                Send
                <BiSend className="iconS" />
              </button>
            </div>

            {send && "Submitted ! Thank you..."}
            {!send && "SORRY, working on secured email rn."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
