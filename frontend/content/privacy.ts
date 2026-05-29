//
// content/privacy.ts
//
// Privacy notice content for /privacy — required before the download gate goes live.
// Covers UK GDPR Articles 13/14 obligations arising from the download form.
//
// Update COMPANIES_HOUSE_NUMBER and DPO_EMAIL before publishing.

export const privacyNotice = {
  meta: {
    lastReviewed: "21 May 2026",
    effectiveFrom: "1 June 2026",
  },

  controller: {
    tradingAs: "Maple Diagnostics",
    legalEntity: "Cambridge Logic Ltd.",
    companiesHouse: "XXXXXXXX", // TODO: insert Companies House number
    address: "Cambridge, England",
    contactEmail: "yk@cambridgelogic.com",
    dpoEmail: "enquries@cambridgelogic.com", // TODO: confirm DPO contact
  },

  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      body: "Maple Diagnostics is a trading name of Cambridge Logic Ltd. (Companies House no. XXXXXXXX), a company registered in England and Wales. We supply 14-day environmental sensor kits used to produce evidence reports for damp and mould disputes. We are the data controller for personal data collected through this website.",
    },
    {
      id: "what-we-collect",
      title: "What data we collect and why",
      body: "When you request a free template or guide through our download form, we collect: your name, work email address, organisation name, role type, and approximate number of properties under your responsibility. We also capture your IP address, browser user agent, and the URL you submitted from to help us detect and reject automated spam submissions. We do not collect payment information through this site.",
    },
    {
      id: "lawful-basis",
      title: "Lawful basis for processing",
      items: [
        {
          basis: "Legitimate interests (Article 6(1)(f) UK GDPR)",
          purpose:
            "Sending you the resource you requested and responding to any follow-up enquiries. We have assessed that this processing is necessary for our legitimate commercial interest in providing useful resources to prospective customers, and that this interest is not overridden by your rights given the limited nature of the data and your reasonable expectation of receiving what you requested.",
        },
        {
          basis: "Consent (Article 6(1)(a) UK GDPR)",
          purpose:
            "If you tick the marketing opt-in box, we will send you occasional updates about Awaab's Law, new resources, and product news. This processing is based solely on your freely given, specific, informed, and unambiguous consent. You can withdraw consent at any time by clicking 'Unsubscribe' in any marketing email or by emailing us.",
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep your data",
      body: "We retain lead data for 24 months from the date of your last interaction with us (email open, website visit, or direct contact). After that period, your record is deleted from our systems. If you withdraw marketing consent, we remove you from our marketing list immediately but may retain a suppression record to honour your preference. Download token records are deleted 30 days after the token expires.",
    },
    {
      id: "sub-processors",
      title: "Who we share your data with",
      items: [
        {
          name: "Hetzner / DigitalOcean (hosting)",
          purpose: "Our server infrastructure. Data stored in EU/UK data centres.",
        },
        {
          name: "Postmark / SendGrid (transactional email)",
          purpose:
            "Used to deliver your download links by email. Your name and email address are transmitted to the email provider solely for this purpose.",
        },
        {
          name: "PostgreSQL (our database)",
          purpose:
            "Your form submission is stored in a private database accessible only to Maple Diagnostics staff.",
        },
      ],
      note: "We do not sell, rent, or trade your personal data with any third party for their own marketing purposes.",
    },
    {
      id: "your-rights",
      title: "Your rights",
      items: [
        {
          right: "Access",
          description: "Request a copy of the personal data we hold about you.",
        },
        {
          right: "Rectification",
          description: "Ask us to correct inaccurate or incomplete data.",
        },
        {
          right: "Erasure",
          description:
            "Ask us to delete your data where we no longer have a legitimate reason to hold it.",
        },
        {
          right: "Objection",
          description:
            "Object to processing based on legitimate interests. We will stop unless we have compelling grounds that override your interests.",
        },
        {
          right: "Restriction",
          description: "Ask us to restrict processing while a dispute about the data is resolved.",
        },
        {
          right: "Portability",
          description:
            "Receive the data you provided to us in a structured, commonly used, machine-readable format.",
        },
        {
          right: "Withdraw consent",
          description:
            "Where processing is based on consent (marketing), withdraw it at any time without affecting the lawfulness of prior processing.",
        },
      ],
      howToExercise:
        "To exercise any of these rights, email us. We will respond within one calendar month. We do not charge a fee for reasonable requests.",
    },
    {
      id: "ico",
      title: "Right to complain",
      body: "If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection. You can contact the ICO at ico.org.uk or by calling 0303 123 1113. We would appreciate the opportunity to address your concern directly before you contact the ICO — please email us first.",
    },
    {
      id: "changes",
      title: "Changes to this notice",
      body: "We may update this privacy notice from time to time. The 'Last reviewed' date at the top of this page will reflect any changes. Material changes (new purposes, new sub-processors, change of lawful basis) will be communicated by email to anyone whose data is affected.",
    },
  ],
} as const;
