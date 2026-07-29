"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import { SectionLabel, SectionHeading } from "./components/SectionHeading";

const carouselItems = [
  {
    name: "برگر سلطنتی",
    desc: "WAGYU BEEF • TRUFFLE",
    img: "/images/6-menu.png",
  },
  {
    name: "پیتزا اسانس",
    desc: "MOZZARELLA • BASIL • GOLD OIL",
    img: "/images/5-our-story.png",
  },
  {
    name: "تاکو لوکس",
    desc: "SHORT RIB • AVOCADO CREAM",
    img: "/images/2-chef-plating.png",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slideCarousel = (direction: "left" | "right") => {
    setCurrentSlide((prev) => {
      if (direction === "left" && prev > -1) return prev - 1;
      if (direction === "right" && prev < 1) return prev + 1;
      return prev;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const parallaxImages = document.querySelectorAll("img[data-parallax]");
      parallaxImages.forEach((img) => {
        const speed = 0.05;
        const rect = (img as HTMLElement).getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (visible) {
          const scrollValue = (window.innerHeight - rect.top) * speed;
          (img as HTMLElement).style.transform = `translateY(${scrollValue}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="pt-22">
        {/* Hero Section with 3D Carousel */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
          {/* Title */}
          <div className="relative z-10 text-center px-4 mb-12">
            <h2 className="type-display font-bold text-primary mb-4">
              ذات هنر آشپزی
            </h2>
            <p className="type-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
              جایی که سنت با خلاقیت روبرو می‌شود تا هر لقمه داستانی از طعم‌های اصیل را روایت کند.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="w-full max-w-6xl px-6 md:px-[80px] relative z-10" style={{ perspective: "1200px" }}>
            <div className="relative">
              {/* Carousel Items */}
              <div
                className="flex items-center justify-center gap-8 md:gap-12 transition-transform duration-700 ease-out py-8"
                style={{ transform: `translateX(${currentSlide * (typeof window !== "undefined" && window.innerWidth < 768 ? 220 : 320)}px)` }}
              >
                {carouselItems.map((item, index) => (
                  <div
                    key={item.name}
                    className={`shrink-0 w-64 md:w-80 text-center transition-all duration-500 ${
                      index === currentSlide + 1
                        ? "scale-110 md:scale-125 z-20"
                        : "opacity-40 scale-90"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative mb-6 transform transition-all duration-500">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={320}
                        height={320}
                        className="w-full aspect-square object-contain drop-shadow-[0_20px_50px_rgba(242,202,80,0.2)]"
                      />
                    </div>
                    <h3 className="type-h3 text-on-surface mb-2">
                      {item.name}
                    </h3>
                    <p className="text-primary type-overline">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons - Positioned on sides */}
              <button
                aria-label="اسلاید بعدی"
                onClick={() => slideCarousel("left")}
                className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-15 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 z-30 bg-background/50 backdrop-blur-sm"
              ><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
              </button>
              <button
                aria-label="اسلاید قبلی"
                onClick={() => slideCarousel("right")}
                className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-15 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 z-30 bg-background/50 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  aria-label={`اسلاید ${dot + 1}`}
                  onClick={() => setCurrentSlide(dot - 1)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === dot - 1
                      ? "bg-primary w-8"
                      : "bg-outline-variant hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-section-gap-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-[80px] grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div className="relative h-150 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2-chef-plating.png"
                alt="سرآشپز در حال آماده‌سازی غذا"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="space-y-8">
              <SectionLabel>میراث ما</SectionLabel>
              <SectionHeading className="mt-2 font-body-md">
                داستانی که با هر طعم روایت می‌شود
              </SectionHeading>
              <p className="type-body-lg text-on-surface-variant leading-relaxed">
                در L&apos;Essence، ما فراتر از یک رستوران هستیم؛ ما مقصدی برای کسانی هستیم که به دنبال کمال در جزئیات هستند. از انتخاب دقیق‌ترین مواد اولیه تا خلق ترکیب‌های جسورانه، هدف ما لمس تمام حواس شماست.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
                <div>
                  <span className="block text-primary type-h3 mb-2">
                    ۱۵+
                  </span>
                  <span className="type-overline text-on-surface-variant">
                    سرآشپزان برتر
                  </span>
                </div>
                <div>
                  <span className="block text-primary type-h3 mb-2">
                    ۲۰۲۴
                  </span>
                  <span className="type-overline text-on-surface-variant">
                    تاسیس شده در پاریس
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Teaser (Bento Grid) */}
        <section className="py-section-gap-desktop">
          <div className="max-w-7xl mx-auto px-[80px]">
            <div className="flex justify-between items-end mb-16">
              <div>
                <SectionLabel>انتخاب‌های ویژه</SectionLabel>
                <SectionHeading className="mt-2">منوی فصل</SectionHeading>
              </div>
              <Link
                href="/menu"
                className="text-primary type-overline border-b border-primary pb-1 hover:opacity-70 transition-opacity"
              >
                مشاهده کامل منو
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 h-80 md:h-125 relative rounded-xl overflow-hidden group">
                <Image
                  src="/images/5-our-story.png"
                  alt="دریای آرام"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="type-h3 text-primary mb-2">
                    دریای آرام
                  </h3>
                  <p className="type-body text-on-surface-variant">
                    ترکیبی از تازه‌ترین صیدهای روز با سس مخصوص طلا
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 h-80 md:h-125 relative rounded-xl overflow-hidden group">
                <Image
                  src="/images/6-menu.png"
                  alt="گناه مخملی"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="type-h3 text-primary mb-2">
                    گناه مخملی
                  </h3>
                  <p className="type-body text-on-surface-variant">
                    دسر شکلات تلخ با مرکز روان و ورق طلای خوراکی
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section-gap-desktop bg-surface-container-lowest" id="contact">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionLabel>رزرو و تماس</SectionLabel>
            <SectionHeading className="mt-4 mb-12">
              در انتظار میزبانی شما هستیم
            </SectionHeading>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10 text-right">
              <div className="space-y-1">
                <label className="type-overline text-on-surface-variant">
                  نام کامل
                </label>
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 type-body-lg text-on-surface placeholder:text-surface-container-highest"
                />
              </div>
              <div className="space-y-1">
                <label className="type-overline text-on-surface-variant">
                  شماره تماس
                </label>
                <input
                  type="tel"
                  placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 type-body-lg text-on-surface placeholder:text-surface-container-highest"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="type-overline text-on-surface-variant">
                  پیام شما
                </label>
                <textarea
                  placeholder="چطور می‌توانیم به شما کمک کنیم؟"
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 type-body-lg text-on-surface placeholder:text-surface-container-highest"
                />
              </div>
              <div className="md:col-span-2 flex justify-center pt-8">
                <button
                  type="submit"
                  className="shimmer-btn bg-primary text-on-primary px-16 py-4 rounded-full type-overline transition-transform active:scale-95"
                >
                  ارسال درخواست رزرو
                </button>
              </div>
            </form>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant pt-12">
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="type-body text-on-surface">
                  خیابان جردن، نبش بن‌بست طلایی، پلاک ۱۲۳
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="type-body text-on-surface" dir="ltr">
                  +98 21 8888 8888
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="type-body text-on-surface">
                  همه روزه از ساعت ۱۲:۰۰ الی ۲۴:۰۰
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
