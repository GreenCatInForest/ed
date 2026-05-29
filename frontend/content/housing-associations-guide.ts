//
// content/housing-associations-guide.ts
//
// Guide for housing associations and social landlords: Awaab's Law Phase 1 obligations.
// Covers the 10-day investigation deadline, written findings, the reasonable lessor test,
// and upcoming Phase 2 / Phase 3 extensions.
//
// Quotation rule: only use type "quote" for verbatim text from cited sources.

import type { ReferenceId } from "./references";
import type { AlertBanner, StatuteDuty, ReformCard } from "./private-landlords-guide";

export const housingAssociationsGuide = {
  meta: {
    eyebrow: "A guide for housing associations & social landlords",
    currentAs: "21 May 2026",
    heading: "Awaab's Law Phase 1 is in force. What does your organisation have to do?",
    intro:
      "The Hazards in Social Housing (Prescribed Requirements) (England) Regulations 2025 came into force on 27 October 2025. Phase 1 covers damp and mould hazards and all emergency hazards. This page sets out the statutory deadlines, the reasonable lessor test, what counts as objective evidence, and what Phases 2 and 3 will add.",
    lastReviewed: "21 May 2026",
  },

  alerts: [
    {
      status: "live",
      label: "Live",
      title: "Phase 1 in force",
      text: "Damp, mould, and all emergency hazards covered since 27 October 2025.",
      refs: [1],
    },
    {
      status: "live",
      label: "Live",
      title: "10-day clock runs from Day Zero",
      text: "Day Zero is the day you become aware. Day 1 is the next working day.",
      refs: [9],
    },
    {
      status: "coming",
      label: "Coming 2026",
      title: "Phase 2 expansion",
      text: "Excess cold, heat, fire, electrical, and structural hazards added.",
      refs: [7],
    },
  ] as AlertBanner[],

  toc: [
    { num: "A1", anchor: "obligations", title: "Your Phase 1 obligations" },
    { num: "A2", anchor: "what-phase-1-requires", title: "What Phase 1 requires" },
    { num: "A3", anchor: "upcoming-phases", title: "Upcoming phases" },
    { num: "A4", anchor: "maple-diagnostics", title: "Where Maple Diagnostics fits" },
  ],

  download: {
    title: "10-Day Investigation Checklist",
    description:
      "Day-by-day compliance actions for the full 13-working-day investigation and written-summary window.",
    cta: { label: "Download PDF", href: "#" },
  },

  sections: {
    // ============================================================
    // A1. YOUR PHASE 1 OBLIGATIONS
    // ============================================================
    obligations: {
      lead: "Three statutory deadlines now apply the moment you become aware of a damp or mould complaint.",
      duties: [
        {
          act: "10-working-day investigation — Regulation 6",
          text: "From the day after you become aware of a potential significant hazard, you have 10 working days to complete an investigation by a competent person. The investigation may be remote or in-person. If the tenant requests in-person after a remote investigation, a further 10 working days applies.",
          refs: [8, 9] as ReferenceId[],
        },
        {
          act: "3-working-day written findings — Regulation 9",
          text: "Within 3 working days of completing the investigation, you must send the tenant a written summary covering: whether a hazard was found, what action is required with a target timeframe, and contact details. A verbal update is not sufficient.",
          refs: [10, 11] as ReferenceId[],
        },
        {
          act: "24-hour emergency response",
          text: "Where a hazard is classified as an emergency — one posing an immediate risk to health or safety — you must begin making the property safe within 24 hours of becoming aware. If you discover an emergency during a standard investigation, the 24-hour clock supersedes the 10-day deadline.",
          refs: [2] as ReferenceId[],
        },
      ] as StatuteDuty[],
    },

    // ============================================================
    // A2. WHAT PHASE 1 REQUIRES IN PRACTICE
    // ============================================================
    whatPhase1Requires: {
      lead: "Phase 1 introduces three requirements that most landlords were not meeting before commencement.",
      reforms: [
        {
          status: "live",
          category: "Clock trigger",
          title: "Day Zero is the day you become aware — not the day the tenant formally complains.",
          body: "The MHCLG guidance is explicit: awareness includes prior inspections, contractor visits, or other complaints from the same property. An internal report that flagged damp two months before the tenant's formal complaint may establish an earlier Day Zero.",
          emphasis:
            "This matters for damp cases because retrospective documentation that tries to reset the clock will be examined by the Housing Ombudsman against the full property history.",
          refs: [9, 18] as ReferenceId[],
        },
        {
          status: "live",
          category: "Objective standard",
          title: "The reasonable lessor test is objective — not what your organisation subjectively concluded.",
          body: "A 'significant risk of harm' is assessed by reference to what a reasonable lessor with the relevant knowledge would do. Resident vulnerability — infants, elderly tenants, people with respiratory conditions — raises the bar. Pleading that your inspector did not think the hazard was significant is not a defence if a reasonable landlord would have concluded otherwise.",
          refs: [5, 2] as ReferenceId[],
        },
        {
          status: "live",
          category: "Lifestyle defence removed",
          title: "You cannot attribute damp or mould to tenant lifestyle without investigation.",
          body: "MHCLG guidance is unambiguous: 'It is unacceptable for social landlords to assume that the cause of a hazard is due to the tenant's lifestyle.' Everyday activities — cooking, washing, drying laundry — are unlikely to constitute a tenant breach. Where ventilation or insulation is inadequate by design, the property is structurally deficient regardless of occupant behaviour.",
          refs: [20] as ReferenceId[],
        },
      ] as ReformCard[],
    },

    // ============================================================
    // A3. UPCOMING PHASES
    // ============================================================
    upcomingPhases: {
      lead: "Two further phases will extend the Awaab's Law regime.",
      reforms: [
        {
          status: "pending",
          phase: "Phase 2",
          category: "HHSRS expansion",
          title: "Phase 2 extends the regime to additional HHSRS hazard categories.",
          body: "Phase 2, expected in 2026, will add excess cold and heat, falls, structural collapse, explosions, fire and electrical hazards, and domestic and personal hygiene and food safety. The same investigation, written-findings, and emergency-response deadlines will apply.",
          refs: [7] as ReferenceId[],
        },
        {
          status: "pending",
          phase: "Phase 3",
          category: "Full HHSRS",
          title: "Phase 3 extends to all remaining HHSRS categories except overcrowding.",
          body: "Phase 3, expected in 2027, covers all remaining hazard categories in the Housing Health and Safety Rating System. Overcrowding is the only HHSRS category excluded from the Awaab's Law framework.",
          refs: [7] as ReferenceId[],
        },
      ] as ReformCard[],
      implication:
        "The Housing Ombudsman's Spotlight report found maladministration in 56% of damp and mould cases between 2019 and 2021 — before Awaab's Law commenced. With binding statutory deadlines now in force, the compensation pattern from 2024–25 (over £5m ordered, more than 40% related to damp and mould) represents the floor, not the ceiling, of future awards. Compliance requires objective, time-stamped evidence gathered at the point of complaint — not retrospective documentation assembled after an Ombudsman referral.",
    },

    // ============================================================
    // A4. WHERE MAPLE DIAGNOSTICS FITS
    // ============================================================
    mapleDiagnostics: {
      lead: "Objective, time-stamped evidence for the 10-day investigation window.",
      paras: [
        "The MHCLG guidance explicitly endorses continuous environmental monitoring as a tool for identifying early signs of damp and mould. A 14-day sensor deployment provides continuous humidity, temperature, and surface dew-point data — the environmental record needed to support a competent-person investigation and satisfy the reasonable lessor test.",
        "The kit is dispatched same day, self-installed by the tenant or a surveyor, and returned in a prepaid envelope. The report is formatted for Ombudsman submissions: timestamped readings, an outdoor baseline comparison, and an append-only audit trail. It supports — not replaces — a competent-person inspection.",
      ],
    },
  },
} as const;
