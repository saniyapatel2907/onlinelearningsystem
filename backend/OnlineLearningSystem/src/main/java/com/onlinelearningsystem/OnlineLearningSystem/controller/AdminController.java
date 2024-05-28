package com.onlinelearningsystem.OnlineLearningSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinelearningsystem.OnlineLearningSystem.model.AdminLogin;
import com.onlinelearningsystem.OnlineLearningSystem.model.Register;
import com.onlinelearningsystem.OnlineLearningSystem.repository.AdminLoginRepository;
import com.onlinelearningsystem.OnlineLearningSystem.repository.RegisterRepository;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/online_learning_system/")
public class AdminController {
	@Autowired
	@Qualifier("admRepo")
	AdminLoginRepository admRepo;
	
	@GetMapping("/admin/{emailid}/{password}")
	public AdminLogin login(@PathVariable("emailid") String emailid,@PathVariable("password") String password)
	{
		return admRepo.findByEmailIdAndPassword(emailid, password);
	}
	
}
