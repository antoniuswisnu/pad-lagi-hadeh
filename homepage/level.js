import React, { useState } from 'react';

function LevelBar() {
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  const [className, setClassName] = useState('Beginner');

  const handleExpChange = (newExp) => {
    setExp(newExp);

    // Logic untuk menentukan level dan nama kelas
    if (newExp < 100) {
      setLevel(1);
      setClassName('Beginner');
    } else if (newExp < 200) {
      setLevel(2);
      setClassName('Intermediate');
    } else if (newExp < 300) {
      setLevel(3);
      setClassName('Advanced');
    } else {
      setLevel(4);
      setClassName('Expert');
    }
  };

  return (
    <div>
      <h2>Level: {level}</h2>
      <h3>Class: {className}</h3>
      <div style={{ border: '1px solid black', width: '500px' }}>
        <div
          style={{
            backgroundColor: 'green',
            height: '20px',
            width: `${exp}%`,
          }}
        ></div>
      </div>
      <label>
        Exp:
        <input type="number" value={exp} onChange={(e) => handleExpChange(e.target.value)} />
      </label>
    </div>
  );
}

export default LevelBar;
