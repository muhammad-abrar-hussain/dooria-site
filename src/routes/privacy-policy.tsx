import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const LAST_UPDATED = "5 August 2026";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <p>
        [Company Legal Name] ("Dooria", "we", "us") respects your privacy. This Privacy Policy
        explains what personal data we collect when you use the Dooria mobile application and
        website, why we collect it, who we share it with, and the choices you have. It applies to
        customers, riders and Vendor users in Pakistan.
      </p>
    ),
  },
  {
    id: "data-we-collect",
    title: "Data we collect",
    body: (
      <>
        <p>We collect only what we need to deliver your order reliably:</p>
        <ul>
          <li>
            <strong>Account data:</strong> name, mobile number, email address and profile photo (if
            provided).
          </li>
          <li>
            <strong>Location data:</strong> precise or approximate device location, saved addresses
            and delivery instructions — used to show nearby restaurants and guide riders.
          </li>
          <li>
            <strong>Order data:</strong> items ordered, order history, ratings, reviews, chat and
            support messages.
          </li>
          <li>
            <strong>Payment data:</strong> payment method type and transaction status. Full card
            details are handled directly by our payment providers.
          </li>
          <li>
            <strong>Device &amp; usage data:</strong> device model, operating system, app version,
            IP address, crash logs and in-app activity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-data",
    title: "How we use your data",
    body: (
      <ul>
        <li>To create and manage your account and verify your identity by OTP.</li>
        <li>To process orders, payments, refunds and live delivery tracking.</li>
        <li>To connect you with Vendors and assign the nearest available rider.</li>
        <li>To provide customer support and resolve order issues.</li>
        <li>To detect, prevent and investigate fraud, abuse and security incidents.</li>
        <li>
          To improve the app, personalise recommendations, and — with your consent — send offers and
          promotions. You can opt out at any time.
        </li>
        <li>To comply with legal, tax and regulatory obligations in Pakistan.</li>
      </ul>
    ),
  },
  {
    id: "third-parties",
    title: "Sharing with third parties",
    body: (
      <>
        <p>We share the minimum data required with:</p>
        <ul>
          <li>
            <strong>Vendors:</strong> your first name, order details and, where needed, delivery
            area.
          </li>
          <li>
            <strong>Delivery riders:</strong> your name, delivery address, instructions and a masked
            or direct phone number for the duration of the delivery.
          </li>
          <li>
            <strong>Payment processors:</strong> to authorise and settle transactions securely.
          </li>
          <li>
            <strong>Maps &amp; location providers:</strong> to display addresses, routes and live
            tracking.
          </li>
          <li>
            <strong>Analytics, crash-reporting, messaging and cloud hosting providers:</strong> under
            contracts that restrict use to providing services to us.
          </li>
          <li>
            <strong>Authorities:</strong> where required by applicable law or valid legal process.
          </li>
        </ul>
        <p>We never sell your personal data.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & similar technologies",
    body: (
      <p>
        Our website uses cookies and similar technologies for essential functionality, remembering
        preferences and measuring aggregate usage. The mobile app uses device identifiers and SDKs
        for analytics and crash reporting. You can control cookies through your browser settings and
        limit ad tracking in your device settings; some features may not work without essential
        cookies.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        We keep personal data only as long as necessary for the purposes described above: account
        data while your account is active, order and transaction records for the period required by
        Pakistani tax and accounting law, and support records for a reasonable period afterwards.
        When data is no longer required, we delete it or irreversibly anonymise it.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You may, at any time:</p>
        <ul>
          <li>Access a copy of the personal data we hold about you.</li>
          <li>Correct inaccurate or incomplete details from your in-app profile.</li>
          <li>Request deletion of your account and associated personal data.</li>
          <li>Withdraw marketing consent or disable location permissions in device settings.</li>
          <li>Object to or restrict certain processing where the law allows.</li>
        </ul>
        <p>
          Write to [support@dooria.app] and we will respond within 30 days. Some records may be
          retained where we have a legal obligation to keep them.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We protect your data using encryption in transit (TLS), access controls, least-privilege
        internal permissions, secure cloud infrastructure and regular monitoring. No system is
        perfectly secure, so please keep your device, account credentials and OTP codes private, and
        report any suspected breach to us immediately.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <p>
        Dooria is not intended for children under 18. We do not knowingly collect personal data from
        children. If you believe a child has provided us with personal data, contact
        [support@dooria.app] and we will delete it promptly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy as our services evolve. The "Last updated" date above
        always reflects the current version, and material changes will be notified in the app before
        they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>For privacy questions or data requests, reach our team:</p>
        <ul>
          <li>Email: [support@dooria.app]</li>
          <li>Legal entity: [Company Legal Name]</li>
          <li>Address: [Registered Address], Pakistan</li>
        </ul>
      </>
    ),
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dooria" },
      {
        name: "description",
        content:
          "How Dooria collects, uses, shares and protects your personal data when you order food in Pakistan, plus your privacy rights.",
      },
      { property: "og:title", content: "Privacy Policy — Dooria" },
      {
        property: "og:description",
        content: "Learn what data Dooria collects and how we keep it safe.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="Your trust matters. This policy explains exactly what data Dooria collects, why we need it, and the control you have over it."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}