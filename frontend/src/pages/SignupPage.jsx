import React, { useState, useEffect, useRef } from "react";
import { app } from "../fbconfig"
import "./signup.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignupPage() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    emailRef.current?.focus();
  }, [isSignup]);

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password || (isSignup && !confirmPassword)) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (isSignup && !validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long with 1 uppercase, 1 lowercase, 1 number, and 1 special character."
      );
      setLoading(false);
      return;
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful. Redirecting to login page...");
        navigate("/login");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      navigate("/dashboard");
    } catch (error) {
      console.error("Guest login error:", error.message);
      setError(error.message);
    }
  };

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>{isSignup ? "Signup" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {isSignup && (
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : isSignup ? "Signup" : "Login"}
          </button>
        </form>

        <button onClick={handleGuestLogin} className="guest-button">
          Guest Login
        </button>

        <p onClick={handleToggle} className="toggle-auth">
          {isSignup
            ? "Already have an account? Click here to Login"
            : "Don't have an account? Click here to Signup"}
        </p>
      </div>
    </div>
  );
}

export default SignupPage;