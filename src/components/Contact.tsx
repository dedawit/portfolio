import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
        setSuccess(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);
    setSuccess(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message =
      formData.get("message") +
      "\n\nThank you for reaching out to me. I appreciate your message and will respond as soon as possible.";

    try {
      const response = await fetch("https://dawitgirma.com/backend/index.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toFirst: "realdavis7779@gmail.com",
          toSecond: email,
          subject: `New message from ${name}`,
          text: message,
        }),
      });

      const result = await response.json();
      if (result.message === "Email sent successfully!") {
        setSuccess(true);
        setNotification(result.message);
      } else {
        setSuccess(false);
        setNotification("Failed to send email. Please try again.");
      }
    } catch (error) {
      setSuccess(false);
      setNotification("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto bg-blue-900/40 rounded-xl shadow-lg p-8">
          {notification && (
            <div
              className={`mb-4 p-3 text-white rounded ${
                success ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {notification}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+251970713033</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>realdavis7779@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-3 text-blue-400" />
                  <span>github.com/dedawit</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>linkedin.com/in/dawit-girma-7b8867228/</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-blue-950 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-blue-950 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-blue-950 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors w-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
