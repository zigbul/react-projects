import { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus on input</button>
    </div>
  );
};

export default FocusInput;
