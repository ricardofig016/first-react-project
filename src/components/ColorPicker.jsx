import React, { useState } from "react";

function ColorPicker(props) {
  const [color, setColor] = useState("#37e1d6");

  const handleColorChange = (event) => setColor(event.target.value);

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
export default ColorPicker;
