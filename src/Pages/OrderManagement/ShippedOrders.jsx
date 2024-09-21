import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import OrderManagementHeader from './OrderManagementHeader';
import { useReactToPrint } from 'react-to-print';

const ShippedOrders = () => {
  
  const [order, setOrder] = useState([])

  const componentRef = useRef()

  useEffect(()=>{
    axios.post('http://127.0.0.1:3001/api/order/getorders',{status : 'shipped'})
    .then(res=> setOrder(res.data.response))
    .catch(err=> console.log(err))

  },[])

  const changeStateDelivered = (orderId) => {
    console.log(orderId)

    axios.patch('http://127.0.0.1:3001/api/order/updateordersatebyorderid', {_id: orderId, status: "delivered"})
    .then(res => setOrder(order.filter((order) => order._id !== orderId)))
    .catch(err => console.log(err))
    
  }
  const changeStateProcessing = (orderId) => {
    console.log(orderId)

    axios.patch('http://127.0.0.1:3001/api/order/updateordersatebyorderid', {_id: orderId, status: "processing"})
    .then(res => setOrder(order.filter((order) => order._id !== orderId)))
    .catch(err => console.log(err))
    
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
        <div className="mng-nav">
        <OrderManagementHeader/>
        </div>
        <div className="mng-head">
            <h2 className="heading">Shipped Orders</h2>
        </div>
        <div className="Mng-container">
          <div ref={componentRef}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Product Id</th>
                <th>Size</th>
                <th>Color</th>
                <th>Qty</th>
                <th>Address</th>
                <th>State</th>
                <th>Move to</th>
                <th>Move to</th>
              </tr>
            </thead>
            <tbody>
            {
                order.map((item, i) => {
                  return (<tr key={i}>
                  <td>{item._id}</td>
                  <td>{item.pid}</td>
                  <td className="text-capitalize">{item.size}</td>
                  <td className="text-capitalize">{item.color}</td>
                  <td>{item.qty}</td>
                  <td className="text-capitalize">{item.address}</td>
                  <td className="text-capitalize">{item.status}</td>
                  <td>
                    <Button variant="primary" onClick={() => changeStateProcessing(item._id)}>Processing State</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => changeStateDelivered(item._id)}>Delivered State</Button>
                  </td>
                </tr>)
                })
              }
            </tbody>
          </Table>
          </div>
          <div className="button-container">
              <Button onClick={handlePrint}>Download as PDF</Button>
          </div>
        </div>
  </div>
  )
}

export default ShippedOrders
