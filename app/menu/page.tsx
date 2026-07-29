"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

const categories = [
  { id: "starters", label: "پیش‌غذا", labelEn: "Appetizers" },
  { id: "mains", label: "غذای اصلی", labelEn: "Main Course" },
  { id: "desserts", label: "دسر", labelEn: "Desserts" },
  { id: "drinks", label: "نوشیدنی", labelEn: "Drinks" },
];

const featuredMain = {
  name: "استیک واگیو A5 با ترافل سیاه",
  desc: "نهایت لطافت با تکه‌های ترافل تازه و سس مخصوص پورتو.",
  price: "۴,۲۰۰,۰۰۰",
  badge: "پیشنهاد سرآشپز",
  img: "/images/stitch/featured-steak.png",
  slug: "wagyu-steak",
};

const featuredSide = [
  {
    name: "بیسک خرچنگ با خاویار",
    desc: "طعم دریای شمال در یک سوپ غلیظ و مجلل.",
    price: "۱,۸۵۰,۰۰۰",
    img: "/images/foods/image2.png",
    slug: "crab-bisque",
  },
  {
    name: "کوکتل‌های امضا",
    desc: "ترکیبی منحصربه‌فرد از طعم‌ها و رنگ‌ها.",
    img: "/images/stitch/featured-cocktail.png",
    slug: "signature-cocktails",
  },
];

const sliderItems = [
  {
    name: "تارتار ماهی تن",
    price: "۹۸۰,۰۰۰",
    desc: "ماهی تن بلوفین، آووکادو، روغن کنجد سیاه و نان برشته.",
    img: "/images/stitch/product-tartare.png",
    slug: "tuna-tartare",
  },
  {
    name: "ریزوتو قارچ وحشی",
    price: "۱,۴۵۰,۰۰۰",
    desc: "برنج آربوریو، ترکیب قارچ‌های جنگلی، پنیر پارمزان ۲۴ ماهه.",
    img: "/images/stitch/product-risotto.png",
    slug: "wild-mushroom-risotto",
  },
  {
    name: "فوندانت شکلات تلخ",
    price: "۷۲۰,۰۰۰",
    desc: "شکلات ۷۰٪ بلژیکی با هسته گرم و بستنی وانیل ماداگاسکار.",
    img: "/images/stitch/product-fondant.png",
    slug: "chocolate-fondant",
  },
];

const classicMenu = [
  {
    name: "ماهی سالمون با سس شوید",
    desc: "سالمون نروژی گریل شده همراه با پوره نخود فرنگی",
    price: "۱,۹۰۰,۰۰۰",
  },
  {
    name: "سالاد بوراتا با گوجه گیلاسی",
    desc: "پنیر تازه بوراتا، ریحان بنفش، بالزامیک کهنه",
    price: "۸۵۰,۰۰۰",
  },
  {
    name: "کاردو دِ ماری (خوراک دریایی)",
    desc: "میگو، کلماری و فیله ماهی در سس زعفران",
    price: "۲,۶۰۰,۰۰۰",
  },
  {
    name: "بوراتای کلاسیک",
    desc: "پنیر بوراتای تازه، گوجه‌فرنگی‌های گیلاسی، ریحان",
    price: "۸۵۰,۰۰۰",
  },
];

