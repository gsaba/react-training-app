package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/climbers")
public class ClimbersController {

    private Map<String, Climber> climbers = new HashMap<String, Climber>(Map.of(
            "1", new Climber("1", "Mario Rossi", new Date()),
            "2", new Climber("2", "Bella Dinotte", null)
    ));

    @CrossOrigin
    @GetMapping
    public List<Climber> getAll() throws InterruptedException {
        //Thread.sleep(500);
        return new ArrayList<>(climbers.values());
    }

    @CrossOrigin
    @PostMapping
    public void add(@RequestBody Climber climber) throws IOException {
        if(climber == null || climber.name() == null || climber.birthDate() == null) {
            throw new IOException("Wrong data");
        }
        var finalClimber = climber;
        if (climber.id() == null || "".equals(climber.id())) {
            finalClimber = new Climber(Math.random() + "", climber.name(), climber.birthDate());
        }
        climbers.put(finalClimber.id(), finalClimber);
    }
}
