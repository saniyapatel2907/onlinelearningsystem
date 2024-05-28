package com.onlinelearningsystem.OnlineLearningSystem.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinelearningsystem.OnlineLearningSystem.model.Feedback;
import com.onlinelearningsystem.OnlineLearningSystem.repository.FeedbackRepository;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/online_learning_system/")
public class FeedbackController {

	@Autowired
	@Qualifier("feedRepo")
	FeedbackRepository feedRepo;
	@GetMapping("/feedback")
	public ArrayList<Feedback> feedback()
	{
		return (ArrayList<Feedback>) feedRepo.findAll();
	}
	@PostMapping("/feedback")
	public Feedback savefeedback(@RequestBody Feedback f)
	{
		return feedRepo.save(f);
	}
}
