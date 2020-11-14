import React from 'react';
import { render } from 'react-dom';

const div = document.createElement('div');
document.body.insertBefore(div, document.body.children[0]);

const App = () => <p>Hello, World!</p>;

render(<App />, div);
