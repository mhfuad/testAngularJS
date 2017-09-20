<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angularjs";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM tblEmployee";
$run = mysqli_query($conn, $sql);
	
	//$result = array();
if (mysqli_num_rows($run) > 0) {
    while($row = mysqli_fetch_assoc($run)) {
		$result[] = $row;       
    }
} else {
    echo "0 results";
}
$result = json_encode($result);
echo $result;
mysqli_close($conn);