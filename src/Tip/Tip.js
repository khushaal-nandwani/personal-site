import React, { useEffect, useState } from 'react';
import './Tip.css';

function Tip({ message, duration }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);


  return (
    <div className={`fixed top-4 text-amber-400 text-sm md:text-xl left-1/2 transform -translate-x-1/2 p-2 rounded font-bold
    ${visible ? '' : 'button-hide'}
    `}>
      {message}
    </div>
  );
}

export default Tip;
