<?php
session_start();
if ($_SESSION['role'] != 'Warden') {
    header("Location: index.html");
    exit();
}
include 'db_connect.php';

$result = $conn->query("SELECT * FROM complaints");
?>

<h1>Warden Dashboard</h1>
<table>
    <thead>
        <tr>
            <th>Complainter</th>
            <th>Type</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['name']; ?></td>
            <td><?php echo $row['complaint_type']; ?></td>
            <td><?php echo $row['status']; ?></td>
        </tr>
        <?php endwhile; ?>
    </tbody>
</table>
<a href="logout.php">Logout</a>
