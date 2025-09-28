import { useRef } from "react";
export function FocusInput() {
    const inputRef = useRef();
  
    const focusInput = () =>{ inputRef.current.focus()

        console.log(inputRef)
    };
  
    return (
      <>
        <input ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
      </>
    );
  }
  