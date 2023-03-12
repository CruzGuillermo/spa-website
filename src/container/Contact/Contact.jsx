import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Contact.scss";

const Contact = () => {
  const [valueName, setValueName] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valueMessage, setValueMessage] = useState("");

  const [state, handleSubmit] = useForm("moqzvdoe");

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:guillermobelizcruz98@gmail.com" className="p-text">
            guillermobelizcruz98@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +54 3856184795" className="p-text">
            +54 3856184795
          </a>
        </div>
      </div>

      <form className="app__contact-form app__flex" onSubmit={handleSubmit}>
        <div className="app__flex">
          <input
            id="name"
            type="text"
            name="Nombre"
            onChange={(e) => setValueName(e.target.value)}
            className="p-text"
            placeholder="Your Name"
          />
        </div>
        <div className="app__flex">
          <input
            id="email"
            type="email"
            name="Email"
            onChange={(e) => setValueMail(e.target.value)}
            className="p-text"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              name="subject"
            />
          </div>
        <div>
          <textarea
            id="text"
            name="Mensaje"
            onChange={(e) => setValueMessage(e.target.value)}
            placeholder="Your Message"
          />
        </div>
        {state.succeeded ? (
          <div className="flex flex-col align-center gap-2">
            <input
              id="submitted"
              type="submit"
              value={"sent"}
              disabled={state.submitting}
            ></input>
          </div>
        ) : (
          <input
            className="portfolio-button"
            id="submit"
            type="submit"
            value={"send"}
            disabled={state.submitting}
          ></input>
        )}
      </form>
      {state.succeeded ? (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      ) : null}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
