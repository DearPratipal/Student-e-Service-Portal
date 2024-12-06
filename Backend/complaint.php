<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $roll = $_POST['roll'];
    $mobile = $_POST['mobile'];
    $hostel = $_POST['hostel'];
    $type = $_POST['type'];
    $other = $_POST['other'] ?? '';
    $description = $_POST['description'];
    $image = $_FILES['image']['name'];
    $target = "uploads/" . basename($image);

    move_uploaded_file($_FILES['image']['tmp_name'], $target);

    // Save the data into a file or database
    $data = "Name: $name\nRoll No: $roll\nMobile: $mobile\nHostel: $hostel\nType: $type\nOther: $other\nDescription: $description\nImage: $target\n\n";
    file_put_contents("complaint_data.txt", $data, FILE_APPEND);
    echo "Complaint submitted successfully!";
}
?>
