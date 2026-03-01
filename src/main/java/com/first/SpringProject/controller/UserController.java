package com.first.SpringProject.controller;

import com.first.SpringProject.model.User;
import com.first.SpringProject.service.UserService;
import java.util.List;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController{

    private final UserService service;

    public UserController(UserService service){
        this.service=service;
    }
    
    @PostMapping
    public User create(@Valid @RequestBody User user){
        return service.save(user);
    }
   @GetMapping("/{id}")
public User getById(@PathVariable Long id){
    return service.getById(id);
}
@GetMapping
public List<User> getAll(){
    return service.getAll();
}
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
  
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return service.update(id, user);
}

}