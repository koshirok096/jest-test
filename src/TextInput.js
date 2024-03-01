import React, { useState } from 'react';

function TextInput({ onSave }) {
  // `useState`を使わずに`var`を使用している点をそのままにして、
  // `useState`をインポートしているが使用していないため、未使用の変数のエラーを発生させます。
  var inputValue = '';

  // 明らかな構文エラーを導入するために、関数の閉じ括弧を削除
  const handleChange = (event => {
    inputValue=event.target.value; // 代入の前後にスペースがない（フォーマットのエラー）
  // 閉じ括弧がないため、構文エラーを発生させます。

  const handleSubmit = () => {
    onSave(inputValue); // この行は正しく修正されましたが、
    // 入力をクリアするためのコードを意図的に欠けさせることでエラーを発生させます（ビジネスロジックのエラーではなく、意図した機能の不足）
  };

  return (
    <div>
      <input
        type="text" // ESLintの推奨に従いダブルクォートを使用
        value={inputValue}
        onChange={handleChange} // handleChangeが正しく閉じられていないため、ここでエラーが発生します。
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default TextInput;


// import React, { useState } from 'react';

// function TextInput({ onSave }) {
//   var inputValue = ''; // `var` の使用は推奨されない（`const` や `let` の使用を推奨）

//   const handleChange = (event) =>{
//     inputValue=event.target.value; // スペースの不足
//   };

//   const handleSubmit = ()=>{
//     onSave(inputValue)
//     // セミコロンの不足と、入力をクリアするためのコードが欠けている
//   };

//   return ( 
//     <div>
//       <input
//         type='text' // ダブルクォートではなく、シングルクォートを使用している
//         value={inputValue}
//         onChange={handleChange}
//         placeholder='Enter text' // ダブルクォートの使用を推奨
//       />
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// }

// export default TextInput;




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
