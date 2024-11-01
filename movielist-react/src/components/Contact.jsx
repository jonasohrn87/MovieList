import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { contactInfo } = useContext(MovieContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: name,
          email: email,
          description: message,
        },
      }),
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <h2>Kontakta oss</h2>
        <label htmlFor="name">Namn</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="description">Ärendebeskrivning</label>
        <textarea
          id="description"
          cols={28}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Skicka</button>
      </div>
      <div className="contact-info">
        <h2>Andra sätt för kontakt</h2>
        <p>
          Mail: {contactInfo.email} <br />
          Telefon: {contactInfo.phone} <br /> <br />
          Öppettider vardag: {contactInfo.openHoursWeek} <br />
          Öppettider helg: {contactInfo.openHoursWeekend}
        </p>
      </div>
    </div>
  );
};

export default Contact;
