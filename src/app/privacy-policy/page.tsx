import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-40 max-w-4xl min-h-screen">
      <h1 className="text-4xl md:text-6xl font-serif italic text-primary mb-12">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">Introduction</h2>
          <p>
            At Veda Educational Services, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, and username.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide you with information about colleges and scholarships.</li>
            <li>To contact you regarding your consultation request.</li>
            <li>To improve our website and user experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-high-contrast uppercase tracking-widest mb-4">Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
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
