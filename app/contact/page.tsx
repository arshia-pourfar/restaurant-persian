"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

export default function ContactPage() {
  return (
    <div className="selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="pt-section-gap-desktop min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-[80px] py-8 text-center md:text-right max-w-360 mx-auto">
          <h1 className="type-display font-bold mb-4 text-shimmer">
            ارتباط با ما
          </h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl md:mr-0 mr-auto ml-auto md:ml-0">
            تجربه‌ای بی‌نظیر از طعم و هنر در قلب شهر. مشتاق شنیدن نظرات و رزروهای شما هستیم.
          </p>
        </section>

        {/* Main Content Grid */}
        <section className="px-6 md:px-[80px] py-8 max-w-360 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-section-gap-desktop">
          {/* Contact Details Card */}
          <div className="md:col-span-5 space-y-8 bg-surface-container p-10 diffusion-glow border border-outline-variant/10 transition-all duration-1000 rounded-xl">
            <div className="space-y-2 group">
              <span className="type-overline text-primary-fixed-dim block">
                آدرس ما
              </span>
              <p className="type-h3 text-on-surface leading-tight">
                خیابان ولیعصر، نرسیده به میدان تجریش، پلاک ۱۲۰۰
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 pt-4">
              <div className="space-y-2">
                <span className="type-overline text-primary-fixed-dim block">
                  شماره تماس
                </span>
                <a
                  href="tel:+982122334455"
                  className="type-body-lg text-on-surface hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  ۰۲۱-۲۲۳۳۴۴۵۵
                </a>
              </div>
              <div className="space-y-2">
                <span className="type-overline text-primary-fixed-dim block">
                  ایمیل
                </span>
                <a
                  href="mailto:info@lessence.ir"
                  className="type-body-lg text-on-surface hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@lessence.ir
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/20">
              <span className="type-overline text-primary-fixed-dim block mb-4">
                ساعات کاری
              </span>
              <div className="flex justify-between type-body text-on-surface-variant mb-2">
                <span>شنبه تا چهارشنبه</span>
                <span>۱۲:۰۰ - ۲۳:۰۰</span>
              </div>
              <div className="flex justify-between type-body text-on-surface-variant">
                <span>پنجشنبه و جمعه</span>
                <span>۱۳:۰۰ - ۲۴:۰۰</span>
              </div>
            </div>

            <div className="pt-8 flex gap-6">
              <a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-transform hover:-translate-y-1">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-transform hover:-translate-y-1">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-transform hover:-translate-y-1">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stylized Map Section */}
          <div className="md:col-span-7 h-150 relative overflow-hidden group rounded-xl">
            <div className="absolute inset-0 bg-surface-container-lowest animate-pulse" />
            <div className="w-full h-full relative z-10">
              <Image
                src="/images/4-contact.png"
                alt="نقشه موقعیت رستوران"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover filter grayscale contrast-125 brightness-50 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 pointer-events-none map-gradient z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              <div className="w-8 h-8 bg-primary rounded-full diffusion-glow animate-bounce flex items-center justify-center">
                <div className="w-3 h-3 bg-on-primary rounded-full" />
              </div>
              <div className="bg-surface/90 backdrop-blur-md px-4 py-2 mt-2 rounded border border-primary/20 type-caption text-primary-fixed-dim">
                L&apos;ESSENCE
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Social Bento */}
        <section className="px-6 md:px-[80px] py-8 max-w-360 mx-auto mb-section-gap-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-high p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/10 overflow-hidden relative rounded-xl">
              <div className="relative z-10">
                <h3 className="type-h3 text-on-surface mb-2">
                  با ما همراه باشید
                </h3>
                <p className="text-on-surface-variant">
                  برای دریافت دعوت‌نامه‌های اختصاصی و رویدادهای ویژه عضو شوید.
                </p>
              </div>
              <div className="w-full md:w-auto relative z-10">
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="آدرس ایمیل شما"
                    className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary-container text-on-surface py-2 px-0 w-full transition-all duration-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="text-primary-fixed-dim type-overline hover:text-primary transition-colors"
                  >
                    عضویت
                  </button>
                </form>
              </div>
              <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
                <svg className="w-75 h-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            <Link
              href="/menu"
              className="bg-primary-container p-12 flex flex-col justify-center items-center text-on-primary-container text-center hover:brightness-105 transition-all cursor-pointer group rounded-xl"
            >
              <svg className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="type-h3 mb-2">
                مشاهده منو
              </h3>
              <p className="type-caption uppercase tracking-tighter opacity-80">
                Explore Gastronomy
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
