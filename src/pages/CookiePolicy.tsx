import { LegalPage, LegalSection, LegalList } from "@/components/zoolio/LegalPage";

const CookiePolicy = () => (
  <LegalPage
    eyebrow="Cookie Policy"
    title="How Zoolio uses cookies"
    intro="This Cookie Policy explains how Zoolio uses cookies and similar tracking technologies to provide, improve, and protect our marketplace platform in accordance with the Protection of Personal Information Act (POPIA) and South African law."
    metaTitle="Cookie Policy"
    metaDescription="How Zoolio uses cookies and similar technologies to power a safe, friendly pet care marketplace for South Africa."
  >
    <LegalSection title="1. What are Cookies?">
      <p>
        Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website.
        They help the platform recognise your device and remember information about your preferences or past actions
        so we can give you a smoother experience.
      </p>
    </LegalSection>

    <LegalSection title="2. How We Use Cookies">
      <p>Zoolio uses cookies for the following essential and functional purposes:</p>
      <LegalList>
        <li><strong>Authentication & Security:</strong> to verify your account and confirm when you are logged in, so only authorised users (pet parents or ID verified providers) can access private features like your wallet and internal messaging.</li>
        <li><strong>Performance & Functionality:</strong> to remember your settings, such as saved search alerts, favourite providers, and pet profiles, so you don't have to re-enter information every visit.</li>
        <li><strong>Geolocation Services:</strong> to power our mapping integration so you can find pet care providers within a specific search radius.</li>
        <li><strong>Payment Processing:</strong> to track the status of secure platform payments and ensure funds are safely held under our Secure Safety Net until a job is marked as completed.</li>
        <li><strong>AI Support:</strong> to allow our internal AI support bot to recognise logged-in users and provide personalised assistance.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="3. Types of Cookies We Use">
      <LegalList>
        <li><strong>Session Cookies:</strong> temporary cookies that expire when you close your browser. They manage your active session and booking requests.</li>
        <li><strong>Persistent Cookies:</strong> these stay on your device for a set period and remember details like your login and your "Favourites" list.</li>
        <li><strong>Third-Party Cookies:</strong> we don't sell your data, but we use trusted third-party cookies for essential integrations such as ID verification, mapping, and Secure Handling of payments.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="4. Managing Your Cookie Preferences">
      <p>Most web browsers let you control cookies through their settings. You can choose to:</p>
      <LegalList>
        <li>Block all cookies.</li>
        <li>Delete existing cookies.</li>
        <li>Receive a notification when a new cookie is placed.</li>
      </LegalList>
      <p className="pt-2">
        <strong>Please note:</strong> because many of our features — such as secure payments, provider verification, and the
        availability calendar — rely on these technologies, disabling cookies may prevent you from using large parts of Zoolio.
      </p>
    </LegalSection>

    <LegalSection title="5. Consent and Compliance">
      <p>
        By continuing to use Zoolio, you consent to our use of cookies as described in this policy. We maintain full logs
        of user consent regarding our Cookie Policy, Privacy Policy, and Terms and Conditions to remain compliant with POPIA.
      </p>
    </LegalSection>

    <LegalSection title="6. Updates to This Policy">
      <p>
        Zoolio reserves the right to update this Cookie Policy from time to time to reflect changes in our technology or
        legal requirements. Any updates will be reflected on this page.
      </p>
    </LegalSection>
  </LegalPage>
);

export default CookiePolicy;