/**
 * ⚠️  DRAFT — NOT LEGAL ADVICE, NOT REVIEWED BY COUNSEL.
 *
 * This is a structured starting point written to cover the issues a
 * physician-network website that collects patient intake data normally has to
 * address. It has NOT been reviewed by an attorney and it is not tailored to
 * the states Urgent Med First operates in.
 *
 * Before publishing, have healthcare counsel review it against, at minimum:
 *   • HIPAA and state health-privacy law (the intake form collects PHI)
 *   • TCPA / state consent rules for phone, SMS and email contact
 *   • state medical-advertising and corporate-practice-of-medicine rules
 *   • state rules on PIP, letters of protection and assignment of benefits
 *   • ADA / WCAG accessibility commitments, if any are to be made
 *
 * Placeholders to fill in are written as [BRACKETED TEXT].
 * A Privacy Policy is referenced below but does not exist yet — either write
 * one or remove the reference before launch.
 *
 * Set DRAFT_NOTICE to false to hide the on-page "pending legal review" banner.
 */
export const DRAFT_NOTICE = true;

export const LAST_UPDATED = "[EFFECTIVE DATE]";
export const LEGAL_ENTITY = "[LEGAL ENTITY NAME]";
export const GOVERNING_STATE = "[STATE]";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: (string | { list: string[] })[];
};

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    paragraphs: [
      `These Terms & Conditions ("Terms") govern your access to and use of this website and any request you submit through it (together, the "Site"), which is operated by ${LEGAL_ENTITY}, doing business as Urgent Med First ("Urgent Med First", "we", "us").`,
      "By using the Site you agree to these Terms. If you do not agree to them, please do not use the Site.",
      "We may update these Terms from time to time. The date at the top of this page shows when they were last revised, and any change takes effect when it is posted here. Continuing to use the Site after a change means you accept the revised Terms.",
    ],
  },
  {
    id: "not-medical-advice",
    title: "The Site is not medical advice",
    paragraphs: [
      "Everything on this Site — including descriptions of conditions, evaluations, referrals and care coordination — is general information for education only. It is not medical advice, it is not a diagnosis, and it is not a recommendation for any particular course of treatment.",
      "Nothing on the Site should be used as a substitute for consulting a qualified healthcare professional about your own circumstances. Never disregard professional medical advice, or delay seeking it, because of something you read here.",
      "Submitting a form, sending an email or calling us does not by itself create a physician-patient relationship. That relationship begins only when you are formally accepted as a patient by a treating physician, in person, following that physician’s own intake and consent process.",
    ],
  },
  {
    id: "emergencies",
    title: "Medical emergencies",
    paragraphs: [
      "The Site is not monitored around the clock and must never be used to report a medical emergency.",
      "If you are experiencing a medical emergency — including a headache that keeps worsening, repeated vomiting, unequal pupils, slurred speech, seizure, loss of consciousness, or an inability to wake someone — call 911 or go to the nearest emergency department immediately.",
    ],
  },
  {
    id: "network",
    title: "About the network",
    paragraphs: [
      "Urgent Med First is a network that connects patients with licensed physicians and coordinates the referrals and records associated with their care.",
      "Physicians and other providers in the network are independent practitioners. They are responsible for the medical care they provide and exercise their own professional judgment. Urgent Med First does not practice medicine and does not direct, control or override the clinical decisions of any provider in the network.",
      "Being listed in or reachable through the network is not an endorsement or guarantee of any provider’s services, availability or outcome. We do not guarantee that a provider will be available in any particular area or within any particular timeframe.",
    ],
  },
  {
    id: "requests",
    title: "Appointment requests and communications",
    paragraphs: [
      "When you submit an appointment request you confirm that the information you give us is accurate and that you are either the patient or authorized to act on the patient’s behalf.",
      "By providing your telephone number and email address you consent to being contacted at them about your request — including by call, text message and email — by Urgent Med First and by providers coordinating your care. Message and data rates may apply. You can withdraw consent at any time by telling us so, or by replying STOP to a text message; withdrawing consent may limit our ability to schedule or coordinate care for you.",
      "Submitting a request does not confirm an appointment. An appointment exists only once it has been scheduled and confirmed with you directly.",
      "Please do not send detailed health information, images or records through the Site’s forms or by unencrypted email. Email and web forms are not secure channels, and information sent that way may be intercepted.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy and health information",
    paragraphs: [
      "Information you submit through the Site is handled in accordance with our Privacy Policy and, where it applies, our Notice of Privacy Practices.",
      "Protected health information that you provide in the course of receiving care is subject to HIPAA and applicable state health-privacy law. Information you submit through this Site before a physician-patient relationship exists may not carry the same protections, which is why we ask you to keep web submissions brief and general.",
    ],
  },
  {
    id: "billing",
    title: "Insurance, billing and financial responsibility",
    paragraphs: [
      "Coverage for care following a motor vehicle accident depends on your policy, your state and the circumstances of the accident. Any coverage information discussed with you is an estimate based on what is known at the time; it is not a guarantee of payment or of any particular out-of-pocket cost.",
      "You remain responsible for charges not covered by an insurer or other payer, to the extent permitted by applicable law and by any agreement you sign with a treating provider.",
      "Nothing on this Site is an offer of, or a promise to accept, any particular insurance plan, letter of protection, assignment of benefits or payment arrangement.",
    ],
  },
  {
    id: "use",
    title: "Permitted use of the Site",
    paragraphs: [
      "The Site is intended for use by adults located in the United States. It is not directed at children under 13, and we do not knowingly collect information from them.",
      "You agree not to:",
      {
        list: [
          "submit false, misleading or fraudulent information, or use another person’s information without authorization",
          "use the Site for any unlawful purpose, or in a way that violates these Terms",
          "attempt to gain unauthorized access to the Site, its systems or its data",
          "interfere with, disrupt or place unreasonable load on the Site or its infrastructure",
          "use automated means to scrape, harvest or collect information from the Site",
          "reproduce, distribute or create derivative works from Site content except as permitted below",
        ],
      },
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    paragraphs: [
      "The Site and its content — including text, graphics, layout, design and code — are owned by Urgent Med First or its licensors and are protected by copyright, trademark and other laws.",
      "You may view and print Site content for your own personal, non-commercial use. Any other use, including reproduction, modification, distribution or republication, requires our prior written permission.",
      "The Urgent Med First name and logo are our trademarks and may not be used without permission.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    paragraphs: [
      "The Site may link to websites or services we do not operate. We provide those links for convenience only. We do not control, endorse or take responsibility for third-party content, practices or privacy handling, and your use of a third-party site is governed by that site’s own terms.",
    ],
  },
  {
    id: "warranties",
    title: "Disclaimer of warranties",
    paragraphs: [
      'The Site is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.',
      "We do not warrant that the Site will be uninterrupted, timely, secure or error-free, or that the information on it is complete, current or accurate. Medical information changes, and content on the Site may not reflect the most recent developments.",
      "Some jurisdictions do not allow the exclusion of certain warranties, so parts of this section may not apply to you.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Urgent Med First and its officers, employees and agents will not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or for any loss of profits, data, goodwill or business, arising out of or relating to your use of the Site — whether based in contract, tort, negligence, strict liability or any other theory, and whether or not we have been advised of the possibility of such damages.",
      "This section limits liability arising from your use of the Site. It does not limit any liability that cannot be limited under applicable law, and it is not intended to limit the professional liability of a treating physician for the medical care they provide.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless Urgent Med First and its officers, employees and agents from any claim, loss, liability or expense (including reasonable attorneys’ fees) arising out of your use of the Site, your violation of these Terms, or your violation of the rights of any third party.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    paragraphs: [
      `These Terms are governed by the laws of the State of ${GOVERNING_STATE}, without regard to its conflict-of-law rules.`,
      `Any dispute arising out of or relating to these Terms or the Site will be brought exclusively in the state or federal courts located in ${GOVERNING_STATE}, and you consent to the jurisdiction of those courts.`,
      "If any provision of these Terms is found unenforceable, that provision will be limited or removed to the minimum extent necessary and the remaining provisions will stay in full force.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      "If you have questions about these Terms, please contact us using the details below. For anything clinical, or to schedule an evaluation, please call the intake line rather than emailing.",
    ],
  },
];
