import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="d-flex flex-column m-5">
      <h1 className="align-self-center text-secondary">Admin Panel</h1>
      <div className="cards d-flex flex-wrap ">
        <Link className="card flex-grow-1 bg-primary text-light" to={"about"}>
          <div className="icon">
            <i className="person-icon"></i>
          </div>
          <span>Hakkında</span>
        </Link>
        <Link
          className="card flex-grow-1 bg-success text-light"
          to={"education"}
        >
          <div className="icon">
            <i className="cap-icon"></i>
          </div>
          <span>Eğitim</span>
        </Link>
        <Link className="card flex-grow-1 bg-danger text-light" to={"tech"}>
          <div className="icon">
            <i className="tech-icon"></i>
          </div>
          <span>Teknolojiler</span>
        </Link>
        <Link
          className="card flex-grow-1 bg-light text-secondary"
          to={"projects"}
        >
          <div className="icon">
            <i className="portfolio-icon"></i>
          </div>
          <span>Proje</span>
        </Link>
        <Link
          className="card flex-grow-1 bg-info text-light"
          to={"certificate"}
        >
          <div className="icon">
            <i className="certificate-icon"></i>
          </div>
          <span>Sertifika</span>
        </Link>
        <Link className="card flex-grow-1 bg-secondary text-light" to={"event"}>
          <div className="icon">
            <i className="event-icon"></i>
          </div>
          <span>Etkinlik</span>
        </Link>
        <Link className="card flex-grow-1 bg-warning text-light" to={"contact"}>
          <div className="icon">
            <i className="contact-icon"></i>
          </div>
          <span>İletişim</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
