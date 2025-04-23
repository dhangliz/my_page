import React, { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme">
      {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
};

export default ToggleTheme;
