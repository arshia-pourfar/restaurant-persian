"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

const storySections = [
  {
    label: "آغاز یک رؤیا",
    title: "اشتیاق برای تعالی",
    text: "داستان لنسنس با یک ایده ساده اما جسورانه آغاز شد: بازگرداندن روح به هنر آشپزی. ما معتقدمیم که غذا تنها نیست که تمام حواس را درگیر می‌کند و تجربه‌ای است که مهمانان ما برای همیشه در خاطراتشان نگه می‌دارند.",
    text2: "از اولین روزهای تاسیس، هدف ما خلق فضایی بود که هر لقمه‌اش روایتی از بهترین مواد اولیه باشد. هر چشم انداز و هر ترکیب، بازتابی از سال‌ها تجربه و کمال‌گرایی است.",
    img: "/images/stitch/hero-burger.png",
    decorImg: "/images/stitch/featured-steak.png",
  },
  {
    label: "هنر و دقت",
    title: "وسواس در جزئیات",
    text: "در آشپزخانه لنسنس، ما به وسواسِ میلی‌متری معتقدمیم. انتخاب مواد اولیه برای ما یک مراسم مقدس است؛ از زعفران‌های دست‌چین شده تا سبزیجات تازه‌ای که سریع از مزارع محلی می‌رسند.",
    text2: "هر تکنیک، تلفیقی دانش شیمی و هنر طراحی در هر بشقاب است.",
    img: "/images/stitch/featured-steak.png",
    decorImg: null,
  },
  {
    label: "اتمسفر",
    title: "فراتر از یک میز غذا",
    text: "لنسنس خانه‌ای است برای کسانی که به دنبال لحظات ناب هستند. فضای داخلی ما با ترکیب نورپردازی سینمایی و معماری مدرن طراحی شده تا هر لحظه حضور شما، خاطره‌ای فراموش‌نشدنی بسازد.",
    text2: "از پذیرایی تا آخرین لحظه، مهمان نوازی ما همان استانداردی را دارد که غذاهایمان.",
    img: "/images/stitch/featured-cocktail.png",
    decorImg: null,
  },
];

const experiences = [
  {
    title: "طراحی داخلی",
    desc: "تلفیق مدرنیته و سنت در فضایی سینمایی",
    img: "/images/stitch/featured-steak.png",
  },
  {
    title: "پذیرایی اصیل",
    desc: "لمس سبک لنسنس در هر ثانیه حضور",
    img: "/images/stitch/featured-cocktail.png",
  },
  {
    title: "لحظات ماندگار",
    desc: "جایی که هر مناسبت به یک خاطره تبدیل می‌شود",
    img: "/images/stitch/product-risotto.png",
  },
];

export default function OurStoryPage() {
  return (
    <div className="selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        {/* Cinematic Hero Header */}
        <header className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1-restaurant-interior.png"
              alt="فضای سینمایی رستوران"
              fill
              sizes="100vw"
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <span className="type-overline text-primary tracking-[0.3em] mb-4 block">
              L&apos;Essence Gastronomy
            </span>
            <h1 className="type-display text-primary-fixed-dim mb-6 leading-tight">
              میراثِ طعم‌ها
            </h1>
            <div className="w-24 h-px bg-primary/50 mx-auto mb-8" />
            <p className="type-body-lg text-on-surface-variant max-w-2xl mx-auto italic leading-relaxed">
              &ldquo;سفری در اعماق اصالت، جایی که هر بشقاب داستانی برای گفتن دارد.&rdquo;
            </p>
          </div>
        </header>

        {/* Story Sections */}
        {storySections.map((section, index) => (
          <section
            key={section.label}
            className={`py-section-gap-desktop ${index % 2 === 1 ? "bg-surface-container-low" : ""}`}
          >
            <div className="max-w-360 mx-auto px-6 md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className={index % 2 === 1 ? "order-2 md:order-1" : ""}>
                <span className="type-overline text-primary mb-4 block tracking-widest">
                  {section.label}
                </span>
                <h2 className="type-h3 text-on-surface mb-8">
                  {section.title}
                </h2>
                <p className="type-body-lg text-on-surface-variant leading-loose mb-6">
                  {section.text}
                </p>
                <p className="type-body-lg text-on-surface-variant leading-loose">
                  {section.text2}
                </p>
              </div>
              <div className={`relative ${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
                <div className={`${index === 0 ? "aspect-4/5" : "aspect-square"} rounded-xl overflow-hidden shadow-2xl group`}>
                  <Image
                    src={section.img}
                    alt={section.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                {index === 0 && (
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 -z-10" />
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Experience Section */}
        <section className="py-section-gap-desktop max-w-360 mx-auto px-6 md:px-[80px]">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="type-overline text-primary mb-4 block tracking-widest">
              اتمسفر
            </span>
            <h2 className="type-h3 text-on-surface mb-6">
              فراتر از یک میز غذا
            </h2>
            <p className="type-body-lg text-on-surface-variant leading-relaxed italic">
              &ldquo;لنسنس خانه‌ای است برای کسانی که به دنبال لحظات ناب در میان همهمه دنیای مدرن هستند.&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <div key={exp.title} className={`group overflow-hidden rounded-xl h-125 relative ${i === 1 ? "md:mt-12" : ""}`}>
                <Image
                  src={exp.img}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-primary type-h5 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-on-surface-variant type-body-sm">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap-desktop bg-surface-container-highest">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="type-h3 text-primary-fixed-dim mb-8">
              بخشی از داستان ما باشید
            </h2>
            <p className="type-body-lg text-on-surface-variant mb-12">
              میز خود را برای یک تجربه بی‌نظیر رزرو کنید.
            </p>
            <Link
              href="/reservation"
              className="inline-block bg-primary text-on-primary px-12 py-4 type-overline uppercase tracking-widest hover:bg-primary-fixed transition-all duration-300 rounded-lg shadow-xl hover:shadow-primary/20"
            >
              رزرو میز
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
