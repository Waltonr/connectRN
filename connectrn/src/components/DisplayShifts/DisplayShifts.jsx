import React, {Fragment} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table"

const DisplayShifts = (props) => {

    

    return (
        <Fragment>
            {props.getAllShiftsProperty &&
                props.getAllShiftsProperty.map((shift, index) => {
                    return(
                        <tr>
                            <td>{shift.name}</td>
                            <td>{shift.start}</td>
                            <td>{shift.end}</td>
                            <td>{shift.qual_required}</td>
                            <td>{shift.nurse_id}</td>
                        </tr>
            )
                }
            )}
        </Fragment> 
    );
}
 
export default DisplayShifts;