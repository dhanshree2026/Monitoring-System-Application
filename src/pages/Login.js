import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // DEMO USERS
  const demoUsers = {
    CENTRAL_ADMIN: {
      username: "centraladmin",
      password: "Admin@123",
      role: "CENTRAL_ADMIN",
    },

    CENTRAL_VIEWER: {
      username: "centralviewer",
      password: "Viewer@123",
      role: "CENTRAL_VIEWER",
    },

    DEPT_ADMIN: {
      username: "deptadmin",
      password: "Dept@123",
      role: "DEPT_ADMIN",
    },

    DEPT_VIEWER: {
      username: "deptviewer",
      password: "Viewer@123",
      role: "DEPT_VIEWER",
    },
  };

  // SELECT QUICK DEMO ROLE ONLY
  // const handleDemoSelect = (roleKey) => {
  //   setUser({
  //     ...user,
  //     role: roleKey,
  //   });
  // };

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    // CHECK DEMO USERS
    const matchedDemoUser = Object.values(demoUsers).find(
      (demo) =>
        demo.username === user.username &&
        demo.password === user.password &&
        demo.role === user.role
    );

    if (matchedDemoUser) {
      alert(`${matchedDemoUser.role} Login Successful!`);
      return;
    }

    // CHECK REGISTERED USER
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      (storedUser.email === user.username ||
        storedUser.fullName === user.username) &&
      storedUser.password === user.password
    ) {
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT SECTION */}
      <div className="left-section">
        {/* LOGO */}
        <div className="logo">
          <span className="logo-icon">▣</span>

          <div>
            <p>MONITORING</p>
            <p>DASHBOARD</p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="dashboard-image">
          <img src="/monitoring-dashboard.png" alt="Monitoring Dashboard" />
        </div>

        {/* TEXT */}
        <div className="welcome-text">
          <span>Welcome to</span>

          <h1>Monitoring Dashboard</h1>

          <div className="line"></div>

          <h4>Monitor. Analyze. Optimize.</h4>

          <p>
            Real-time monitoring and intelligent insights to keep your systems
            running at their best.
          </p>

          <div className="footer-text">🔒 Secure. Reliable. Always On.</div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="login-card">
          {/* ICON */}
          <div className="user-icon">👤</div>

          {/* TITLE */}
          <h2 className="login-title">Sign In</h2>

          <p className="sub-text">Please sign in to continue</p>

          {/* FORM */}
          <form onSubmit={handleLogin}>
            {/* USERNAME */}
            <div className="input-group">
              <span className="input-icon">👤</span>

              <input
                type="text"
                placeholder="Username or Email"
                value={user.username}
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <span className="input-icon">🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            {/* OPTIONS */}
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="forgot-password">Forgot password?</span>
            </div>

            {/* BUTTON */}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          {/* QUICK DEMO */}
          {/* <div className="demo-box">
            <p className="demo-title">QUICK DEMO SIGN-IN</p>

            <div className="demo-grid"> */}
          {/* CARD 1 */}
          {/* <div
                className={`demo-card ${
                  user.role === "CENTRAL_ADMIN" ? "active-demo" : ""
                }`}
                onClick={() => handleDemoSelect("CENTRAL_ADMIN")}
              >
                <h5>CENTRAL_ADMIN</h5>
                <p>Whole system - CRUD</p>
              </div> */}

          {/* CARD 2 */}
          {/* <div
                className={`demo-card ${
                  user.role === "CENTRAL_VIEWER" ? "active-demo" : ""
                }`}
                onClick={() => handleDemoSelect("CENTRAL_VIEWER")}
              >
                <h5>CENTRAL_VIEWER</h5>
                <p>Whole system - Read only</p>
              </div> */}

          {/* CARD 3 */}
          {/* <div
                className={`demo-card ${
                  user.role === "DEPT_ADMIN" ? "active-demo" : ""
                }`}
                onClick={() => handleDemoSelect("DEPT_ADMIN")}
              >
                <h5>DEPT_ADMIN</h5>
                <p>SENG - CRUD</p>
              </div> */}

          {/* CARD 4 */}
          {/* <div
                className={`demo-card ${
                  user.role === "DEPT_VIEWER" ? "active-demo" : ""
                }`}
                onClick={() => handleDemoSelect("DEPT_VIEWER")}
              >
                <h5>DEPT_VIEWER</h5>
                <p>SENG - Read only</p>
              </div>
            </div>
          </div> */}

          {/* SECURITY */}
          <div className="security-text">
            🔒 Secure access to your monitoring system
          </div>

          {/* REGISTER */}
          <p className="signin-link">
            New to the platform?
            <span onClick={() => navigate("/")}> Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
