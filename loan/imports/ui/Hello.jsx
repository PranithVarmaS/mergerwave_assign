// import React, { useState } from 'react';

// export const Hello = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       <button onClick={increment}>Click Me</button>
//       <p>You've pressed the button {counter} times.</p>
//     </div>
//   );
// };

// imports/ui/Hello.jsx
import React, { useState } from 'react';

export const Hello = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const registerUser = () => {
    Meteor.call('users.register', email, role, (error, userId) => {
      if (error) {
        console.error(error.reason);
      } else {
        console.log('User registered with ID:', userId);
      }
    });
  };

  return (
    <div>
      <h1>Welcome to Mergerwave</h1>
      <label>Email:</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Role:</label>
      <input type="text" onChange={(e) => setRole(e.target.value)} />
      <br />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};
