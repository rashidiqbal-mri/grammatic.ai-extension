import React, { useState, useEffect } from 'react';
import '../assets/tailwind.css';

const Menu = () => {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'selectedText') {
        setSelectedText(message.text);
      }
    });
  }, []);

  return (
    <div>
      <p>Selected Text: {selectedText}</p>
    </div>
  );
};

export default Menu;
