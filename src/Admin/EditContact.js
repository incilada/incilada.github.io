import { useState } from "react";
import ReactInputMask from "react-input-mask";
import { connect } from "react-redux";
import { editContact } from "../action";

const EditContact = (props) => {
  const [contactInfo, setContactInfo] = useState(props.contactInfo);

  const onChange = (key, e) => {
    setContactInfo((prevState) => {
      return { ...prevState, [key]: e.target.value };
    });
  };

  const onChangeAddresses = (key, e) => {
    setContactInfo((prevState) => {
      return {
        ...prevState,
        socialMediaAddresses: prevState.socialMediaAddresses.map((item) =>
          item.id === key ? { ...item, url: e.target.value } : item
        ),
      };
    });
  };

  return (
    <div className="d-flex flex-column m-md-5">
      <div className="p-2">
        <form className="d-flex flex-column form">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Telefon
            </label>
            <ReactInputMask
              type="tel"
              mask="+\90 (599) 999 99 99"
              className="form-control"
              value={contactInfo?.phone || ""}
              onChange={(e) => onChange("phone", e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Adres
            </label>
            <input
              type="address"
              className="form-control"
              value={contactInfo?.address || ""}
              onChange={(e) => onChange("address", e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              E-posta Adresi
            </label>
            <input
              type="email"
              className="form-control"
              value={contactInfo?.email || ""}
              onChange={(e) => onChange("email", e)}
            />
          </div>
          {contactInfo?.socialMediaAddresses.map((address) => (
            <div key={address.id} className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                {address.title}
              </label>
              <input
                type="url"
                className="form-control"
                value={address.url || ""}
                onChange={(e) => onChangeAddresses(address.id, e)}
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary align-self-end"
            onClick={() => props.editContact(contactInfo)}
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contactInfo: state.contactInfo,
  };
};

export default connect(mapStateToProps, { editContact })(EditContact);
