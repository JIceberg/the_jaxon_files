<?php
  if ($_GET["pass1"] != $_GET["pass2"]) {
    print "Warning! Your password did not match!";
  } else {
    print "Welcome to the Jaxon Files, ";
    echo $_GET["user"];
    print "! We're glad to have you aboard!\n";
    
    $conn = new mysqli("localhost", $_GET["user"], $_GET["pass1"], $_GET["bday"], $_GET["email"]);
    
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    echo "Your data has been saved successfully!";
    
    $sql = "CREATE DATABASE logDB";
    if ($conn->query($sql) === TRUE) {
      echo "Database created successfully";
    } else {
      echo "Error creating database: " . $conn->error;
    }
  }
?>
<br />