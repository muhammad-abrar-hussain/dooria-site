import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const EFFECTIVE_DATE = "6 August 2026";
const LAST_UPDATED = "6 August 2026";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <>
        <p>
          This Privacy Policy explains how <strong>Dooria</strong> ("<strong>Dooria</strong>", "
          <strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), the operator of
          the Dooria food-ordering and delivery mobile application and related website and services
          (together, the "<strong>Service</strong>"), collects, uses, discloses, retains, and
          protects your personal data, and the rights and choices you have.
        </p>
        <p>
          Dooria is a product and brand operating in Pakistan. Dooria is{" "}
          <strong>not yet incorporated as a registered company</strong>; it is operated by its
          founders. We will update this Policy with our registered entity details once incorporation
          is complete.
        </p>
        <p>
          By creating an account or using the Service, you acknowledge that you have read and
          understood this Privacy Policy. If you do not agree with it, please do not use the
          Service.
        </p>
        <p className="not-prose">
          <strong>Contact:</strong>
          <br />
          Dooria — Pakistan
          <br />
          E-mail: <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a>
          <br />
          Phone: <a href="tel:+923215565304">+92 321 5565304</a>
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope",
    body: (
      <p>
        The Service is offered <strong>only to users in Pakistan</strong>. This Policy applies to
        all users of the Service — customers and, where relevant, restaurant partners and business
        applicants who interact with us through the Service. The Service is not directed to, or
        intended for, users outside Pakistan.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect the following categories of personal data:</p>

        <h3>3.1 Information you provide to us</h3>
        <ul>
          <li>
            <strong>Account &amp; identity data:</strong> your mobile phone number (used for sign-up
            and one-time-password login), and, if you choose to provide them, your name and e-mail
            address.
          </li>
          <li>
            <strong>Delivery address data:</strong> the delivery addresses you save, including
            street address, building/flat details, delivery notes, and their geographic coordinates.
          </li>
          <li>
            <strong>Order data:</strong> the items you order, add-ons, quantities, order notes,
            order history, and cancellation/refund records.
          </li>
          <li>
            <strong>Reviews &amp; feedback:</strong> ratings, reviews, and complaints or support
            requests you submit.
          </li>
          <li>
            <strong>Business/vendor applications:</strong> if you apply to join Dooria as a
            business, the business information you submit (such as business name, owner name,
            e-mail, and phone).
          </li>
          <li>
            <strong>Communications:</strong> messages you send to our support channels.
          </li>
        </ul>

        <h3>3.2 Information collected automatically</h3>
        <ul>
          <li>
            <strong>Approximate and precise location data:</strong> with your permission, we collect
            your device location to detect your current delivery address, show nearby restaurants,
            and support delivery. You can control location access through your device settings.
          </li>
          <li>
            <strong>Device &amp; technical data:</strong> device type, operating system and version,
            app version, language, unique device or installation identifiers, IP address, and
            diagnostic/crash information.
          </li>
          <li>
            <strong>Usage data:</strong> how you interact with the Service (e.g. screens viewed,
            features used, searches made, recently viewed restaurants).
          </li>
        </ul>

        <h3>3.3 Information from third parties</h3>
        <ul>
          <li>
            <strong>Payment status:</strong> where payment is processed by a third party or on
            delivery, we may receive confirmation of payment status (we do <strong>not</strong>{" "}
            store full card numbers — see Section 6).
          </li>
          <li>
            <strong>Restaurant partners and delivery riders:</strong> order-fulfilment and delivery
            status updates.
          </li>
        </ul>

        <p>
          We do <strong>not</strong> knowingly collect special categories of data (such as
          religious, political, health, or biometric data). Please do not submit such data to us.
        </p>
      </>
    ),
  },
  {
    id: "device-permissions",
    title: "Device Permissions",
    body: (
      <>
        <p>
          The Service asks for certain device permissions, which you can grant or revoke at any time
          in your device settings:
        </p>
        <ul>
          <li>
            <strong>Location</strong> — to detect your delivery address, show nearby restaurants,
            and support delivery.
          </li>
          <li>
            <strong>Photos / media</strong> — only to{" "}
            <strong>save an order receipt to your device's gallery</strong> when you choose to. We
            do <strong>not</strong> browse, access, or collect the photos on your device.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use personal data for the following purposes:</p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provide the Service</td>
                <td>
                  Create and manage your account; authenticate you via OTP; accept and fulfil
                  orders; save your addresses and preferences.
                </td>
              </tr>
              <tr>
                <td>Delivery &amp; logistics</td>
                <td>
                  Share the delivery address and order details with the restaurant and delivery
                  rider; enable order tracking.
                </td>
              </tr>
              <tr>
                <td>Location features</td>
                <td>
                  Detect your current address, show nearby restaurants, and estimate delivery.
                </td>
              </tr>
              <tr>
                <td>Payments &amp; receipts</td>
                <td>
                  Process or confirm payment; generate and (at your request) save order receipts.
                </td>
              </tr>
              <tr>
                <td>Support &amp; complaints</td>
                <td>Respond to your questions, complaints, and support requests.</td>
              </tr>
              <tr>
                <td>Safety, security &amp; fraud prevention</td>
                <td>Detect, prevent, and investigate fraud, abuse, and violations of our Terms.</td>
              </tr>
              <tr>
                <td>Improve the Service</td>
                <td>Analyse usage to fix bugs, improve features, and ensure reliability.</td>
              </tr>
              <tr>
                <td>Legal compliance</td>
                <td>
                  Comply with applicable Pakistani law, tax and record-keeping obligations, and
                  lawful requests by public authorities.
                </td>
              </tr>
              <tr>
                <td>Communications</td>
                <td>
                  Send transactional messages (e.g. OTPs, order updates); and, where permitted,
                  service or promotional messages you can opt out of.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We process your personal data on the basis of your <strong>consent</strong>, as{" "}
          <strong>necessary to provide the Service</strong> you request, and to{" "}
          <strong>comply with applicable Pakistani law</strong>. You may withdraw consent for
          optional processing (such as precise location or promotional messages) at any time.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    body: (
      <p>
        Depending on the payment method, orders may be paid <strong>on delivery</strong> or through
        a <strong>third-party payment processor</strong>. Where a third-party processor is used,
        your payment-card details are collected and processed by that processor under its own terms
        and privacy policy; we do <strong>not</strong> store full payment-card numbers on our
        systems. We may retain limited transaction records (such as amount, date, and payment
        status) for order management, accounting, and legal purposes.
      </p>
    ),
  },
  {
    id: "how-we-share-your-information",
    title: "How We Share Your Information",
    body: (
      <>
        <p>
          We share personal data only as described below.{" "}
          <strong>We do not sell your personal data.</strong>
        </p>
        <ul>
          <li>
            <strong>Restaurant partners</strong> — the order details and delivery information needed
            to prepare your order.
          </li>
          <li>
            <strong>Delivery riders / logistics partners</strong> — your name, delivery address,
            coordinates, contact number, and order details needed to deliver your order.
          </li>
          <li>
            <strong>Service providers (processors)</strong> acting on our behalf, including:
            <ul>
              <li>
                <strong>Google Maps Platform</strong> (Google) — for maps, geocoding, and place
                search (see Section 8);
              </li>
              <li>
                our <strong>SMS/OTP provider</strong> — to send verification codes;
              </li>
              <li>
                <strong>cloud hosting and infrastructure</strong> providers;
              </li>
              <li>
                <strong>crash-reporting / diagnostics</strong> providers (if enabled).
              </li>
            </ul>
          </li>
          <li>
            <strong>Payment processors</strong> — to process or confirm payments.
          </li>
          <li>
            <strong>Professional advisers</strong> — lawyers, accountants, and auditors, where
            necessary.
          </li>
          <li>
            <strong>Authorities and legal</strong> — where required to comply with the law, a court
            order, or a lawful request, or to protect our rights, users, or the public, including
            under the Prevention of Electronic Crimes Act 2016 and other applicable Pakistani law.
          </li>
          <li>
            <strong>Business transfers</strong> — in connection with a merger, acquisition,
            financing, or sale of assets, subject to this Policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: (
      <p>
        The Service uses <strong>Google Maps Platform</strong> for maps, geocoding, and place
        search. Your use of these features is also subject to Google's Privacy Policy (
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          https://policies.google.com/privacy
        </a>
        ) and the Google Maps/Google Earth Additional Terms of Service. We restrict our Google API
        keys to our application.
      </p>
    ),
  },
  {
    id: "location-data",
    title: "Location Data",
    body: (
      <p>
        We collect location data only with your permission and only to provide location-based
        features (detecting your address, showing nearby restaurants, and delivery). You can enable
        or disable location access at any time through your device's system settings. Disabling
        location may limit some features, such as automatic address detection.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: (
      <p>
        We retain personal data only for as long as necessary for the purposes described in this
        Policy, including to provide the Service, comply with legal, tax, and accounting
        obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we
        delete or anonymise it. Order and transaction records may be retained for the period
        required by applicable Pakistani law.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    body: (
      <p>
        We implement appropriate technical and organisational measures to protect personal data,
        including encryption of data in transit (HTTPS/TLS) and storage of authentication
        credentials in the device's secure storage (iOS Keychain / Android Keystore). No method of
        transmission or storage is completely secure, and we cannot guarantee absolute security.
        Please keep your device and account secure and notify us promptly of any suspected
        unauthorised access.
      </p>
    ),
  },
  {
    id: "international-processing",
    title: "International Processing",
    body: (
      <p>
        We are based in Pakistan and serve users in Pakistan. Some of our service providers (such as
        cloud hosting, maps, and messaging providers) may store or process data on servers located
        outside Pakistan. Where this happens, we take reasonable steps to ensure your data is
        protected consistent with this Policy and applicable law, including by using reputable
        providers that offer appropriate security safeguards.
      </p>
    ),
  },
  {
    id: "your-rights-and-choices",
    title: "Your Rights and Choices",
    body: (
      <>
        <p>Subject to applicable law, you may ask us to:</p>
        <ul>
          <li>
            <strong>Access</strong> the personal data we hold about you;
          </li>
          <li>
            <strong>Correct</strong> inaccurate or incomplete data;
          </li>
          <li>
            <strong>Delete</strong> your data;
          </li>
          <li>
            <strong>Withdraw consent</strong> where processing is based on consent.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a>. We may need to
          verify your identity before acting on a request.
        </p>

        <h3>13.1 Account and data deletion</h3>
        <p>You can request deletion of your account and associated personal data:</p>
        <ul>
          <li>
            from within the app (<strong>Profile → Delete Account</strong>), or
          </li>
          <li>
            by e-mailing <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a> from
            your registered number/e-mail.
          </li>
        </ul>
        <p>
          Upon deletion, we remove or anonymise your personal data, except where we are required or
          permitted by law to retain certain records (for example, transaction and tax records).
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: (
      <p>
        The Service is intended for users who are <strong>18 years of age or older</strong>. We do
        not knowingly collect personal data from children. If you believe a child has provided us
        with personal data, contact us and we will take appropriate steps to delete it.
      </p>
    ),
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Policy from time to time. When we do, we will revise the "Last updated"
        date and, for material changes, provide additional notice (for example, in the app). Your
        continued use of the Service after changes take effect constitutes acceptance of the updated
        Policy.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        <p>
          For any questions, requests, or complaints regarding this Policy or your personal data,
          contact:
        </p>
        <p className="not-prose">
          <strong>Dooria — Privacy / Grievance Contact</strong>
          <br />
          Pakistan
          <br />
          E-mail: <a href="mailto:abrahussain304@gmail.com">abrahussain304@gmail.com</a>
          <br />
          Phone: <a href="tel:+923215565304">+92 321 5565304</a>
        </p>
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
          "How Dooria collects, uses, shares, and protects your personal data when you use the Dooria food-ordering and delivery service in Pakistan.",
      },
      { property: "og:title", content: "Privacy Policy — Dooria" },
      {
        property: "og:description",
        content: "Read the Dooria Privacy Policy for customers ordering food in Pakistan.",
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
      effectiveDate={EFFECTIVE_DATE}
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
