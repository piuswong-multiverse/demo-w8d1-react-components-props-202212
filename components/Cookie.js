import React from 'react';

const Cookie = (props) => {
    return( // JSX goes inside here
        <div>
            <h2>Have {props.numberOfCookies} cookies, {props.name}, because you are great!</h2>
        </div>
    )
};

export default Cookie;