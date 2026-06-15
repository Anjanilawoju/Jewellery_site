import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { supabase } from "../lib/supabase";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const { error } = await supabase.from("contact_messages").insert({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject,
        message: form.message,
      });

      if (error) {
        setSubmitStatus("error");
        setErrorMessage(error.message);
      } else {
        setSubmitStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-3">Contact Us</h1>
          <p className="text-lg text-stone-600">
            Get in touch with our friendly team. We'd love to hear from you.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location Card */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">Location</h3>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Jhushal-2<br />
              Bhaktapur Bagmati, Nepal
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-amber-700 font-semibold hover:text-amber-800 transition-colors text-sm"
            >
              View on map →
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-rose-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">Phone</h3>
            </div>
            <div className="space-y-2 text-stone-600">
              <p>
                <span className="font-semibold text-stone-900">Mobile:</span><br />
                (+977) 980 5689789<br />
                (+977) 9641 275897
              </p>
              <p>
                <span className="font-semibold text-stone-900">Tel:</span><br />
                01-4783972
              </p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">Service Hours</h3>
            </div>
            <div className="space-y-1 text-stone-600 text-sm">
              <p>
                <span className="font-semibold text-stone-900">MON - FRI</span><br />
                8 am - 8 pm
              </p>
              <p className="mt-2">
                <span className="font-semibold text-stone-900">SAT - SUN</span><br />
                Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 h-96 lg:h-auto flex items-center justify-center">
            <div className="text-center text-stone-400">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Map integration coming soon</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-2">Get In Touch</h2>
            <p className="text-stone-600 mb-8">
              If you have any queries, send us a message. Our friendly team would love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="+977 9800000000"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  What can we do for you?
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Product Question">Product Question</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Custom Design">Custom Design</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-emerald-800 font-medium">
                    Thank you! We've received your message and will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg">
                  <p className="text-rose-800 font-medium">
                    Something went wrong: {errorMessage}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-700 hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all active:scale-95"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
