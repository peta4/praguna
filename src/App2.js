import React from 'react';
import Header from './Header'
import logo from './logo.svg';
import Praguna from './img/u-praguny.png'
import Sroubky from './img/sroubky.jpg'
import Uterky from './img/uterky.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import {cx, css} from 'emotion'
import './App.css';
import {Parallax,Background} from 'react-parallax'

const ImgContainer = cx(
  'headerContainer',
  css`
  min-height: 1000px;
  background-repeat: no-repeat;
  background-size:cover;
  `
)

function App(){

  return(

     
    <Container fluid>

      <Row>

        <Col className={ImgContainer} style={{backgroundImage: `url(${Praguna})`}} >

          <Header />
          
        </Col>

      </Row>

      <Row>
        <Col  className={ImgContainer} style={{backgroundImage: `url(${Sroubky})`}}>
        

        </Col>
      </Row>

      <Row>
        <Col  className={ImgContainer} style={{backgroundImage: `url(${Uterky})`}}>
        </Col>
      </Row>

</Container>
    
    

  )

}

export default App;
