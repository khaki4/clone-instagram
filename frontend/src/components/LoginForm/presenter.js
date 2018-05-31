import React from "react";
import Ionicon from "react-ionicons";
import Proptypes from "prop-types";
import formStyles from "../../shared/formStyles.scss";

const LoginForm = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props._handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input type="submit" value="Log in" className={formStyles.button}/>
    </form>
    <span className={formStyles.divider}>or</span>
    <span className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185"/> Log in
      with Facebook
    </span>
    <span className={formStyles.forgotLink}>Forgot password?</span>
  </div>
);

LoginForm.propType = {
  usernameValue: Proptypes.string.isRequired,
  passwordValue: Proptypes.string.isRequired,
  handleInputChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,

}

LoginForm.contextTypes = {
  t: Proptypes.func.isRequired
}

export default LoginForm;