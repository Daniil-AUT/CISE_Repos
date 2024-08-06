import { createRoot } from 'react-dom/client';
import React from 'react';

    import ReactDOM from 'react-dom';
    import App from './App';

    it('renders without crashing', () => {
      const div = document.createElement('div');
      const root = createRoot(div);
      root.render(<App />);
      root.unmount();
    });

    describe('Addition', () => {
      it('The test will pass: knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
    });

    describe('Subtraction', () => {
      it('The test will fail: knows that 5 and 5 make 0', () => {
        expect(5 - 5).toBe(1);
      });
    });
