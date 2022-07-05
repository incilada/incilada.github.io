import "./style.css";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment/locale/tr";

const Banner = (props) => {
  const banner = props.about;
  return (
    <div className="banner-info">
      <div className="col-md-7 header-right">
        <h1>Merhaba</h1>
        <h6>{banner.jobDesc}</h6>
        <ul className="address">
          <li>
            <ul className="address-text">
              <li>
                <b>ADI</b>
              </li>
              <li>{banner.name}</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>DOĞUM</b>
              </li>
              <li>
                <Moment format="DD MMM yyyy" locale="tr">
                  {banner.birthday}
                </Moment>
              </li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>TELEFON</b>
              </li>
              <li>{banner.phone}</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>ADRES </b>
              </li>
              <li>{banner.address}</li>
            </ul>
          </li>
          <li>
            <ul className="address-text">
              <li>
                <b>E-MAIL </b>
              </li>
              <li>
                <a href={`mailto:${banner.email}`}> {banner.email}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="col-md-5 header-left">
        <img src={banner.imgSrc} alt={banner.email} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

export default connect(mapStateToProps)(Banner);
