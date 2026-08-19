import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const LAST_UPDATED = "20 August 2026";

const SUPPORT_EMAIL = "dooria.support@gmail.com";

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        This page explains how to request deletion of your <strong>Dooria</strong> account and the
        personal data associated with it, and what happens to your data afterwards. Dooria is a
        food-delivery app operating in Pakistan. You can delete your account yourself from within the
        app, or ask us to do it for you by e-mail if you cannot access the app.
      </p>
    ),
  },
  {
    id: "delete-from-app",
    title: "Delete Your Account From the App",
    body: (
      <>
        <p>
          The quickest way to delete your account is directly in the Dooria app. It is instant and
          self-service:
        </p>
        <ul>
          <li>Open the Dooria app and sign in.</li>
          <li>
            Go to the <strong>Profile</strong> tab.
          </li>
          <li>
            Tap <strong>"Delete Account"</strong>.
          </li>
          <li>
            Confirm. Your account is <strong>deactivated immediately</strong> and you are signed
            out.
          </li>
        </ul>
        <p>
          Once you confirm, you will no longer be able to sign in with that account. There is no
          waiting period for this method — it takes effect right away.
        </p>
      </>
    ),
  },
  {
    id: "delete-by-email",
    title: "Request Deletion Without the App",
    body: (
      <>
        <p>
          If you cannot access the app, you can ask us to delete your account by e-mailing{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
        <p>
          Please send your request <strong>from</strong>, or <strong>include</strong>, the mobile
          phone number registered with your Dooria account so we can verify your identity. We process
          these requests within <strong>30 days</strong> and may contact you to confirm ownership of
          the account before deleting it.
        </p>
      </>
    ),
  },
  {
    id: "what-is-deleted",
    title: "What Data Is Deleted",
    body: (
      <>
        <p>When your account is deleted, the following are permanently removed or anonymized:</p>
        <ul>
          <li>Your mobile phone number.</li>
          <li>Your name and e-mail address (if you provided them).</li>
          <li>
            Your saved delivery addresses, including building/flat details, delivery notes, and
            geographic coordinates.
          </li>
          <li>
            The account itself is deactivated — you can no longer sign in with it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-is-retained",
    title: "What Data Is Retained (and Why)",
    body: (
      <>
        <p>
          To stay consistent with our{" "}
          <a href="https://dooria.app/privacy-policy">Privacy Policy</a>, we keep some records in an{" "}
          <strong>anonymized form</strong> — with personal identifiers removed — because we are
          legally required to:
        </p>
        <ul>
          <li>
            <strong>Order and transaction history and tax records</strong> — retained to comply with
            legal, tax, and accounting obligations under applicable Pakistani law, to resolve
            disputes, and to enforce our agreements.
          </li>
          <li>
            <strong>Ratings and reviews</strong> may be retained without personal identifiers.
          </li>
          <li>
            <strong>Full card / payment numbers are never stored by Dooria.</strong>
          </li>
        </ul>
        <p>
          These retained records contain no information that personally identifies you.
        </p>
      </>
    ),
  },
  {
    id: "retention-period",
    title: "Retention Period",
    body: (
      <p>
        Legally-required records are kept only for the period required by applicable Pakistani law,
        and are then removed.
      </p>
    ),
  },
  {
    id: "related-policies",
    title: "Related Policies",
    body: (
      <>
        <p>For more detail on how we handle your data, please see:</p>
        <ul>
          <li>
            <a href="https://dooria.app/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="https://dooria.app/terms-and-conditions">Terms &amp; Conditions</a>
          </li>
        </ul>
        <p className="not-prose">
          <strong>Questions?</strong> Contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </>
    ),
  },
];

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Your Dooria Account — Dooria" },
      {
        name: "description",
        content:
          "How to delete your Dooria account and the personal data associated with it. Delete instantly from the app, or request account and data deletion by e-mail.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Delete Your Dooria Account" },
      {
        property: "og:description",
        content:
          "Request deletion of your Dooria account and personal data. Delete from the app or by e-mail.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/delete-account" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/delete-account" }],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Delete Your Dooria Account"
      intro="Dooria is a food-delivery app operating in Pakistan. This page explains how to request deletion of your account and the personal data associated with it, and what happens to your data."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}