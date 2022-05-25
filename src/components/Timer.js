import React, { useState, useEffect } from "react";
let timeIntervalId;
export default function Timer({ gameOver, sendTime }) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    incrementTime();
  }, [time]);

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
      <h2 style={{margin: 0}}>
        {gameOver === true ? '😮' : '🙂' }
      </h2>
      <div />
    </div>
  );
}
