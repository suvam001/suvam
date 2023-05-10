// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);

  // Prepare the request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Accept', 'application/json');

  // Handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200) {
      // Show the submission confirmation
      alert('Form submitted successfully');

      // Reset the form
      form.reset();
    } else {
      // Optionally, handle form submission errors
      console.error('Form submission failed');
    }
  };

  // Send the request
  xhr.send(formData);
});