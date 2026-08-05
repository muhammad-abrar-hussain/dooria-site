import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  CreditCard,
  Flag,
  MapPin,
  Navigation,
  PackageCheck,
  Salad,
  ShoppingBasket,
  Store,
  Timer,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Section, SectionHeading } from "@/components/Section";
import { StoreBadges } from "@/components/StoreBadges";
import { BrandLink } from "@/components/ui/brand-button";
import phoneMockup from "@/assets/phone-mockup.jpg";

const steps = [
  {
    icon: Salad,
    title: "Pick your food",
    body: "Browse local favourites near you — biryani, burgers, karahi, chai. Add to cart and check out in seconds.",
  },
  {
    icon: Navigation,
    title: "Track in real time",
    body: "Watch your order move from the kitchen to your street on a live map, with honest arrival times.",
  },
  {
    icon: PackageCheck,
    title: "Delivered hot",
    body: "Our riders take the fastest route so your food shows up at your door still steaming.",
  },
];

const features = [
  {
    icon: Timer,
    title: "Genuinely fast delivery",
    body: "Smart rider matching and route planning keep average delivery times low, even at dinner rush.",
  },
  {
    icon: Truck,
    title: "Live order tracking",
    body: "Know exactly where your order is — preparing, picked up, or two minutes away.",
  },
  {
    icon: Store,
    title: "Curated local restaurants",
    body: "From neighbourhood dhabas to city favourites, every partner is vetted for quality and hygiene.",
  },
  {
    icon: CreditCard,
    title: "Secure checkout",
    body: "Cash on delivery, cards and wallets — protected by encrypted, PCI-compliant payment partners.",
  },
  {
    icon: MapPin,
    title: "Precise addresses",
    body: "Pin your gate, not just your street. Save home, work and hostel addresses with delivery notes.",
  },
  {
    icon: Flag,
    title: "Made for Pakistan",
    body: "Built around local streets, local kitchens and local payment habits — with support that speaks your language.",
  },
];

const visionItems = [
  { icon: ShoppingBasket, title: "Groceries", body: "Weekly staples and last-minute essentials, delivered in minutes." },
  { icon: Boxes, title: "Parcels", body: "Send a package across the city with the same live tracking you already trust." },
  { icon: UtensilsCrossed, title: "Daily essentials", body: "Pharmacy runs, chai-time snacks, whatever the day demands." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dooria — Delicious food, delivered to your door" },
      {
        name: "description",
        content:
          "Dooria delivers hot, delicious food from your favourite local restaurants across Pakistan — with live tracking, secure checkout and honest delivery times.",
      },
      { property: "og:title", content: "Dooria — Delicious food, delivered to your door" },
      {
        property: "og:description",
        content:
          "Order from curated local restaurants, track your rider live, and get it hot at your doorstep. Groceries, parcels and essentials are next.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top">
      <HeroSlider />

      {/* How it works */}
      <Section id="how-it-works" className="bg-surface-low">
        <SectionHeading
          eyebrow="How it works"
          title="Three taps between you and your next meal"
          subtitle="No queues, no phone calls, no waiting on a busy line."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="card-surface p-6">
              <div className="flex items-center gap-3">
                <span className="icon-chip">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="text-body mt-2 text-[0.9375rem] leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Features */}
      <Section id="features">
        <SectionHeading
          eyebrow="Why Dooria"
          title="Built for how Pakistan actually orders"
          subtitle="Everything we ship is designed around one promise: your food arrives hot, correct and on time."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <li key={title} className="card-surface p-6">
              <span className="icon-chip">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="text-body mt-2 text-[0.9375rem] leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Vision */}
      <Section id="vision" className="bg-surface-low">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-brand-deep text-xs font-semibold tracking-[0.16em] uppercase">
              Our vision
            </p>
            <h2 className="mt-3 text-[1.75rem] leading-tight font-bold sm:text-[2.125rem]">
              Beyond food — everything at your doorstep.
            </h2>
            <p className="text-body mt-4 text-base leading-relaxed sm:text-[1.0625rem]">
              Food is where we start, not where we stop. Dooria is building one dependable delivery
              network for everyday life in Pakistan: the groceries you forgot, the parcel you need
              across town, the essentials that can't wait until tomorrow.
            </p>
            <p className="text-body mt-3 text-[0.9375rem] leading-relaxed">
              Same app, same riders, same live tracking — just a lot more you can get delivered.
            </p>
          </div>
          <ul className="grid gap-4">
            {visionItems.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card-surface flex items-start gap-4 p-5">
                <span className="icon-chip shrink-0">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-body mt-1 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Download */}
      <Section id="download">
        <div className="card-surface grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[1.75rem] leading-tight font-bold sm:text-[2.125rem]">
              Get the Dooria app and eat sooner.
            </h2>
            <p className="text-body mt-3 text-base leading-relaxed sm:text-[1.0625rem]">
              Free to download. Order in under a minute, track your rider live, and pay however
              suits you.
            </p>
            <StoreBadges className="mt-7" />
            <p className="text-muted mt-6 text-sm">
              By downloading you agree to our{" "}
              <Link
                to="/terms-and-conditions"
                className="text-brand-deep font-medium underline underline-offset-2"
              >
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className="text-brand-deep font-medium underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <img
            src={phoneMockup}
            alt="The Dooria app on a smartphone showing a food order with biryani, burger and karahi plus live delivery progress"
            width={912}
            height={1104}
            loading="lazy"
            className="mx-auto w-full max-w-[300px] rounded-2xl"
          />
        </div>
      </Section>
    </main>
  );
}
