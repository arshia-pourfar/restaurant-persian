import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 pt-section-gap-desktop pb-12">
      <div className="max-w-360 mx-auto px-6 md:px-[80px]">
        {/* Brand Logo Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="type-h3 text-primary tracking-tighter mb-4">
            L&apos;Essence
          </h2>
          <div className="h-px w-24 bg-primary/30" />
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="type-overline text-primary tracking-[0.2em]">
              ناوبری
            </h4>
            <nav className="flex flex-col items-center md:items-start space-y-4">
              <Link href="/" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                صفحه اصلی
              </Link>
              <Link href="/menu" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                منو
              </Link>
              <Link href="/our-story" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                داستان ما
              </Link>
              <Link href="/reservation" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                رزرو میز
              </Link>
              <Link href="/contact" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                تماس با ما
              </Link>
            </nav>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="type-overline text-primary tracking-[0.2em]">
              اطلاعات تماس
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-right">
              <p className="type-body text-on-surface-variant">
                خیابان ولیعصر، نرسیده به میدان تجریش، پلاک ۱۲۰۰
              </p>
              <p className="type-body text-on-surface-variant" dir="ltr">
                +98 21 8888 8888
              </p>
              <p className="type-body text-on-surface-variant">
                info@lessence.ir
              </p>
            </div>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="type-overline text-primary tracking-[0.2em]">
              ما را دنبال کنید
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a href="#" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                اینستاگرام
              </a>
              <a href="#" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                فیسبوک
              </a>
              <a href="#" className="type-body text-on-surface-variant hover:text-primary transition-colors">
                توییتر (X)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="type-body-sm text-on-surface-variant/60">
            © ۲۰۲۴ L&apos;Essence Gastronomy. تمامی حقوق محفوظ است.
          </p>
          <a href="#" className="type-body-sm text-on-surface-variant/60 hover:text-primary transition-colors">
            سیاست حریم خصوصی
          </a>
        </div>
      </div>
    </footer>
  );
}
