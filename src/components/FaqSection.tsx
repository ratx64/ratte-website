import React from "react";
import { VISIBLE_FAQS } from "../seo/faqs";
import FaqAnswer from "./FaqAnswer";

function FaqChevron() {
  return (
    <svg className="simplink-faq-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M7.3 4.7 12.6 10l-5.3 5.3-1.4-1.4 3.9-3.9-3.9-3.9 1.4-1.4z" />
    </svg>
  );
}

const FaqSection: React.FC = () => {
  return (
    <section id="faq" aria-labelledby="faq-label" className="simplink-section">
      <h2 id="faq-label" className="simplink-section-label">
        faq
      </h2>
      <div className="simplink-faq">
        {VISIBLE_FAQS.map((faq) => (
          <details key={faq.question} className="simplink-faq-item">
            <summary className="simplink-faq-summary">
              <span className="simplink-faq-q">{faq.question}</span>
              <FaqChevron />
            </summary>
            <p className="simplink-faq-a">
              <FaqAnswer text={faq.answer} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;