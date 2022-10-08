import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
//import { login } from "../components/auth";
import AppContext from "../components/context";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from "firebase/auth";
//import firebase from "firebase/app";

////this works for log in with email and pw.Commented out for now
import { auth } from "../components/firebase-config";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("false");
  const [showForm, setShowForm] = useState(true);

  // useEffect(() => {
  //   if (appContext.isAuthenticated) {
  //     router.push("/"); // redirect if you're already logged in
  //   }
  // }, []);

  const { user, setUser, isAuthenticated } = appContext;
  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    console.log("something changed in Auth State");
    setUser(currentUser);
  });

  const authenticate = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("inside try block, things are good");

      console.log(user);
      setErrorMsg("");
      setShowForm(false);
    } catch (error) {
      console.log("inside catch block, things are bad");

      console.log(error.message);
      setErrorMsg(error.message);
    }
  };

  const providerBook = new FacebookAuthProvider();

  const logInWithFacebook = () => {
    signInWithPopup(auth, providerBook)
      .then((result) => {
        console.log("Inside then block");
        // The signed-in user info.
        const user = result.user;
        console.log("user");
        console.log(user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        console.log("Icredential");
        console.log(credential);
        const accessToken = credential.accessToken;
        console.log("accessToken");
        console.log(accessToken);

        // ...
      })
      .catch((error) => {
        console.log("Inside catch block");
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    //version 3, my fav

    signInWithPopup(auth, provider)
      .then((result) => {
        // response.cookie("cookie2", "value2", {
        //   sameSite: "none",
        //   secure: true,
        // });
        console.log("Inside then block");
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("Icredential");
        console.log(credential);
        const token = credential.accessToken;
        console.log("token");
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log("user");
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("Inside the catch block");
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    /////
    ////version 1 from you toob
    // firebase
    //   .auth()
    //   .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then((userCred) => {
    //     if (userCred) {
    //       setAuth(true);
    //       window.localStorage.setItem("auth", "true");
    //     }
    //   });
    ////Version 2
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.error("In then block of google auth");
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     console.log("google user: ", user);
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     console.error("In catch block of google auth");
    //     console.error(error);
    //   });
  };

  const logout = async () => {
    await signOut(auth);
    setShowForm(true);
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <h2 style={{ paddingTop: 30, paddingLeft: 30 }}>Log In</h2>
            </div>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              {showForm ? (
                <Form>
                  <fieldset disabled={loading}>
                    <FormGroup>
                      <Label>Email:</Label>
                      <Input
                        // onChange={(event) => onChange(event)}
                        onChange={(event) => {
                          setLoginEmail(event.target.value);
                        }}
                        name="identifier"
                        style={{ height: 50, fontSize: "1.2em" }}
                      />
                    </FormGroup>
                    <FormGroup style={{ marginBottom: 30 }}>
                      <Label>Password:</Label>
                      <Input
                        onChange={(event) => {
                          setLoginPassword(event.target.value);
                        }}
                        type="password"
                        name="password"
                        style={{ height: 50, fontSize: "1.2em" }}
                      />
                    </FormGroup>

                    <FormGroup>
                      {/* <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                      <Button
                        style={{ float: "right", width: 120 }}
                        color="primary"
                        onClick={authenticate}
                      >
                        Submit
                      </Button>
                      <button onClick={loginWithGoogle}>
                        Login with Google
                      </button>{" "}
                      <button onClick={logInWithFacebook}>
                        Login with Facebook
                      </button>
                    </FormGroup>
                  </fieldset>
                </Form>
              ) : (
                <div>
                  <h4>Thank you for logging in! </h4>
                  <h5>You are now signed in as {loginEmail}</h5>
                  <Button
                    // style={{ float: "right", width: 120 }}
                    color="primary"
                    onClick={logout}
                  >
                    Log Out
                  </Button>
                  <Button style={{ marginLeft: "10px" }} onClick={goHome}>
                    Home
                  </Button>
                </div>
              )}
              {errorMsg && <h4>{errorMsg}</h4>}
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
}

export default Login;
