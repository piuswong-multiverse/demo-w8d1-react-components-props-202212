// This is 'top-level' component of our React app

import React from 'react';
import Cookie from './components/Cookie';

//create the component
const App = () => {
    return( // JSX goes in here!!  You can only have ONE element as the parent in there
        <div>
            <h1>Nicebot!</h1>
            <p>This is a paragraph with math: { Math.random() } </p>
            <Cookie />
        </div>
    );
}

export default App;