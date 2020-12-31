import React, {useState} from 'react'; // needed for all components
import Tweet from './Tweet';

function App () {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };


  // tweet stuff
  const [users, setUser] = useState([
    {name: 'one', message: "tweet from me number one!"},
    {name: 'two', message: "tweet from me number 2!"},
    {name: 'three', message: "tweet from me number 3!"}
  ]);

  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}
// curly braces signify javascript
// prop: property that we can define on each individual component

/*
<Tweet name="one" message="tweet from me number one!"/>
<Tweet name="two" message="tweet from me number two!"/>
<Tweet name="three" message="tweet from me number three!"/>
<Tweet name="four" message="tweet from me number four!"/>
<Tweet name="five" message="tweet from me number five!"/>
*/

// increment button / toggle stuff
/*
<div className="app">
  <h1 className={isRed ? 'red' : ""}>Change the colour!</h1>
  <button onClick={increment}>Increment!</button>
  <h1>{count}</h1>
</div>
*/

export default App; // exports the file