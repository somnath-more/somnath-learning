package com.todo.demo.service.impl;

import com.todo.demo.entity.Todo;
import com.todo.demo.exception.ResourceNotFoundException;
import com.todo.demo.jpa.TodoRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoServiceImpl implements TodoService{

    @Autowired
    private TodoRepo todoRepo;
    @Override
    public List<Todo> getAllTodos() {
        return todoRepo.findAll();
    }

    @Override
    public Optional<Todo> getTodoById(Long id) {
        return todoRepo.findById(id);
    }

    @Override
    public void deleteTodoById(Long id) {
        todoRepo.deleteById(id);
    }

    @Override
    public Optional<Todo> updateDescription(String description, Long id) throws ResourceNotFoundException {
        return Optional.ofNullable(todoRepo.findById(id).map(todo -> {
            todo.setDescription(description);
            return todoRepo.save(todo);  // Save the updated todo
        }).orElseThrow(() -> new ResourceNotFoundException("Given Id is not present !!")));
    }
    @Override
    public Todo saveTodos(Todo todo) {
         Todo savedTodo= todoRepo.save(todo);
         return savedTodo;
    }
}
