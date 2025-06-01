import React from 'react';
import Button from '../components/Button';

const DeleteAccount: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-8">Delete Your Account</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Account Deletion Process</h2>
            <p className="text-secondary-700 mb-4">
              We respect your right to control your data. You can request to delete your Aoggle Homes account at any time. 
              Please understand that this action is permanent and cannot be undone.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-secondary-800 mb-4">Steps to Delete Your Account:</h2>
            <ol className="list-decimal pl-6 mb-4 text-secondary-700">
              <li className="mb-3">
                Send an email to <a href="mailto:gaganarora687@gmail.com" className="text-primary-600 hover:text-primary-700 underline">gaganarora687@gmail.com</a> with the subject line "Delete My Account"
              </li>
              <li className="mb-3">
                Include your registered email address or username in the email body
              </li>
              <li className="mb-3">
                Our team will verify your identity and process your request
              </li>
              <li>
                You'll receive a confirmation email once your account has been deleted
              </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-secondary-800 mb-4">What Happens When You Delete Your Account:</h2>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2">
                Your profile, videos, comments, likes, and all other personal data will be permanently deleted
              </li>
              <li className="mb-2">
                Your username will be released and may become available for others to use
              </li>
              <li className="mb-2">
                You will no longer have access to any content you've created or interactions you've had on the platform
              </li>
              <li>
                The deletion process will be completed within 7 business days
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-secondary-800 mb-4">Data Retention After Deletion:</h2>
            <p className="text-secondary-700 mb-4">
              While most of your data will be deleted immediately, some information may be retained for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-secondary-700">
              <li className="mb-2">
                <strong>Legal Compliance:</strong> We may retain certain data to comply with legal obligations
              </li>
              <li className="mb-2">
                <strong>Security Purposes:</strong> Some logs may be kept for up to 30 days to protect against malicious activity
              </li>
              <li>
                <strong>Backup Systems:</strong> Your data may persist in our backup systems for up to 30 days before being completely removed
              </li>
            </ul>
            <p className="text-secondary-700">
              For more information about how we handle your data, please refer to our <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-secondary-800 mb-3">Need Help?</h3>
            <p className="text-secondary-700 mb-4">
              If you have any questions about deleting your account or need assistance, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Contact Support
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                Go to Contact Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;