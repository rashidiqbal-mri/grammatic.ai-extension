
    
//     import React, { useState, useEffect } from 'react';
    
//     const Color = () => {
//         const [selectedText, setSelectedText] = useState('');
//   const [textboxText, setTextboxText] = useState('');

//   useEffect(() => {
//     chrome.runtime.sendMessage({ type: 'getSelectedText' }, (response) => {
//       setSelectedText(response.selectedText || '');
//     });
//   }, []);

//   useEffect(() => {
//     chrome.runtime.sendMessage({ type: 'getTextboxText' }, (response) => {
//       setTextboxText(response.textboxText || '');
//     });
//   }, []);

//   const text =textboxText;
//    const wordsToUnderline = ['problem-solving', 'developer', 'high-quality'];
//    const underlineColors = ['blue', '#ff0000', '#ff0000'];

  
//       return (
//         <div>Color</div>
//       )
//     }
    
//     export default Color
    
    

   


