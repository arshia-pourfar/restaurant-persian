import Image from "next/image";
import Link from "next/link";

export interface FoodItem {
  name: string;
  price: string;
  desc: string;
  img: string;
  slug: string;
}

type Variant = "vertical" | "horizontal" | "circle";

interface FoodCardProps {
  item: FoodItem;
  variant?: Variant;
  badge?: string;
}

export default function FoodCard({ item, variant = "vertical", badge }: FoodCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={`/product/${item.slug}`}>
        <div className="luxury-card group scroll-reveal lg:flex gap-12 bg-surface-container-low p-8 rounded-xl">
          <div className="lg:w-1/2 relative overflow-hidden rounded-lg">
            <Image
              src={item.img}
              alt={item.name}
              width={600}
              height={400}
              className="card-image w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center py-6">
            {badge && (
              <span className="type-overline text-primary-container mb-2">
                {badge}
              </span>
            )}
            <h3 className="type-h2 text-on-surface mb-4">
              {item.name}
            </h3>
            <p className="type-body-lg text-on-surface-variant mb-8">
              {item.desc}
            </p>
            <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
              <span className="text-2xl text-primary-fixed-dim">
                {item.price}
              </span>
              <span className="flex items-center gap-2 text-primary-fixed-dim group-hover:text-primary transition-colors">
                <span className="type-caption">مشاهده جزئیات</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "circle") {
    return (
      <Link href={`/product/${item.slug}`}>
        <div className="luxury-card text-center scroll-reveal">
          <div className="relative rounded-full aspect-square overflow-hidden mb-6 mx-auto w-48 border-2 border-primary-container p-2">
            <Image
              src={item.img}
              alt={item.name}
              fill
              sizes="192px"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="type-h5 text-on-surface mb-2">
            {item.name}
          </h3>
          <p className="type-body text-on-surface-variant mb-4 px-4">
            {item.desc}
          </p>
          <span className="type-body font-bold text-primary-fixed-dim">
            {item.price}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${item.slug}`}>
      <div className="luxury-card group scroll-reveal">
        <div className="relative aspect-4/5 overflow-hidden mb-6 rounded-xl">
          <Image
            src={item.img}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="card-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="type-h5 text-on-surface">
            {item.name}
          </h3>
          <span className="type-body font-bold text-primary-fixed-dim">
            {item.price}
          </span>
        </div>
        <p className="type-body text-on-surface-variant">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}
