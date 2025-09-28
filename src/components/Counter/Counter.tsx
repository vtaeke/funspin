import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const clear = () => {
        setCount(0)
    }


    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => clear()}>Очистить</button>
                <p>
                    count is {count}
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Counter
