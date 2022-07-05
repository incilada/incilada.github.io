import "./style.css";
import { connect } from "react-redux";

const Contact = (props) => {
  const { contact } = props;
  return (
    <div className="footer" id="contact">
      <div className="container">
        <div className="service-head one text-center">
          <h3>
            <span>İLETİŞİM BİLGİLERİ</span>
          </h3>
          <span className="border two"></span>
        </div>
        <div className="mail_us">
          <div className="row mail_left">
            <div className="col mx-md-3">
              <div className="contact-grid1-left1">
                <span className="bi bi-envelope-fill" aria-hidden="true"></span>
                <h4>Email</h4>
                <ul>
                  <li>
                    Mail1:{" "}
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col mx-md-3">
              <div className="contact-grid1-left1">
                <span
                  className="bi bi-telephone-fill"
                  aria-hidden="true"
                ></span>
                <h4>Telefon</h4>
                <ul>
                  <li>{contact.phone}</li>
                </ul>
              </div>
            </div>
            <div className="col mx-md-3">
              <div className="contact-grid1-left1">
                <span className="bi bi-house-fill" aria-hidden="true"></span>
                <h4>Adres</h4>
                <ul>
                  <li>{contact.address}</li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="copy_right text-center">
          <p>&copy; 2022 All rights reserved | Design by Fatma Aşık.</p>
          <ul className="social-icons two">
            {contact?.socialMediaAddresses.map((link) => {
              return (
                <div key={link.id}>
                  {link?.url ? (
                    <li>
                      <a
                        href={link.address}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={link.className}
                      >
                        {" "}
                      </a>
                    </li>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactInfo,
  };
};

export default connect(mapStateToProps)(Contact);
