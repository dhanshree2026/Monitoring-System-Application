// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Auth.css";

// function Login() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     username: "",
//     password: "",
//   });

//   const handleLogin = () => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (
//       storedUser &&
//       storedUser.username === user.username &&
//       storedUser.password === user.password
//     ) {
//       alert("Login Successful!");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Admin Login</h2>

//         <input
//           placeholder="Username"
//           onChange={(e) => setUser({ ...user, username: e.target.value })}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />

//         <button onClick={handleLogin}>Login</button>

//         <p className="link" onClick={() => navigate("/")}>
//           Create Account
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// 1..

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === user.username &&
      storedUser.password === user.password
    ) {
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      {/* LEFT SIDE (illustration area) */}
      <div className="auth-left">
        <h1>Monitoring System</h1>
        <p>Secure access to infrastructure monitoring dashboard</p>
      </div>

      {/* RIGHT SIDE (form) */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Sign In</h2>

          <input
            placeholder="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button onClick={handleLogin}>Login</button>

          <p className="link" onClick={() => navigate("/")}>
            Create Account
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
