import React, { Component } from 'react'


export class Navbar extends Component {
   

    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand my-1 mx-2 fs-1" href="/">My Player</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fs-5 mx-2" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fs-5 mx-2" href="/">Category</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active  fs-5 mx-2" href="/" tabIndex="-1" aria-disabled="false">More Videos</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

          



            </div>
        )
    }
}

export default Navbar
