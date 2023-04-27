import React, { useState, useEffect } from 'react';
import "../assets/tailwind.css"
import {Magic} from './components/Magic';


const menu = () => {
  const [selectedText, setSelectedText] = useState('');
  const [textboxText, setTextboxText] = useState('');

  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'getSelectedText' }, (response) => {
      setSelectedText(response.selectedText || '');
    });
  }, []);

  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'getTextboxText' }, (response) => {
      setTextboxText(response.textboxText || '');
    });
  }, []);
  const text =textboxText;
   const wordsToUnderline = ['bug', 'develuper', 'high-quality'];
   const underlineColors = ['green', '#ff0000', '#ff0000'];

    return (

      
      <>
      <div className='w-full h-screen'>
      <div className="fixed top-0 left-0 w-full h-16 bg-white">

        <div className="bg-white h-full flex items-center ml-4">
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="Rewrite">
            <img src="rewrite.png" alt="icon 1" className="h-3" />
          </button>
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="Casual tone">
            <img src="sneakers.png" alt="icon 2" className="h-3" />
          </button>
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="Formal tone">
            <img src="suitcase.png" alt="icon 3" className="h-3" />
          </button>
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="Shorten">
            <img src="collapse.png" alt="icon 4" className="h-3" />
          </button>
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="Expand">
            <img src="scalability.png" alt="icon 5" className="h-3" />
          </button>
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="Grammer">
            <img src="book.png" alt="icon 6" className="h-3" />
          </button>
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="settings">
            <img src="settings.png" alt="icon 6" className="h-3" />
          </button>
          
        </div>
      </div>



        <div className="h-80vh overflow-y-auto">
          
        <p className="text-gray-700 font-medium text-base p-4 pt-16 text-justify ">
        <Magic text={text} words={wordsToUnderline} colors={underlineColors} />
        </p>
      </div>
      
            
     

      <div className="fixed bottom-0 left-0 w-full h-16 bg-white">
        <div className="flex justify-between items-center py-4 px-6">
        <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="previous">
            <img src="left-arrow.png" alt="icon 1" className="h-3" /><span className='text-black px-4'>Prev</span>
          </button>
          
          <button className="bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center" title="next">
          <span className='text-black px-4 '>Next</span>
            <img src="next.png" alt="icon 1" className="h-3" />
          </button>
        </div>
      </div>
      </div>
      </>
    );
  };
  
  export default menu;
  
  
















// import React, { useState, useEffect } from 'react';
// import '../assets/tailwind.css';

// const Menu = () => {
//   const [selectedText, setSelectedText] = useState('');
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

//   const handleTextboxChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     chrome.runtime.sendMessage({ type: 'textboxText', text: event.target.value });
//   };

//   const correctedText = textboxText.replace('doon', 'done');
//   const isCorrected = correctedText !== textboxText;
//   const incorrectWord = 'doon';
//   const correctedWord = 'done';
//   const textArray = textboxText.split(incorrectWord);

//   return (
//     <div>
//       <p className="text-4xl">Text is: </p>
//       {isCorrected ? (
//         <p className="text-4xl">
//           {textArray.map((text, index) => {
//             return (
//               <React.Fragment key={index}>
//                 {text}
//                 {index !== textArray.length - 1 && (
//                   <span className="text-red-600 underline">{incorrectWord}</span>
//                 )}
//               </React.Fragment>
//             );
//           })}
//           <br/>
//           <p className="text-4xl">correct Word is </p>
//           <span className="text-green-600 underline">{correctedWord}</span>
//         </p>
//       ) : (
//         <p className="text-4xl">{textboxText}</p>
//       )}

   
//     {isCorrected && (
//         <p className="text-4xl">
//           Corrected text is: <span className="text-green-600">{correctedText}</span>
//         </p>
//       )}
//       <p className="text-4xl">Selected Text is: </p>
//       <p className="text-4xl text-blue-700">{selectedText}</p>
//     </div>
//   );
// };

// export default Menu;
