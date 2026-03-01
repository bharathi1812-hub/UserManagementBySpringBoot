package com.first.SpringProject.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.first.SpringProject.model.User;
import com.first.SpringProject.repository.UserRepository;
@Service
public class UserService{
    private final UserRepository repo;
    public UserService(UserRepository repo){
        this.repo=repo;
    }
    public User save(User user){
        if(repo.existsByEmail(user.getEmail())){
            throw new RuntimeException("Email already exists");
        }
 return repo.save(user);
}

    public List<User> getAll(){
        return repo.findAll();
    }
    public void delete(Long id){
        repo.deleteById(id);
    }
     public User update(Long id, User user){

        User existing = repo.findById(id).orElseThrow();

        existing.setName(user.getName());
        existing.setEmail(user.getEmail());
    
        return repo.save(existing);
    }
    public User getById(Long id){
    return repo.findById(id).orElseThrow();
}

}
