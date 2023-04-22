import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import MyComponent from './MyComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;


// function App() {
// return (
// <>
// <Navbar />
// <Container>
// <Hero />
// <About />
// <Services />
// <Contact />
// </Container>
// <Footer />
// </>
// );
// }

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Switch>
//         <Route exact path="/">
//           <Hero />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/services">
//           <Services />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//       </Switch>

//       <Footer />
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;

