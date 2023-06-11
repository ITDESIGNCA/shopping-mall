import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
import Detail from './Detail';
import $ from 'jquery';
import axios from 'axios'


function App() {

  let [acc] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="BB">

      <Navbar bg="primary" variant="dark" className="cc">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: 'bold' }}>Hi,There</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link href="https://merrymotive.com/about">Brand</Nav.Link>
            <Nav.Link onClick={() => { navigate('./detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('./Contact') }}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>

            <div className="container">
              <div className="row" style={{ textAlign : 'center'}}>
                <br></br>

                <div className="ggongbaek"></div>
                <br></br>
                <br></br>

                <h6 style={{ textAlign : 'center', color: 'gray' }}> ྀི*•₃   2030 S/S collection  ྀི*•₃ </h6>
                <br></br>
                <div className="col-md-4">
                  <br></br>
                  <a><img src="https://contents.sixshop.com/thumbnails/uploadedFiles/68890/product/image_1679504526691_2500.jpg" width="80%" /></a>
                  <h4>{acc[0].title}</h4>
                  <p>{acc[0].price}원</p>
                </div>
                <div className="col-md-4">
                  <br></br>
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/68890/product/image_1679504252516_2500.jpg" width="80%" />
                  <h4>{acc[1].title}</h4>
                  <p>{acc[1].price}원</p>
                </div>
                <div className="col-md-4">
                  <br></br>
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/68890/product/image_1679502924429_2500.jpg" width="80%" />
                  <h4>{acc[2].title}</h4>
                  <p>{acc[2].price}원</p>
                </div>
              </div>
            </div>
        </>
        } />


        <Route path="/detail" element={<Detail acc={acc} />} />
        <Route path="/about" element={<About />} />
      </Routes>




    </div>
  );
}

function About() {
  return (
    <>
      <h2>회사소개</h2>
    </>
  )
}

function TabContent({탭}){

  return (
    <div className="start end">
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}



export default App;
