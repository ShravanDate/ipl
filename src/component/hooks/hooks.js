import React, { useState , useEffect} from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:

   useEffect( () => {
    document.title = `You clicked ${count} times`;
   })


  return (
    <div>
      { count+2 }
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;