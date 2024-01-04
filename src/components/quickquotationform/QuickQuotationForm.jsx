import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuickQuotationForm = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleChatStart = () => {
    const message = encodeURIComponent('Hello, I would like to chat with you about your services.');
    const whatsappUrl = `https://wa.me/254718528410/?text=${message}`;

    window.open(whatsappUrl, '_blank');
    setSubmissionStatus('success');

    setTimeout(() => {
      onClose();
    }, 5000);
  };

  return (
    <div className={`modal ${showForm ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        {/* ... (other content) ... */}
        {submissionStatus === 'success' ? (
          <div className="success-message bg-green-500 text-white p-4 rounded">
            Thank you for contacting us! Our expert will respond to you soon.
          </div>
        ) : (
          <>
           
            <div className="flex justify-center">
              <button
                onClick={handleChatStart}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

QuickQuotationForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default QuickQuotationForm;
