import React from 'react'
import { ServiceHero } from '../Components/Services_Comp/ServiceHero'
import { NavbarDemo } from '../Components/Universal/Navbar'

const Policy = () => {
  return (
    <>
    <NavbarDemo/>
    <ServiceHero Service_Heading="Privacy Policy"  Description="Ready to bring your vision to life? Whether you have a question, a
          project in mind, or just want to explore how we can collaborate, we're
          here to help. Let's connect and create something extraordinary
          together. "/>

<div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-sm neutral-100 text-center mb-12">Effective Date: 15th August 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="neutral-100">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside ml-6 mt-4 neutral-100">
            <li>Visit our website</li>
            <li>Engage with us for our services</li>
            <li>Sign up for newsletters or other communications</li>
            <li>Contact us for support or inquiries</li>
          </ul>
                  </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="neutral-100">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside ml-6 mt-4 neutral-100">
            <li><strong>Service Delivery:</strong> To provide and maintain our services, including product design, UI/UX, mobile app development, cloud services, data science, blockchain, IT consulting, DevOps, and AI solutions.</li>
            <li><strong>Communication:</strong> To send you updates, newsletters, marketing materials, and other information related to our services.</li>
            <li><strong>Support:</strong> To respond to your inquiries, resolve issues, and provide customer support.</li>
            <li><strong>Improvement:</strong> To analyze usage trends and enhance our website, services, and user experience.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
          <p className="neutral-100">
            We may share your personal information with third parties in the following circumstances:
          </p>
          <ul className="list-disc list-inside ml-6 mt-4 neutral-100">
            <li><strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our business, your information may be transferred as part of that transaction.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, property, or safety.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="neutral-100">
            We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
          <p className="neutral-100">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside ml-6 mt-4 neutral-100">
            <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can request that we correct any inaccuracies in your personal information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal obligations.</li>
            <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us by following the unsubscribe link in our emails or contacting us directly.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
          <p className="neutral-100">
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p className="neutral-100">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p className="neutral-100">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the "Effective Date" at the top of this page. Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="neutral-100">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-4 neutral-100">
            <strong>Precision Web AI</strong><br />
            [Your Contact Information]<br />
            [Your Email Address]<br />
            [Your Phone Number]
          </p>
        </section>
      </div>
    
    </>
  )
}

export default Policy