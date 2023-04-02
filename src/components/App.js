import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };

  const handleDeleteField = (index) => {
    console.log("You are deleting " + fields[index].value + " field");
    setFields(fields.filter((field, i) => i !== index));
  };

  const handleEditField = (index, value) => {
    const newFields = [...fields];
    newFields[index].value = value;
    setFields(newFields);
  };

  return (
    <div>
      {fields.length === 0 && <p>No fields in the form</p>}
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleEditField(index, e.target.value)}
          />
          <button onClick={() => handleDeleteField(index)} className='delete'>Delete</button>
        </div>
      ))}
      <button onClick={handleAddField} className='add'>Add Field</button>
    </div>
  );
};

export default App;
