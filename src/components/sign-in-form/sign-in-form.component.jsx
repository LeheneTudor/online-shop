import FormInput from "../fom-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>I already have an account!</h2>
      <p>Sign in with your email and password!</p>
      <FormInput
        label="Email"
        type="email"
        required
        onChange={handleOnChange}
        name="confirmPassword"
        value={email}
        minLength="6"
      />

      <FormInput
        label="Password"
        type="password"
        required
        onChange={handleOnChange}
        name="password"
        value={password}
        minLength="6"
      />

      <Button>Sign In</Button>
      <Button buttonType="google">Sign in with Google</Button>
    </div>
  );
};

export default SignInForm;
