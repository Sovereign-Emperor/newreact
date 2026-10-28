import React, { useState } from 'react';
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counterDiv">
            <button className='counterBtn' onClick={() => setCount(count - 1)}>
                -
            </button>
            <p> {count}</p>
            <button className='counterBtn' onClick={() => setCount(count + 1)}>
                + 
            </button>
        </div>
    );
}

export default Counter;