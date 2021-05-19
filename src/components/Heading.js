import React from "react";
import '../asset/style/Heading.css';
export const Heading=()=>{
   

  return (
    <header>
      <div className="big_head">
        <div className="logo">
          <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="coinbase logo" />
        </div>

        <ul className="following_links">
          <li>Prices</li>
          <li>Learn</li>
          <li>Individuals</li>
          <li>Businesses</li>
          <li>Developers</li>
          <li>Company</li>
        </ul>

        <ul className="auth_links">
          <li className="login">Sign in</li>
          <li className="move">Get started</li>
        </ul>
      </div>
    </header>
  );
}
export default Heading;

