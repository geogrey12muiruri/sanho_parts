import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './quickquotationform.css'; // Assuming you have defined styles in this file

const QuickQuotationFormWhatsApp = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      make: event.target.make.value,
      model: event.target.model.value,
      description: event.target.description.value,
    };

    const message = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMake: ${formData.make}%0AModel: ${formData.model}%0ADescription: ${formData.description}`;

    const whatsappUrl = `https://wa.me/254718528410/?text=${message}`; // Updated with your WhatsApp number

    window.open(whatsappUrl);

    setSubmissionStatus('success');

    setTimeout(() => {
      onClose();
    }, 5000);
  };

  return (
    <div className={`modal ${showForm ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {submissionStatus === 'success' ? (
          <div className="success-message bg-green-500 text-white p-4 rounded">
            Thank you for contacting us! Our expert will respond to you soon.
          </div>
        ) : (
          <>
            <h2 className="text-center">Get a Quick Quotation</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="make">Make of Machine:</label>
              <input type="text" id="make" name="make" required />

              <label htmlFor="model">Model:</label>
              <input type="text" id="model" name="model" required />

              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Describe all the parts you need. You can include any part numbers you have. Our expert will contact you soon."
                required
              ></textarea>

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

QuickQuotationFormWhatsApp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default QuickQuotationFormWhatsApp;
