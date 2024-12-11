<?php
session_start();
if ($_SESSION['role'] != 'Student') {
    header("Location: index.html");
    exit();
}
?>

<h1>Student Dashboard</h1>
<p>Welcome, <?php echo $_SESSION['username']; ?>!</p>
<a href="register_complaint.php">Register a Complaint</a>
<a href="logout.php">Logout</a>
