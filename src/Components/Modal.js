import "./Modal.css"
const Modal = (props)=>{
	// console.log(props);
	
	if(props.route === "signin"){
		return(
			<div className="modal">
			<article class="br3 ba dark-gray b--black-10 mv4 w-100 shadow-3 w-50-m w-25-l mw6 center">
			<main class="pa4 black-80">
				<form class="measure center">
				<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
				<legend class="f4 fw6 ph0 mh0">Sign In</legend>
				<div class="mt3">
					<label class="db fw6 lh-copy f6" for="email-address">Email</label>
					<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				</div>
				<div class="mv3">
					<label class="db fw6 lh-copy f6" for="password">Password</label>
					<input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				</div>
				<label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
				</fieldset>
				<div class="">
				<input 
				class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				type="submit" 
				onClick={()=>props.routePath("")}
				value="Sign in"/>
				<input 
				class="b ph3 pv2 ma3 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				type="submit" 
				onClick={()=>props.routePath("")}
				value="Close"/>
				</div>
				<div class="lh-copy mt3">
				<p onClick={()=>props.routePath("register")} class="f6 link dim black db">Register</p>
				{/* <a href="#0" class="f6 link dim black db">Forgot your password?</a> */}
				</div>
				</form>
			</main>
			</article>
			</div>
			)
	}else{
		return <></>
	}
	
}
export default Modal;