import "./style.css";
import { connect } from "react-redux";
import moment from "moment";

const Education = (props) => {
  const colors = ["primary", "danger", "success", "warning", "info"];
  props.education.sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
  return (
    <div id="work" className="work">
      <div className="container">
        <div className="service-head text-center">
          <h3>
            <span>EĞİTİM</span>
          </h3>
          <span className="border one"></span>
        </div>
        <div className="time-main w3l-agile">
          <ul className="list">
            {props.education?.map((item, index) => (
              <li key={item.id}>
                <div className="field flex-grow-1">
                  <div className="year">
                    {item.startDate && (
                      <span>
                        {" "}
                        {moment(item.startDate, "YYYY-MM").format("YYYY")}{" "}
                      </span>
                    )}
                    <span> - </span>
                    {item.endDate && (
                      <span>
                        {" "}
                        {moment(item.endDate, "YYYY-MM").format("YYYY")}{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="field timeline flex-grow-0">
                  <div className={`timeline-badge bg-${colors[index % 7]}`}>
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                </div>
                <div className="field flex-grow-2">
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">{item.schoolName}</h4>
                    </div>
                    <div className="timeline-body">
                      <h5>{item?.department} </h5>
                      <p>{item?.desc}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* <ul className="col-md-6 timeline">
            {
              props.education?.map((item) => (
                <li key={item.id}>
                  <div className="timeline-badge info">
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">{item.schoolName}</h4>
                    </div>
                    <div className="timeline-body">
                      <h5>{item?.department} </h5>
                      <p>{item?.desc}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.education,
  };
};

export default connect(mapStateToProps)(Education);
