import React from 'react';
import './form.css';

function Form({ username, setUserName, userName, isLogin }) {
  return (
    <form>
      <div className="username">
        <label htmlFor="username-name" className="username-font">
          Username
          <input
            className={username ? 'username-box-used' : 'username-box'}
            type="username"
            label="Create Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Username"
          />
        </label>

        {isLogin === 'true' ? (
          <p className={username ? 'username-used' : 'username-not-used'}>
            Username doesn&apos;t exist!
          </p>
        ) : (
          <p className={username ? 'username-used' : 'username-not-used'}>
            Username already taken!
          </p>
        )}
      </div>
    </form>
  );
}

export default Form;