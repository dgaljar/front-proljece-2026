import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import "./sign.css";
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

//   ako smo već prijavljeni dohavacamo token iz lokalsotragea
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      "https://front3.edukacija.online/backend/wp-json/jwt-auth/v1/token",
      options,
    );

    console.log("response" + response);

    const result = await response.json();

    console.log("result" + result);

    if (result.code) {
      setError("Wrong email or password");
      setLoading(false);
    }

    localStorage.setItem("token", result.token);
    localStorage.setItem("username", result.user_display_name);

    navigate("/");
    window.location.reload();
  };

  return (
    <div id="auth" className="container-fluid">
      <div className="row">
        <div className="d-none d-md-flex col-md-7 auth-left">
          <h1>GoFinance</h1>
          <p>The most popular peer to peer lending at SEA</p>
          <button>Read More</button>
        </div>
        <div className="col-md-5 auth-right">
          <div>
            <h2>Hello Again!</h2>
            <p>Welcome back</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faUser} />
              <input
                name="username"
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faLock} />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button disabled={loading} type="submit">
              Login
            </button>
          </form>
          <a href="/forgot-pass">Forgot Password</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
