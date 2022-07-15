import "./Contact.css";
import Button from "../../components/shared/Button";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newData = {
    //   name: data.name,
    //   email: data.email,
    //   message: data.message,
    // };

    setShowData(true);

    // console.log(newData);
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Feel free to message us</h2>
        <div className="input-group">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
        </div>
        <textarea
          type="text"
          name="message"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="Your message..."
          required
        ></textarea>
        <div className="container">
          <Button type="submit" text="Send" className="submit-btn" />
        </div>
      </form>

      {showData && (
        <div className="output">
          <div>
            <span className="label">Author: </span>
            <span>{data.name}</span>
          </div>
          <div>
            <span className="label">Email: </span>
            <span>{data.email}</span>
          </div>
          <div>
            <span className="label">Message: </span>
            <span>{data.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
