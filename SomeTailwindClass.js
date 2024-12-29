```javascript
// SomeTailwindClass.js
import { useState } from 'react';

const SomeTailwindClass = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={`${show ? 'hidden' : 'block'}  bg-red-500 p-4`}>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default SomeTailwindClass;
```