import React from 'react';

const SyntheticEvent = () => {
  const [value, setValue] = React.useState('');

  // Handle click event with proper typing
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Event:', event);
    console.log('Target:', event.target);
    console.log('Type:', event.type);
    console.log('Event Object:', event.nativeEvent);
  };

  // Handle input focus
  const handleFocus = () => {
    console.log("Input field is focused");
  };

  // Handle input change with type annotation
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log("Input changed to:", event.target.value);
  };

  // Handle key down event
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.key === 'a') {
        console.log("Ctrl+A pressed: Text selected.");
      }
      if (event.key === 'Backspace' || event.key === 'Delete') {
        console.log("Backspace or Delete pressed: Text may be removed.");
      }
    if (event.key === 'Enter') {
      console.log("Enter key pressed!");
    }
  };

  // Handle clipboard event (copy, paste, cut)
  const handleClipboardEvent = (event: React.ClipboardEvent<HTMLInputElement>) => {
    console.log("Clipboard event triggered:", event.type);
    console.log("Clipboard data:", event.clipboardData.getData('text'));
  };

  return (
    <div>
      <p>SyntheticEvent</p>
      <input
        type="text"
        value={value}
        placeholder="Synthetic event Checker"
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onCopy={handleClipboardEvent} // Clipboard events: copy, cut, paste
        onCut={handleClipboardEvent}
        onPaste={handleClipboardEvent}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default SyntheticEvent;
