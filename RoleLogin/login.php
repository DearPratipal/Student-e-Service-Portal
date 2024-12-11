<?php
session_start();
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
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
        echo "User not found.";
    }
}
?>
