import { useRef } from 'react';
import './App.css';
import { useClickAnimation } from './useClickAnimation';

function App() {
  const buttonRef = useRef();
  const buttonRef2 = useRef();
  const cardRef = useRef();

  useClickAnimation(buttonRef, {
    color: 'white',
    size: 50,
    duration: 600,
    effectName: 'ripple',
  });

  useClickAnimation(buttonRef2, {
    color: 'white',
    size: 100,
    duration: 1600,
    effectName: 'square-rotate',
  });

  useClickAnimation(cardRef, {
    color: '#007e9e',
  });

  return (
    <div className="App">
      <div className="button-container">
        <button ref={buttonRef} type="button">
          <span>A button</span>
        </button>
      </div>
      <div className="button-container">
        <button ref={buttonRef2} type="button">
          <span>Another button</span>
        </button>
      </div>
      <div className="card-container">
        <div className="card" ref={cardRef}>
          a card
        </div>
      </div>
    </div>
  );
}

export default App;
