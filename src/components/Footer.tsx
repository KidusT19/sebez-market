import Link from "next/link";
import { ShieldCheck, Truck, Repeat, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Three Pillars Banner */}
      <div className="border-b border-stone-800 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-900/50">
              <Repeat className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Smart Circular Barter</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Swap devices directly with cash top-up or match 3-way circular trade loops without waiting for a cash buyer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-900/50">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Hyperlocal Pooled Bajaj</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Shared delivery runs from central markets like Arada to residential kebeles like Bole for as low as 40 ETB.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-900/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Telebirr & CBE Escrow</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Safe payment holds with Merchant Release and Customer Delivery OTP verification codes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Links & Attribution */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <div>
            <span className="font-bold text-white text-sm">Sebez Market</span> &copy; {new Date().getFullYear()} — Ethiopian Circular Commerce & Pooled Logistics.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
            <Link href="/driver/register" className="hover:text-amber-400 transition-colors">Driver Onboarding</Link>
            <Link href="/safety" className="hover:text-amber-400 transition-colors">Escrow Safety</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
