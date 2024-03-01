import React, { useState } from 'react';

function TextInput({ onSave }) {
  var inputValue = ''; // `var` の使用は推奨されない（`const` や `let` の使用を推奨）

  const handleChange = (event) =>{
    inputValue=event.target.value; // スペースの不足
  };

  const handleSubmit = ()=>{
    onSave(inputValue)
    // セミコロンの不足と、入力をクリアするためのコードが欠けている
  };

  return ( 
    <div>
      <input
        type='text' // ダブルクォートではなく、シングルクォートを使用している
        value={inputValue}
        onChange={handleChange}
        placeholder='Enter text' // ダブルクォートの使用を推奨
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default TextInput;




// // TextInput.js
// import React, { useState } from 'react';

// function TextInput({ onSave }) {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = () => {
//     onSave(inputValue);
//     setInputValue(''); // 入力を保存した後、入力フィールドをクリア
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Enter text"
//       />
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// }

// export default TextInput;
