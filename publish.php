<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $file = $_FILES['file'];

    $upload_dir = 'uploads/';
    $target_file = $upload_dir . basename($file['name']);
    
    if (move_uploaded_file($file['tmp_name'], $target_file)) {
        echo "The file ". htmlspecialchars(basename($file['name'])). " has been uploaded.";
        // You can save $title, $description, and $target_file to a database if needed
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
} else {
    echo "Invalid request.";
}
?>
