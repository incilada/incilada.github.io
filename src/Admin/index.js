import "./style.css";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { CryptoService } from "../cryptoService";

const Admin = () => {
  const isLocal = window.location.href.includes("localhost");

  const saveOnServer = () => {
    const cryptoService = new CryptoService();
    const newData = JSON.parse(
      cryptoService.decrypt(localStorage.getItem("data"))
    );
    axios.post("http://localhost:4200/data", { ...newData }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="d-flex h-100 overflow-hidden">
      <nav
        className="h-100 navbar navbar-expand-lg shadow"
        style={{ width: "250px" }}
      >
        <div className="h-100 container flex-column p-0">
          <div className="h-25 d-flex align-items-center">
            <NavLink
              className="navbar-brand"
              to="/admin"
              style={{ color: "#334764" }}
            >
              Admin Panel
            </NavLink>
          </div>
          <div
            className="h-75 w-100 d-flex flex-column justify-content-between"
            id="navbarText"
          >
            <div className="nav flex-column w-100 ">
              <NavLink
                className="border-top nav-item link"
                activeclassname="active"
                to="about"
              >
                Hakkında
              </NavLink>
              <NavLink
                className="border-top nav-item link"
                activeclassname="active"
                to="education"
              >
                Eğitim
              </NavLink>
              <NavLink
                className="border-top nav-item link"
                activeclassname="active"
                to="tech"
              >
                Teknolojiler
              </NavLink>
              <NavLink
                className="border-top nav-item link"
                activeclassname="active"
                to="projects"
              >
                Proje
              </NavLink>
              <NavLink
                className="border-top nav-item link"
                activeclassname="active"
                to="certificate"
              >
                Sertifika
              </NavLink>
              <NavLink
                className="border-top nav-item link"
                activeclassname="active"
                to="event"
              >
                Etkinlik
              </NavLink>
              <NavLink
                className="border-top border-bottom nav-item link"
                activeclassname="active"
                to="contact"
              >
                İletişim
              </NavLink>
            </div>
            {isLocal && (
              <Button onClick={saveOnServer} className="m-2">
                Sunucu'ya Kaydet
              </Button>
            )}
          </div>
        </div>
      </nav>

      <div className="col overflow-auto">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Link className="close-button" to="/">
        <i className="bi bi-x-lg"></i>
      </Link>
    </div>
  );
};

export default Admin;
