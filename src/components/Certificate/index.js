import { connect } from "react-redux";
import "./style.css";

const Certificates = (props) => {
  return (
    <div id="sertifika" className="services">
      <div className="container">
        <div className="service-head one text-center ">
          <h3>
            <span>SERTİFİKALAR</span>
          </h3>
          <span className="border two"></span>
        </div>
        <div className="wthree_about_right_grids w3l-agile sertifikalar">
          {props.certificates.map((item) => (
            <div
              key={item.id}
              className="col-md-12 wthree_about_right_grid sertifika"
            >
              <div className="col-xs-12 wthree_about_right_grid_right">
                <h4>- {item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    certificates: state.certificates,
  };
};

export default connect(mapStateToProps)(Certificates);
