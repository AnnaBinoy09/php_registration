<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Collect form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $age = $_POST['age'];
  $gender = $_POST['gender'];
  $message = isset($_POST['message']) ? $_POST['message'] : 'No message provided';

  // Display the submitted information
  echo "<div style='padding: 20px; background-color: #3498db; color: white; border-radius: 10px;'>";
  echo "<h2>Registration Successful!</h2>";
  echo "<p><strong>Name:</strong> $name</p>";
  echo "<p><strong>Email:</strong> $email</p>";
  echo "<p><strong>Age:</strong> $age</p>";
  echo "<p><strong>Gender:</strong> $gender</p>";
  echo "<p><strong>Message:</strong> $message</p>";
  echo "</div>";
}
?>
