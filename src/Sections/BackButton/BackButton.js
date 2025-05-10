import React, {useState, useEffect } from "react";
import './BackButton.css';

function BackButton({ setActiveSections }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    setActiveSections([]);
  }
  
  return (
    <div className={`mt-8 text-slate-400 font-bold text-sm text-center ${hide ? 'button-hide' : ''}`} onClick={handleBackClick}>
      Click outside the active area to go back!
    </div>
  );
}

export default BackButton;