import "./style.css";
import { connect } from "react-redux";

const Technologies = (props) => {
  return (
    <div id="services" className="services">
      <div className="container">
        <div className="service-head one text-center ">
          <h3>
            <span>TEKNOLOJİLER</span>
          </h3>
          <span className="border two"></span>
        </div>
        <div className="wthree_about_right_grids w3l-agile ">
          <div className="col-md-9 col-xs-12 col-sm-9 wthree_about_right_grid centered">
            <div className="wthree_about_right_grid_right">
              {props?.tech?.map((item) => (
                <div
                  key={item.id}
                  className="col-md-2 col-xs-4 col-sm-4 wthree_about_right_grid"
                >
                  <div className="wthree_about_right_grid_left">
                    <div className="hvr-rectangle-in">
                      <img
                        className="img-fluid"
                        src={item.imgSrc}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tech: state.technologies,
  };
};

export default connect(mapStateToProps)(Technologies);
