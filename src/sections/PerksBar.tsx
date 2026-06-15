import { Shield, Truck, RefreshCw, Headphones } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $200",
  },
  {
    icon: Shield,
    title: "Authenticity Guarantee",
    desc: "Certified genuine gemstones",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Expert jewellery advice",
  },
];

export default function PerksBar() {
  return (
    <section className="py-10 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-amber-700/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-stone-400 text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
