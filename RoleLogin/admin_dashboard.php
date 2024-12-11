<?php
session_start();
if ($_SESSION['role'] != 'Admin') {
    header("Location: index.html");
    exit();
}
?>

<h1>Admin Dashboard</h1>
<p>Welcome, <?php echo $_SESSION['username']; ?>!</p>
<a href="logout.php">Logout</a>
