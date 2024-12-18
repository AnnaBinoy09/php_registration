// jQuery for form submission and displaying confirmation message
$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form data
      var name = $('#name').val();
      var email = $('#email').val();
      var age = $('#age').val();
      var gender = $('#gender').val();
      var message = $('#message').val();
  
      // Display confirmation message
      $('#confirmationMessage').text('Thank you for registering!').fadeIn();
  
      // Display updated user info
      $('#updatedInfo').html(`
        <h3>Submitted Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message ? message : 'No message provided'}</p>
      `).fadeIn();
    });
  });
  