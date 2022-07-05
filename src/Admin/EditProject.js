import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { editProject } from "../action";
import { generateId } from "../random";
import { DefaultEditor } from 'react-simple-wysiwyg';

const EditProject = (props) => {
  const [projects, setProjects] = useState(props.projects);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const deleteItem = (id) => {
    setProjects((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const editItem = (id) => {
    setSelectedItem(projects.filter((item) => item.id === id)[0]);
    setShow(true);
  };

  const onTypeChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, type: e.target.value };
    });
  };

  const onTitleChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const onDescriptionChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, desc: e.target.value };
    });
  };

  const onTechChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, programmingLang: e.target.value };
    });
  };

  const onOtherTechChanged = (e) => {
    setSelectedItem((prevState) => {
      return { ...prevState, otherTech: e.target.value };
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
      setProjects((prevState) => {
        return [
          ...prevState,
          {
            ...selectedItem,
            alt: selectedItem.type.toLowerCase(),
            id: generateId(5),
          },
        ];
      });
    } else {
      setProjects(
        projects.map((item) =>
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
      <h2 className="text-center text-secondary">Projeler</h2>
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
            {projects?.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
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
            onClick={() => props.editProject(projects)}
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
                <Form.Label htmlFor="type">Türü</Form.Label>
                <Form.Control
                  type="text"
                  id="type"
                  value={selectedItem?.type || ""}
                  onChange={(e) => {
                    onTypeChanged(e);
                  }}
                />
              </Form.Group>
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
              <Form.Group className="mb-3">
                <Form.Label htmlFor="desc">Açıklama</Form.Label>
                <DefaultEditor value={selectedItem?.desc || ""} onChange={(e) => {
                  onDescriptionChanged(e);
                }} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="tech">Kullanılan Teknolojiler</Form.Label>
                <Form.Control
                  type="text"
                  id="tech"
                  value={selectedItem?.programmingLang || ""}
                  onChange={(e) => {
                    onTechChanged(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="otherTech">Diğer Teknolojiler</Form.Label>
                <Form.Control
                  type="text"
                  id="otherTech"
                  value={selectedItem?.otherTech || ""}
                  onChange={(e) => {
                    onOtherTechChanged(e);
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
    projects: state.projects,
  };
};

export default connect(mapStateToProps, { editProject })(EditProject);
