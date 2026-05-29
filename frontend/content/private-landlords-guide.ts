//
// content/private-landlords-guide.ts
//
// Guide for private landlords: what to do when a tenant complains about damp or mould.
// Covers standing statutory duties (Section 11, FFHH Act, HHSRS) and the Renters' Rights
// Act 2025 reforms — both in-force and pending.
//
// Quotation rule: only use type "quote" for verbatim text from cited sources.

import type { ReferenceId } from "./references";

export type AlertBanner = {
  status: "live" | "coming";
  label: string;
  title: string;
  text: string;
  refs?: ReferenceId[];
};

export type StatuteDuty = {
  act: string;
  text: string;
  refs: ReferenceId[];
};

export type ReformCard = {
  status: "live" | "pending";
  phase?: string;
  category: string;
  title: string;
  body: string;
  emphasis?: string;
  refs: ReferenceId[];
};

export const privateLandlordsGuide = {
  meta: {
    eyebrow: "A guide for private landlords",
    currentAs: "21 May 2026",
    heading: "A tenant has complained about damp or mould. What do you actually have to do?",
    intro:
      "The Renters' Rights Act 2025's first phase has been in force since 1 May 2026. Section 21 evictions are abolished and the new periodic tenancy regime applies, though the PRS Landlord Ombudsman is not yet in force. This page sets out your statutory duties as they stand today, the access rights and evidence rules that govern damp and mould complaints, and what's still pending.",
    lastReviewed: "21 May 2026",
  },

  alerts: [
    {
      status: "live",
      label: "Live",
      title: "New tenancy regime",
      text: "Section 21 abolished since 1 May 2026. All ASTs converted to Assured Periodic Tenancies.",
      refs: [23],
    },
    {
      status: "live",
      label: "Live",
      title: "Rent increase rules",
      text: "Limited to once per 12 months, with 2 months' notice via Section 13.",
      refs: [24],
    },
    {
      status: "coming",
      label: "Coming late 2026",
      title: "PRS Landlord Ombudsman",
      text: "The PRS Landlord Ombudsman is not yet in force. Phase 2 of RRA implementation.",
      refs: [26],
    },
  ] as AlertBanner[],

  toc: [
    { num: "R1", anchor: "statutory-duties", title: "Your statutory duties today" },
    { num: "R2", anchor: "already-changed", title: "What's already changed" },
    { num: "R3", anchor: "still-pending", title: "What's still pending" },
    { num: "R4", anchor: "maple-diagnostics", title: "Where Maple Diagnostics fits" },
  ],

  download: {
    title: "Section 11(6) notice template",
    downloads: [
      { label: "Download PDF", href: "#", meta: "14 KB · 7 pages" },
      { label: "Download Word (fillable)", href: "#", meta: "17 KB · editable" },
    ],
    disclaimer:
      "Template — not legal advice. Fill in, serve at least 24 hours before your visit, and keep proof of service.",
    caption: "Resource card · /landlords + /social-housing pages",
  },

  sections: {
    // ============================================================
    // R1. YOUR STATUTORY DUTIES TODAY
    // ============================================================
    statutoryDuties: {
      lead: "Three standing statutory duties already apply to your damp and mould complaint.",
      duties: [
        {
          act: "Section 11, Landlord and Tenant Act 1985",
          text: "The landlord must keep the structure and exterior of the dwelling in repair, and keep installations for gas, electricity, sanitation and heating in proper working order. Section 11 cannot be excluded by any clause in the tenancy agreement — Section 12 voids any attempted exclusion absent county court approval.",
          refs: [13],
        },
        {
          act: "Homes (Fitness for Human Habitation) Act 2018",
          text: "Amended the Landlord and Tenant Act 1985 to require dwellings to be fit for human habitation at the start of the tenancy and throughout. The statutory list of factors includes freedom from damp, vermin, and any prescribed hazard. A tenant can bring a claim directly, without going through the local authority.",
          refs: [21],
        },
        {
          act: "Housing Health and Safety Rating System (HHSRS)",
          text: "Under the Housing Act 2004, local councils can inspect privately rented properties and issue Improvement Notices for hazards including damp. Failure to comply with an Improvement Notice can result in a civil penalty of up to £30,000 per offence under section 249A of the Housing Act 2004, as inserted by section 136 of the Housing and Planning Act 2016.",
          refs: [22],
        },
      ] as StatuteDuty[],
    },

    // ============================================================
    // R2. WHAT'S ALREADY CHANGED
    // ============================================================
    alreadyChanged: {
      lead: "The Renters' Rights Act 2025 reforms now in force (since 1 May 2026).",
      reforms: [
        {
          status: "live",
          category: "Tenancy change",
          title: "Section 21 abolished: ASTs converted to Assured Tenancies.",
          body: "You can no longer serve a Section 21 no-fault notice. No-fault notices served on or before 30 April 2026 remain valid for a transitional period, with court proceedings required by 31 July 2026. Periodic tenancies are now ended on the strengthened Section 8 grounds.",
          emphasis:
            "This matters for damp cases because a tenant raising a disrepair complaint can no longer be removed through Section 21 — the evidential burden on you to address the complaint is higher.",
          refs: [23],
        },
        {
          status: "live",
          category: "Rent increase",
          title: "Rent increases limited to once per 12 months, with 2 months' written notice.",
          body: "Under Section 13. Tenants can challenge a rent increase at the First-tier Tribunal. Rent increases imposed in response to disrepair complaints are likely to attract particular scrutiny.",
          refs: [24],
        },
        {
          status: "live",
          category: "Rent in advance",
          title: "Rent in advance capped, rental bidding banned, expanded local authority enforcement.",
          body: "Payment of rent in advance is capped at one month for tenancies starting after 1 May 2026. Local authority investigatory powers were strengthened from 27 December 2025 and the expanded enforcement duties from 1 May 2026.",
          refs: [25],
        },
      ] as ReformCard[],
    },

    // ============================================================
    // R3. WHAT'S STILL PENDING
    // ============================================================
    stillPending: {
      lead: "Three further reforms have not yet commenced.",
      reforms: [
        {
          status: "pending",
          phase: "Phase 2",
          category: "Ombudsman",
          title: "PRS Landlord Ombudsman becomes mandatory.",
          body: "The Private Rented Sector Landlord Ombudsman, established under Chapter 2 Part 1 of the Renters' Rights Act, is currently being set up by MHCLG. Once operating, all private landlords must join. Tenants will be able to escalate unresolved complaints — including damp and mould — to the Ombudsman, which will have powers to order remedial works, apologies, and compensation.",
          refs: [26],
        },
        {
          status: "pending",
          phase: "Phase 2",
          category: "Registration",
          title: "National PRS Database.",
          body: "A mandatory landlord and property register — capturing landlord details, property details, and safety and compliance information. Required as a prerequisite for serving Section 8 notices once in force.",
          refs: [27],
        },
        {
          status: "pending",
          phase: "Phase 3",
          category: "Standards",
          title: "Decent Homes Standard extension and Awaab's Law extension to PRS.",
          body: "The Decent Homes Standard will be extended under Schedule 4 of the Act. Awaab's Law extension to PRS: timing is to be confirmed via subsequent regulations and consultation. Extension to PRS is unlikely before 2027 and probably post-2030.",
          refs: [6, 28],
        },
      ] as ReformCard[],
      implication:
        "The statutory deadlines that currently apply to social landlords (10 working days to investigate, 3 working days for written findings) do not yet apply to the private rented sector. However, the standard the PRS Landlord Ombudsman is likely to apply when it commences, and the Pre-Action Protocol requirements that apply today, increasingly mirror them. Evidence collected now protects you against claims under Section 11, the Homes Act, and HHSRS — the same evidence will satisfy the Ombudsman once it is in place.",
    },

    // ============================================================
    // R4. WHERE MAPLE DIAGNOSTICS FITS
    // ============================================================
    mapleDiagnostics: {
      lead: "Court-ready evidence for Section 11, HHSRS, and the Ombudsman — from day one.",
      paras: [
        "When a tenant complains about damp or mould, your liability under Section 11 and the Homes Act is assessed against what a reasonable landlord with the relevant knowledge would have done. A 14-day sensor deployment produces continuous environmental data — humidity, temperature, surface dew-point — that documents the property's condition objectively, without relying on a single inspection that may not reflect a chronic problem.",
        "The kit is dispatched the same day, self-installed by the tenant or landlord, and returned in a prepaid envelope. The resulting report is formatted for court and Ombudsman submissions, includes an outdoor baseline comparison, and carries a timestamped audit trail.",
      ],
    },
  },
} as const;
