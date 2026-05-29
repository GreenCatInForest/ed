//
// content/references.ts
//
// Single source of truth for every citation across the site.
// When a URL changes, update it here once. All pages re-render.
//
// Every reference is to a PRIMARY source: legislation, regulator guidance,
// or the Housing Ombudsman. No secondary commentary.
//
// Numbering order matches the display order on /references:
//   1–16  Legislation & statutory instruments
//  17–25  MHCLG statutory guidance
//     26  Impact assessments
//  27–28  Housing Ombudsman

export const references = {
  1: {
    label:
      "The Hazards in Social Housing (Prescribed Requirements) (England) Regulations 2025",
    url: "https://www.legislation.gov.uk/uksi/2025/1042/contents/made",
    note: "SI 2025 No. 1042. In force 27 October 2025.",
  },
  2: {
    label: "Social Housing (Regulation) Act 2023, Section 42",
    url: "https://www.legislation.gov.uk/ukpga/2023/36/section/42",
    note: "Inserted sections 10A and 10B into the Landlord and Tenant Act 1985.",
  },
  3: {
    label:
      "Regulation 3, Hazards in Social Housing Regulations 2025 — Definitions",
    url: "https://www.legislation.gov.uk/uksi/2025/1042/regulation/3/made",
    note: "Definitions of 'significant hazard' and 'emergency hazard'.",
  },
  4: {
    label: "Renters' Rights Act 2025, Section 60",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/section/60",
    note: "Power to extend Awaab's Law to the private rented sector.",
  },
  5: {
    label:
      "Regulation 6, Hazards in Social Housing Regulations 2025 — Standard investigations",
    url: "https://www.legislation.gov.uk/uksi/2025/1042/regulation/6/made",
    note: "10-working-day investigation requirement for significant hazards.",
  },
  6: {
    label:
      "Regulation 9, Hazards in Social Housing Regulations 2025 — Written summary",
    url: "https://www.legislation.gov.uk/uksi/2025/1042/regulation/9/made",
    note: "3-working-day written summary requirement.",
  },
  7: {
    label: "Landlord and Tenant Act 1985, Section 11",
    url: "https://www.legislation.gov.uk/ukpga/1985/70/section/11",
    note: "Landlord's repairing obligations — structure and exterior of dwelling.",
  },
  8: {
    label:
      "Regulation 20, Hazards in Social Housing Regulations 2025 — Right of entry",
    url: "https://www.legislation.gov.uk/uksi/2025/1042/regulation/20/made",
    note: "Implied covenant of entry for landlord, 24 hours' written notice required.",
  },
  9: {
    label: "Homes (Fitness for Human Habitation) Act 2018",
    url: "https://www.legislation.gov.uk/ukpga/2018/34/contents",
    note: "Amended LTA 1985 to imply a fitness covenant in short leases. Tenants may bring a direct claim.",
  },
  10: {
    label: "Housing Act 2004, section 249A — Civil penalties",
    url: "https://www.legislation.gov.uk/ukpga/2004/34/section/249A",
    note: "Civil penalty up to £30,000 for HHSRS Improvement Notice breach, inserted by Housing and Planning Act 2016 s.136.",
  },
  11: {
    label: "Renters' Rights Act 2025, Part 1 — Assured tenancies and abolition of Section 21",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/part/1",
    note: "Section 21 notices abolished from 1 May 2026. All ASTs converted to assured periodic tenancies. Transitional period for existing notices.",
  },
  12: {
    label: "Renters' Rights Act 2025, Section 13 — Rent increases",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/section/7",
    note: "Rent increases limited to once per 12 months with 2 months' written notice. Tenant right to challenge at First-tier Tribunal.",
  },
  13: {
    label: "Renters' Rights Act 2025, Part 2 — Rent in advance and bidding",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/part/2",
    note: "Rent in advance capped at one month for tenancies starting after 1 May 2026. Rental bidding prohibited.",
  },
  14: {
    label: "Renters' Rights Act 2025, Chapter 2 Part 1 — PRS Landlord Ombudsman",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/chapter/2",
    note: "Establishes the Private Rented Sector Landlord Ombudsman. Mandatory membership for all private landlords once commenced.",
  },
  15: {
    label: "Renters' Rights Act 2025, Part 3 — Private Rented Sector Database",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/part/3",
    note: "Mandatory landlord and property register. Required as a prerequisite for serving Section 8 notices once in force.",
  },
  16: {
    label: "Renters' Rights Act 2025, Schedule 4 — Decent Homes Standard",
    url: "https://www.legislation.gov.uk/ukpga/2025/26/schedule/4",
    note: "Extends the Decent Homes Standard to the private rented sector. Commencement date to be confirmed via secondary legislation.",
  },
  17: {
    label:
      "MHCLG, Awaab's Law: Guidance for social landlords — Timeframes for repairs in the social rented sector",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector",
    note: "Published 17 October 2025. Section numbers in body text refer to this guidance.",
  },
  18: {
    label: "MHCLG guidance, Section 1 — Phased implementation timetable",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#introduction",
    note: "Phase 2: 'In 2026'. Phase 3: 'In 2027'. No specific month confirmed.",
  },
  19: {
    label: "MHCLG guidance, Section 4.1.1 — Standard investigations",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#standard-investigations",
    note: "Day Zero rule: day of awareness is Day 0; Day 1 is the following working day.",
  },
  20: {
    label: "MHCLG guidance, Section 6 — Issuing a written summary to tenants",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#issuing-a-written-summary-to-tenants",
    note: "Required contents of the written summary.",
  },
  21: {
    label: "MHCLG guidance, Section 7.2 — Supplementary preventative works",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#making-the-property-safe-and-supplementary-preventative-works",
    note: "12-week longstop for preventative work that cannot begin within 5 working days.",
  },
  22: {
    label: "MHCLG guidance, Section 9.1 — Reasonable endeavours defence",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#defence",
    note: "Section 10A(5) LTA 1985. Landlord has a defence if they used all reasonable endeavours.",
  },
  23: {
    label: "MHCLG guidance, Section 3 — Awareness, triage and categorisation",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#awareness-triage-and-categorisation-of-hazards",
    note: "When the landlord 'becomes aware' — what triggers Day Zero.",
  },
  24: {
    label: "MHCLG guidance, Section 3.5 — Information about the tenant",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#information-about-the-tenant",
    note: "Vulnerability assessment requirements and GDPR considerations.",
  },
  25: {
    label: "MHCLG guidance, Section 2.4 — 'Lifestyle' is not a defence",
    url: "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector#scope-of-awaabs-law",
    note: "MHCLG: 'It is unacceptable for social landlords to assume that the cause of a hazard, such as damp and mould, is due to the tenant's lifestyle.'",
  },
  26: {
    label: "MHCLG, Awaab's Law — Final Stage Impact Assessment",
    url: "https://www.legislation.gov.uk/ukia/2025/125/pdfs/ukia_20250125_en.pdf",
    note: "Background to the Awaab Ishak case at paragraphs 1.1–1.4.",
  },
  27: {
    label: "Housing Ombudsman, Spotlight on: Damp and mould — It's not lifestyle",
    url: "https://www.housing-ombudsman.org.uk/reports/spotlight-reports/spotlight-on-damp-and-mould/",
    note: "October 2021. 26 recommendations remain the operational benchmark.",
  },
  28: {
    label: "Housing Ombudsman, Annual Complaints Review 2024–25",
    url: "https://www.housing-ombudsman.org.uk/annual-complaint-review-reports/annual-complaints-review-2024-25/",
    note: "£5m+ compensation ordered. 40%+ damp/mould. Almost £32k largest single order.",
  },
} as const;

export type ReferenceId = keyof typeof references;
