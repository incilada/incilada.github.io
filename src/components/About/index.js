import "./style.css";
import { connect } from "react-redux";
import { getAllData } from "../../action";
import { useEffect } from "react";

const About = (props) => {
  const { about } = props;
  useEffect(() => {
    props.getAllData();
  }, [props]);
  return (
    <div id="about" className="about">
      <div className="col-md-6 about-left">
        <div
          id="owl-demo1"
          className="owl-carousel owl-carousel2"
          autoPlay={false}
        >
          <div className="item">
            <div className="about-left-grid">
              <h2>
                Merhaba! Ben <span>{about.name}</span>
              </h2>
              <p>{about.aboutMe}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 about-right"
        style={{
          backgroundImage: `url(` + about.imgSrc + `)`,
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

export default connect(mapStateToProps, { getAllData })(About);
