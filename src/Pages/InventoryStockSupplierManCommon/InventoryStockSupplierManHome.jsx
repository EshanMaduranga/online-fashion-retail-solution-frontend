import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import inventoryImage from '../../Components/Asset/StaticAssets/inventory.jpeg';
import suppliersImage from '../../Components/Asset/StaticAssets/supplier.jpeg';
import stockImage from '../../Components/Asset/StaticAssets/stock.jpeg';
import reportsImage from '../../Components/Asset/StaticAssets/report.jpeg';
import salesPredictionImage from '../../Components/Asset/StaticAssets/sales.png';
import chartsImage from '../../Components/Asset/StaticAssets/chart.jpeg';
import './Home.css';
import InventoryStockSupplierManHeaderN from './InventoryStockSupplierManHeaderN';

function InventoryStockSupplierManHome() {
    return (
        <Container>
        <div className="mng-nav">
            <InventoryStockSupplierManHeaderN/>
        </div>
            <Row className="mt-5">
                <Col className="text-center">
                    <Card>
                        <Card.Img variant="top" src={inventoryImage} alt="Inventory" className="home-image" />
                        <Card.Body>
                            <Card.Title>Manage Your Inventory</Card.Title>
                            <Card.Text>
                                View, add, update, or delete inventory items.
                            </Card.Text>
                            <Link to="/viewallinventories">
                                <Button variant="primary">Go to Inventory</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="text-center">
                    <Card>
                        <Card.Img variant="top" src={suppliersImage} alt="Suppliers" className="home-image" />
                        <Card.Body>
                            <Card.Title>Manage Your Suppliers</Card.Title>
                            <Card.Text>
                                Manage your supplier information and relationships.
                            </Card.Text>
                            <Link to="/viewallsuppliers">
                                <Button variant="primary">Go to Suppliers</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="text-center">
                    <Card>
                        <Card.Img variant="top" src={stockImage} alt="Stock" className="home-image" />
                        <Card.Body>
                            <Card.Title>Manage Your Stock</Card.Title>
                            <Card.Text>
                                Track and manage your stock levels.
                            </Card.Text>
                            <Link to="/viewallstocks">
                                <Button variant="primary">Go to Stock</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    <Card>
                        <Card.Img variant="top" src={reportsImage} alt="Reports" className="home-image" />
                        <Card.Body>
                            <Card.Title>View Reports</Card.Title>
                            <Card.Text>
                                Access various reports for insights into your business.
                            </Card.Text>
                            <Link to="/inventorystock">
                                <Button variant="primary">View Reports</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="text-center">
                    <Card>
                        <Card.Img variant="top" src={salesPredictionImage} alt="Sales Prediction" className="home-image" />
                        <Card.Body>
                            <Card.Title>Sales Prediction</Card.Title>
                            <Card.Text>
                                Get predictions for future sales.
                            </Card.Text>
                            <Link to="/analysis">
                                <Button variant="primary">Sales Prediction</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="text-center">
                    <Card>
                        <Card.Img variant="top" src={chartsImage} alt="Charts" className="home-image" />
                        <Card.Body>
                            <Card.Title>View Charts</Card.Title>
                            <Card.Text>
                                Visualize your data with interactive charts.
                            </Card.Text>
                            <Link to="/chart">
                                <Button variant="primary">View Charts</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default InventoryStockSupplierManHome;