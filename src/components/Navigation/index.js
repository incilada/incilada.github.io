import "./style.css";
import menu from "../../assets/images/menu.png";
import { useState } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-nav">
      <div className="navigation">
        <div className="navigation-right">
          <span className="menu" onClick={openMenu}>
            <img src={menu} alt="menu" />
          </span>
          <nav className="link-effect-3" id="link-effect-3">
            <ul className="nav1 nav nav-wil">
              <li>
                <a data-hover="HAKKINDA" href="#about">
                  HAKKINDA
                </a>
              </li>
              <li>
                <a data-hover="EĞİTİM" href="#work">
                  EĞİTİM
                </a>
              </li>
              <li>
                <a data-hover="TEKNOLOJİLER" href="#services">
                  TEKNOLOJİLER
                </a>
              </li>
              <li>
                <a data-hover="PROJE" href="#port">
                  PROJE
                </a>
              </li>
              <li>
                <a data-hover="SERTİFİKA" href="#sertifika">
                  SERTİFİKA
                </a>
              </li>
              <li>
                <a data-hover="ETKİNLİK" href="#blogs">
                  ETKİNLİK
                </a>
              </li>
              <li>
                <span
                  className="glyphicon glyphicon-download-alt"
                  style={{ color: "white" }}
                  aria-hidden="true"
                >
                  <a target="_blank" href="Aşık_Fatma_CV.pdf">
                    CV (PDF)
                  </a>
                </span>
              </li>
              <li>
                <a data-hover="İLETİŞİM" href="#contact">
                  İLETİŞİM
                </a>
              </li>
            </ul>
            <ul
              className="nav1 nav nav-wil hide"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <li>
                <a data-hover="HAKKINDA" href="#about">
                  HAKKINDA
                </a>
              </li>
              <li>
                <a data-hover="EĞİTİM" href="#work">
                  EĞİTİM
                </a>
              </li>
              <li>
                <a data-hover="TEKNOLOJİLER" href="#services">
                  TEKNOLOJİLER
                </a>
              </li>
              <li>
                <a data-hover="PROJE" href="#port">
                  PROJE
                </a>
              </li>
              <li>
                <a data-hover="SERTİFİKA" href="#sertifika">
                  SERTİFİKA
                </a>
              </li>
              <li>
                <a data-hover="ETKİNLİK" href="#blogs">
                  ETKİNLİK
                </a>
              </li>
              <li>
                <span
                  className="glyphicon glyphicon-download-alt"
                  style={{ color: "white" }}
                  aria-hidden="true"
                >
                  <a target="_blank" href="Aşık_Fatma_CV.pdf">
                    CV (PDF)
                  </a>
                </span>
              </li>
              <li>
                <a data-hover="İLETİŞİM" href="#contact">
                  İLETİŞİM
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
