// TextInput.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput';

test('renders TextInput with placeholder', () => {
  render(<TextInput onSave={() => {}} />);
  expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
});

test('allows users to input text and save', () => {
  const mockOnSave = jest.fn();
  render(<TextInput onSave={mockOnSave} />);

  // ユーザーがテキストを入力
  fireEvent.change(screen.getByPlaceholderText('Enter text'), {
    target: { value: 'New text' },
  });

  // 保存ボタンをクリック
  fireEvent.click(screen.getByText('Save'));

  // onSaveが正しい値で呼び出されたことを確認
  expect(mockOnSave).toHaveBeenCalledWith('New text');

  // テキストフィールドがクリアされていることを確認
  expect(screen.getByPlaceholderText('Enter text').value).toBe('');
});
