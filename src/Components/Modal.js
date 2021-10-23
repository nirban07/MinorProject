import React from "react";
import "./Modal.css";

const Modal = props => {
	if(!props.show){
		return null;
	}
	return (
		// <div className="modal">
		// 	<div className="modal-content">
		// 		<div className="modal-header">
		// 			<h4 className="modal-content">Modal title</h4>
		// 		</div>
		// 		<div className="modal-body">
		// 			This is modal content
		// 		</div>
		// 		<div className="modal-footer">
		// 			<button onClick={props.onClose} className="button">Close</button>
		// 		</div>
		// 	</div>
		// </div>
		
		<div className="modal" onClick={props.onClose} > 
		<article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main class="pa4 black-80">
				<form class="measure center">
					<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
					<legend class="f4 fw6 ph0 mh0">Sign In</legend>
					<div class="mt3">
						<label class="db fw6 lh-copy f6" for="email-address">Email</label>
						<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
					</div>
					<div class="mv3">
						<label class="db fw6 lh-copy f6" for="password">Password</label>
						<input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
					</div>
					{/* <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
					</fieldset>
					<div class="">
					<input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
					</div>
					<div class="lh-copy mt3">
					<a href="#0" class="f6 link dim black db">Register</a>
					{/* <a href="#0" class="f6 link dim black db">Forgot your password?</a> */}
					</div>
				</form>
			</main>
		</article>
		</div>
	)
}

export default Modal;