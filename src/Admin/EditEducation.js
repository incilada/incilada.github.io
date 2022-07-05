import { useState } from "react";
import { connect } from "react-redux";
import { editEducation } from "../action";
import {
  Container,
  Row,
  Col,
  ModalHeader,
  Modal,
  Button,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Form,
  ListGroup,
} from "react-bootstrap";
import { generateId } from "../random";

const EditEducation = (props) => {
  const [education, setEducation] = useState(props.education);
  const [selectedItem, setSelectedItem] = useState();
  const [show, setShow] = useState(false);

  const deleteItem = (id) => {
    setEducation((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const editItem = (id) => {
    setShow(true);
    setSelectedItem(education.filter((edu) => edu.id === id)[0]);
  };

  const onSchoolNameChanged = (e) => {
    setSelectedItem((prevState) => {
      return {
        ...prevState,
        schoolName: e.target.value,
      };
    });
  };

  const onDepartmentChanged = (e) => {
    setSelectedItem((prevState) => {
      return {
        ...prevState,
        department: e.target.value,
      };
    });
  };

  const onStartDateChanged = (e) => {
    setSelectedItem((prevState) => {
      return {
        ...prevState,
        startDate: e.target.value,
      };
    });
  };

  const onEndDateChanged = (e) => {
    setSelectedItem((prevState) => {
      return {
        ...prevState,
        endDate: e.target.value,
      };
    });
  };

  const onDescChanged = (e) => {
    setSelectedItem((prevState) => {
      return {
        ...prevState,
        desc: e.target.value,
      };
    });
  };

  const saveChanges = () => {
    if (!selectedItem.id) {
      setEducation((prevState) => {
        return [
          ...prevState,
          {
            ...selectedItem,
            id: generateId(5),
          },
        ];
      });
    } else {
      setEducation(
        education.map((item) =>
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
      <h2 className="text-center text-secondary">Eğitim Bilgileri</h2>
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
            {education?.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <span>
                    {item.schoolName} - {item.department}
                  </span>
                </div>
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
            onClick={() => props.editEducation(education)}
          >
            Kaydet
          </Button>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
          <ModalHeader closeButton>
            <ModalTitle>Okul Bilgileri</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form>
              <Col className="mb-3">
                <Form.Label htmlFor="name">Okul Adı</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  value={selectedItem?.schoolName || ""}
                  onChange={(e) => {
                    onSchoolNameChanged(e);
                  }}
                />
              </Col>
              <Col className="mb-3">
                <Form.Label htmlFor="department">Bölüm</Form.Label>
                <Form.Control
                  type="text"
                  id="department"
                  value={selectedItem?.department || ""}
                  onChange={(e) => {
                    onDepartmentChanged(e);
                  }}
                />
              </Col>
              <Col className="mb-3 d-flex">
                <Col className="flex-grow-1 me-3">
                  <Form.Label htmlFor="startDate">Başlangıç</Form.Label>
                  <Form.Control
                    type="month"
                    id="startDate"
                    value={selectedItem?.startDate || ""}
                    onChange={(e) => {
                      onStartDateChanged(e);
                    }}
                  />
                </Col>
                <Col className="flex-grow-1">
                  <Form.Label htmlFor="endDate">Bitiş</Form.Label>
                  <Form.Control
                    type="month"
                    id="endDate"
                    value={selectedItem?.endDate || ""}
                    onChange={(e) => {
                      onEndDateChanged(e);
                    }}
                  />
                </Col>
              </Col>
              <Col className="mb-3">
                <Form.Label htmlFor="desc">Açıklama</Form.Label>
                <Form.Control
                  type="text"
                  id="desc"
                  value={selectedItem?.desc || ""}
                  onChange={(e) => {
                    onDescChanged(e);
                  }}
                />
              </Col>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button variant="primary" onClick={saveChanges}>
              Kaydet
            </Button>
          </ModalFooter>
        </Modal>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.education,
  };
};

export default connect(mapStateToProps, { editEducation })(EditEducation);
