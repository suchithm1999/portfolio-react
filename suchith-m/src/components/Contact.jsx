import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import Form from "./Form";

function Contact() {
  const sendEmail = () => {
    window.open("mailto:suchithm1999@gmail.com", "_blank");
  };

  const sendWhatsappMessage = () => {
    window.open("https://api.whatsapp.com/send?phone=919164389511", "_blank");
  };

  return (
    <div id="contacts" className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="section-title">Get in Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Actions */}
          <div className="space-y-6 lg:col-span-1">
            <div
              onClick={sendEmail}
              className="glass-card p-6 flex items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
            >
              <div className="p-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                <BiLogoGmail className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200">Email</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">suchithm1999@gmail.com</p>
              </div>
            </div>

            <div
              onClick={sendWhatsappMessage}
              className="glass-card p-6 flex items-center gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
            >
              <div className="p-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                <BiLogoWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200">WhatsApp</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">+91-9164389511</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
