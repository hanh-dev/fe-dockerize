'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('@testing-library/react');
const Test_1 = __importDefault(require('../src/components/Test'));
describe('Homepage testing', () => {
  it('Should display Test', () => {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(Test_1.default, {}));
    expect(react_1.screen.getByText('Test')).toBeInTheDocument();
  });
});
