// Contact.tsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion as m } from "framer-motion";
// Real-time status badge
const STATUS = {
  text: "Hire Me for New Projects",
  color: "bg-green-500",
};
import { motion } from "framer-motion";
import { AtSign, Smartphone, Linkedin, Github, Instagram, Facebook, Download, Send, CheckCircle, MessageSquare } from "lucide-react";
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';

  // Types for form and error state
  interface FormState {
    name: string;
    email: string;
    message: string;
  }
  type ErrorState = Partial<Record<keyof FormState, string>>;

const SOCIALS = [
  { icon: <Instagram className="stroke-[2.5] text-pink-500" />, label: "Instagram", href: "https://www.instagram.com/4bunesh_06/?__pwa=1/" },
  { icon: <MessageSquare className="stroke-[2.5] text-green-500" />, label: "WhatsApp", href: "https://wa.me/919042845355" },
  { icon: <Facebook className="stroke-[2.5] text-blue-600" />, label: "Facebook", href: "https://www.facebook.com/veluravichandran.chandran/" },
  { icon: <FaXTwitter size={24} className="text-sky-500" />, label: "X (Twitter)", href: "https://x.com/Abunesh126" },
  { icon: <Linkedin className="stroke-[2.5] text-blue-700" />, label: "LinkedIn", href: "https://www.linkedin.com/in/abunesh-r-p-803677278/" },
  { icon: <Github className="stroke-[2.5] text-gray-900 dark:text-white" />, label: "GitHub", href: "https://github.com/Abunesh126" },
  { icon: <FaDiscord size={24} className="text-indigo-500" />, label: "Discord", href: "https://discord.com/users/740470845725736991/" },
];

const CONTACT_METHODS = [
  { icon: <AtSign className="stroke-[2.5] text-purple-600" />, label: "Email", value: "abuneshfire@gmail.com", href: "mailto:abuneshfire@gmail.com" },
  { icon: <Smartphone className="stroke-[2.5] text-green-600" />, label: "Phone", value: "+91 9042845355", href: "tel:+919042845355" },
];

function Contact() {
  // ...existing code...
  const initialForm: FormState = { name: "", email: "", message: "" };
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<"idle" | "success" | "pending">("idle");
  const [msg, setMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Simple validation
  const validate = useCallback(() => {
    const errs: ErrorState = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [form]);

  // Simulate email submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("pending");
    setTimeout(() => {
      setStatus("success");
      setMsg("Thank you! Your message has been sent.");
  setForm(initialForm);
      formRef.current?.reset();
    }, 1200);
  };

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="relative min-h-screen font-body flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Heading after navigation */}
  <h1 className="mt-24 mb-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg text-center leading-tight">Contact Me</h1>
      {/* Animated background from Hero.tsx */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950" />
        <motion.div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
        <motion.div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
        <motion.div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{backgroundImage:`linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.1) 1px, transparent 1px)`,backgroundSize:'50px 50px'}} />
      </div>
  <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 py-8 sm:py-12 lg:py-16">
        {/* Contact Info & Socials (order first on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="order-2 md:order-1 bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between w-full md:w-1/2"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get in Touch</h2>
            <p className="text-gray-700 dark:text-neutral-400 mb-8">
              Find me through any of these channels. I'm excited to connect with you!
            </p>
            <div className="space-y-6">
              {CONTACT_METHODS.map(method => (
                <a key={method.label} href={method.href} className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#F44336]/10 rounded-full border border-[#F44336]/20 group-hover:bg-[#F44336]/20 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-neutral-300 font-medium">{method.label}</p>
                    <p className="text-gray-900 dark:text-white text-lg group-hover:text-[#F44336] transition-colors">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10">
            {/* Real-time status badge */}
            <div className="flex justify-center mb-4">
              <m.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white shadow-lg ${STATUS.color}`}
              >
                <span className="animate-pulse w-2 h-2 rounded-full bg-white" />
                {STATUS.text}
              </m.div>
            </div>
            {/* Animated social icons */}
            <div className="flex flex-row gap-4 w-full justify-center items-center mt-2">
              {SOCIALS.map(social => (
                <m.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], boxShadow: "0 0 20px #00A36C" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {social.icon}
                </m.a>
              ))}
            </div>
            <a
              href="/cv.pdf"
              download="Abunesh_R_P_CV.pdf"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#00A36C] hover:bg-[#007d57] text-white font-bold text-lg transition mt-2"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
        </motion.div>
        {/* Contact Form (order second on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 md:order-2 bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-center w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center h-full">
              <CheckCircle className="w-16 h-16 text-[#00A36C] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
              <p className="text-gray-700 dark:text-neutral-300 mt-2">{msg}</p>
              <p className="text-gray-700 dark:text-neutral-400 mt-1">I will get back to you shortly.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full rounded-lg bg-gray-100 dark:bg-black/20 border border-white/10 text-gray-900 dark:text-white px-4 py-2 focus:border-[#F44336] focus:ring-[#F44336] outline-none text-base sm:text-lg"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  aria-describedby="name-error"
                />
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="mt-2 w-full rounded-lg bg-gray-100 dark:bg-black/20 border border-white/10 text-gray-900 dark:text-white px-4 py-2 focus:border-[#F44336] focus:ring-[#F44336] outline-none text-base sm:text-lg"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  aria-describedby="email-error"
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  className="mt-2 w-full rounded-lg bg-gray-100 dark:bg-black/20 border border-white/10 text-gray-900 dark:text-white px-4 py-2 focus:border-[#F44336] focus:ring-[#F44336] outline-none text-base sm:text-lg"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  aria-describedby="message-error"
                />
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full text-lg flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F44336] hover:bg-[#d32f2f] text-white font-bold transition disabled:opacity-50"
                disabled={status === "pending"}
              >
                {status === "pending" ? (
                  <span className="animate-spin">
                    <Send className="mr-2 h-5 w-5" />
                  </span>
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                {status === "pending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
