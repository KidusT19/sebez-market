"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, MapPin, Repeat, Truck, ShieldCheck, User, PlusCircle } from "lucide-react";

export default function Navbar() {
  const [selectedCity, setSelectedCity] = useState("Adama");
  const [selectedKebele, setSelectedKebele] = useState("All Kebeles");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Banner: Local Hub & Hotline */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
              <Truck className="w-3.5 h-3.5" /> Next Arada Market Run: 2:30 PM
            </span>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="hidden sm:inline">Destination: Bole & Kebele 04 (40 ETB Flat Rate)</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <Link href="/driver/register" className="hover:text-amber-400 transition-colors">
              Drive Bajaj & Earn
            </Link>
            <span className="text-stone-700">•</span>
            <span>English / አማርኛ / Oromoo</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-stone-900 block leading-tight">
                Sebez <span className="text-amber-700">Market</span>
              </span>
              <span className="text-[10px] text-stone-500 font-medium tracking-wide uppercase block -mt-0.5">
                Barter & Pooled Delivery
              </span>
            </div>
          </Link>

          {/* Location & Kebele Selector */}
          <div className="hidden md:flex items-center gap-2 bg-stone-100 hover:bg-stone-200/80 px-3 py-1.5 rounded-lg border border-stone-200 text-sm transition-colors">
            <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent font-medium text-stone-800 focus:outline-none cursor-pointer"
            >
              <option value="Adama">Adama (አዳማ)</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Hawassa">Hawassa</option>
            </select>
            <span className="text-stone-300">/</span>
            <select
              value={selectedKebele}
              onChange={(e) => setSelectedKebele(e.target.value)}
              className="bg-transparent text-xs text-stone-600 focus:outline-none cursor-pointer"
            >
              <option value="All Kebeles">All Kebeles</option>
              <option value="Arada">Arada (አራዳ)</option>
              <option value="Bole">Bole (ቦሌ)</option>
              <option value="Kebele 04">Kebele 04 (ቀበሌ 04)</option>
              <option value="Posta Bet">Posta Bet (ፖስታ ቤት)</option>
              <option value="Amede">Amede Market (አመዴ)</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search phones, laptops, electronics to buy or swap..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/swaps"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-amber-800 bg-amber-50 hover:bg-amber-100 transition-colors border border-amber-200"
            >
              <Repeat className="w-3.5 h-3.5" />
              Circular Swaps
            </Link>

            <Link
              href="/pools"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <Truck className="w-3.5 h-3.5" />
              Bajaj Runs
            </Link>

            <Link
              href="/listings/create"
              className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post Listing</span>
            </Link>

            <Link
              href="/auth/login"
              className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
              title="User Account"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-3 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search phones, electronics to buy or swap..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-stone-50 border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </header>
  );
}
