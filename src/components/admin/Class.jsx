import { useState } from "react";

function Class() {
  const [className, setClassName] = useState("");
  const [availableClasses, setAvailableClasses] = useState(0);

  const handleCreateClass = () => {
    // Increment available classes
    setAvailableClasses(availableClasses + 1);
    // Implement logic to actually create the class (e.g., using Redux actions)
    console.log("Class created:", className);
    setClassName("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter class name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <button onClick={handleCreateClass}>Create Class</button>
      <button>Go Back</button>
      <p>Total Available Classes: {availableClasses}</p>
    </div>
  );
}

export default Class;
