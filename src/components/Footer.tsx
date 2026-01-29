import React from "react";

/**
 * Footer component displaying contact information and copyright.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent dark:bg-dark/30 backdrop-blur-sm text-dark/60 dark:text-light/60 p-4 sm:p-8 mt-8 sm:mt-12 border-t border-light/20 dark:border-steel/20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start text-xs sm:text-sm text-center md:text-left">
            <div className="mb-3">
              <h2 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-glow via-primary to-deep">
                Ratte
              </h2>
              <p className="text-xs text-dark/50 dark:text-light/50">
                @rattecs
              </p>
            </div>
            <p>
              <a
                href="#"
                className="hover:underline text-deep dark:text-glow transition-colors hover:text-primary dark:hover:text-accent-pink hover-lift inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  const email = 'biz' + '@' + 'ratte.xyz';
                  window.location.href = 'mailto:' + email;
                }}
                aria-label="Email contact"
              >
                <span className="notranslate">biz[at]ratte[dot]xyz</span>
              </a>
            </p>
          </div>
        </div>

        <div className="w-full border-t border-light/10 dark:border-light/5 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-dark/40 dark:text-light/40 text-center md:text-left">
            © {currentYear} All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#faq"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-glow transition-colors"
              aria-label="Frequently Asked Questions"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-glow transition-colors"
              aria-label="Contact for partner inquiries"
              onClick={(e) => {
                e.preventDefault();
                const email = 'biz' + '@' + 'ratte.xyz';
                window.location.href = 'mailto:' + email + '?subject=Partner%20Inquiry';
              }}
            >
              Partners
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
