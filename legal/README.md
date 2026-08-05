# Dooria — Legal Documents

This folder holds the source text for Dooria's user-facing legal documents:

| File | Purpose | Where it must be published |
| --- | --- | --- |
| [`PRIVACY_POLICY.md`](./PRIVACY_POLICY.md) | How Dooria collects, uses, shares, retains and protects personal data. | A public URL (e.g. `https://dooria.app/privacy-policy`) — **required** by the App Store, Google Play, and Pakistani law. |
| [`TERMS_OF_SERVICE.md`](./TERMS_OF_SERVICE.md) | The contract governing use of the app and the ordering service. | A public URL (e.g. `https://dooria.app/terms-and-conditions`). |

## ⚠️ Important — read before publishing

1. **Pakistan-only scope.** The Service is offered only to users in Pakistan, so
   these documents are scoped to **Pakistani law** (Prevention of Electronic Crimes
   Act 2016, the Electronic Transactions Ordinance 2002, the forthcoming Personal
   Data Protection Act, and provincial consumer-protection statutes) plus the Apple
   App Store & Google Play requirements. Foreign-user frameworks (EU/UK GDPR,
   California CCPA/CPRA) have intentionally been removed.

2. **These are templates, not final legal advice.** **Have a licensed Pakistani
   lawyer review and finalise them before you publish or submit to the app
   stores.** Dooria is not yet a registered company; once incorporated, add the
   registered entity name and address in both files.

3. **Fill in the remaining `[PLACEHOLDER]`s.** Search for `[` across both files and
   replace the two bracketed items (effective date and last-updated date). The
   operator name (Dooria), contact e-mail
   (**abrahussain304@gmail.com**) and phone (**+92 321 5565304**) are filled in.
   These are a personal Gmail/number used while Dooria is unregistered — shown
   publicly, so swap for a dedicated brand address when available.

4. **Keep them consistent with the app.** If you add features that collect new
   data (e.g. in-app card payments, chat, analytics SDKs, or a profile photo —
   currently **not** collected), update the Privacy Policy's "Information We
   Collect" and the store data-safety forms to match. Under-declaring collected
   data is a common cause of store rejection.

5. **Wiring into the app.** Once the two pages are live at stable URLs, tell the
   assistant the URLs and it will make the "Terms of Service" and "Privacy Policy"
   text on the login/OTP screens tappable (opening them via `expo-web-browser`).

## How to publish

- Convert these Markdown files to web pages on your marketing site / backend, or
- Host them as simple static pages, and
- Put the two URLs into **App Store Connect** (App Privacy + App Information) and
  the **Google Play Console** (Store listing + Data safety).

_Last updated: 2026-08-06._
