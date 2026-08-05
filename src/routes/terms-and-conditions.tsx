import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const LAST_UPDATED = "5 August 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these Terms",
    body: (
      <>
        <p>
          These Terms & Conditions ("Terms") form a binding agreement between you and [Company
          Legal Name] ("Dooria", "we", "us"), operator of the Dooria mobile application and website
          (together, the "Platform"). By creating an account, browsing, or placing an order you
          confirm that you have read, understood and agreed to these Terms.
        </p>
        <p>
          If you do not agree with any part of these Terms, please stop using the Platform. Certain
          features may be subject to additional terms, which are incorporated here by reference.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Account & eligibility",
    body: (
      <>
        <p>
          You must be at least 18 years old, or the age of legal majority in your jurisdiction, to
          create a Dooria account. You agree to provide accurate registration details, including a
          valid mobile number that we may verify by one-time password.
        </p>
        <ul>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>Keep your credentials and OTP codes confidential; never share them with anyone.</li>
          <li>
            Notify us immediately at [support@dooria.app] if you suspect unauthorised access to your
            account.
          </li>
          <li>
            We may suspend or terminate accounts that are used fraudulently, abusively, or in breach
            of these Terms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "orders-payments",
    title: "Orders & payments",
    body: (
      <>
        <p>
          When you place an order through Dooria you are making an offer to purchase items from an
          independent restaurant or vendor ("Vendor"). The order is confirmed only once the Vendor
          accepts it. Menu items, prices, taxes, delivery fees, platform fees and applicable
          government levies are displayed before checkout.
        </p>
        <ul>
          <li>
            Payment may be made by cash on delivery, debit/credit card, or supported digital
            wallets, as available in your area.
          </li>
          <li>
            Card and wallet payments are processed by third-party payment providers; we do not store
            full card numbers on our servers.
          </li>
          <li>
            Prices are quoted in Pakistani Rupees (PKR) and may change without notice prior to
            checkout.
          </li>
          <li>
            Promotional codes are single-use unless stated otherwise and may be withdrawn at any
            time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "delivery",
    title: "Delivery",
    body: (
      <>
        <p>
          Estimated delivery times shown in the app are indicative and depend on Vendor preparation
          time, traffic, weather and rider availability. We will make reasonable efforts to deliver
          within the estimate but do not guarantee it.
        </p>
        <ul>
          <li>
            You must provide a complete, accurate delivery address and remain reachable on the
            registered phone number.
          </li>
          <li>
            If a rider cannot reach you after reasonable attempts, the order may be marked delivered
            or cancelled without refund.
          </li>
          <li>
            Deliveries to restricted premises may be handed over at the nearest accessible point.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellations-refunds",
    title: "Cancellations & refunds",
    body: (
      <>
        <p>
          You may cancel an order free of charge before the Vendor begins preparation. Once
          preparation has started, cancellation may incur a charge covering the Vendor's costs.
        </p>
        <ul>
          <li>
            Report missing, incorrect or unsatisfactory items within 24 hours of delivery through
            in-app support or [support@dooria.app].
          </li>
          <li>
            Approved refunds are issued to the original payment method or as Dooria credit, normally
            within 7–14 business days depending on your bank.
          </li>
          <li>
            Repeated or unreasonable refund claims may result in account review or suspension.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "user-conduct",
    title: "User conduct",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Place fraudulent, abusive or speculative orders.</li>
          <li>Harass, threaten or discriminate against riders, Vendor staff or our team.</li>
          <li>
            Attempt to reverse engineer, scrape, overload or interfere with the Platform or its
            security.
          </li>
          <li>Use the Platform for any unlawful purpose or in breach of the laws of Pakistan.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-vendors",
    title: "Third-party restaurants & partners",
    body: (
      <>
        <p>
          Dooria is a technology platform connecting customers, Vendors and delivery riders. Vendors
          are solely responsible for the preparation, quality, hygiene, packaging, ingredients,
          allergen information and legal compliance of the items they sell.
        </p>
        <p>
          If you have food allergies or dietary requirements, please confirm directly with the
          Vendor before ordering. We may also link to third-party services (maps, payments,
          analytics) governed by their own terms.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The Dooria name, logo, app design, software, content and all related intellectual property
        are owned by [Company Legal Name] or its licensors. You receive a limited, revocable,
        non-exclusive licence to use the Platform for personal, non-commercial purposes only.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, Dooria is not liable for indirect, incidental or
          consequential losses, including loss of profit, data or goodwill, arising from your use of
          the Platform.
        </p>
        <p>
          Our total aggregate liability in relation to any order shall not exceed the total amount
          paid by you for that order. Nothing in these Terms excludes liability that cannot lawfully
          be excluded.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: (
      <p>
        We may update these Terms to reflect changes in our services, technology or the law. Material
        changes will be notified in the app or by email before they take effect. Continued use of the
        Platform after the effective date constitutes acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law & dispute resolution",
    body: (
      <p>
        These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute shall
        first be addressed in good faith through our support team. Failing resolution, disputes shall
        be subject to the exclusive jurisdiction of the courts at [City], Pakistan.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>Questions about these Terms? We're happy to help.</p>
        <ul>
          <li>Email: [support@dooria.app]</li>
          <li>Legal entity: [Company Legal Name]</li>
          <li>Address: [Registered Address], Pakistan</li>
        </ul>
      </>
    ),
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Dooria" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Dooria food-delivery app in Pakistan: orders, payments, delivery, refunds and more.",
      },
      { property: "og:title", content: "Terms & Conditions — Dooria" },
      {
        property: "og:description",
        content: "Read the Dooria Terms & Conditions for customers ordering food in Pakistan.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms-and-conditions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro="These terms explain how Dooria works, what you can expect from us, and what we ask of you when ordering food through the Dooria app."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}