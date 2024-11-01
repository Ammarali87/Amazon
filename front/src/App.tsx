import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <header className=''>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand>Amazon E-commerce</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        
      <Container>
        <Outlet/>
      </Container>
      </main>
      <footer className="bg-dark text-white text-center p-3">
        <div>All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
