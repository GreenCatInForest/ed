"use client";

import { useState } from "react";
import Pill from "@/components/Pill/Pill";
import SituationCards, { ScenarioCard } from "@/components/SituationCards/SituationCards";

type Tab = "private" | "social";

const privateScenarios: ScenarioCard[] = [
  {
    variant: "danger",
    badge: "Active Hazard",
    subtitle: "Visible mould, sustained damp, or a clear defect?",
    heading: "There's a problem and you need evidence now.",
    body: (
      <>
        Visible mould, persistent condensation, water staining. Your{" "}
        <strong>Section 11 LTA 1985</strong> repairing duty is engaged.
      </>
    ),
    stats: [
      { label: "Clock", value: "Running",           highlight: true },
      { label: "Risk",  value: "Claim · £30k fine", highlight: true },
      { label: "Need",  value: "Diagnose: structural vs lifestyle" },
    ],
    recommendation: {
      title: "Maple kit — 14-day diagnostic",
      price: "£149.",
      description: "Court-ready PDF before the solicitor’s letter arrives.",
    },
  },
  {
    variant: "warning",
    badge: "Reported Concern",
    subtitle: "Tenant complained but you’re not sure what’s really going on?",
    heading: "A complaint exists — you must investigate.",
    body: (
      <>
        <strong>Failing to investigate</strong> — even if you believe there’s
        nothing wrong — is where most maladministration findings arise.
      </>
    ),
    stats: [
      { label: "Clock", value: "Engaged",                 highlight: true },
      { label: "Risk",  value: "Escalation · PAP letter", highlight: true },
      { label: "Need",  value: "Defensible investigation record" },
    ],
    recommendation: {
      title: "Maple kit — 14-day diagnostic",
      price: "£149.",
      description: "Even a “no hazard found” report is defensive evidence.",
    },
  },
  {
    variant: "success",
    badge: "Proactive Monitoring",
    subtitle: "No complaint yet — but you want ongoing visibility?",
    heading: "Catch problems before they become claims.",
    body: (
      <>
        Continuous monitoring establishes baseline and supports the{" "}
        <strong>reasonable endeavours defence</strong> (LTA 1985 s.10A(5)).
      </>
    ),
    stats: [
      { label: "Clock", value: "Not running",             highlight: true },
      { label: "Risk",  value: "Undetected slow defects" },
      { label: "Need",  value: "Baseline · early-warning alerts" },
    ],
    recommendation: {
      title: "Maple monitoring — £49/mo",
      price: "Per property.",
      description: "Always-on sensors. Monthly reports + alerts.",
    },
  },
];

const socialScenarios: ScenarioCard[] = [
  {
    variant: "danger",
    badge: "Complaint Received",
    subtitle: "A tenant has reported damp or mould?",
    heading: "The 10-day investigation clock is running.",
    body: (
      <>
        Awaab’s Law requires a formal investigation to begin within{" "}
        <strong>10 working days</strong>. The precautionary principle applies
        — assume structural cause until sensor data proves otherwise.
      </>
    ),
    stats: [
      { label: "Clock",    value: "Running",          highlight: true },
      { label: "Deadline", value: "10 working days",  highlight: true },
      { label: "Risk",     value: "Maladministration finding" },
    ],
    recommendation: {
      title: "Maple kit — 14-day diagnostic",
      price: "£149.",
      description: "Objective cause determination for your written findings.",
    },
  },
  {
    variant: "warning",
    badge: "Investigation Underway",
    subtitle: "Investigation started — written findings not yet issued?",
    heading: "Written findings must be issued within 3 days.",
    body: (
      <>
        You must issue <strong>written findings</strong> within 3 working days
        of completing the investigation — cause identified, proposed action, and
        a completion timescale. A verbal update is not compliant.
      </>
    ),
    stats: [
      { label: "Clock",    value: "Engaged",                    highlight: true },
      { label: "Deadline", value: "3 days post-investigation",  highlight: true },
      { label: "Risk",     value: "Non-compliance finding" },
    ],
    recommendation: {
      title: "Maple kit — 14-day diagnostic",
      price: "£149.",
      description: "Timestamped report ready to attach to your written findings.",
    },
  },
  {
    variant: "success",
    badge: "Proactive Compliance",
    subtitle: "No active complaint — but you want to stay ahead?",
    heading: "Continuous monitoring prevents Awaab’s Law triggers.",
    body: (
      <>
        Ongoing sensor data establishes a <strong>compliance baseline</strong>.
        Early warnings let you remediate before complaints arise — and demonstrate
        proactive duty of care to the Housing Ombudsman.
      </>
    ),
    stats: [
      { label: "Clock", value: "Not running",     highlight: true },
      { label: "Risk",  value: "Undetected defects" },
      { label: "Need",  value: "Ongoing evidence trail" },
    ],
    recommendation: {
      title: "Maple monitoring — £49/mo",
      price: "Per property.",
      description: "Always-on sensors. Monthly reports. Ombudsman-ready.",
    },
  },
];

const situationConfig = {
  private: {
    heading: "Which situation are you actually in?",
    body: "Your damp and mould obligations vary depending on where you stand in the legal timeline. Three scenarios — three different right approaches:",
    scenarios: privateScenarios,
  },
  social: {
    heading: "Which stage of Awaab’s Law are you at?",
    body: "Your obligations under Awaab’s Law depend on where you are in the compliance process. Three scenarios — three different right approaches:",
    scenarios: socialScenarios,
  },
};

export default function LandlordsHero() {
  const [tab, setTab] = useState<Tab>("private");
  const config = situationConfig[tab];

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-3xl">
          <Pill
            text={tab === "private" ? "For private landlords" : "For social landlords"}
            type="info"
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            One tenant complaint.{" "}
            <span className="text-accent">One court-ready report.</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            {tab === "private"
              ? "Awaab's Law doesn't yet apply to private rentals,[7] but three other duties already do: Section 11 LTA 1985 (repair),[6] the Homes Fitness for Habitation Act 2018,[8] and council enforcement under the HHSRS (up to £30,000 civil penalty)[9]. Where you sit on the spectrum below changes what evidence you should be gathering — and how strong your defence is if a dispute reaches the Pre-Action Protocol.[11]"
              : "Awaab’s Law created mandatory investigation deadlines for social landlords. Miss the 10-day window and you’re in maladministration territory — regardless of whether a repair was eventually completed. Maple Diagnostics gives you the evidence to meet your compliance obligations."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setTab("private")}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                tab === "private"
                  ? "bg-accent hover:bg-accent-hover text-white"
                  : "border border-(--color-border) text-fg hover:border-fg-muted"
              }`}
            >
              Private Landlord
            </button>
            <button
              onClick={() => setTab("social")}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                tab === "social"
                  ? "bg-accent hover:bg-accent-hover text-white"
                  : "border border-(--color-border) text-fg hover:border-fg-muted"
              }`}
            >
              Social Landlord
            </button>
          </div>
        </div>
      </section>

      <SituationCards
        eyebrow="Before you decide"
        heading={config.heading}
        body={config.body}
        scenarios={config.scenarios}
      />
    </>
  );
}
