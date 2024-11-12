// import styled from '@emotion/styled';
// import React, { useState } from 'react';

// const taskData = [
//   { id: 1, title: 'Task 1', completed: false },
//   { id: 2, title: 'Task 2', completed: true },
//   { id: 3, title: 'Task 3', completed: false },
// ];

// const DesignLi = styled('li')({
//   padding: '10px',
//   margin: '10px',
//   backgroundColor: '#f5f5f5',
//   border: '1px solid #ccc',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
//   '&:hover': {
//     backgroundColor: '#ddd',
//   },
// });

// const TodoListDragDrop = () => {
//   const [tasks, setTasks] = useState(taskData);
//   const [draggedItemId, setDraggedItemId] = useState(null);

//   // Set dragged item ID
//   const handleOnDragStart = (id) => {
//     setDraggedItemId(id);
//   };

//   // Allow the drop action
//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   // Handle dropping the task
//   const handleDrop = (completedStatus) => {


//     const draggedTask = tasks.find((task) => task.id === draggedItemId);

//     if (draggedTask) {
//       // Update the task's completed status
//       const updatedTasks = tasks.map((task) =>
//         task.id === draggedItemId ? { ...task, completed: completedStatus } : task
//       );
//       setTasks(updatedTasks); // Update state with the new tasks array
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
//       {/* To Do List */}
//       <div
//         className="left"
//         style={{
//           height: '600px',
//           width: '400px',
//           border: '1px solid #ccc',
//           padding: '10px',
//         }}
//         onDragOver={handleDragOver}
//         onDrop={() => handleDrop(false)} // Allow drop in "To Do" list
//       >
//         <h2>TODO Tasks</h2>
//         <ul>
//           {tasks
//             .filter((task) => !task.completed) // Only show incomplete tasks
//             .map((task) => (
//               <DesignLi
//                 key={task.id}
//                 draggable
//                 onDragStart={() => handleOnDragStart(task.id)}
//               >
//                 {task.title}
//               </DesignLi>
//             ))}
//         </ul>
//       </div>

//       {/* Completed Tasks List */}
//       <div
//         className="right"
//         style={{
//           height: '600px',
//           width: '400px',
//           border: '1px solid #ccc',
//           padding: '10px',
//         }}
//         onDragOver={handleDragOver}
//         onDrop={(event) => handleDrop(true)} // Allow drop in "Completed" list
//       >
//         <h2>Completed Tasks</h2>
//         <ul>
//           {tasks
//             .filter((task) => task.completed) // Only show completed tasks
//             .map((task) => (
//               <DesignLi
//                 key={task.id}
//                 draggable
//                 onDragStart={() => handleOnDragStart(task.id)}
//               >
//                 {task.title}
//               </DesignLi>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoListDragDrop;
