import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const initialFormData = {
    fullname: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_q98pamd", "template_nx97opj", form.current, {
        publicKey: "uJ4i6Qcx4q0QdXIyo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData(initialFormData);
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div className="w-3/5 max-lg:w-11/12 hover:shadow-2xl hover:shadow-indigo-300 mx-auto drop-shadow-2xl my-5 mb-10 bg-white p-8 rounded-md shadow-md">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-700 p-2.5 mt-2 px-5 active:bg-blue-500 text-white rounded-full font-medium w-max max-lg:text-xs max-lg:px-3"
          >
            Send a Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
