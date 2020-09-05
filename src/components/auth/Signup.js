import React from "react";
import useAuthForm from "../../hooks/useAuthForm";

const Signup = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  } = useAuthForm("signup");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <button>Signup</button>
    </form>
  );
};

export default Signup;
