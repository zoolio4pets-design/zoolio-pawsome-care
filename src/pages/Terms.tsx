import { LegalPage, LegalSection, LegalSubheading, LegalList } from "@/components/zoolio/LegalPage";

const Terms = () => (
  <LegalPage
    eyebrow="Terms & Conditions"
    title="The fine print, made friendly"
    intro="Welcome to Zoolio, a mobile-first pet care marketplace connecting pet parents with trusted local service providers across South Africa. By using our platform, you agree to comply with and be bound by the following Terms and Conditions."
    metaTitle="Terms & Conditions"
    metaDescription="Zoolio's Terms and Conditions: how our South African pet care marketplace works for pet parents and providers."
  >
    <LegalSection title="1. Platform Role and Nature of Service">
      <LegalSubheading>1.1 Independent Contractor Status</LegalSubheading>
      <LegalList>
        <li><strong>No employment relationship:</strong> pet care providers on the platform are not employees of Zoolio.</li>
        <li><strong>Operational autonomy:</strong> providers operate independently and use their own methods, tools, and schedules to complete a job.</li>
        <li><strong>Legal responsibility:</strong> Zoolio does not direct the specific "how-to" of the service, so the legal responsibility for the quality of that work rests solely with the provider.</li>
      </LegalList>

      <LegalSubheading>1.2 Specific Services Offered or Rendered</LegalSubheading>
      <LegalList>
        <li><strong>The "bridge" concept:</strong> Zoolio acts as the digital bridge connecting pet parents and providers.</li>
        <li><strong>No direct supervision:</strong> Zoolio does not physically supervise the service (for example, we aren't there to watch a dog being walked). The platform cannot be held responsible for errors, omissions, or poor service quality provided by an individual professional.</li>
        <li><strong>Service disputes:</strong> while Zoolio provides a 72-hour window to log disputes or request refunds, this is a financial mediation tool, not an admission of liability for the service itself.</li>
      </LegalList>

      <LegalSubheading>1.3 Loss or Damage to Property</LegalSubheading>
      <LegalList>
        <li><strong>Property damage:</strong> if a service provider accidentally damages a valuable item or a pet parent's home while providing a service, the pet parent must seek recourse directly from the provider, not Zoolio.</li>
        <li><strong>Theft or misuse:</strong> any loss of property during the service is the responsibility of the independent parties involved.</li>
      </LegalList>

      <LegalSubheading>1.4 Loss or Damage to Life</LegalSubheading>
      <LegalList>
        <li><strong>Pet injury or mortality:</strong> if a pet becomes ill, injured, or passes away while under a provider's care, Zoolio will not be held accountable for damages or veterinary costs.</li>
        <li><strong>Human safety:</strong> Zoolio takes no liability where a provider or pet parent might suffer physical harm during an interaction.</li>
      </LegalList>

      <LegalList>
        <li><strong>Independent contractors:</strong> Zoolio acts as a neutral marketplace designed to connect pet parents with ID verified pet care providers.</li>
        <li><strong>Liability:</strong> all service providers operate independently; Zoolio does not take liability for the specific services offered or rendered through the platform or for any loss.</li>
        <li><strong>Service scope:</strong> the platform facilitates services for various pets, including dogs, cats, fish, birds, reptiles, and other legally kept exotic pets.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="2. Account Registration and Verification">
      <LegalList>
        <li><strong>Pet parents:</strong> joining and using Zoolio is free for pet parents. Registration involves email or social media verification (Google, Facebook, or LinkedIn).</li>
        <li><strong>Providers:</strong> to offer services, providers must complete a mandatory ID verification process by uploading a valid ID/passport and a biometric selfie.</li>
        <li><strong>Verification approval:</strong> all provider activity is blocked until ID verification is approved by the platform.</li>
        <li><strong>Account deletion:</strong> pet parents and providers may delete their profiles or cancel their subscriptions at any time.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="3. Pricing and Subscriptions">
      <LegalList>
        <li><strong>Provider subscription:</strong> service providers are charged a monthly subscription fee to list and offer their services on Zoolio.</li>
        <li><strong>Auto-renewal:</strong> subscriptions auto-renew on the same date each month from sign-up.</li>
        <li><strong>Pausing:</strong> providers can pause their subscription to avoid charges during breaks; billing resumes on the normal date when the subscription is reactivated.</li>
        <li><strong>Pet parent fees:</strong> there is no cost for pet parents to browse or book services on the platform. The only costs are paid for the services they book.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="4. Booking and Payment Flow">
      <LegalList>
        <li><strong>Secure upfront payment:</strong> once a provider accepts a job, the pet parent pays the full amount through the platform.</li>
        <li><strong>Secure Safety Net:</strong> Zoolio holds these funds securely under our Secure Safety Net.</li>
        <li><strong>Fund release:</strong> money is not released to the provider until the job is completed, ensuring safety for both parties.</li>
        <li><strong>Messaging:</strong> private messaging between parties is only unlocked after a payment is successfully processed.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="5. Payouts and Platform Upkeep">
      <LegalList>
        <li><strong>Payouts:</strong> upon successful job completion, the provider receives their share of the booking fee. Zoolio retains a small portion to cover Platform Upkeep, including Secure Handling, ID verification, support, and ongoing improvements.</li>
        <li><strong>Zoolio Wallet:</strong> the provider's share takes up to 24 hours to clear into their internal Zoolio Wallet.</li>
        <li><strong>Withdrawals:</strong> once funds reflect in their wallet, providers can withdraw directly to their linked bank account.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="6. Completion and Auto-Completion Window">
      <LegalList>
        <li><strong>72-hour window:</strong> after the scheduled service ends, the pet parent has 72 hours to either click "Job Completed" or "Request a Refund".</li>
        <li><strong>Auto-completion:</strong> if no action is taken within 72 hours, the system automatically marks the job as completed and releases the funds.</li>
        <li><strong>Finality:</strong> once a pet parent clicks "Job Completed", they can no longer request a refund or log a dispute.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="7. Cancellations and Refunds">
      <LegalSubheading>Daily Bookings</LegalSubheading>
      <LegalList>
        <li>100% automatic refund when cancelled 5 or more days before the service starts.</li>
        <li>If cancelled 5 days or fewer before the start date, no refund is issued.</li>
      </LegalList>

      <LegalSubheading>Hourly Bookings</LegalSubheading>
      <LegalList>
        <li>100% automatic refund when cancelled 24 hours or more in advance.</li>
        <li>If cancelled less than 24 hours before the start time, no refund is issued.</li>
      </LegalList>

      <LegalList>
        <li><strong>Late cancellation payouts:</strong> where no refund is issued due to a late cancellation, the standard payout still applies — the provider receives their share and Zoolio retains the portion for Platform Upkeep.</li>
        <li><strong>Refund requests:</strong> refund requests must be submitted within the 72-hour post-service window with clear, detailed information regarding the issue.</li>
      </LegalList>

      <LegalSubheading>Dispute Resolution</LegalSubheading>
      <LegalList>
        <li>If a dispute is upheld by Zoolio: the pet parent receives a 100% refund.</li>
        <li>If a dispute is rejected: the standard payout is sent to the provider's wallet within 72 hours.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="8. Reviews and Ratings">
      <LegalList>
        <li><strong>Eligibility:</strong> pet parents can leave star ratings and written reviews only after the 72-hour completion window has passed.</li>
        <li><strong>Transparency:</strong> providers can view and react to reviews displayed on their profiles.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="9. Legal Compliance (POPIA)">
      <LegalList>
        <li><strong>Data protection:</strong> Zoolio operates in accordance with the Protection of Personal Information Act (POPIA) and the laws of South Africa.</li>
        <li><strong>Consent:</strong> the platform maintains full consent logs regarding terms, privacy policies, and POPIA requirements.</li>
        <li><strong>Communication:</strong> by using the platform, users consent to receiving transactional notifications via email and WhatsApp regarding bookings, payments, and account status.</li>
      </LegalList>
    </LegalSection>

    <LegalSection title="10. Platform Updates and Rights of Amendment">
      <LegalList>
        <li><strong>Platform modifications:</strong> Zoolio reserves the right to update, modify, or enhance the platform's features, functionalities, and user interface from time to time to improve service delivery.</li>
        <li><strong>Terms updates:</strong> Zoolio reserves the right to amend these Terms and Conditions at any time. Continued use of the platform after such updates constitutes acceptance of the new terms.</li>
        <li><strong>Rate adjustments:</strong> Zoolio reserves the right to adjust the monthly subscription fee for providers, as well as Platform Upkeep rates, at its sole discretion.</li>
      </LegalList>
    </LegalSection>
  </LegalPage>
);

export default Terms;