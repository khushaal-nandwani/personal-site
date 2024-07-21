import React, { useEffect, useState } from 'react';

function Tip({ message, duration }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 p-2 rounded font-bold">
      {message}
    </div>
  );
}

export default Tip;
