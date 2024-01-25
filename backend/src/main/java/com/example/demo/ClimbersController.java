package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/climbers")
public class ClimbersController {

    private List<Climber> climbers = List.of(
            new Climber("Mario Rossi", new Date()),
            new Climber("Bella Dinotte", new Date())
    );

    @CrossOrigin
    @GetMapping
    public List<Climber> getAll() throws InterruptedException {
        Thread.sleep(500);
        return climbers;
    }

    @PostMapping
    public void add(Climber climber)  {
        climbers.add(climber);
    }
}
