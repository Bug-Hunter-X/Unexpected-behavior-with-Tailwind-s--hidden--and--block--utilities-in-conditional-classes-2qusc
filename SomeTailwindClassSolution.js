```javascript
// SomeTailwindClassSolution.js
import { useState } from 'react';

const SomeTailwindClassSolution = () => {
  const [show, setShow] = useState(false);
  const visibilityClass = show ? 'block' : 'hidden';

  return (
    <div className={`bg-red-500 p-4 ${visibilityClass}`} >
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default SomeTailwindClassSolution;
```