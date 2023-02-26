import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Spotify_Logo.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SEARCH_RESULTS } from "../redux/actions";

const SideBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Navbar
      className="mySideBar"
      bg="navbar"
      variant="white"
      expand="md"
      fixed="left"
    >
      <Navbar.Brand className="d-flex flex-column align-items-center" href="index.html">            
        <div>
          <img
            src={logo}
            alt="Spotify_Logo"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="mx-2 mb-3 d-block">
          <Link to={"/"}>
            <FontAwesomeIcon
              style={{ marginLeft: "7px" }}
              icon={faHome}
              size="lg"
            />{" "}
            Home
          </Link>
          <Nav.Link href="/MyFavourite">
            <FontAwesomeIcon icon={faBookOpen} size="lg" /> Your Library
          </Nav.Link>
        </Nav>
        <Form className="input-group ps-3 align-items-center">
          <FormControl
            type="text"
            placeholder="Search"
            className="px-sm-2"
            id="searchField"
            onChange={handleSearch}
          />

          <Link to={"/SearchResults"}>
            <Button
              className="align-self-stretch me-3 px-2"
              variant="outline-secondary"
              onClick={() =>
                dispatch({
                  type: SEARCH_RESULTS,
                  payload: search,
                })
              }
              id="button-addon1"
            >
              GO
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
      <div className="d-flex flex-column align-items-center">
        <div className="nav-btn">
          <Button className="signup-btn" variant="success">
            Sign Up
          </Button>
          <Button className="login-btn" variant="outline-success">
            Login
          </Button>
        </div>
        <div className="anchor">
          <a href="/">Cookie Policy</a> | <a href="/">Privacy</a>
        </div>
      </div>
    </Navbar>
  );
};

export default SideBar;
