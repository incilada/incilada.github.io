import "./style.css";
import { connect } from "react-redux";

const Events = (props) => {
  return (
    <div className="blog" id="blogs">
      <div className="row container mx-md-auto">
        <div className="service-head text-center">
          <h3>
            <span>ETKİNLİKLER</span>
          </h3>
          <span className="border one"></span>
        </div>
        {props.events.map((event, key) => (
          <div key={key} className="my-md-4 news-grid px-md-0">
            <div className="col news-img">
              <span className="news-link">
                <img
                  src={event.imgSrc}
                  alt={event.type}
                  className="img-responsive"
                />
              </span>
            </div>
            <div className="col news-text">
              <h3>
                <span className="news-link">{event.type}</span>
              </h3>
              <h6>{event.title}</h6>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps)(Events);
