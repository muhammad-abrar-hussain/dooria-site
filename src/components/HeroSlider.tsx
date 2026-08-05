import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { StoreBadges } from "./StoreBadges";
import { BrandLink } from "./ui/brand-button";
import heroSlideFood from "@/assets/hero-slide-food.jpg";
import heroSlideRider from "@/assets/hero-slide-rider.jpg";

const slides = [
  {
    image: heroSlideFood,
    alt: "Chicken biryani, seekh kebabs, karahi and fresh naan laid out on a wooden table",
    eyebrow: "Now launching across Pakistan",
    title: "Delicious food, delivered to your door.",
    body: "Order from local kitchens you already love — biryani, karahi, burgers and chai, packed hot and on its way in minutes.",
  },
  {
    image: heroSlideRider,
    alt: "A Dooria delivery rider on a motorbike with an orange insulated box at golden hour",
    eyebrow: "Live tracking, honest timings",
    title: "Riders who get there while it's still hot.",
    body: "Follow your order from the kitchen to your street on a live map, with arrival times we actually keep.",
  },
];

const INTERVAL = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused, index]);

  const active = slides[index] ?? slides[0]!;

  return (
    <section
      aria-label="Dooria highlights"
      aria-roledescription="carousel"
      className="relative -mt-[76px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={i === index ? slide.alt : ""}
          aria-hidden={i === index ? undefined : true}
          width={1920}
          height={1088}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.05_35/0.92)_0%,oklch(0.18_0.05_35/0.72)_45%,oklch(0.18_0.05_35/0.25)_100%)]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-5 pt-36 pb-16 sm:px-8 md:min-h-[640px] md:pt-40 md:pb-20">
        <div
          key={index}
          className="animate-in fade-in slide-in-from-bottom-3 max-w-2xl duration-700"
        >
          <span className="text-on-primary inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase backdrop-blur-sm">
            <MapPin className="size-4" aria-hidden="true" />
            {active.eyebrow}
          </span>
          <h1 className="text-on-primary mt-6 text-[2.25rem] leading-[1.1] font-bold sm:text-5xl lg:text-[3.5rem]">
            {active.title}
          </h1>
          <p className="text-on-primary/80 mt-4 max-w-xl text-base leading-relaxed sm:text-[1.0625rem]">
            {active.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BrandLink href="#download" size="lg">
              Get the Dooria app
            </BrandLink>
            <StoreBadges />
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 md:mt-14">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="text-on-primary inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="text-on-primary inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
          <div className="ml-2 flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-on-primary w-10" : "w-5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
