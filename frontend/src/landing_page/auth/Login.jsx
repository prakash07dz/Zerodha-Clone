import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setValidationError({});

    // Validation
    const errors = {};
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.password.trim()) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
      setValidationError(errors);
      return;
    }

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    setIsLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/auth/login`, formData);
      localStorage.setItem("token", res.data.token); // Store token in localStorage
      console.log("Logged in successfully");

      // Redirect to the dashboard subdomain
      window.location.href =
        "https://dashboard-zerodha-yzui.onrender.com/dashboard";
    } catch (err) {
      const errorMessage = err.response?.data?.error || "An error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>

              {error && <div className="alert alert-danger">{error}</div>}

              {validationError.email && (
                <div className="alert alert-danger">
                  {validationError.email}
                </div>
              )}
              {validationError.password && (
                <div className="alert alert-danger">
                  {validationError.password}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}{" "}
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign up here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
