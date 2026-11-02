import Link from "next/link";
import { ArrowRight, Repeat, Truck, ShieldCheck, Flame, RefreshCw, Smartphone, Laptop, Camera, Watch, ChevronRight } from "lucide-react";

export default function HomePage() {
  const sampleListings = [
    {
      id: "1",
      title: "iPhone 13 Pro (128GB, Sierra Blue)",
      price: "55,000 ETB",
      condition: "Like New",
      allowBarter: true,
      wishlist: "Looking for Samsung S22 Ultra or M1 MacBook Air (+ cash difference)",
      kebele: "Bole Kebele, Adama",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&auto=format&fit=crop&q=60",
      category: "Smartphones",
    },
    {
      id: "2",
      title: "Dell XPS 13 (Core i7, 16GB RAM, 512GB SSD)",
      price: "68,000 ETB",
      condition: "Excellent",
      allowBarter: true,
      wishlist: "Wants iPhone 14 Pro or Sony Alpha Camera",
      kebele: "Arada Kebele, Adama",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
      category: "Laptops",
    },
    {
      id: "3",
      title: "Samsung Galaxy S21 5G (Phantom Gray)",
      price: "36,000 ETB",
      condition: "Good",
      allowBarter: true,
      wishlist: "Can top-up 18,000 ETB cash for iPhone 13 Pro",
      kebele: "Kebele 04, Adama",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60",
      category: "Smartphones",
    },
    {
      id: "4",
      title: "Sony Alpha A6400 Mirrorless Camera + 16-50mm Lens",
      price: "62,000 ETB",
      condition: "Like New",
      allowBarter: true,
      wishlist: "Looking for high-end gaming laptop or trade with top-up",
      kebele: "Posta Bet, Adama",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
      category: "Cameras",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white p-6 sm:p-10 shadow-lg">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
            The First Circular Trade & Pooled Delivery Platform in Ethiopia
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Trade What You Have, <br />
            Get What You Need in <span className="text-amber-400">Adama</span>.
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Don&apos;t wait weeks for a cash buyer. Swap your smartphone or laptop directly with cash top-up, 
            or piggyback on shared Bajaj delivery runs straight from Arada Market to your kebele.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/swaps"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              <Repeat className="w-4 h-4" />
              Explore Trade Loops
            </Link>
            <Link
              href="/pools"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl border border-white/15 transition-all"
            >
              <Truck className="w-4 h-4 text-emerald-400" />
              Join a Bajaj Run
            </Link>
          </div>
        </div>
      </section>

      {/* Active Pooled Delivery Widget */}
      <section className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded">
                  Active Bajaj Run
                </span>
                <span className="text-xs text-stone-500 font-medium">Departing at 2:30 PM Today</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                Arada Commercial Hub &rarr; Bole & Kebele 04 Cluster
              </h3>
              <p className="text-xs text-stone-600">
                Driver: <span className="font-semibold text-stone-800">Abebe D. (Bajaj #3-B042)</span> &bull; 
                4 of 6 slots reserved &bull; 
                Fee: <span className="font-bold text-emerald-700">40 ETB / Drop</span> (Save 70% vs private charter)
              </p>
            </div>
          </div>
          <Link
            href="/pools/arada-bole"
            className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-colors whitespace-nowrap self-stretch md:self-auto justify-center"
          >
            Add Your Order to Run
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3-Way Circular Trade Loop Explainer Box */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-md">
              <Repeat className="w-3.5 h-3.5" />
              Circular Matching Feature
            </div>
            <h2 className="text-xl font-bold text-stone-900 mt-1">How 3-Way Circular Swaps Work</h2>
          </div>
          <Link href="/swaps/how-it-works" className="text-xs text-amber-800 font-semibold hover:underline flex items-center gap-1">
            Learn More <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-bold text-amber-700">User 1 (Bole)</span>
            <div className="font-semibold text-stone-900 text-sm mt-1">Has: Gaming Laptop</div>
            <div className="text-xs text-stone-500 mt-0.5">Wants: iPhone 13 Pro</div>
            <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100">
              &rarr; Ships Laptop to User 3
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-bold text-amber-700">User 2 (Arada)</span>
            <div className="font-semibold text-stone-900 text-sm mt-1">Has: iPhone 13 Pro</div>
            <div className="text-xs text-stone-500 mt-0.5">Wants: Sony Camera</div>
            <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100">
              &rarr; Ships iPhone to User 1
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-bold text-amber-700">User 3 (Kebele 04)</span>
            <div className="font-semibold text-stone-900 text-sm mt-1">Has: Sony Camera</div>
            <div className="text-xs text-stone-500 mt-0.5">Wants: Gaming Laptop</div>
            <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100">
              &rarr; Ships Camera to User 2
            </div>
          </div>
        </div>
      </section>

      {/* Featured Market Listings with Barter Flags */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900">Featured Devices for Sale or Barter</h2>
            <p className="text-xs text-stone-500">Verified listings in Adama available for cash purchase or direct trade-in</p>
          </div>
          <Link href="/listings" className="text-xs font-semibold text-amber-800 hover:underline">
            View All Listings &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleListings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {item.condition}
                </span>
                {item.allowBarter && (
                  <span className="absolute top-2.5 right-2.5 bg-amber-500 text-stone-950 text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                    Swap / Cash
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-amber-700 tracking-wide uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm text-stone-900 line-clamp-1 mt-0.5">
                    {item.title}
                  </h3>
                  <div className="text-base font-extrabold text-stone-950 mt-1">
                    {item.price}
                  </div>
                </div>

                <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-xs">
                  <span className="text-[10px] font-bold text-stone-500 block uppercase">
                    Trade Wishlist:
                  </span>
                  <p className="text-stone-700 text-xs line-clamp-2 mt-0.5 leading-snug">
                    {item.wishlist}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
                  <span>{item.kebele}</span>
                  <Link
                    href={`/listings/${item.id}`}
                    className="font-bold text-amber-800 hover:text-amber-900 hover:underline"
                  >
                    Propose Swap &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
