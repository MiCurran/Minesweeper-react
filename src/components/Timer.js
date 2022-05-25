import React, { useState, useEffect, useRef } from "react";

export default function Timer({ gameOver, restartGame}) {
  let [time, setTime] = useState(0);
  const [hovered, setHovered] = useState(false);
  const popoverRef = useRef();

  useEffect(() => {
    if (gameOver === true) {
      clearTime();
    }
    else {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    incrementTime();
  }
  }, [time, gameOver]);

  const clearTime = () => {
    setTime(0);
  }

  const handleReset = () => {
    restartGame();
    clearTime();
  };

  return (
    <div style={{ 
      color: "black", 
      fontSize: 20, 
      background: "#ccc", 
      width: '600px',
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '0 10px'
    }}>
      <div>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {time}
      </div>
      <div className="tooltip" 
        onMouseLeave={() => setHovered(false)} 
        onMouseEnter={() => setHovered(true)} 
        onClick={() => handleReset()} 
        style={{
          cursor: 'pointer', 
          margin: 0,
          fontSize: hovered === true ? '1.57rem' : '1.6em',
          backgroundColor: hovered === true ? '#989898' : '',
          padding: hovered === true ? '3.5px' : '',
          border: hovered === true ? '1.25px solid #414141' : '',
        }}>
        {gameOver === true 
          ? <span role="img" aria-label="surprised face" > 😮</span> 
          : <span role="img" aria-label="smiling face" >🙂</span> 
        }
        <span 
          className={" tooltiptext"}
          ref={popoverRef}
          style={{fontSize: '12px'}}
        >
          <div />
          RESTART?
        </span>
      </div>
      <div />
    </div>
  );
}