export default function MenuPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("starters");

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

    // Parallax for hero image
    const handleScroll = () => {
      const heroImg = document.getElementById("menu-hero-img");
      if (heroImg) {
        const scrolled = window.scrollY;
        heroImg.style.transform = `translateY(${scrolled * 0.08}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Smooth scroll for category pills
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const element = document.querySelector(targetId || "");
        if (element) {
          const offset = 160;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      });
    });

    // Glass card tilt effect
    const glassCards = document.querySelectorAll(".glass-card");
    const handleMouseMove = (e: MouseEvent) => {
      glassCards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    const handleMouseLeave = () => {
      glassCards.forEach((card) => {
        (card as HTMLElement).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      });
    };
    glassCards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as EventListener);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      glassCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as EventListener);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === "left" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-24 px-6 md:px-[80px] relative overflow-hidden">
          <div className="grid grid-cols-12 w-full items-center gap-6">
            {/* Content Left */}
            <div className="col-span-12 md:col-span-6 flex flex-col items-start z-10 space-y-8">
              <span className="type-overline text-primary tracking-[0.3em] uppercase">
                تجربه‌ای فراتر از طعم
              </span>
              <h2 className="type-display text-on-surface leading-tight">
                هنر طعم‌های
                <br />
                <span className="text-primary italic">لایه‌لایه</span>
              </h2>
              <p className="type-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                در لسانس، هر غذا یک سمفونی بصری و چشایی است. ما با ترکیب مدرنیته و سنت، لایه‌هایی از بهترین مواد اولیه را برای خلق تجربه‌ای فراموش‌نشدنی بر روی میز شما می‌آوریم.
              </p>
              <button className="shimmer-btn bg-primary-container text-on-primary-container type-caption px-10 py-4 rounded-full flex items-center gap-3 transition-transform active:scale-95 shadow-lg">
                مشاهده منو
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
            {/* Image Right */}
            <div className="col-span-12 md:col-span-6 relative h-full flex justify-center items-center">
              <div className="absolute inset-0 bg-linear-to-l from-background via-transparent to-transparent z-10 pointer-events-none" />
              <Image
                src="/images/stitch/hero-burger.png"
                alt="برگر لوکس"
                width={600}
                height={600}
                id="menu-hero-img"
                className="w-full h-auto object-contain z-0 transition-transform duration-200 ease-out"
                style={{ transform: "scale(1.1)" }}
              />
            </div>
          </div>
          {/* Atmospheric glow */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary opacity-[0.03] rounded-full blur-[120px]" />
        </section>

        {/* Category Filter */}
        <div className="sticky top-23.75 z-40 bg-background/80 backdrop-blur-xl border-y border-outline-variant/30 py-6">
          <div className="max-w-7xl mx-auto px-6 md:px-[80px] flex justify-center gap-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-2.5 rounded-full border type-caption transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-outline-variant text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Item Section (Bento Style) */}
        <section className="py-section-gap-desktop px-6 md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Featured Item */}
            <Link href={`/product/${featuredMain.slug}`} className="md:col-span-2 relative group overflow-hidden rounded-xl diffusion-glow aspect-video md:aspect-auto">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${featuredMain.img})` }} />
              <div className="absolute inset-0 bg-linear-to-t from-surface-dim via-surface-dim/20 to-transparent" />
              <div className="absolute bottom-0 p-10 flex flex-col items-start gap-4">
                <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded type-caption uppercase">
                  {featuredMain.badge}
                </span>
                <h3 className="type-h3 text-on-surface">
                  {featuredMain.name}
                </h3>
                <p className="type-body text-on-surface-variant max-w-md">
                  {featuredMain.desc}
                </p>
                <div className="flex items-center gap-6 w-full">
                  <span className="type-body-lg text-primary">{featuredMain.price} تومان</span>
                  <span className="border-b border-primary text-primary type-caption hover:text-primary-fixed-dim transition-colors flex items-center gap-2">
                    افزودن به لیست
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary Featured */}
            <div className="space-y-6">
              <Link href={`/product/${featuredSide[0].slug}`} className="glass-card p-8 rounded-xl diffusion-glow flex flex-col justify-between h-75 group">
                <div className="flex justify-between items-start">
                  <h4 className="type-h4 text-on-surface leading-tight">
                    {featuredSide[0].name}
                  </h4>
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <p className="type-body text-on-surface-variant">{featuredSide[0].desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="type-body-lg text-primary">{featuredSide[0].price} تومان</span>
                    <span className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all group-hover:scale-110">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              <Link href={`/product/${featuredSide[1].slug}`} className="relative overflow-hidden rounded-xl diffusion-glow h-75 block group">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${featuredSide[1].img})` }} />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="type-h4 text-on-surface">
                    {featuredSide[1].name}
                  </h4>
                  <span className="text-primary type-caption mt-2 flex items-center gap-2">
                    مشاهده منوی بار
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Product Grid (Slider) */}
        <section className="pb-section-gap-desktop px-6 md:px-[80px]">
          <div className="flex items-center justify-between mb-16">
            <h3 className="type-h3 text-on-surface">
              آیتم‌های برگزیده
            </h3>
            <div className="w-24 h-px bg-outline-variant" />
          </div>
          <div className="relative group/slider">
            {/* Navigation Arrows */}
            <button
              aria-label="محصولات بعدی"
              onClick={() => scrollSlider("right")}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary/30 bg-background/80 text-primary items-center justify-center hover:bg-primary hover:text-on-primary transition-all hidden md:flex"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              aria-label="محصولات قبلی"
              onClick={() => scrollSlider("left")}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary/30 bg-background/80 text-primary items-center justify-center hover:bg-primary hover:text-on-primary transition-all hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4"
            >
              {sliderItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/product/${item.slug}`}
                  className="shrink-0 w-full md:w-[calc(33.333%-16px)] snap-start group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-square diffusion-glow">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface-dim/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-primary text-on-primary px-6 py-2 rounded-full type-caption">
                        افزودن به لیست
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="type-body-lg text-on-surface group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <span className="type-body text-primary">{item.price}</span>
                  </div>
                  <p className="type-body text-on-surface-variant">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Menu List */}
        <section className="py-section-gap-desktop bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-[80px]">
            <div className="text-center mb-16">
              <span className="type-caption text-primary uppercase tracking-widest">
                انتخاب‌های کلاسیک
              </span>
              <h3 className="type-h3 text-on-surface mt-4">
                منوی چشایی
              </h3>
            </div>
            <div className="space-y-8">
              {classicMenu.map((item) => (
                <div key={item.name} className="flex items-end group cursor-pointer">
                  <div className="shrink-0">
                    <h5 className="type-body-lg text-on-surface group-hover:text-primary transition-colors">
                      {item.name}
                    </h5>
                    <p className="type-body text-on-surface-variant">{item.desc}</p>
                  </div>
                  <div className="menu-leader" />
                  <div className="type-body-lg text-primary">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
