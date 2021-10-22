import React from "react";
import "./Modal.css";

const Modal = props => {
	if(!props.show){
		return null;
	}
	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content" >
				<div className="modal-header">
					<h4 className="modal-content">Modal title</h4>
				</div>
				<div className="modal-body">
					This is modal content
				</div>
				<div className="modal-footer">
					<button onClick={props.onClose} className="button">Close</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;