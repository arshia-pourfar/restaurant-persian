"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products: Record<string, {
  name: string;
  price: string;
  originalPrice?: string;
  desc: string;
  longDesc: string;
  img: string;
  category: string;
  categorySlug: string;
  ingredients: string[];
  pairing: { name: string; desc: string };
  features: { icon: string; title: string; desc: string }[];
}> = {
  "wagyu-steak": {
    name: "استیک واگیو A5",
    price: "۴,۵۰۰,۰۰۰",
    originalPrice: "۵,۲۰۰,۰۰۰",
    desc: "گوشت واگیو درجه یک ژاپنی، پوره سیب‌زمینی ترافل، مارچوبه کباب شده و سس ردوساسیون مخصوص سرآشپز با عصاره قارچ‌های جنگلی.",
    longDesc: "تجربه‌ای بی‌نظیر از طعم و کیفیت در هر لقمه. گوشت واگیو درجه A5 ژاپنی با پوره سیب‌زمینی ترافل و مارچوبه کباب شده، ترکیبی ایده‌آل از طعم‌های غنی و بافت‌های متنوع.",
    img: "/images/foods/image4.png",
    category: "غذای اصلی",
    categorySlug: "mains",
    ingredients: ["گوشت واگیو A5", "ترافل سیاه", "پوره سیب‌زمینی", "مارچوبه", "سس ردوساسیون", "قارچ جنگلی"],
    pairing: {
      name: "شراب پیشنهادی سوملیه",
      desc: "شاتو مارگو ۲۰۱۵. تانین‌های این شراب به زیبایی غنای واگیو را تعادل می‌بخشد.",
    },
    features: [
      { icon: "restaurant", title: "آماده‌سازی هنرمندانه", desc: "کباب شده روی زغال ژاپنی بینچو-تان برای عطر دودی متمایز." },
      { icon: "eco", title: "مواد اولیه تازه", desc: "سبزیجات و گیاهان تازه از باغ هیدروپونیک پشت‌بام رستوران." },
      { icon: "verified", title: "تضمین کیفیت", desc: "گوشت واگیو منحصراً از استان هیوگو ژاپن، با درجه A5 تایید شده." },
    ],
  },
  "tuna-tartare": {
    name: "تارتار ماهی تن",
    price: "۱,۲۰۰,۰۰۰",
    desc: "ماهی تن تازه، آووکادو، روغن ترافل سفید و ورق طلای خوراکی.",
    longDesc: "ترکیبی هنرمندانه از ماهی تن تازه با آووکادوی نرم و روغن ترافل سفید، تزیین شده با ورق طلای خوراکی. پیش‌غذایی ایده‌آل برای شروع یک وعده لوکس.",
    img: "/images/foods/image.png",
    category: "پیش‌غذا",
    categorySlug: "starters",
    ingredients: ["ماهی تن تازه", "آووکادو", "روغن ترافل سفید", "ورق طلای خوراکی", "لیمو ترش", "روغن زیتون"],
    pairing: {
      name: "نوشیدنی پیشنهادی",
      desc: "شامپاین بروله. حباب‌های ظریف این شامپاین طعم تازه ماهی تن را تکمیل می‌کند.",
    },
    features: [
      { icon: "restaurant", title: "آماده‌سازی هنرمندانه", desc: "برش دقیق دستی برای حفظ بافت و طعم طبیعی ماهی تن." },
      { icon: "eco", title: "مواد اولیه تازه", desc: "ماهی تن صید روز از بهترین بازارهای دریایی." },
      { icon: "verified", title: "تضمین کیفیت", desc: "استفاده از بهترین مواد اولیه با استانداردهای بین‌المللی." },
    ],
  },
  "chocolate-fondant": {
    name: "فوندانت شکلات طلا",
    price: "۷۵۰,۰۰۰",
    desc: "شکلات ۷۰٪ بلژیکی با مرکزیت شکلات مایع و تزیین طلا.",
    longDesc: "فوندانت شکلات با ۷۰٪ کاکائو بلژیکی، با مرکزیت شکلات مایع داغ و تزیین ورق طلای خوراکی. دسری که حس لوکس بودن را به اوج می‌رساند.",
    img: "/images/foods/image.png",
    category: "دسر",
    categorySlug: "desserts",
    ingredients: ["شکلات بلژیکی ۷۰٪", "کره حیوانی", "تخم مرغ", "شکر", "ورق طلای خوراکی", "توت‌فرنگی"],
    pairing: {
      name: "نوشیدنی پیشنهادی",
      desc: "اسپرسو دوبل. تلخی قهوه تعادلی عالی با شیرینی شکلات ایجاد می‌کند.",
    },
    features: [
      { icon: "restaurant", title: "آماده‌سازی هنرمندانه", desc: "پخت در دمای دقیق برای دستیابی به مرکز مایع ایده‌آل." },
      { icon: "eco", title: "مواد اولیه تازه", desc: "شکلات بلژیکی اصل با ۷۰٪ کاکائو خالص." },
      { icon: "verified", title: "تضمین کیفیت", desc: "تهیه روزانه با بهترین مواد اولیه." },
    ],
  },
};

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products[id];
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const imgs = document.querySelectorAll(".parallax-img");
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      imgs.forEach((img) => {
        (img as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="type-h4 text-on-surface mb-4">محصول یافت نشد</h1>
          <Link href="/menu" className="text-primary underline">بازگشت به منو</Link>
        </div>
      </div>
    );
  }

  const handleAddToOrder = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="selection:bg-primary/30 selection:text-on-primary">
      <Navbar />
      <main className="pt-32 pb-section-gap-desktop px-[80px] max-w-360 mx-auto">
        {/* Back Button */}
        <div className="mb-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.2em] hover:-translate-x-1 transition-transform duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به منو
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-xl">
            <div className="aspect-4/5 md:aspect-5/6 overflow-hidden rounded-xl shadow-2xl parallax-container">
              <Image
                src={product.img}
                alt={product.name}
                width={800}
                height={400}
                className="parallax-img w-full h-full object-cover rounded-xl transition-transform duration-300"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            {/* Floating Price Tag (Mobile Only) */}
            <div className="absolute bottom-4 right-4 md:hidden bg-background/90 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20">
              <span className="type-h3 text-primary">{product.price}</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:col-span-5 flex flex-col h-full">
            <div className="mb-2">
              <span className="type-overline text-primary">
                {product.category}
              </span>
            </div>
            <h1 className="type-display font-bold text-on-background mb-6 leading-tight">
              {product.name}
              <span className="hidden md:inline text-primary"> .</span>
            </h1>
            <p className="type-body-lg text-on-surface-variant mb-8 leading-relaxed italic border-r-2 border-primary/30 pr-6">
              {product.longDesc}
            </p>

            <div className="space-y-8 mb-12">
              {/* Ingredients */}
              <div>
                <h3 className="type-overline text-on-background mb-4">
                  ترکیبات
                </h3>
                <ul className="grid grid-cols-2 gap-y-3 type-body text-on-surface-variant">
                  {product.ingredients.map((ing) => (
                    <li key={ing} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pairing Suggestion */}
              <div className="p-6 bg-surface-container-low rounded-xl border border-primary/10 shadow-diffusion-glow">
                <div className="flex items-start gap-4">
                  <svg className="w-7 h-7 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="type-overline text-on-background mb-1">
                      {product.pairing.name}
                    </h4>
                    <p className="type-body-sm text-on-surface-variant">{product.pairing.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA & Pricing */}
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-baseline justify-start gap-4">
                <span className="type-h1 text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="type-body-lg text-on-surface-variant/60 line-through">{product.originalPrice}</span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToOrder}
                  className={`flex-1 py-5 rounded-full type-overline flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-300 shimmer-btn ${added
                      ? "bg-on-primary-container text-on-background"
                      : "bg-primary text-on-primary"
                    }`}
                >
                  {added ? (
                    <>
                      اضافه شد
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      افزودن به سفارش
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </>
                  )}
                </button>
                <button className="flex-[0.5] border border-primary text-primary py-5 rounded-full type-overline hover:bg-primary/10 transition-all duration-300">
                  سفارشی‌سازی
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sensory Details Bento Section */}
        <section className="mt-section-gap-desktop grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.features.map((feat) => (
            <div key={feat.title} className="bg-surface-container-lowest p-10 rounded-xl flex flex-col items-center text-center border border-primary/5">
              <svg className="w-10 h-10 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="type-h6 text-on-background mb-2">{feat.title}</h4>
              <p className="text-on-surface-variant type-body-sm">{feat.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
