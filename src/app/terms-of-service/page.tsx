import React from "react";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 py-40 max-w-4xl min-h-screen">
      <h1 className="text-4xl md:text-6xl font-serif italic text-primary mb-12">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using vedaedu.com, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">2. Description of Service</h2>
          <p>
            Veda Educational Services provides users with information regarding educational institutions, scholarships, and admission consultancy. Most information is for guidance purposes and should be verified with official sources.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">3. User Conduct</h2>
          <p>
            You agree to use the website only for lawful purposes. You are prohibited from posting or transmitting through the website any material which violates or infringes the rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">4. Limitation of Liability</h2>
          <p>
            Veda Educational Services shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">5. Modifications</h2>
          <p>
            We reserve the right to change these terms from time to time as we see fit and your continued use of the site will signify your acceptance of any adjustment to these terms.
          </p>
        </section>

        <section className="pt-10 border-t border-border">
          <p className="text-sm italic">
            Last Updated: March 2026
          </p>
        </section>
      </div>
    </div>
  );
}
