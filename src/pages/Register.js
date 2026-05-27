import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    designation: "",
    email: "",
    phone: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // VALIDATION FUNCTION
  const validateForm = () => {
    let newErrors = {};

    // Full Name Validation
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    // Designation Validation
    if (!form.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@dept\.gov\.in$/;

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Email must be like name@dept.gov.in";
    }

    // Phone Validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    // Department Validation
    if (!form.department) {
      newErrors.department = "Please select department";
    }

    // Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number & special character";
    }

    // Confirm Password Validation
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      {/* LEFT SIDE */}
      <div className="left-section">
        <div className="logo">
          <span className="logo-icon">▣</span>

          <div>
            <p>MONITORING</p>
            <p>DASHBOARD</p>
          </div>
        </div>

        <div className="dashboard-image">
          <img src="/monitoring-dashboard.png" alt="dashboard" />
        </div>

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

      {/* RIGHT SIDE */}
      <div className="right-section">
        <div className="register-card">
          <div className="user-icon">👤</div>

          <h2>Department User Registration</h2>

          <p className="sub-text">
            Create your account to access the monitoring dashboard
          </p>

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <label>Full Name *</label>

            <input
              type="text"
              placeholder="e.g. Priya Sharma"
              value={form.fullName}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullName: e.target.value,
                })
              }
            />

            {errors.fullName && <p className="error-text">{errors.fullName}</p>}

            {/* DESIGNATION */}
            <label>Designation *</label>

            <input
              type="text"
              placeholder="e.g. Systems Engineer"
              value={form.designation}
              onChange={(e) =>
                setForm({
                  ...form,
                  designation: e.target.value,
                })
              }
            />

            {errors.designation && (
              <p className="error-text">{errors.designation}</p>
            )}

            {/* EMAIL + PHONE */}
            <div className="double-input">
              <div>
                <label>Email *</label>

                <input
                  type="email"
                  placeholder="name@dept.gov.in"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />

                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div>
                <label>Phone Number *</label>

                <input
                  type="text"
                  placeholder="9876543210"
                  maxLength="10"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value.replace(/\D/g, ""),
                    })
                  }
                />

                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>
            </div>

            {/* DEPARTMENT */}
            <label>Department *</label>

            <select
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value,
                })
              }
            >
              <option value="">Select your department</option>

              <option>SENG</option>
              <option>ITSS</option>
              <option>AI</option>
              <option>FOSS</option>
            </select>

            {errors.department && (
              <p className="error-text">{errors.department}</p>
            )}

            {/* ROLE */}
            {/* <label>Role</label> */}

            {/* <div className="role-box"> */}
            {/* <span>DEPT_ADMIN</span> */}

            {/* <p>Assigned by default. Central agency can modify later.</p> */}
            {/* </div> */}

            {/* PASSWORD */}
            <div className="double-input">
              <div>
                <label>Password *</label>

                <input
                  type="password"
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />

                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>

              <div>
                <label>Confirm Password *</label>

                <input
                  type="password"
                  placeholder="Re-enter password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      confirmPassword: e.target.value,
                    })
                  }
                />

                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <button type="submit">Create Account</button>
          </form>

          <div className="security-text">
            🔒 Your information is encrypted and stored securely
          </div>

          <p className="signin-link">
            Already have an account?
            <span onClick={() => navigate("/login")}> Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
