package com.todo.demo.controller;

import com.todo.demo.entity.Todo;
import java.util.List;
import java.util.Optional;

import com.todo.demo.exception.ResourceNotFoundException;
import com.todo.demo.service.impl.TodoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoServiceImpl todoService;

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoService.getAllTodos();
    }

//     filtering request based on page and size
    @GetMapping("/filter")
    public List<Todo> getFilteredTodos(){
        Pageable
        return
    }
    @GetMapping("/{id}")
    public Optional<Todo> getTodosById(@PathVariable  Long id){
        return todoService.getTodoById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTodos(@PathVariable Long id){
        todoService.deleteTodoById(id);
    }

    @PostMapping("/save")
    public Todo saveTodos(@RequestBody Todo todo){
        return todoService.saveTodos(todo);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<Todo> updateTodosById(@PathVariable Long id, @RequestBody String description) throws ResourceNotFoundException {
        Todo updatedTodo = todoService.updateDescription(description, id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id: " + id));
        return ResponseEntity.ok(updatedTodo);
    }
}
