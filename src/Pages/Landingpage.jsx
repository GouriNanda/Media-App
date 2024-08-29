import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  const navigateByUrl= useNavigate()
  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">
      <Col></Col>
      <Col lg={5}>
      <h1 style={{color:'blueviolet',fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure omnis, soluta fuga alias laboriosam eum vero repellat distinctio! Voluptas eius eos quod 
        eveniet facilis eligendi voluptate architecto doloribus, est inventore.</p>
        <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
      </Col>
      <Col lg={5}>
      <img src="https://media.tenor.com/pYZ16C80QJIAAAAC/music.gif" alt="" />
      </Col>
      <Col></Col>
    </Row>

    <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h4 style={{fontSize:"40px"}}>Features</h4>


      <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>

  
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
     </div>
    </div>

    <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">
    <div className="col-lg-5">
      <h4 className='text-warning'>Simple,Powerful & Fast</h4>
      <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae tempora temporibus voluptas eum explicabo veritatis necessitatibus esse. Deleniti asperiores quaerat nobis aut dolorem animi placeat doloribus dolor aliquid fugiat!</h6>
      <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae tempora temporibus voluptas eum explicabo veritatis necessitatibus esse. Deleniti asperiores quaerat nobis aut dolorem animi placeat doloribus dolor aliquid fugiat!</h6>
      <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae tempora temporibus voluptas eum explicabo veritatis necessitatibus esse. Deleniti asperiores quaerat nobis aut dolorem animi placeat doloribus dolor aliquid fugiat!</h6>
    </div>

    <div className="col-lg-5 ms-5">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gPpQNzQP6gE?si=vq62z3wG4OLZWUwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    </>
  )
}

export default Landingpage
