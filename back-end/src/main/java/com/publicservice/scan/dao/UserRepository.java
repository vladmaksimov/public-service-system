package com.publicservice.scan.dao;

import com.publicservice.scan.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Created by sveta on 16.06.17.
 */

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

    @Query
    Users getUserByNameAndPassword(String userName , String password);

    Users saveUser(Users users);

}
