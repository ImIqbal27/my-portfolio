import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6w2zsmq",
        "template_3x28tuc",
        form.current,
        "NZn-yAwrllOqT6PQS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(form.current);
  };
  return (
    <div>
      <div className="bg-teal-300 px-10 py-14">
        <div className="text-center pb-14 text-white">
          <h1 className="text-4xl">Send me a message !</h1>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 justify-items-center gap-5 ">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full max-w-md"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input w-full max-w-md"
            />
            <textarea
              name="message"
              className="textarea w-full max-w-md"
              placeholder="Your message"
              rows={6}></textarea>

            <button type="submit" className="btn btn-accent-900  w-[445px]">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="pr-3"></FontAwesomeIcon>{" "}
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
