import React from 'react';


const Navbar = ({ inactive, toggleoff }) => {
  return (
    <nav
      className={`navbar-menu navbar navbar-expand-lg navbar-dark  ${
        inactive ? 'inactive' : ''
      } ${toggleoff ? 'toggleoff' : ''}`}
    >
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <aa className="nav-link active" aria-current="page" href="#">
                Home
              </aa>
            </li>
            <li className="nav-item">
              <aa className="nav-link" href="#">
                About Us
              </aa>
            </li>
            <li className="nav-item">
              <aa className="nav-link" href="#">
                Contact Us
              </aa>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar