import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import { FaCheck } from "react-icons/fa6";

const Form = () => {
  const form = useRef();
  const [showSpinner, setSpinner] = useState(false);
  const [showCheckMark, setCheckmark] = useState(false);
  const [showSendButton, setSendButton] = useState(true);

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
          setFormData(initialFormData);
          setSpinner(false);
          setCheckmark(true);
          setTimeout(() => {
            setCheckmark(false);
            setSendButton(true);
          }, 2000);
        },
        (error) => {
          console.error("FAILED...", error);
          setSendButton(true);
          setSpinner(false);
        },
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendButton(false);
    setSpinner(true);
    sendEmail();
  };

  return (
    <div className="glass-card p-8 w-full max-w-2xl mx-auto shadow-2xl dark:shadow-none bg-white/90 dark:bg-slate-800/20 border-white/60 dark:border-slate-700/30">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="fullname" className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900/50 border border-indigo-100 dark:border-slate-700 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900/50 border border-indigo-100 dark:border-slate-700 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900/50 border border-indigo-100 dark:border-slate-700 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-y min-h-[120px] shadow-sm"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-end pt-2">
          {showSendButton && (
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Send Message</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          )}

          {showSpinner && (
            <div className="px-8 py-2">
              <Spinner />
            </div>
          )}

          {showCheckMark && (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 px-4 py-2 bg-green-50 dark:bg-green-400/10 rounded-lg border border-green-200 dark:border-green-400/20">
              <FaCheck />
              <span className="font-medium">Message Sent!</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
