import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const EFFECTIVE_DATE = "6 August 2026";
const LAST_UPDATED = "6 August 2026";

const sections: LegalSection[] = [
  {
    id: "agreement-to-terms",
    title: "Agreement to Terms",
    body: (
      <>
        <p>
          These Terms of Service ("<strong>Terms</strong>") form a legally binding agreement between
          you ("<strong>you</strong>", "<strong>user</strong>", or "<strong>customer</strong>") and{" "}
          <strong>Dooria</strong> ("<strong>Dooria</strong>", "<strong>we</strong>", "
          <strong>us</strong>", or "<strong>our</strong>") governing your access to and use of the
          Dooria mobile application, website, and related services (together, the "
          <strong>Service</strong>").
        </p>
        <p>
          Dooria is a product and brand operating in Pakistan. Dooria is{" "}
          <strong>not yet incorporated as a registered company</strong>; it is operated by its
          founders, and these Terms will be updated with our registered entity details once
          incorporation is complete.
        </p>
        <p>
          By creating an account, placing an order, or otherwise using the Service, you agree to be
          bound by these Terms and by our <Link to="/privacy-policy">Privacy Policy</Link>. If you
          do not agree, do not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    body: (
      <ul>
        <li>
          <strong>"Restaurant Partner"</strong> — a restaurant, vendor, or merchant that lists
          products for sale on the Service.
        </li>
        <li>
          <strong>"Delivery Partner"</strong> — a rider or logistics provider who delivers orders.
        </li>
        <li>
          <strong>"Order"</strong> — a request you place through the Service to purchase products
          from a Restaurant Partner.
        </li>
        <li>
          <strong>"Content"</strong> — text, images, ratings, reviews, and other material available
          through the Service.
        </li>
      </ul>
    ),
  },
  {
    id: "our-role-marketplace",
    title: "Our Role (Marketplace)",
    body: (
      <p>
        Dooria operates as a <strong>technology platform and intermediary</strong> that connects
        customers with Restaurant Partners and Delivery Partners. Unless expressly stated otherwise,
        Dooria does not itself prepare food. The Restaurant Partner is responsible for the
        preparation, quality, safety, packaging, and accurate description of the products it sells.
        Dooria facilitates ordering, payment handling, and delivery coordination.
      </p>
    ),
  },
  {
    id: "availability-and-eligibility",
    title: "Availability and Eligibility",
    body: (
      <p>
        The Service is offered <strong>only in Pakistan</strong>. You must be at least{" "}
        <strong>18 years old</strong> and capable of forming a binding contract under the laws of
        Pakistan to use the Service. By using the Service, you represent and warrant that you meet
        these requirements and that the information you provide is accurate and complete.
      </p>
    ),
  },
  {
    id: "account-registration-and-security",
    title: "Account Registration and Security",
    body: (
      <ul>
        <li>
          You register using your mobile phone number and verify it with a one-time password (OTP).
          You are responsible for keeping access to your number and device secure.
        </li>
        <li>You are responsible for all activity that occurs under your account.</li>
        <li>
          Notify us immediately at{" "}
          <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a> of any unauthorised
          use of your account.
        </li>
        <li>
          You may request deletion of your account at any time (see Section 18 and the Privacy
          Policy).
        </li>
      </ul>
    ),
  },
  {
    id: "orders-pricing-and-payment",
    title: "Orders, Pricing, and Payment",
    body: (
      <ul>
        <li>
          <strong>Prices</strong> for products, together with applicable{" "}
          <strong>delivery fees</strong>, <strong>service fees</strong>, and <strong>taxes</strong>,
          are shown in the app before you confirm an Order. All order totals and fees are calculated
          and displayed by Dooria at checkout.
        </li>
        <li>
          Prices and availability are set by Restaurant Partners and may change; items may become
          unavailable.
        </li>
        <li>
          Placing an Order constitutes an offer to purchase. An Order is confirmed when accepted
          through the Service.
        </li>
        <li>
          <strong>Payment</strong> may be made <strong>on delivery</strong> or through an available
          electronic payment method. You authorise us or our payment provider to charge the total
          amount for your Order.
        </li>
        <li>
          You are responsible for providing a correct delivery address and for being available to
          receive the Order.
        </li>
      </ul>
    ),
  },
  {
    id: "cancellations-refunds-and-returns",
    title: "Cancellations, Refunds, and Returns",
    body: (
      <ul>
        <li>
          <strong>Cancellation by you:</strong> you may cancel an Order{" "}
          <strong>before it is confirmed/ accepted</strong> by the Restaurant Partner, in accordance
          with the cancellation options shown in the app. Once preparation has begun, cancellation
          may not be possible.
        </li>
        <li>
          <strong>Refunds:</strong> where an Order is cancelled in time, or where an Order is not
          delivered, is materially incorrect, or is of unacceptable quality, you may be eligible for
          a refund or credit in accordance with our then-current refund practices and applicable
          consumer-protection law.
        </li>
        <li>
          <strong>Reporting problems:</strong> report any problem with an Order promptly through the
          app's support/complaint feature so we can investigate.
        </li>
        <li>
          Refund eligibility and method (original payment method or credit) are determined in line
          with these Terms and applicable law.
        </li>
      </ul>
    ),
  },
  {
    id: "delivery",
    title: "Delivery",
    body: (
      <p>
        Estimated delivery times are indicative and not guaranteed. Delivery may be affected by
        factors outside our control (traffic, weather, Restaurant Partner delays, incorrect address,
        or unavailability at the delivery point). Risk in the products passes to you on delivery.
      </p>
    ),
  },
  {
    id: "reviews-and-user-content",
    title: "Reviews and User Content",
    body: (
      <ul>
        <li>
          You may submit ratings, reviews, and other Content. You are solely responsible for the
          Content you submit and must ensure it is accurate, lawful, and not offensive, defamatory,
          or infringing.
        </li>
        <li>
          By submitting Content, you grant Dooria a non-exclusive, royalty-free licence to use,
          host, display, reproduce, and distribute that Content in connection with operating and
          promoting the Service.
        </li>
        <li>
          We may moderate, remove, or refuse Content that violates these Terms or applicable law.
        </li>
      </ul>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: (
      <>
        <p>
          You agree <strong>not</strong> to:
        </p>
        <ul>
          <li>use the Service for any unlawful, fraudulent, or harmful purpose;</li>
          <li>place fraudulent, false, or abusive Orders;</li>
          <li>interfere with or disrupt the Service, its security, or its infrastructure;</li>
          <li>
            attempt to gain unauthorised access to any part of the Service or another user's
            account;
          </li>
          <li>reverse-engineer, scrape, or copy the Service except as permitted by law;</li>
          <li>infringe the intellectual-property or other rights of Dooria or any third party;</li>
          <li>harass, threaten, or abuse Restaurant Partners, Delivery Partners, or staff.</li>
        </ul>
        <p>
          Violations may be addressed under the Prevention of Electronic Crimes Act 2016 and other
          applicable law, and may result in suspension or termination of your account.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        The Service, including its software, design, logos, trademarks, and Content (other than user
        Content and Restaurant Partner content), is owned by Dooria or its licensors and is
        protected by intellectual-property laws. We grant you a limited, personal, non-exclusive,
        non-transferable, revocable licence to use the Service for its intended purpose. You may not
        use our trademarks without our prior written consent.
      </p>
    ),
  },
  {
    id: "third-party-services-and-links",
    title: "Third-Party Services and Links",
    body: (
      <p>
        The Service integrates third-party services (for example, Google Maps and payment providers)
        and may contain links to third-party sites. We are not responsible for third-party services
        or content, which are governed by their own terms and policies.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <p>
        To the maximum extent permitted by law, the Service is provided <strong>"as is"</strong> and{" "}
        <strong>"as available"</strong> without warranties of any kind, express or implied,
        including warranties of merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or
        secure, or that products will meet your expectations. Nothing in these Terms excludes any
        statutory rights you have under applicable consumer-protection law that cannot be lawfully
        excluded.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, Dooria and its founders, staff, and partners will
        not be liable for any indirect, incidental, special, consequential, or punitive damages, or
        loss of profits, data, or goodwill, arising out of or in connection with your use of the
        Service. Nothing in these Terms limits any liability that cannot be excluded or limited
        under applicable Pakistani law.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless Dooria and its founders, staff, and partners from
        any claims, damages, liabilities, and expenses (including reasonable legal fees) arising out
        of your misuse of the Service, your violation of these Terms, or your violation of any law
        or third-party right.
      </p>
    ),
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and Termination",
    body: (
      <p>
        We may suspend or terminate your access to the Service, with or without notice, if you
        breach these Terms, engage in fraudulent or unlawful activity, or where required by law. You
        may stop using the Service and delete your account at any time. Provisions that by their
        nature should survive termination (including Sections 11, 13, 14, 15, and 19) will survive.
      </p>
    ),
  },
  {
    id: "changes-to-the-service-and-terms",
    title: "Changes to the Service and Terms",
    body: (
      <p>
        We may modify or discontinue the Service (or any part of it) at any time. We may also update
        these Terms; when we do, we will revise the "Last updated" date and, for material changes,
        provide additional notice. Your continued use of the Service after changes take effect
        constitutes acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "account-deletion",
    title: "Account Deletion",
    body: (
      <p>
        You may delete your account through the app (<strong>Profile → Delete Account</strong>) or
        by contacting <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a>.
        Deletion is handled in accordance with our <Link to="/privacy-policy">Privacy Policy</Link>,
        subject to records we are required by law to retain.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <ul>
        <li>
          These Terms are governed by and construed in accordance with the laws of the{" "}
          <strong>Islamic Republic of Pakistan</strong>, without regard to conflict-of-laws
          principles, and the courts of Pakistan shall have jurisdiction over any dispute arising
          out of or relating to these Terms or the Service.
        </li>
        <li>
          Before commencing legal proceedings, the parties will attempt in good faith to resolve the
          dispute amicably.
        </li>
      </ul>
    ),
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    body: (
      <p>
        We are not liable for any failure or delay in performance caused by events beyond our
        reasonable control, including acts of God, natural disasters, epidemics, strikes, civil
        unrest, government action, utility or network failures, or disruptions affecting Restaurant
        Partners or Delivery Partners.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <ul>
        <li>
          <strong>Entire agreement:</strong> these Terms and the Privacy Policy constitute the
          entire agreement between you and Dooria regarding the Service.
        </li>
        <li>
          <strong>Severability:</strong> if any provision is held unenforceable, the remaining
          provisions remain in effect.
        </li>
        <li>
          <strong>No waiver:</strong> our failure to enforce any right or provision is not a waiver
          of it.
        </li>
        <li>
          <strong>Assignment:</strong> you may not assign these Terms without our consent; we may
          assign them in connection with a merger, acquisition, or sale of assets.
        </li>
      </ul>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <p className="not-prose">
        <strong>Dooria</strong>
        <br />
        Pakistan
        <br />
        E-mail: <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a>
        <br />
        Phone: <a href="tel:+923215565304">+92 321 5565304</a>
      </p>
    ),
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Dooria" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Dooria food-ordering and delivery service in Pakistan: orders, payments, delivery, refunds and more.",
      },
      { property: "og:title", content: "Terms of Service — Dooria" },
      {
        property: "og:description",
        content: "Read the Dooria Terms of Service for customers ordering food in Pakistan.",
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
      title="Terms of Service"
      effectiveDate={EFFECTIVE_DATE}
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
