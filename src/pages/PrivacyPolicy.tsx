import { LegalPage, LegalSection, LegalSubheading, LegalList } from "@/components/zoolio/LegalPage";

const PrivacyPolicy = () => (
  <LegalPage
    eyebrow="Privacy Policy"
    title="Your privacy, protected"
    intro="This Privacy Policy describes how Zoolio collects, uses, and protects your personal information in accordance with the Protection of Personal Information Act (POPIA) and the laws of South Africa. By using our platform, you consent to the data practices described below."
    metaTitle="Privacy Policy"
    metaDescription="How Zoolio collects, uses, and protects your personal information under POPIA and South African law."
  >
    <LegalSection title="1. Information We Collect">
      <p>To maintain a secure and functional marketplace, we collect specific information tailored to your role on the platform.</p>

      <LegalSubheading>For Service Providers</LegalSubheading>
      <LegalList>
        <li><strong>Personal information:</strong> your legal full name and surname, ID/Passport number, contact details, and physical address for service area mapping.</li>
        <li><strong>ID & Passport:</strong> mandatory collection of government-issued identification for ID verification and safety compliance.</li>
        <li><strong>Selfie photo:</strong> a biometric selfie is required to verify your identity against your uploaded ID.</li>
        <li><strong>Profile photos:</strong> images used to represent your business and services to potential clients.</li>
        <li><strong>Card information for subscriptions:</strong> payment details used to process your recurring monthly provider subscription.</li>
        <li><strong>Bank account information:</strong> required to facilitate withdrawals of your earnings from your Zoolio Wallet directly to your bank account.</li>
        <li><strong>Experience:</strong> details about your years in the industry, bio, and specialisation tags.</li>
        <li><strong>Certifications & qualifications:</strong> digital uploads of your professional credentials to establish trust and expertise.</li>
        <li><strong>Social media logins:</strong> information shared via Google, Facebook, or LinkedIn for easier registration and verification.</li>
      </LegalList>

      <LegalSubheading>For Pet Parents</LegalSubheading>
      <LegalList>
        <li><strong>Personal information:</strong> your legal full name and surname, contact details, and physical address for service area mapping.</li>
        <li><strong>Pet information:</strong> reusable pet profiles including name, type, age, and specialised care tags.</li>
        <li><strong>Pet photos:</strong> images of your pets to help providers understand their needs and behaviour.</li>
        <li><strong>Card information:</strong> optional storage of payment details for faster checkout and easier booking management.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="2. How We Use Your Information">
      <LegalList>
        <li><strong>Facilitating connections:</strong> we share relevant provider profiles and pet details between parties to enable successful bookings.</li>
        <li><strong>Secure payments:</strong> we use financial data to manage subscription billing and to hold booking funds under our Secure Safety Net until jobs are completed.</li>
        <li><strong>Communication:</strong> we send automated notifications via email and WhatsApp regarding booking status, payment confirmation, and verification alerts.</li>
        <li><strong>Safety & compliance:</strong> we use identification and biometric data to verify providers and manage internal dispute resolution.</li>
        <li><strong>Platform improvement:</strong> we analyse platform metrics, such as user growth and conversion rates, to enhance the marketplace experience.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="3. Information Sharing and Disclosure">
      <LegalList>
        <li><strong>Between users:</strong> contact details and messaging are only unlocked between a pet parent and a provider after a successful payment is made.</li>
        <li><strong>Essential partners:</strong> we share necessary data with trusted third-party services for payments, ID verification, and mapping functionality.</li>
        <li><strong>Legal requirements:</strong> we disclose information if required by South African law or to protect the safety of our community.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="4. Data Retention and Security">
      <LegalList>
        <li><strong>Security measures:</strong> we use industry-standard encryption and security protocols to protect all personal and financial data.</li>
        <li><strong>Consent:</strong> we maintain full logs of user consent regarding terms and privacy policies.</li>
        <li><strong>Account deletion:</strong> users may delete their profiles at any time, after which personal data is removed from our active systems following our retention policies.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="5. Your Rights Under POPIA">
      <p>Under South African law, you have the right to:</p>
      <LegalList>
        <li><strong>Access:</strong> request a copy of the personal information we hold about you.</li>
        <li><strong>Rectify:</strong> update or correct your information through your profile settings.</li>
        <li><strong>Object:</strong> object to data processing, although this may limit your use of the platform.</li>
        <li><strong>Delete:</strong> request the permanent deletion of your account and associated data.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="6. Updates to This Policy">
      <p>
        Zoolio reserves the right to update this Privacy Policy and the platform's Terms and Conditions from time to time
        to stay compliant with the law and improve our services. Continued use of the platform constitutes acceptance of
        the updated policy.
      </p>
    </LegalSection>
  </LegalPage>
);

export default PrivacyPolicy;