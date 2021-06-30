import "./App.css";

import Login from "./components/login-box";
import InstagramCel from "./assets/instagram.png";
import CreactAccount from "./components/creat-account";
import DownloadApp from "./components/download-app";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="phone-container">
          <img className="instagram-cel" src={InstagramCel} alt="" />
        </div>
        <div className="login-container">
          <Login />
          <CreactAccount />

          <DownloadApp />
        </div>
      </div>
    </div>
  );
}

export default App;
