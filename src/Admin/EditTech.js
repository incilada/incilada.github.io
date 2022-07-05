import { useState } from "react";
import {
  Button,
  Container,
  ListGroup,
  Row,
  Col,
  Modal,
  Form,
  Image,
} from "react-bootstrap";
import { connect } from "react-redux";
import { editTech } from "../action";
import { generateId } from "../random";

const EditTech = (props) => {
  const [tech, setTech] = useState(props.tech);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const deleteItem = (id) => {
    setTech((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const editItem = (id) => {
    setSelectedItem(tech.filter((item) => item.id === id)[0]);
    setShow(true);
  };

  const onNameChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const onImageChanged = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setSelectedItem((prevState) => {
          return { ...prevState, imgSrc: reader.result };
        });
      };
    }
  };

  const saveChanges = () => {
    if (!selectedItem.id) {
      setTech((prevState) => {
        return [
          ...prevState,
          {
            ...selectedItem,
            name: selectedItem.title.toLowerCase(),
            id: generateId(5),
          },
        ];
      });
    } else {
      setTech(
        tech.map((item) => (item.id === selectedItem.id ? selectedItem : item))
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
      <h2 className="text-center text-secondary">Teknolojiler</h2>
      <Row>
        <Col className="d-flex flex-column">
          <Button
            variant="primary"
            className="mb-4 align-self-end"
            onClick={() => editItem(null)}
          >
            <i className="bi bi-plus"></i>
          </Button>
          <ListGroup className="mb-5">
            {tech?.map((tech) => (
              <ListGroup.Item
                key={tech.id}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{tech.title}</span>
                <div className="d-flex">
                  <Button
                    variant="light"
                    className="ms-1"
                    onClick={() => editItem(tech.id)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Button>
                  <Button
                    variant="light"
                    className="ms-1"
                    onClick={() => deleteItem(tech.id)}
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
            onClick={() => props.editTech(tech)}
          >
            Kaydet
          </Button>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Okul Bilgileri</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Teknoloji</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  value={selectedItem?.title || ""}
                  onChange={(e) => {
                    onNameChanged(e);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Görsel</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => onImageChanged(e)}
                  accept=".png, .jpg, .jpeg"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                {selectedItem && selectedItem.imgSrc && (
                  <Image width={100} height="auto" src={selectedItem.imgSrc} alt={selectedItem.name} />
                )}
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
    tech: state.technologies,
  };
};

export default connect(mapStateToProps, { editTech })(EditTech);
