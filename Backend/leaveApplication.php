<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $department = $_POST['department'];
    $room = $_POST['room'];
    $leaving_date = $_POST['leaving_date'];
    $leaving_time = $_POST['leaving_time'];
    $address = $_POST['address'];
    $mobile = $_POST['mobile'];

    // Save the data into a file or database
    $data = "Name: $name\nDepartment: $department\nRoom: $room\nLeaving Date: $leaving_date\nLeaving Time: $leaving_time\nAddress: $address\nMobile: $mobile\n\n";
    file_put_contents("leave_data.txt", $data, FILE_APPEND);
    echo "Leave application submitted successfully!";
}
?>
