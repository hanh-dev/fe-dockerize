import React, { useState } from 'react';

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: 20,
        border: '1px solid #ccc',
        borderRadius: 8,
      }}
    >
      <h2>Hanh Hio ToDoList</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập việc cần làm..."
        style={{ width: '70%', padding: 8, marginRight: 8 }}
      />
      <button onClick={handleAddTask} style={{ padding: 8 }}>
        Thêm
      </button>
      <ul style={{ marginTop: 20 }}>
        {tasks.map((task, idx) => (
          <li key={idx} style={{ marginBottom: 10 }}>
            {task}
            <button
              onClick={() => handleRemoveTask(idx)}
              style={{ marginLeft: 12, padding: '2px 8px' }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;