import GooglePlay from "../../assets/playstore.png";
import AppleStore from "../../assets/applestore.png";

import "./styles.css";

export default function DownloadApp() {
  return (
    <div className="download-container">
      <p>Obtenha o aplicativo.</p>
      <div className="downloads">
        <a href="a">
          <img
            className="apple-store"
            src={AppleStore}
            alt="Baixar na Apple Store"
          />
        </a>

        <a href="a">
          <img
            className="google-play"
            src={GooglePlay}
            alt="Baixar no Google Play"
          />
        </a>
      </div>
    </div>
  );
}
