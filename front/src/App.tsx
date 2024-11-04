import { Container, Nav, Navbar, Button } from 'react-bootstrap'; 
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StoreContext } from './Store'; // Adjust path if needed
import './App.css';

function App() {
  const { state, dispatch } = useContext(StoreContext);
    const {mode} = state
      //  can not change state.mode this why we make var to store  newMode T , F
    //  const {state:{mode} , dispatch} = useContext(StoreContext)
      
  //     const toggleTheme = () => {
  //   const newMode = state.mode === "dark" ? "light" : "dark";
  //   dispatch({ type: "SWITCH_MODE" });
  //   localStorage.setItem("mode", newMode);
  // };

  // Set theme on initial load

  
  //  wrong  setAttru take two para ("", value)
    
 useEffect(() => {
  localStorage.setItem("mode", mode);
  document.body.setAttribute("data-bs-theme", mode);
}, [mode]);

  
  return (
    <div className={state.mode}> {/* Apply theme as a class */}
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand>Amazon E-commerce</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav>
            // logic to make text   
            <Button    
              onClick={() => dispatch({ type: 'SWITCH_MODE' })}
              variant="outline-light"
              className="ms-3"
            >
              Switch to {mode === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </Container>
        </Navbar>
      </header>
      
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      
      <footer className="bg-dark text-white text-center p-3">
        <div>All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
