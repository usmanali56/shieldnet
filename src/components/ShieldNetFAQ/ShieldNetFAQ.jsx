import { useState } from "react";

const faqs = [
  {
    question: "How quickly can ShieldNet be deployed?",
    answer:
      "ShieldNet can be deployed across your entire organization in as little as 24 hours. Our lightweight agent installs silently with no reboots required, and our cloud security integrations connect via API in minutes. Most enterprise customers are fully operational within one week.",
  },
  {
    question: "Does ShieldNet replace our existing SIEM?",
    answer:
      "ShieldNet complements your SIEM rather than replacing it. Our platform integrates seamlessly with Splunk, Elastic, Microsoft Sentinel, and other major SIEMs via pre-built connectors. We enrich your SIEM data with our threat intelligence and detection context.",
  },
  {
    question: "What is your false positive rate?",
    answer:
      "Our AI-powered detection engine maintains an industry-leading 0.001% false positive rate. This is achieved through multi-layered behavioral analysis, contextual enrichment, and continuous model training on real-world attack data from 10M+ endpoints.",
  },
  {
    question: "Do you offer 24/7 managed detection and response?",
    answer:
      "Yes. Our Security Operations Center operates 24/7/365 with experienced threat analysts who monitor, triage, and respond to alerts on your behalf. Our Advanced and Enterprise plans include full MDR coverage with guaranteed response SLAs.",
  },
  {
    question: "How does ShieldNet protect against zero-day attacks?",
    answer:
      "Unlike signature-based solutions, ShieldNet uses behavioral AI models that detect anomalous activity patterns regardless of whether a threat signature exists. Our engine analyzes process behavior, memory operations, and network activity to identify and block zero-day exploits in real time.",
  },

];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="7" y1="1" x2="7" y2="13" />
      <line x1="1" y1="7" x2="13" y2="7" />
    </svg>
  );
}

function CrossIcon() {
  return <span className="text-base font-light leading-none">×</span>;
}

function FAQItem({ question, answer, isOpen, onClick, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="border-b border-gray-200 dark:border-gray-700"
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 py-6 text-left bg-transparent border-none cursor-pointer "
      >
        <span className="text-lg font-medium leading-snug tracking-wide text-gray-900 dark:text-white">
          {question}
        </span>

        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200
            ${isOpen
              ? "bg-gray-100 border border-gray-100  text-gray-500 h-5 w-5"
              : "bg-gray-100 border border-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
            }`}
        >
          {isOpen ? <CrossIcon /> : <PlusIcon />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base font-normal leading-7 pb-6 pr-12 text-gray-600 dark:text-gray-400">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function ShieldNetFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-[#ffe4e6] px-3 py-1 text-sm font-medium text-[#be123c] dark:bg-[#881337] dark:text-[#fda4af]">
            FAQ
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Common questions about our cybersecurity platform and security services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-3xl border-t border-gray-100 dark:border-gray-700">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              delay={index * 100}
            />
          ))}
        </div>

      </div>
    </div>
  );
}