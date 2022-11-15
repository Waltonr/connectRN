import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const SetShifts = (props) => {
    const [show, setShow] = useState(false);

    function openModal() {
        setShow(true);
    }

    function closeModal() {
        setShow(false);
    }
    

    return (
        <div>
            <button onClick={openModal}>Set Shift</button>
            <Modal show={show}
            animation={true}>
                <form>
                    <Modal.Header >
                        <Modal.Title>Set Shift Assignment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DropdownButton id="shifts" title="Shifts">
                                {props.getAllShiftsProperty &&
                                    props.getAllShiftsProperty.map((shift, index) => {
                                        return(
                                            <tr> 
                                                <Dropdown.Item as="button">
                                                    {shift.name} {shift.start} {shift.end} {shift.qual_required}
                                                </Dropdown.Item>
                                            </tr>
                                        )
                                    })
                                }
                        </DropdownButton>
                        <DropdownButton id="nurses" title="Nurses">
                                {props.getAllNursesProperty &&
                                    props.getAllNursesProperty.map((nurse, index) => {
                                        return(
                                            <tr> 
                                                <Dropdown.Item as="button" onClick={closeModal}>
                                                    {nurse.first_name} {nurse.last_name} {nurse.qualification} 
                                                </Dropdown.Item>
                                            </tr>
                                        )
                                    })
                                }
                        </DropdownButton>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeModal}>Save Assignment</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}
 
export default SetShifts;