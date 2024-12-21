import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Navigator = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;

  return (

    <Navbar expand="sm" variant="dark" className="mb-3 navbar">
        {/* Logo */}
        <Navbar.Brand
          className="fw-bold text-uppercase"
          style={{
            fontSize: "2.5rem", // Increase font size
            color: "#ff00ff",  // Neon pink
            // textShadow: "0px 0px 5px #ff33ff", // Neon glow effect
          }}
        >Candidate Finder</Navbar.Brand>
          <Nav className="ms-auto">
              <Link to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}  // This is a conditional (ternary) operator that checks to see if the current page is "Home". If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'. It conditionally highlights the link if we are on the page.
              style={{
                margin: "0 10px",  // Add horizontal margins
                padding: "5px 15px", // Adjust padding for better spacing
                border: "2px solid white", // Outline in white
                borderRadius: "5px", // Rounded edges for better visuals
              }}
              >Home</Link>

              <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}
              style={{
                margin: "0 10px",  // Add horizontal margins
                padding: "5px 15px", // Adjust padding for better spacing
                border: "2px solid white", // Outline in white
                borderRadius: "5px", // Rounded edges for better visuals
              }}
              > Saved Candidates </Link> 
          </Nav>

    </Navbar>

);

};

export default Navigator;
