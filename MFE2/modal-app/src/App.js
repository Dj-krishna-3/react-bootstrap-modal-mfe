import logo from "./logo.svg";
import "./App.css";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FullDetails,
} from "react-bootstrap-modal-mfe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const callBackFn = (value) => {
    return "callBack fetched!...==  " + value;
  };
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <ModalHeader onHide={() => setShowModal(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody>
          <p>This is the modal content.</p>
          <FullDetails callBack={callBackFn} />
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button className="btn btn-primary">Save Changes</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
