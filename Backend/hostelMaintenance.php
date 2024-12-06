<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $roll = $_POST['roll'];
    $department = $_POST['department'];
    $mobile = $_POST['mobile'];
    $floor = $_POST['floor'];
    $room = $_POST['room'];
    $type = $_POST['type'];

    // Save the data into a file or database
    $data = "Name: $name\nRoll No: $roll\nDepartment: $department\nMobile: $mobile\nFloor: $floor\nRoom: $room\nType: $type\n\n";
    file_put_contents("maintenance_data.txt", $data, FILE_APPEND);
    echo "Maintenance request submitted successfully!";
}
?>
