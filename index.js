import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')); // "injecting" react into the root
root.render(<h1>HELLO I am alive</h1>);
