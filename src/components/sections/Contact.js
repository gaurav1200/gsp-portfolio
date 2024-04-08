import React, { useRef, useState } from "react";
import "../Main.css";
import emailjs from "@emailjs/browser";
import GlogoBlack from "../../assets/img/gBlack2.png";
import { socialIcons } from "../../assets";
import SocialIconCard from "../cards/SocialIconCard";
import Alert from "../Alert";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const handleClose = () => {
    setAlertMessage("");
    setType("");
    setShowAlert(false);
  };

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  //Template ID: template_tifnxql
  //service_53xs9fn
  //iht7wgmuW0Uio7TMe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_opf073t",
        "template_tifnxql",
        {
          from_name: form.name,
          to_name: "FirstMachine",
          from_email: form.email,
          to_email: "firstmachinemail@gmail.com",
          message: form.message + "/n email :" + form.email,
        },
        "iht7wgmuW0Uio7TMe"
      )
      .then(
        () => {
          setLoading(false);
          setType("success");
          setAlertMessage(
            "Thank you. I will get back to you as soon as psossible."
          );
          setShowAlert(true);
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setType("fail");
          setAlertMessage(
            "Something went wrong. Please try again. Or email me at firstmachinemail@gmail.com"
          );
          setShowAlert(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="section flex flex-col text-wrap w-full  px-7 justify-center text-black box-border"
    >
      <div>
        <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
          Contact
        </h2>
        <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>

        <div class="flex  h-fit lg:flex-row flex-col gap-5  text-[#241f66]">
          <div class="flex flex-1 flex-col p-5 content-stretch shadow-[0_5px_20px_3px_rgba(0,0,0,0.3)]">
            <form ref={formRef} onSubmit={handleSubmit} role="form">
              <div class="flex md:flex-row flex-col justify-between gap-5">
                <div class="flex flex-col w-full gap-2 mb-3">
                  <label
                    for="name"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    class="border-[1px]  border-gray-300 p-2 "
                    id="name"
                    required
                  />
                </div>
                <div class="flex flex-col w-full gap-2 mb-3">
                  <label
                    for="email"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    class="border-[1px] border-gray-300 p-2"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col gap-2 mb-3">
                <label
                  for="name"
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl"
                >
                  Subject
                </label>
                <input
                  type="text"
                  class="border-[1px] border-gray-300 p-2"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  id="subject"
                  required
                />
              </div>
              <div class="flex flex-col gap-2 mb-3">
                <label
                  for="name"
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl"
                >
                  Message
                </label>
                <textarea
                  class="border-[1px] border-gray-300 p-2"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="7"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
            {loading && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#050d187b]"></div>
            )}
            {showAlert && (
              <>
                <Alert
                  type={type}
                  message={alertMessage}
                  handleClose={handleClose}
                />
              </>
            )}
          </div>
          <div class="flex flex-col text-[#241f66] h-full">
            <div class="flex flex-col ">
              <div class=" shadow-[0_5px_20px_3px_rgba(0,0,0,0.3)] p-5 ">
                <div className="flex flex-col justify-center items-center border-b-2 pb-5">
                  <img
                    src={GlogoBlack}
                    alt="logo"
                    className=" flex w-16 h-16 pb-3 object-contain justify-center items-center "
                  />
                  <h3 class="mb-0 md:text-[1.75rem]  ext-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                    Gaurav Patil
                  </h3>
                  <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                    Mavenir Systems Pvt Ltd
                  </p>
                  <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                    Bangalore, India
                  </p>
                </div>
                <div className="flex  flex-col gap-5 pt-8 pb-5 justify-center items-center">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                      Phone
                    </p>
                    <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f66c6] italic">
                      +918855081554
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                      Email
                    </p>
                    <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f66c6] italic">
                      <a
                        href="mailto:gauravspatil1200@gmail.com"
                        className="text-blue-600"
                      >
                        gauravspatil1200@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                      Website
                    </p>
                    <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f66c6] italic">
                      <a
                        href="http://localhost:3000/"
                        className="text-blue-600"
                      >
                        click here to visit my website
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-center">
                  {socialIcons.map((data) =>
                    SocialIconCard(data.component, data.link, false)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
