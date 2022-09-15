import "./contact.scss";
import { useState } from "react";

const Contacts = () => {

  const [msg, setMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(true)



  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right">
        <h2>Contacts</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Email"/>
          <textarea placeholder="Message" ></textarea>
          <button type="submit">Send</button>
          {msg && <span>Thank you! .  I will contact you shortly.</span>}
        </form>
      </div>
    </div>
  );
};

export default Contacts;
