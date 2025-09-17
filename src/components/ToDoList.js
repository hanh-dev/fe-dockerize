import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return _jsxs('div', {
    style: {
      maxWidth: 400,
      margin: '40px auto',
      padding: 20,
      border: '1px solid #ccc',
      borderRadius: 8,
    },
    children: [
      _jsx('h2', { children: 'Hanh Hio ToDoList' }),
      _jsx('input', {
        type: 'text',
        value: input,
        onChange: (e) => setInput(e.target.value),
        placeholder: 'Nh\u1EADp vi\u1EC7c c\u1EA7n l\u00E0m...',
        style: { width: '70%', padding: 8, marginRight: 8 },
      }),
      _jsx('button', {
        onClick: handleAddTask,
        style: { padding: 8 },
        children: 'Th\u00EAm',
      }),
      _jsx('ul', {
        style: { marginTop: 20 },
        children: tasks.map((task, idx) =>
          _jsxs(
            'li',
            {
              style: { marginBottom: 10 },
              children: [
                task,
                _jsx('button', {
                  onClick: () => handleRemoveTask(idx),
                  style: { marginLeft: 12, padding: '2px 8px' },
                  children: 'X\u00F3a',
                }),
              ],
            },
            idx,
          ),
        ),
      }),
    ],
  });
};
export default ToDoList;
