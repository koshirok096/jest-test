// TextInput.js
import React, { useState } from 'react';

function TextInput({ onSave }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSave(inputValue);
    setInputValue(''); // 入力を保存した後、入力フィールドをクリア
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default TextInput;
