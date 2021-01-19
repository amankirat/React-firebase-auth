import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}></div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;

// {/* <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <Form onSubmit={handleSubmit}>
//     <Form.Group size="lg" controlId="email">
//       <Form.Label>Email</Form.Label>
//       <Form.Control
//         autoFocus
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </Form.Group>
//     <Form.Group size="lg" controlId="password">
//       <Form.Label>Password</Form.Label>
//       <Form.Control
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </Form.Group>
//     <Button block size="lg" type="submit" disabled={!validateForm()}>
//       Login
//     </Button>
//   </Form>
// </div> */}
