import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign in!</h1>
      <button onClick={logGoogleUser}>Log in with Google!</button>
    </div>
  );
};

export default SignIn;
