import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './quickquotationform.css';

const QuickQuotationForm = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(''); // Added state for submission status

  useEffect(() => {
    // Set a timeout to show the form after a certain time (e.g., 30 seconds)
    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, 30000); // Adjust the time in milliseconds as needed

    // Clear the timeout on component unmount or when the form is closed
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      make: event.target.make.value,
      model: event.target.model.value,
      description: event.target.description.value,
    };

    try {
      const response = await fetch('http://localhost:3001/api/forma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submitted successfully, update submission status
        setSubmissionStatus('success');
        // Close the form after a brief delay
        setTimeout(() => {
          onClose();
        }, 5000); // Close the form after 5 seconds (adjust as needed)
      } else {
        console.error('Failed to submit form');
        setSubmissionStatus('error');
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      // Handle the error as needed
    }
  };

  return (
    <div className={`modal ${showForm ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {submissionStatus === 'success' ? (
          // Display success message
          <div className="success-message bg-green-500 text-white p-4 rounded">
  Thank you for contacting Sanho! Our expert will respond to you soon.
</div>

        ) : (
          // Display form
          <>
            <h2 className='text-center'>Get a Quick Quotation</h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}  <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required />

<label htmlFor="phone">Phone Number:</label>
<input type="tel" id="phone" name="phone" required />

<label htmlFor="make">Make of Machine:</label>
<input type="text" id="make" name="make" required />

<label htmlFor="model">Model:</label>
<input type="text" id="model" name="model" required />

<label htmlFor="description">Description:</label>
<textarea id="description" name="description" rows="4" placeholder='describe all the parts you need you can include any part numbers you have Our expert will contact you soon' required></textarea>

              {/* ... (existing form fields) ... */}
              <button type="submit">Submit</button>
            </form>
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
