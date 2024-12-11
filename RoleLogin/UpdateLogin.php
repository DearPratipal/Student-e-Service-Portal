<?php
session_start();
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND role = ?");
    $stmt->bind_param("ss", $username, $role);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];

            // Redirect to respective dashboards
            switch ($user['role']) {
                case 'Admin':
                    header("Location: admin_dashboard.php");
                    break;
                case 'Warden':
                    header("Location: warden_dashboard.php");
                    break;
                case 'Student':
                    header("Location: student_dashboard.php");
                    break;
                case 'Employee':
                    header("Location: employee_dashboard.php");
                    break;
            }
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "Invalid username or role.";
    }
}
?>
