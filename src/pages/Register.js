// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Register.css"; // ✅ correct import

// function Register() {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("");
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//     department: "",
//     accessLevel: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const userData = { ...form, role };
//     localStorage.setItem("user", JSON.stringify(userData));

//     alert("Registration Successful!");
//     navigate("/login");
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Create Account</h2>

//         {/* Role Selection */}
//         <div className="role-selection">
//           <div
//             className={`role-card ${role === "admin" ? "active" : ""}`}
//             onClick={() => setRole("admin")}
//           >
//             Admin
//           </div>

//           <div
//             className={`role-card ${role === "tech" ? "active" : ""}`}
//             onClick={() => setRole("tech")}
//           >
//             Technical Admin
//           </div>

//           <div
//             className={`role-card ${role === "dept" ? "active" : ""}`}
//             onClick={() => setRole("dept")}
//           >
//             Department
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <input
//             placeholder="Username"
//             required
//             onChange={(e) =>
//               setForm({ ...form, username: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             onChange={(e) =>
//               setForm({ ...form, password: e.target.value })
//             }
//           />

//           {role === "dept" && (
//             <input
//               placeholder="Department Name"
//               onChange={(e) =>
//                 setForm({ ...form, department: e.target.value })
//               }
//             />
//           )}

//           {role === "tech" && (
//             <select
//               onChange={(e) =>
//                 setForm({ ...form, accessLevel: e.target.value })
//               }
//             >
//               <option value="">Select Access Level</option>
//               <option value="L1">Level 1</option>
//               <option value="L2">Level 2</option>
//               <option value="L3">Level 3</option>
//             </select>
//           )}

//           <button disabled={!role}>Register</button>
//         </form>

//         <p onClick={() => navigate("/login")}>
//           Already have account? Login
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;

//1...

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
    department: "",
    accessLevel: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { ...form, role };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>Create Account</h1>
        <p>Register to access monitoring system</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Register</h2>

          {/* Role Selection */}
          <div className="roles">
            <div
              className={`role ${role === "admin" ? "active" : ""}`}
              onClick={() => setRole("admin")}
            >
              Admin
            </div>

            <div
              className={`role ${role === "tech" ? "active" : ""}`}
              onClick={() => setRole("tech")}
            >
              Tech Admin
            </div>

            <div
              className={`role ${role === "dept" ? "active" : ""}`}
              onClick={() => setRole("dept")}
            >
              Department
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            {role === "dept" && (
              <input
                placeholder="Department Name"
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
              />
            )}

            {role === "tech" && (
              <select
                onChange={(e) =>
                  setForm({ ...form, accessLevel: e.target.value })
                }
              >
                <option value="">Access Level</option>
                <option value="L1">Level 1</option>
                <option value="L2">Level 2</option>
                <option value="L3">Level 3</option>
              </select>
            )}

            <button disabled={!role}>Register</button>
          </form>

          <p className="link" onClick={() => navigate("/login")}>
            Already have account? Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
