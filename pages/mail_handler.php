<?php
	
		$name=$_POST['fullname'];
		$email=$_POST['message'];
		

		$to='aosmannur@gmail.com'; 
		$subject='Barlag';
		$message="fullname :".$name."\n"."message :".$email;
		$headers="From: noreply@gmail.com";

	mail($to, $subject, $message, $headers);
		Header("Location: https://www.ayydov.com");
	exit();
?>