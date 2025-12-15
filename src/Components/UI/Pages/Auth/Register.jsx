import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register() {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AppContext);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({ fname: false, email: false, password: false });

  const fnameValid = fname.trim().length > 0;
  const emailValid = emailRE.test(email);
  const passwordValid = password.length >= 6;
  const formValid = fnameValid && emailValid && passwordValid;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ fname: true, email: true, password: true });
    setError("");
    if (!formValid) return setError("Please fix validation errors");
    try {
      const ok = handleRegister({ fname, email, password });
      if (ok) navigate("/");
      else setError("Registration failed");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-20">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <div>
          <input
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, fname: true }))}
            required
            className="p-2 border rounded w-full"
          />
          {touched.fname && !fnameValid && (
            <p className="text-sm text-red-600 mt-1">Enter your first name</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            required
            className="p-2 border rounded w-full"
          />
          {touched.email && !emailValid && (
            <p className="text-sm text-red-600 mt-1">Enter a valid email</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            required
            className="p-2 border rounded w-full"
          />
          {touched.password && !passwordValid && (
            <p className="text-sm text-red-600 mt-1">Password must be at least 6 characters</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formValid}
          className={`px-4 py-2 rounded text-white ${
            formValid ? "bg-indigo-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Register
        </button>
      </form>
    </div>
  );
}
