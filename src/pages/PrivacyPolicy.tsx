import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Introduction</h2>
            <p className="text-secondary-700 mb-4">
              At Aoggle Homes, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our 
              application and services.
            </p>
            <p className="text-secondary-700">
              We comply with applicable data protection laws and strive for transparency in our data practices.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">What Data We Collect</h2>
            <p className="text-secondary-700 mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2"><strong>User Profile Information:</strong> When you create an account, we collect your email address, username, and password. Optionally, you may provide a profile picture and bio.</li>
              <li className="mb-2"><strong>Content Data:</strong> Videos you upload, comments, likes, and other interactions with content on the platform.</li>
              <li className="mb-2"><strong>Usage Data:</strong> Information about how you use our app, including viewing history, search queries, and feature usage patterns.</li>
              <li className="mb-2"><strong>Device Information:</strong> Device type, operating system, unique device identifiers, IP address, mobile network information, and browser type.</li>
              <li><strong>Location Data:</strong> With your consent, we may collect approximate location data based on your IP address or precise location if you grant permission.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">How We Use Your Data</h2>
            <p className="text-secondary-700 mb-4">We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2"><strong>To Provide Our Services:</strong> Operating and maintaining the app, allowing you to create and share content, and interact with other users.</li>
              <li className="mb-2"><strong>Content Moderation:</strong> Reviewing content to ensure compliance with our community guidelines and applicable laws.</li>
              <li className="mb-2"><strong>App Improvement:</strong> Analyzing usage patterns to improve features, fix bugs, and enhance user experience.</li>
              <li className="mb-2"><strong>Personalization:</strong> Customizing content recommendations based on your interests and interactions.</li>
              <li><strong>Legal Compliance:</strong> Meeting legal obligations and responding to lawful requests from authorities.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Data Retention</h2>
            <p className="text-secondary-700 mb-4">
              We retain your personal data for as long as your account is active or as needed to provide you with our services.
            </p>
            <p className="text-secondary-700 mb-4">
              When you delete your account, we will delete or anonymize your personal data within 30 days, except for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2">Information necessary for legal compliance or legitimate business purposes</li>
              <li className="mb-2">Data that has been anonymized and no longer identifies you</li>
              <li>Backup data that will be deleted according to our backup rotation schedule</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Sharing of Data</h2>
            <p className="text-secondary-700 mb-4">
              We do not sell your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2"><strong>Service Providers:</strong> Companies that help us deliver our services (hosting, analytics, customer support).</li>
              <li className="mb-2"><strong>Legal Authorities:</strong> When required by law or to protect our rights or the safety of users.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate safeguards for your data.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Your Rights</h2>
            <p className="text-secondary-700 mb-4">
              Depending on your location, you may have rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2"><strong>Access:</strong> Request copies of your personal data.</li>
              <li className="mb-2"><strong>Rectification:</strong> Correct inaccurate information.</li>
              <li className="mb-2"><strong>Erasure:</strong> Request deletion of your data (subject to certain conditions).</li>
              <li className="mb-2"><strong>Restriction:</strong> Request limiting how we use your data.</li>
              <li className="mb-2"><strong>Data Portability:</strong> Receive your data in a structured, commonly used format.</li>
              <li><strong>Objection:</strong> Object to our processing of your data in certain circumstances.</li>
            </ul>
            <p className="text-secondary-700">
              To exercise these rights, please contact us using the details provided in the Contact Information section.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Contact Information</h2>
            <p className="text-secondary-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-secondary-700 mb-1">Email: privacy@aogglehomes.com</p>
              <p className="text-secondary-700">Address: 123 App Street, Tech City, TC 12345</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Changes to This Policy</h2>
            <p className="text-secondary-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-secondary-700">
              Last Updated: June 1, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;