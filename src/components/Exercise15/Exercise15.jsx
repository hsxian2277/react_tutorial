import { useState } from 'react';
import './Exercise15.css';

// Color Picker
export default function Exercise15() {
  // List of colors
  const colors = ['blue', 'green', 'orange', 'red', 'pink'];
  // Random default color
  const initialSelectedColor = colors[Math.floor(Math.random() * 5)];

  const [color, setColor] = useState(initialSelectedColor);

  const handlePick = (e) => {
    setColor(e.target.style.backgroundColor);
  }

  return (
    <div className='color-picker'>
      <div className='selected-color' style={{backgroundColor: color}}></div>
      <div className='color-list'>
        {colors.map((color, index) => {
          return <div key={color+index} className='color-list__item' style={{backgroundColor: color}} onClick={handlePick}></div>
        })}
      </div>
    </div>
  )
}
