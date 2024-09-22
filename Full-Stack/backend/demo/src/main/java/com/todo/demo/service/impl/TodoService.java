package com.todo.demo.service.impl;

import com.todo.demo.entity.Todo;
import com.todo.demo.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

public interface TodoService {

    public List<Todo> getAllTodos();
    public Optional<Todo> getTodoById(Long id);
    public void deleteTodoById(Long id);
    public Optional<Todo> updateDescription(String description, Long id) throws ResourceNotFoundException;
    public Todo saveTodos(Todo todo);
}
