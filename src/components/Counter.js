import { useState } from 'react'
import logo from '../logo.svg';


function Counter() {
  let [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1);
  }
  const removeOne = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  const imgCounter = () => {
    let imgArray = [];

    for (let i = 0; i < number; i++) {
      imgArray.push(
      <img src={logo} className="App-logo" alt="logo" key={i} />
      )
    }
    return imgArray;
  }

  return (
    <>
    <div className='counter'>
      <button className='remove-one' onClick={removeOne}>Remove one</button>
      <p className='number'>{number}</p>
      <button className='add-one' onClick={addOne}>Add one</button>
    </div>
      <div className='img-container'>{imgCounter()}</div>
    </>
  )
}

export default Counter