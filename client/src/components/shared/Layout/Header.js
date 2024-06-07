import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  const handleRedirect = () => {
    navigate("/symptoms");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> {/* Added fixed-top class */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <BiDonateBlood color="red" /> Blood Bank App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-outline-success mx-2"
                  onClick={handleRedirect}
                >
                  Go to Symptoms
                </button>
              </li>
              <li className="nav-item">
                <p className="nav-link">
                  <BiUserCircle /> Welcome{" "}
                  {user?.name || user?.hospitalName || user?.organisationName}
                  &nbsp;
                  <span className="badge bg-secondary">{user?.role}</span>
                </p>
              </li>
              <li className="nav-item">
                {location.pathname === "/" ||
                location.pathname === "/donar" ||
                location.pathname === "/hospital" ? (
                  <Link to="/analytics" className="nav-link">
                    Analytics
                  </Link>
                ) : (
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
