document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous error messages
        clearErrors();

        // Collect form field values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('LastName').value.trim();
        const fatherName = document.getElementById('FatherName').value.trim();
        const motherName = document.getElementById('MotherName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const course = document.getElementById('Course').value.trim();
        const specialization = document.getElementById('Specialization').value.trim();
        const address = document.getElementById('address').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');

        let isValid = true;

        // Validate each field
        if (!firstName) {
            showError('firstNameError', 'First name is required.');
            isValid = false;
        }
        if (!lastName) {
            showError('lastNameError', 'Last name is required.');
            isValid = false;
        }
        if (!fatherName) {
            showError('fatherNameError', 'Father name is required.');
            isValid = false;
        }
        if (!motherName) {
            showError('motherNameError', 'Mother name is required.');
            isValid = false;
        }
        if (!phoneNumber) {
            showError('phoneNumberError', 'Phone number is required.');
            isValid = false;
        }
        if (!email || !validateEmail(email)) {
            showError('emailError', 'Valid email is required.');
            isValid = false;
        }
        if (!course) {
            showError('courseError', 'Course is required.');
            isValid = false;
        }
        if (!specialization) {
            showError('specializationError', 'Specialization is required.');
            isValid = false;
        }
        if (!address) {
            showError('addressError', 'Address is required.');
            isValid = false;
        }
        if (!gender) {
            showError('genderError', 'Gender selection is required.');
            isValid = false;
        }

        // Display success message if the form is valid
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Optionally, reset the form
        }
    });

    // Function to show error messages
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    // Function to clear all error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach((element) => {
            element.textContent = '';
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
