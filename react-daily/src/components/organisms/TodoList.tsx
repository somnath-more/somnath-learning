import styled from "@emotion/styled";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TextField from "../atoms/TextField";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const OuterBox = styled(Stack)({
  width: "100%",
  display: "flex",
  height: "100%",
  //   textAlign: "center",
  justifyContent: "center",
});
const NavBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
interface TodoProps {
  id: string;
  title: string;
}
const TodoList = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [searchData, setSearchData] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      id: "",
      title: "",
    },
  ]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todos");
        setTodos(res.data);
        console.log("Check get Data", res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, []);

  const handAddTodo = async () => {
    const title = todoItem;
    try {
     const res= await axios.post("http://localhost:5000/todos", { title });
      console.log("Data Post Success");
      setTodoItem(""); // Clear the input after successful post
      setTodos((prevTodos) => [...prevTodos, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id:string) => {
    const deleteTodo = async () => {
      try {
        console.log("the given id is : ", id);

        const res = await axios.delete(`http://localhost:5000/todos/${id}`);
         console.log("Check get Data", res.data);
        // // location.reload();
        // window.location.reload();
            // Update the state after deletion
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      } catch (err) {
        console.log(err);
      }
    };
    deleteTodo();
  };

  const handleUpdate = (id:string) => {
    const updateTodo = async () => {
      try {
        console.log("the given id is : ", id);
        const updatedTodo= {
            title: "Updated todo"
        }
        const res = await axios.put(`http://localhost:5000/todos/${id}`,updatedTodo);
        console.log("Check updated Data", res.data);

        // location.reload();
        // window.location.reload();
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
          );
      } catch (err) {
        console.log(err);
      }
    };
    updateTodo();
  };

  return (
    <OuterBox>
      <h1>To Do List Application</h1>
      <NavBar>
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            value={todoItem}
            placeholder="add a todo "
            label="Add a todo "
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <Button variant="contained" text="Add A Todo" onClick={handAddTodo} />
        </Box>
        <TextField
          value={searchData}
          placeholder="search a todo "
          label="Search a todo"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </NavBar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Sr. No</TableCell>
            <TableCell> Title</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>

        {/* Render all Todo list */}

        <TableBody>
          {todos
            .filter((todo) => todo.title.toLowerCase().includes(searchData))
            .map((data, index) => (
              <TableRow key={data.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{data.title}</TableCell>
                <TableCell onClick={() => handleUpdate(data.id)}>
                  <EditIcon />
                </TableCell>
                <TableCell onClick={() => handleDelete(data.id)}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </OuterBox>
  );
};

export default TodoList;
