<?php
session_start();
if ($_SESSION['role'] != 'Employee') {
    header("Location: index.html");
    exit();
}
include 'db_connect.php';

$result = $conn->query("SELECT * FROM complaints WHERE status = 'Pending'");
?>

<h1>Employee Dashboard</h1>
<table>
    <thead>
        <tr>
            <th>Complainter</th>
            <th>Type</th>
            <th>Room No</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['name']; ?></td>
            <td><?php echo $row['complaint_type']; ?></td>
            <td><?php echo $row['hostel_room']; ?></td>
            <td>
                <a href="resolve_complaint.php?id=<?php echo $row['id']; ?>">Resolve</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </tbody>
</table>
<a href="logout.php">Logout</a>
