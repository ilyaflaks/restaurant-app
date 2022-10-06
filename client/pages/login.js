/* /pages/login.js */

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
import { login } from "../components/auth";
import AppContext from "../components/context";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
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
  // console.log("user from appContext in login:");
  // console.log(user);
  // console.log("setUser from appContext in login:");
  // console.log(setUser);
  // console.log("isAuthenticated from appContext in login:");
  // console.log(isAuthenticated);

  onAuthStateChanged(auth, (currentUser) => {
    console.log("currentUser:");
    console.log(currentUser);
    console.log("something changed in Auth State");
    // appContext.isAuthenticated = true;
    // appContext.user = true;
    //    appContext.currentUser = currentUser;
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

  const logout = async () => {
    console.log("logout function called");
    await signOut(auth);
    setShowForm(true);
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
                        // onChange={(event) => onChange(event)}
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
                        // onClick={() => {
                        //   setLoading(true);
                        //   login(data.identifier, data.password)
                        //     .then((res) => {
                        //       setLoading(false);
                        //       console.log("In login Button. res.data.user: ");
                        //       console.log(res.data.user);
                        //       // set authed User in global context to update header/app state
                        //       appContext.setUser(res.data.user);
                        //     })
                        //     .catch((error) => {
                        //       console.log(
                        //         "login fun catch block, something is wrong: "
                        //       );
                        //       console.log(error);
                        //       //setError(error.response.data);
                        //       setLoading(false);
                        //     });
                        // }}
                      >
                        {loading ? "Loading... " : "Submit"}
                      </Button>
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
