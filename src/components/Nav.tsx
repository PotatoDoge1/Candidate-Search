import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Navigator = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;

  return (

    <Navbar expand="sm" bg="primary" variant="dark" className="sticky-top mb-3 navbar">
        {/* Logo */}
        <Navbar.Brand>Candidate Finder</Navbar.Brand>
          <Nav className="ms-auto">
              <Link to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}  // This is a conditional (ternary) operator that checks to see if the current page is "Home". If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'. It conditionally highlights the link if we are on the page.
              >Home</Link>

              <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}> Saved Candidates </Link> 
          </Nav>

    </Navbar>

);

};

export default Navigator;
