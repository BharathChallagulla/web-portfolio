// -----------------------------------------------------------
// File: /components/pages/ContactPage.tsx
// Description: The component for the Contact page section.
// -----------------------------------------------------------
import { Github, Linkedin, Mail, Download } from "lucide-react";
import React from "react";
import { portfolioData } from "../../lib/data";
import { Bounce, toast, ToastContainer } from "react-toastify";
const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const sendUserData = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_FORM_URL as string,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        callToast("Message sent successfully!", false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        callToast("Failed to send message. Please try again later.", true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      callToast("An error occurred. Please try again later.", true);
    }
  };

  const callToast = (message: string, error: boolean) => {
    // Placeholder for toast notification logic

    const method = error ? toast.error : toast.success;
    method(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <section
      id="contact"
      className="min-h-screen container mx-auto p-8 lg:p-16 transition-opacity duration-1000 ease-in-out"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
        Get in Touch
      </h2>
      <div className="max-w-xl mx-auto space-y-8">
        <form
          onSubmit={sendUserData}
          method="POST"
          className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={5}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 cursor-pointer"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center items-center gap-6">
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={36} />
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={36} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={36} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Download size={36} />
          </a>
        </div>
      </div>
      {/* <button
        onClick={() => callToast("This is a notification!", false)}
        className="fixed bottom-4 right-4 p-2 bg-blue-500 text"
      >
        Notify
      </button> */}
      <ToastContainer
        autoClose={5000}
        toastClassName={(context) => {
          const type = context?.type;
          return [
            "relative flex p-4 rounded-lg shadow-md border",
            "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
            type === "success" && "border-green-500",
            type === "error" && "border-red-500",
            type === "info" && "border-blue-500",
            type === "warning" && "border-yellow-500",
          ]
            .filter(Boolean)
            .join(" ");
        }}
        className="text-sm w-auto font-medium text-gray-800 dark:text-gray-200"
        progressClassName={(context) => {
          const type = context?.type;
          return [
            "bg-gray-500",
            type === "success" && "bg-green-500",
            type === "error" && "bg-red-500",
            type === "info" && "bg-blue-500",
            type === "warning" && "bg-yellow-500",
          ]
            .filter(Boolean)
            .join(" ");
        }}
      />
    </section>
  );
};

export default ContactPage;
