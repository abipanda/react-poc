import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increase}>Count {count}</button>
        </div>
    )
}

export default HookCounter