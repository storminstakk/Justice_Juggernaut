import React, { useState } from 'react';

// Define a component that takes an Updater<T> as a prop
const ExampleComponent: React.FC<{ updater: Updater<number> }> = ({ updater }) => {
  const [value, setValue] = useState<number>(0);

  const handleClick = () => {
    // Call the updater function, passing a function that increments the value
    updater(newValue => setValue(newValue + 1));
  };

  return (
    <div>
      <p>Current value: {value}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
