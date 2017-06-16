package com.publicservice.scan.controllers;

import com.publicservice.scan.dao.UserRepository;
import com.publicservice.scan.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by sveta on 16.06.17.
 */

@Controller
@RequestMapping(path = "/")
public class UserController {

    @Autowired

    private UserRepository userRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewUser(@RequestParam String name
            , @RequestParam String password) {

        Users n = new Users();
        n.setUserName(name);
        n.setPassword(password);
        userRepository.saveUser(n);
        return "Saved";
    }


    @GetMapping(path = "/login")
    public @ResponseBody Users getUserAndPassword() {
        String userName = "admin";
        String password = "admin";

        return  userRepository.getUserByNameAndPassword(userName, password);
    }

}
