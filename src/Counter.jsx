import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border:'1px solid red', margin:'10px', padding:'10px'}}>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;