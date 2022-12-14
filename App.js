// This is 'top-level' component of our React app

import React from 'react';
import Cookie from './components/Cookie';

//create the component
const App = () => {

    const names = ["Pius", "Kobi", "Spot", "Zero"];

    return( // JSX goes in here!!  You can only have ONE element as the parent in there
        <div>
            <h1>Nicebot!</h1>
            <p>This is a paragraph with math: { Math.random() } </p>
            <Cookie 
                name={names[0]} 
                numberOfCookies={2} />
            <Cookie 
                name={names[1]} 
                numberOfCookies={100} />
        </div>
    );
}

export default App;