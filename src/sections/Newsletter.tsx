import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900 relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5" />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Stay in the Loop</h2>
        <p className="text-amber-100 mb-8">
          Subscribe for exclusive offers, new arrivals, and jewellery care tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-white/20 rounded-2xl px-8 py-6 text-white font-semibold text-lg">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-amber-200 outline-none focus:bg-white/30 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-amber-800 font-semibold rounded-full hover:bg-amber-50 active:scale-95 transition-all whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
