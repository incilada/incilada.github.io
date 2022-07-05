import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./style.css";
import { Markup } from "react-render-markup";

const Portfolio = (props) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState();
  const [showModal, setShowModal] = useState(false);
  const [tabs, setTabs] = useState([]);

  const onSelectTab = (value) => {
    setSelectedTab(value);
  };

  useEffect(() => {
    const newTabs = [];
    props.projects.forEach((item) => {
      if (!newTabs.includes(item.programmingLang)) {
        newTabs.push(item.programmingLang);
      }
    });
    setTabs(newTabs);
  }, [props.projects]);

  const showDetail = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="portfolio" id="port">
      <div className="service-head text-center">
        <h3>
          <span>PROJELER</span>
        </h3>
        <span className="border"></span>
      </div>
      <div className="portfolio-grids">
        <div className="sap_tabs">
          <div
            id="horizontalTab"
            style={{ display: "block", width: "100%", margin: "0px" }}
          >
            <ul className="resp-tabs-list">
              <li
                className={
                  selectedTab === "all"
                    ? "resp-tab-item resp-tab-active"
                    : "resp-tab-item"
                }
                onClick={onSelectTab.bind(this, "all")}
              >
                <span>TÜMÜ</span>
              </li>
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  className={
                    selectedTab === tab
                      ? "resp-tab-item resp-tab-active"
                      : "resp-tab-item"
                  }
                  onClick={onSelectTab.bind(this, tab)}
                >
                  <span>{tab}</span>
                </li>
              ))}
            </ul>
            <div className="resp-tabs-container">
              {props.projects.map((item) => (
                <div
                  onClick={() => showDetail(item)}
                  key={item.id}
                  className={
                    selectedTab === "all" ||
                      selectedTab === item.programmingLang
                      ? "col-md-3 team-gd show"
                      : "col-md-3 team-gd hide"
                  }
                >
                  <div
                    className="portfolio-link b-link-diagonal b-animate-go"
                    data-toggle="modal"
                  >
                    <img className="hover" src={item.imgSrc} alt={item.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        className="transparent-modal"
        fullscreen={true}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header className="text-light ">
          <Modal.Title className="w-100">
            <h2 className="w-50 m-auto text-center">{selectedItem?.title}</h2>
          </Modal.Title>
          <Button
            variant="light"
            className="modal-close"
            onClick={() => setShowModal(false)}
          >
            <div className="lr">
              <div className="rl"></div>
            </div>
          </Button>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column w-50 mx-auto">
          <p className="text-light modal-text">
            <Markup markup={selectedItem?.desc} />
          </p>
          <img className="modal-img" src={selectedItem?.imgSrc} alt={selectedItem?.name} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Portfolio);
