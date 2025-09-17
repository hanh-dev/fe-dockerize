import { jsx as _jsx } from 'react/jsx-runtime';
import './App.css';
import ToDoList from './components/ToDoList';
function App() {
  return _jsx('div', { children: _jsx(ToDoList, {}) });
}
export default App;
