import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { generateId } from "../random";
import { editCertificate } from "../action";

const EditCertificate = (props) => {
  const [certificates, setCertificates] = useState(props.certificates);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const deleteItem = (id) => {
    setCertificates((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const editItem = (id) => {
    setSelectedItem(certificates.filter((item) => item.id === id)[0]);
    setShow(true);
  };

  const onTitleChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const saveChanges = () => {
    if (!selectedItem.id) {
      setCertificates((prevState) => {
        return [
          ...prevState,
          {
            ...selectedItem,
            id: generateId(5),
          },
        ];
      });
    } else {
      setCertificates(
        certificates.map((item) =>
          item.id === selectedItem.id ? selectedItem : item
        )
      );
    }
    setSelectedItem(null);
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container className="m-5 w-auto">
      <h2 className="text-center text-secondary">Sertifikalar</h2>
      <Row>
        <Col className="d-flex flex-column">
          <Button
            variant="primary"
            className="mb-4 align-self-end"
            onClick={() => editItem(null)}
          >
            <i className="bi bi-plus"></i>
          </Button>
          <ListGroup className=" mb-5">
            {certificates?.map((item) => (
              <ListGroup.Item
                key={item.id}
                className=" d-flex justify-content-between align-items-center"
              >
                <span>{item.title}</span>
                <div className="d-flex">
                  <Button
                    variant="light"
                    className="ms-1"
                    onClick={() => editItem(item.id)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Button>
                  <Button
                    variant="light"
                    className="ms-1"
                    onClick={() => deleteItem(item.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            variant="primary"
            className="align-self-end"
            onClick={() => props.editCertificate(certificates)}
          >
            Kaydet
          </Button>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Proje Bilgileri</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Başlık</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  value={selectedItem?.title || ""}
                  onChange={(e) => {
                    onTitleChanged(e);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button variant="primary" onClick={saveChanges}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    certificates: state.certificates,
  };
};

export default connect(mapStateToProps, { editCertificate })(EditCertificate);
