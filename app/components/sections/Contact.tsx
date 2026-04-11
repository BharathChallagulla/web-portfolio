"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { Github, Linkedin, Mail, Download, Send } from "lucide-react";
import { toast } from "react-toastify";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: portfolioData.linkedin,
    color: "hover:text-steel-400",
  },
  {
    icon: Github,
    label: "GitHub",
    href: portfolioData.github,
    color: "hover:text-heading dark:hover:text-dark-text",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${portfolioData.email}`,
    color: "hover:text-terra-400",
  },
  {
    icon: Download,
    label: "Resume",
    href: "/resume.pdf",
    color: "hover:text-sage-500 dark:hover:text-sage-400",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_FORM_URL as string,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-sage-500 dark:text-sage-400 font-medium text-sm tracking-wider uppercase mb-2">
              Let&apos;s connect
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading dark:text-dark-text">
              Get in Touch
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Left - Info */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-heading dark:text-dark-text mb-3">
                  Let&apos;s work together
                </h3>
                <p className="text-body dark:text-dark-secondary leading-relaxed">
                  I&apos;m always open to discussing new opportunities,
                  interesting projects, or just connecting with fellow
                  developers.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-muted dark:text-dark-muted ${link.color} transition-colors duration-200 group`}
                  >
                    <div className="p-2.5 rounded-xl bg-cream dark:bg-dark-elevated border border-sage-100 dark:border-dark-border group-hover:border-sage-200 dark:group-hover:border-sage-500/30 transition-colors">
                      <link.icon size={18} />
                    </div>
                    <span className="font-medium text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 bg-cream dark:bg-dark-elevated rounded-2xl border border-sage-100 dark:border-dark-border space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-heading dark:text-dark-text mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-dark-border bg-surface dark:bg-dark-card text-heading dark:text-dark-text placeholder:text-muted dark:placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-sage-300 dark:focus:ring-sage-500/40 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-heading dark:text-dark-text mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-dark-border bg-surface dark:bg-dark-card text-heading dark:text-dark-text placeholder:text-muted dark:placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-sage-300 dark:focus:ring-sage-500/40 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-heading dark:text-dark-text mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-dark-border bg-surface dark:bg-dark-card text-heading dark:text-dark-text placeholder:text-muted dark:placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-sage-300 dark:focus:ring-sage-500/40 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your reason for contacting..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-xl font-medium hover:bg-sage-600 transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <Send size={16} />}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
