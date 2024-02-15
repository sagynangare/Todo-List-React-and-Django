import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, world!</h1>
        <p>
          Welcome
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Welcome
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Welcome.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Welcome
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2024-2025</p>
  </footer>
</>

    </div>
  )
}

export default Homepage