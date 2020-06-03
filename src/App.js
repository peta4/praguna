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
import Title from './components/Title/Title'
import Mapa from './components/Title/Mapa'


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
      <Row >
        <Col>
        <Parallax 
            
            blur={{ min: -15, max: 15 }}
            bgImage={Praguna}
            bgImageAlt="U Praguny"
            strength={500}
        >
            <Header />
            
            <Title nadpis={`${"Máme „všechno“ "}`} type={1} styles={{fontWeight:'bold', color:'white', textAlign: 'center' , position:'relative' , top:'500px'}} />

            <div style={{ height: '1000px' }} />
        </Parallax>
        
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={Sroubky}
            bgImageAlt="Šroubky"
            strength={-500}
        >
            <Title nadpis={`${"Od šroubků ..."}`} type={2} styles={{fontWeight:'bold', color:'white', textAlign: 'center' , position:'relative' , top:'500px'}} />


            <div style={{ height: '1000px' }} />
        </Parallax>
        
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={Uterky}
            bgImageAlt="Utěrky"
            strength={500}
        >
            <Title nadpis={`${"... až po utěrky"}`} type={2} styles={{fontWeight:'bold', color:'white', textAlign: 'center' , position:'relative' , top:'500px'}} />

            <div style={{ height: '1000px' }} />
        </Parallax>

        <Mapa />
        
            <Title nadpis={`${"Tady nás najdete"}`} type={2} styles={{fontWeight:'bold', color:'black', textAlign: 'center' , position:'relative' , top:'-500px'}} />

        


           
        
        </Col>
      </Row>
    </Container> 

  )

}

export default App;
