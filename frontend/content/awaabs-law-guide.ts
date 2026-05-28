//
// content/awaabs-law-guide.ts
//
// The 8-section guide on Awaab's Law, for the social housing page.
// Every claim is footnoted with a reference number from ./references.ts
//
// Quotation rule: anything in <quote> tags is verbatim from the cited source.
// Anything else is summarised in our own words.
// NEVER paraphrase something and put it in quote marks.

import type { ReferenceId } from "./references";

export type GuideSection = {
  num: string;
  anchor: string;
  title: string;
  // Each body element is either a paragraph, a quote, or a bullet list.
  body: GuideBlock[];
};

export type GuideBlock =
  | { type: "para"; text: string; refs?: ReferenceId[] }
  | {
      type: "quote";
      text: string;
      source: string;
      sourceRef: ReferenceId;
    }
  | { type: "list"; items: GuideListItem[] }
  | { type: "definition"; label: string; body: string; refs?: ReferenceId[] };

export type GuideListItem = { text: string; refs?: ReferenceId[] };

export const awaabsLawGuide = {
  meta: {
    eyebrow: "A guide for compliance officers & housing managers",
    heading: "Awaab's Law Phase 1: what social landlords must actually do.",
    intro:
      "Awaab's Law came into force on 27 October 2025 under the Hazards in Social Housing (Prescribed Requirements) (England) Regulations 2025. This page sets out the statutory timeframes, what counts as a 'significant' or 'emergency' hazard, the evidence the Housing Ombudsman expects, and the compensation patterns from the year before commencement.",
    introRefs: [1, 2] as ReferenceId[],
    lastReviewed: "21 May 2026",
  },

  toc: [
    { num: "01", title: "What is Awaab's Law?", anchor: "what-is" },
    { num: "02", title: "The 10-day investigation deadline", anchor: "investigation" },
    { num: "03", title: "Written findings: format & deadline", anchor: "findings" },
    { num: "04", title: "The reasonable lessor test", anchor: "reasonable-lessor" },
    { num: "05", title: "What counts as objective evidence", anchor: "evidence" },
    { num: "06", title: "Structural vs condensation: legal test", anchor: "structural" },
    { num: "07", title: "Housing Ombudsman case patterns", anchor: "ombudsman" },
    { num: "08", title: "Compliance checklist (PDF)", anchor: "checklist" },
  ],

  sections: [
    // ========================================================
    // 01. WHAT IS AWAAB'S LAW?
    // ========================================================
    {
      num: "01",
      anchor: "what-is",
      title: "What is Awaab's Law?",
      body: [
        {
          type: "para",
          text: "Awaab's Law is the colloquial name for the Hazards in Social Housing (Prescribed Requirements) (England) Regulations 2025. It came into force on 27 October 2025, introduced by Section 42 of the Social Housing (Regulation) Act 2023, which amended the Landlord and Tenant Act 1985 by inserting new sections 10A and 10B.",
          refs: [1, 3],
        },
        {
          type: "para",
          text: "It is named in memory of two-year-old Awaab Ishak, who died in December 2020 from prolonged exposure to mould in a social housing flat in Rochdale. The coroner ruled that Awaab's death was a direct consequence of his landlord's failure to act on repeated reports of damp and mould.",
          refs: [4],
        },
        {
          type: "para",
          text: "The law applies to social homes as defined in Regulation 2 of the 2025 Regulations — leases let by registered providers of social housing. It does not yet apply to the private rented sector; that extension is provided for by Section 60 of the Renters' Rights Act 2025 but awaits separate commencement regulations.",
          refs: [1, 6],
        },
        {
          type: "para",
          text: "Phase 1 (in force since 27 October 2025) covers damp and mould hazards and all emergency hazards. Phase 2 (during 2026) will extend the regime to additional HHSRS hazards including excess cold and heat, falls, structural collapse, explosions, fire and electrical hazards, and domestic and personal hygiene and food safety. Phase 3 (during 2027) will extend it to all remaining HHSRS categories except overcrowding.",
          refs: [7],
        },
      ],
    },

    // ========================================================
    // 02. THE 10-DAY INVESTIGATION DEADLINE
    // ========================================================
    {
      num: "02",
      anchor: "investigation",
      title: "The 10-day investigation deadline",
      body: [
        {
          type: "para",
          text: "Under Regulation 6 of the 2025 Regulations, where a social landlord becomes aware of a potential significant hazard, the landlord must complete an investigation within 10 working days.",
          refs: [8],
        },
        {
          type: "definition",
          label: "Day Zero — when the clock starts",
          body: "The MHCLG guidance is explicit: 'The day the landlord becomes aware of a potential hazard is counted as day zero, with day one of timeframes commencing the following working day.' The clock starts the moment the landlord becomes aware — typically when the tenant first reports the issue, but earlier if the landlord could reasonably have known through inspections, prior complaints, or contractor visits.",
          refs: [9, 18],
        },
        {
          type: "para",
          text: "The investigation must be carried out by a competent person — defined as someone who, in the reasonable opinion of the landlord, has the skills, qualifications and experience necessary to determine whether a hazard exists.",
          refs: [2],
        },
        {
          type: "para",
          text: "Investigations may be conducted remotely or in person. The guidance states landlords 'should make an informed decision on the most appropriate method based on the specific circumstances.' If the tenant explicitly requests an in-person investigation after a remote one, a 'renewed' in-person investigation must be carried out within a further 10 working days — effectively resetting the clock.",
          refs: [9],
        },
        {
          type: "para",
          text: "If, during a standard investigation, the landlord comes to believe the hazard is in fact an emergency, the 24-hour emergency clock applies and supersedes the 10-day deadline.",
          refs: [2],
        },
      ],
    },

    // ========================================================
    // 03. WRITTEN FINDINGS — FORMAT & DEADLINE
    // ========================================================
    {
      num: "03",
      anchor: "findings",
      title: "Written findings: format & deadline",
      body: [
        {
          type: "para",
          text: "Within 3 working days of completing the investigation, the landlord must provide a written summary of findings to the tenant. This requirement is set out in Regulation 9 of the 2025 Regulations and elaborated in Section 6 of the MHCLG guidance.",
          refs: [10, 11],
        },
        {
          type: "para",
          text: "The Regulations specify that the written summary must include:",
        },
        {
          type: "list",
          items: [
            {
              text: "Whether the investigation identified a significant or emergency hazard, and what the hazard is",
              refs: [11],
            },
            {
              text: "If action is required, what that action is, with a target timeframe for beginning and completing it",
              refs: [11],
            },
            {
              text: "If no action is required, that fact and the reasons why",
              refs: [11],
            },
            {
              text: "Information on how to contact the landlord",
              refs: [11],
            },
          ],
        },
        {
          type: "para",
          text: "The MHCLG guidance is clear that written summaries 'are intended to support respectful and empathetic communication with tenants.' Target timeframes set in the summary are not themselves legally binding, but landlords must take reasonable steps to keep tenants informed about the timing and progress of works.",
          refs: [11],
        },
        {
          type: "para",
          text: "Summaries can be delivered electronically, in person, by leaving at the home, or by first-class post. The 3-working-day deadline refers to the date sent — not the date received. Landlords are encouraged to keep delivery records.",
          refs: [11],
        },
        {
          type: "para",
          text: "The Housing Ombudsman's Spotlight on damp and mould report identified the quality of written communication to residents as systemic — call-for-evidence responses showed 'an immense frustration and sense of unfairness' at the information landlords provide about condensation and mould.",
          refs: [12],
        },
      ],
    },

    // ========================================================
    // 04. THE REASONABLE LESSOR TEST
    // ========================================================
    {
      num: "04",
      anchor: "reasonable-lessor",
      title: "The reasonable lessor test",
      body: [
        {
          type: "para",
          text: "Regulation 3 of the 2025 Regulations defines 'significant risk of harm' through an objective test — not the landlord's subjective view:",
          refs: [5],
        },
        {
          type: "quote",
          text: "A 'significant risk of harm' is defined in the regulations as 'a risk of harm to the occupier's health or safety that a reasonable lessor with the relevant knowledge would take steps to make safe as a matter of urgency.'",
          source: "MHCLG guidance, Section 3.2",
          sourceRef: 2,
        },
        {
          type: "para",
          text: "Three elements matter:",
        },
        {
          type: "list",
          items: [
            {
              text: "'Reasonable lessor' — the standard is what a reasonable social landlord would conclude, not what your individual organisation actually concluded. Pleading 'we didn't think it was that bad' is not a defence.",
              refs: [5],
            },
            {
              text: "'Relevant knowledge' — the MHCLG guidance defines this as 'the knowledge that the social landlord has, or reasonably ought to have, about the health and circumstances of the occupier.' Pleading ignorance does not lower the bar.",
              refs: [19],
            },
            {
              text: "The test is forward-looking — the assessment is what a reasonable landlord should have concluded on the available evidence, not whether harm actually occurred.",
              refs: [5],
            },
          ],
        },
        {
          type: "para",
          text: "Government guidance emphasises that resident vulnerability is part of the test. A hazard that might not be 'significant' for a healthy adult may well be for an infant, an elderly resident, or someone with respiratory conditions. The guidance is explicit that 'a tenant does not necessarily have to have a specific vulnerability for a hazard to be deemed a significant hazard: some hazards can pose a danger to anyone.'",
          refs: [2, 19],
        },
        {
          type: "para",
          text: "The MHCLG guidance also sets out a reasonable endeavours defence under Section 10A(5) of the Landlord and Tenant Act 1985: a landlord has a defence to non-compliance if they prove they took all reasonable steps to comply but were unable to for reasons genuinely beyond their control. The four worked examples given are: awaiting Building Safety Regulator approval, denied tenant access, unavailable specialist contractors, or unavailable alternative accommodation.",
          refs: [16],
        },
      ],
    },

    // ========================================================
    // 05. WHAT COUNTS AS OBJECTIVE EVIDENCE
    // ========================================================
    {
      num: "05",
      anchor: "evidence",
      title: "What counts as objective evidence",
      body: [
        {
          type: "para",
          text: "The 2025 Regulations don't prescribe a single investigation methodology. The MHCLG guidance states that landlords 'should use properly qualified specialists to investigate where relevant,' and that environmental monitoring systems 'help identify early signs of damp and mould.'",
          refs: [2],
        },
        {
          type: "quote",
          text: "Environmental monitoring systems empower social landlords to take proactive responsibility for the health of their properties and tenants. By continuously tracking environmental conditions, these systems help identify early signs of damp and mould.",
          source: "MHCLG guidance, Section 3",
          sourceRef: 18,
        },
        {
          type: "para",
          text: "The Housing Ombudsman's published case patterns make clear that the evidential bar in contested cases is high. The Spotlight on damp and mould report concluded:",
          refs: [12],
        },
        {
          type: "quote",
          text: "When there is a problem, effective diagnosis is critical.",
          source: "Richard Blakeway, Housing Ombudsman — Spotlight on damp and mould, Foreword",
          sourceRef: 12,
        },
        {
          type: "para",
          text: "The report's 142-landlord investigation found maladministration against 92 of them — nearly two-thirds. The 56% maladministration rate across 410 cases between 2019 and 2021 indicates that retrospective documentation, visual-inspection-only investigations, and diagnoses unsupported by environmental measurement are routinely upheld as failures.",
          refs: [12],
        },
        {
          type: "para",
          text: "An investigation that has consistently held up to Ombudsman scrutiny tends to include: continuous environmental measurement (humidity, air and surface temperature) over a meaningful period, an outdoor baseline comparison, photographic evidence paired with readings, documented consideration of resident vulnerability, and an append-only audit trail timestamped at each step.",
          refs: [12],
        },
      ],
    },

    // ========================================================
    // 06. STRUCTURAL VS CONDENSATION — LEGAL TEST
    // ========================================================
    {
      num: "06",
      anchor: "structural",
      title: "Structural vs condensation: legal test",
      body: [
        {
          type: "para",
          text: "Most damp and mould disputes turn on a single question: is the cause structural failure, or is it condensation arising from how the tenant uses the property? The MHCLG guidance is unambiguous on this point.",
        },
        {
          type: "quote",
          text: "It is unacceptable for social landlords to assume that the cause of a hazard, such as damp and mould, is due to the tenant's 'lifestyle'. Social landlords should not make assumptions and fail to take action or to investigate a damp and mould hazard on the basis of, for example, condensation they attribute to the tenant's 'lifestyle'. It is unavoidable that everyday tasks, such as cooking, bathing, washing and drying laundry will contribute to the production of indoor moisture. These activities are unlikely to constitute a breach of contract on the part of the tenant and, therefore, should not be a reason not to take action through Awaab's Law.",
          source: "MHCLG guidance, Section 2.4",
          sourceRef: 20,
        },
        {
          type: "definition",
          label: "Structural / penetrating / rising damp",
          body: "A defect in the building envelope: failed damp-proof course, defective render, missing or inadequate insulation, blocked weepholes, roof leaks, defective window seals. The MHCLG guidance specifically identifies these as in scope: 'Where a hazard is caused by a structural defect or deficiency, such as poor design or missing components, the landlord is responsible for addressing the root cause under Awaab's Law. For example, if a damp and mould hazard is found to result from the absence of ventilation or poor insulation, the landlord must take appropriate remedial action.'",
          refs: [2, 13],
        },
        {
          type: "definition",
          label: "Condensation damp",
          body: "Moisture generated indoors (cooking, washing, drying clothes, showering) condensing on cold surfaces. The guidance is explicit that this is unlikely to constitute a tenant breach. A property whose ventilation or insulation is inadequate by design IS structurally inadequate, even if the immediate moisture source is the tenant.",
          refs: [20],
        },
        {
          type: "para",
          text: "The Housing Ombudsman's Spotlight report described the systemic blaming of tenants for condensation as 'an immense frustration and sense of unfairness.' The report's recommendation, reinforced by the 2025 Regulations, is for landlords to 'adopt a zero-tolerance approach to damp and mould' — investigating each case on the evidence rather than starting from a presumption of tenant fault.",
          refs: [12],
        },
      ],
    },

    // ========================================================
    // 07. HOUSING OMBUDSMAN CASE PATTERNS
    // ========================================================
    {
      num: "07",
      anchor: "ombudsman",
      title: "Housing Ombudsman case patterns",
      body: [
        {
          type: "para",
          text: "The Housing Ombudsman publishes annual data on the determinations it makes. The most recent figures, from the Annual Complaints Review 2024–25, provide a baseline for what enforcement looks like in the year immediately before Awaab's Law commenced.",
          refs: [14],
        },
        {
          type: "list",
          items: [
            {
              text: "Total compensation ordered or recommended: over £5 million across all complaint categories",
              refs: [14],
            },
            {
              text: "More than 40% of that compensation related to handling of leaks, damp and mould",
              refs: [14],
            },
            {
              text: "Largest single order: almost £32,000 in one case in 2024–25",
              refs: [14],
            },
            {
              text: "In 578 cases, compensation orders exceeded £2,000 — 'more than double the average amount' per case",
              refs: [14],
            },
            {
              text: "71% uphold rate across all determinations",
              refs: [14],
            },
          ],
        },
        {
          type: "para",
          text: "The Ombudsman's 2021 Spotlight report had already reviewed 410 damp and mould cases between April 2019 and March 2021 and found 56% resulted in maladministration. Across the 142 landlords investigated in that report, maladministration was found against 92 — nearly two-thirds.",
          refs: [12],
        },
        {
          type: "para",
          text: "These figures pre-date the statutory regime that began on 27 October 2025. With binding statutory deadlines now in force, the compensation pattern from 2024–25 represents the floor, not the ceiling, of likely future awards.",
          refs: [16],
        },
      ],
    },

    // ========================================================
    // 08. COMPLIANCE CHECKLIST (PDF)
    // ========================================================
    {
      num: "08",
      anchor: "checklist",
      title: "Compliance checklist (PDF)",
      body: [
        {
          type: "para",
          text: "A printable checklist for compliance officers — drawn directly from the statutory guidance and the 2025 Regulations. Day-by-day actions for the full 13-working-day investigation and written-summary window, plus the 5-working-day safety works and 12-week supplementary preventative works backstops.",
          refs: [1, 2, 15],
        },
      ],
    },
  ] as GuideSection[],
} as const;
