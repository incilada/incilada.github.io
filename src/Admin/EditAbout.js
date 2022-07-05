import { useState } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import ReactInputMask from "react-input-mask";
import { connect } from "react-redux";
import { editAbout } from "../action";

const EditAbout = (props) => {
  const [aboutMe, setAbout] = useState(props.userInfo);

  const onChange = (key, e) => {
    setAbout((prevState) => {
      return { ...prevState, [key]: e.target.value };
    });
  };

  const onImageChanged = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setAbout((prevState) => {
          return { ...prevState, imgSrc: reader.result };
        });
      };
    }
  };

  return (
    <Container className="m-5 w-auto">
      <Row>
        <Col className="p-2">
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Görsel</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => onImageChanged(e)}
                accept=".png, .jpg, .jpeg"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {aboutMe.imgSrc && (
                <Image width={100} height="auto" src={aboutMe.imgSrc} alt={aboutMe.name} />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Adı</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={aboutMe?.name || ""}
                onChange={(e) => onChange("name", e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="birthday">Doğum Tarihi</Form.Label>
              <Form.Control
                type="date"
                id="birthday"
                value={aboutMe?.birthday || ""}
                onChange={(e) => onChange("birthday", e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Telefon</Form.Label>
              <ReactInputMask
                type="tel"
                id="phone"
                className="form-control"
                mask="+\90 (599) 999 99 99"
                value={aboutMe?.phone || ""}
                onChange={(e) => onChange("phone", e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="address">Adres</Form.Label>
              <Form.Control
                type="address"
                id="address"
                value={aboutMe?.address || ""}
                onChange={(e) => onChange("address", e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">E-posta Adresi</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={aboutMe?.email || ""}
                onChange={(e) => onChange("email", e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="jobDesc">Meslek</Form.Label>
              <Form.Control
                type="text"
                id="jobDesc"
                value={aboutMe?.jobDesc || ""}
                onChange={(e) => onChange("jobDesc", e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="aboutMe">Hakkında</Form.Label>
              <Form.Control
                as="textarea"
                id="aboutMe"
                rows={4}
                value={aboutMe?.aboutMe || ""}
                onChange={(e) => onChange("aboutMe", e)}
              />
            </Form.Group>
            <Button
              type="button"
              className="btn btn-primary align-self-end"
              onClick={() => props.editAbout(aboutMe)}
            >
              Kaydet
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.about,
  };
};

export default connect(mapStateToProps, { editAbout })(EditAbout);
