import React from 'react'
import { useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import neworders from '../../../src/Components/Asset/StaticAssets/neworders.jpeg'
import oip from '../../../src/Components/Asset/StaticAssets/oip.jpg'
import shipped from '../../../src/Components/Asset/StaticAssets/shipped.jpg'
import delivered from '../../../src/Components/Asset/StaticAssets/delivered.jpg'
import OrderManagementHeader from './OrderManagementHeader';

const OrderManagementHome = () => {
  return (
    <div>
      <div className="mng-nav">
          <OrderManagementHeader/>
      </div>
      <div className="bg-image">
    <Container>
    <h2 className="custom-heading mt-4">Welcome to Order Management</h2>
      <Row className="mt-4">
        <Col md={3} >
          <Card>
            <Card.Img style={{height: "200px"}} variant="top" src={neworders} />
            <Card.Body>
              <Card.Title>View New Orders</Card.Title>
              <Card.Text style={{height: "50px"}}>View all new orders.</Card.Text>
              <Link to="/omneworders">
                <Button variant="primary">New Orders</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img style={{height: "200px"}} variant="top" src={oip} />
            <Card.Body>
              <Card.Title>Orders in Processing</Card.Title>
              <Card.Text style={{height: "50px"}}>View all orders in processing stage.</Card.Text>
              <Link to="/omoip">
                <Button variant="primary">Orders in Processing</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img style={{height: "200px"}} variant="top" src={shipped} />
            <Card.Body>
              <Card.Title>View Shipped Orders</Card.Title>
              <Card.Text style={{height: "50px"}}>View all shipped orders.</Card.Text>
              <Link to="/omshippedorders">
                <Button variant="primary">Shipped Orders</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img style={{height: "200px"}} variant="top" src={delivered} />
            <Card.Body>
              <Card.Title>View delivered Orders</Card.Title>
              <Card.Text style={{height: "50px"}}>view all delivered orders.</Card.Text>
              <Link to="/omdeliveredorders">
                <Button variant="primary">Delivered Orders</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default OrderManagementHome
