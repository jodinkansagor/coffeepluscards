// import React, { useState, useEffect } from "react";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const user = {
//       email: email,
//       password: password,
//     };
//     fetch(
//       "https://cors-anywhere.herokuapp.com/http://coffeepluscardspdx.herokuapp.com/api/v1/auth/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       }
//     )
//       .then((res) => res.json())
//       .then((user) => {
//         console.log(user);
//       });
//   };

//   return (
//     <div className="login">
//       <form className="auth-form standard" id="form" onSubmit={handleLogin}>
//         <h4>Log In</h4>
//         <p>
//           <input
//             label="Email"
//             id="signin-email"
//             type="email"
//             name="email"
//             required
//             placeholder="you@somewhere.com"
//             value={email}
//             onChange={({ target }) => setEmail(target.value)}
//           />
//         </p>
//         <p>
//           <input
//             label="Password"
//             id="signin-password"
//             type="password"
//             name="password"
//             required
//             placeholder="********"
//             value={password}
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </p>
//         <div>
//           <button>Log In</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     const user = {
//       username: username,
//       email: email,
//       password: password,
//     };
//     fetch(
//       "https://cors-anywhere.herokuapp.com/http://coffeepluscardspdx.herokuapp.com/api/v1/auth/signup",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       }
//     )
//       .then((res) => res.json())
//       .then((user) => {
//         console.log(user);
//       });
//   };

//   return (
//     <div className="signup">
//       <form className="auth-form standard" id="form" onSubmit={handleSignUp}>
//         <h4>Create an account</h4>
//         <p>
//           <input
//             label="Name"
//             id="username"
//             name="username"
//             required
//             placeholder="Your Name"
//             value={username}
//             onChange={({ target }) => setUsername(target.value)}
//           />
//         </p>
//         <p>
//           <input
//             label="Email"
//             id="email"
//             type="email"
//             name="email"
//             required
//             value={email}
//             onChange={({ target }) => setEmail(target.value)}
//             placeholder="you@somewhere.com"
//           />
//         </p>
//         <p>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             label="Password"
//             required
//             value={password}
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </p>
//         <div className="bottom-buttons">
//           <button>Sign Up</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const Auth = () => {
//   const [user, setUser] = useState(null);

//   function verifyLogin() {
//     fetch(
//       "https://cors-anywhere.herokuapp.com/http://coffeepluscardspdx.herokuapp.com/api/v1/auth/verify",
//       {
//         credentials: "include",
//       }
//     )
//       .then((res) => res.json())
//       .then((userFromFetch) => {
//         setUser(userFromFetch);
//         console.log(user);
//       });
//   }

//   useEffect(() => {
//     verifyLogin();
//   }, []);

//   return (
//     <>
//       <h1>Cards</h1>
//     </>
//   );
// };

// export default Auth;
