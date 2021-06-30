import logo from "../../assets/instagram-logo.png";
import userImg from "../../assets/profile.jpeg";

import "./styles.css";
import { Button } from "../button";

export default function Login() {
  return (
    <div className="login-wrap">
      <img className="logo" src={logo} alt="Instagram" />
      <img className="userImg" src={userImg} alt="Profile" />
      <Button name="thamy.me"></Button>
      <div>
        <span>
          Não é thamy.me? <a href="e">Trocar de conta</a>
        </span>
      </div>
    </div>
  );
}
