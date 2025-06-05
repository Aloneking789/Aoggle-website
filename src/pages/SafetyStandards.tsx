import React from 'react';
import { Shield, AlertTriangle, Mail, Globe, Phone, FileText } from 'lucide-react';

const SafetyStandards: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-6">
            <Shield className="h-12 w-12 text-primary-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            Aoggle Safety Standards and Child Protection Policy
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            At Aoggle, user safety is our highest priority. We are deeply committed to providing a secure, 
            respectful, and inclusive environment for all users, especially minors.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          {/* Zero-Tolerance Policy */}
          <section className="mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-red-700 m-0">🔐 Zero-Tolerance Policy Against CSAE</h2>
              </div>
              <p className="text-red-700 mb-4 font-medium">
                We have implemented clear guidelines and safeguards to prevent any form of Child Sexual Abuse and Exploitation (CSAE) on our platform.
              </p>
            </div>
            
            <p className="text-secondary-700 mb-4">
              We have a strict, zero-tolerance policy regarding:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700 space-y-2">
              <li><strong>Child sexual abuse material (CSAM)</strong></li>
              <li><strong>Grooming behavior</strong></li>
              <li><strong>Any content that exploits or endangers minors</strong></li>
              <li><strong>Accounts engaging in or promoting harmful behavior toward children</strong></li>
            </ul>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-red-800 font-semibold">
                Any such activity will result in immediate account suspension, permanent bans, and reporting to relevant law enforcement and child protection agencies.
              </p>
            </div>
          </section>
          
          {/* Reporting Abuse */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FileText className="h-6 w-6 text-primary-500" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-800 m-0">📣 Reporting Abuse</h2>
            </div>
            
            <p className="text-secondary-700 mb-6">
              We encourage our users to be proactive in helping maintain community safety. If you witness any content or behavior that may pose a risk, please report it immediately:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                <div className="flex items-center mb-3">
                  <Mail className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold text-secondary-800">📧 Report via email</h3>
                </div>
                <p className="text-secondary-700">
                  <a href="mailto:gaganarora687@gmail.com" className="text-primary-600 hover:text-primary-700 underline font-medium">
                    gaganarora687@gmail.com
                  </a>
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold text-secondary-800">📄 Report through the app</h3>
                </div>
                <p className="text-secondary-700">
                  Tap the "Report" icon on any video or profile
                </p>
              </div>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                All reports are reviewed promptly and, if necessary, escalated to legal authorities.
              </p>
            </div>
          </section>
          
          {/* Compliance */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-primary-500" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-800 m-0">📜 Compliance</h2>
            </div>
            
            <p className="text-secondary-700 mb-4">
              Aoggle complies with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700 space-y-2">
              <li><strong>Google Play CSAE Policy</strong></li>
              <li><strong>Applicable laws and regulations including COPPA, GDPR, and local child protection frameworks</strong></li>
              <li><strong>Industry best practices developed by organizations like INHOPE, NCMEC, and Tech Coalition</strong></li>
            </ul>
          </section>
          
          {/* Contact Information */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary-500" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-800 m-0">📞 Contact Information</h2>
            </div>
            
            <p className="text-secondary-700 mb-6">
              For inquiries related to safety, reporting, or legal concerns, please contact:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Mail className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold text-secondary-800">📧 Email</h3>
                </div>
                <p className="text-secondary-700">
                  <a href="mailto:gaganarora687@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
                    gaganarora687@gmail.com
                  </a>
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Globe className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold text-secondary-800">🌐 Website</h3>
                </div>
                <p className="text-secondary-700">
                  <a href="https://aoggle.com" className="text-primary-600 hover:text-primary-700 underline">
                    https://aoggle.com
                  </a>
                </p>
              </div>
            </div>
          </section>
          
          {/* Final Note */}
          <section className="mb-8">
            <div className="bg-primary-500 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">🏁 Final Note</h2>
              <p className="text-secondary-800 text-lg font-medium">
                Your safety is our responsibility. We are committed to building a platform where creativity thrives without compromising the well-being of any individual, especially children.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SafetyStandards;
