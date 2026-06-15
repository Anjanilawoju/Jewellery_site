import { Gem, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gem className="w-6 h-6 text-amber-500" />
              <span className="text-white font-bold text-lg tracking-wide">SPARKLE</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae lectus nibh cursus tellus at netus nisi urna. Malesuada id aliquam mauris consequat amet nec.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Product", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Now */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Shop Now</h4>
            <ul className="space-y-2 text-sm">
              {["Top Most Sale", "New Arrivals", "Simple Wear"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Reach Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>hello@sparkle.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+977 9800000001</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Bhaktapur, Nepal</span>
              </div>
              <div className="flex gap-3 mt-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-700 flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-2">
          <span>© 2026 Sparkle Jewellery. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
