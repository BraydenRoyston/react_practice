import React, {useState} from 'react';
import './App.css';

function Tweet(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
        else {
            setCount(0);
        }
    }

    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h4>Total Likes: {count}</h4>
            <button onClick={increment}>click to like :D</button>
            <button onClick={decrement}>click to dislike >:(</button>
        </div>
    )
}

export default Tweet;