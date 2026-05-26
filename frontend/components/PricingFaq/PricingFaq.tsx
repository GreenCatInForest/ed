"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const FAQS = [
  {
    q: "What's included in the equipment rental?",
    a: "Every kit includes calibrated humidity, temperature, and surface-temperature sensors, a data logger, full setup instructions, and a prepaid return label. No installation is required — plug in and place.",
  },
  {
    q: "How quickly will I receive the kit?",
    a: "Kits are dispatched same day for orders placed before 2 pm (Monday–Friday). Standard delivery is next working day.",
  },
  {
    q: "Can I extend my 14-day rental?",
    a: "Yes. Contact us before your rental period ends and we will extend it at £19 per additional week. Extensions do not affect your final report.",
  },
  {
    q: "What's the difference between the Starter and Professional report?",
    a: "The Starter report covers one room and produces a single-room diagnostic PDF. The Professional report covers up to three rooms, adds a written findings summary formatted to the Housing Ombudsman standard, and includes a pre-drafted Ombudsman response template.",
  },
  {
    q: "Is Portfolio Monitoring a minimum-term contract?",
    a: "No. Portfolio Monitoring is billed monthly and can be cancelled any time with no notice period. Sensors must be returned upon cancellation; we send a prepaid label.",
  },
  {
    q: "Does the Starter kit satisfy Awaab's Law requirements?",
    a: "The Starter kit provides objective sensor evidence but does not include the written findings summary required under Awaab's Law. Social landlords and housing associations should use the Professional report, which includes the formatted written findings and Ombudsman template.",
  },
  {
    q: "Is the report admissible in court or with the Housing Ombudsman?",
    a: "Yes. Reports are timestamped, produced from calibrated sensors, and formatted to meet court evidence standards. They have been used successfully in Ombudsman proceedings and Pre-Action Protocol exchanges.",
  },
  {
    q: "Do you offer volume or enterprise pricing?",
    a: "Yes. For 10+ annual kits or 50+ properties on monitoring we offer negotiated rates, a dedicated account manager, and API access for property management systems. Use the contact form or email us to discuss.",
  },
];

export default function PricingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-(--color-border)">
      {FAQS.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left flex items-center justify-between gap-4 py-5"
          >
            <span className="text-sm font-medium text-fg">{faq.q}</span>
            <IconChevronDown
              size={16}
              stroke={1.5}
              className={`shrink-0 text-fg-subtle transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="text-sm text-fg-muted pb-5 max-w-2xl">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
