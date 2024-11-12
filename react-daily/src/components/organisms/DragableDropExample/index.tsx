import React, { useState } from 'react';

const DraggableList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  // Handle the start of a drag event
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  // Handle dragging over a list item
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
  };

  // Handle the drop event
  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedItemIndex, 1)[0]; // Remove the dragged item
    newItems.splice(index, 0, draggedItem); // Insert it at the new index

    setItems(newItems);
    setDraggedItemIndex(null);
  };

  return (
    <div style={{ padding: '20px', width: '200px' }}>
      <h3>Draggable List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: 'lightblue',
              cursor: 'move',
              border: '1px solid #ccc',
              borderRadius: '4px',
              textAlign: 'center'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraggableList;
