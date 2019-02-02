import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Header from '../Header/header';

class carousel extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     customers:[]
  //   }
  // }
  // componentDidMount(){
  //   fetch('/app/customers')
  //     .then(res=>res.json())
  //     .then(customers=>this.setState({customers},()=>console.log('Customers fetched..',customers)));
  // }

    render() { 
        return ( 
            <div>
        <div>
            
            <Header>
            </Header>
        </div>
            <div>
                <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="../img/carousel.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="../img/carousel.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="../img/carousel.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>

            <h2>Customers</h2>
            {/* <ul>
              {this.state.customers.map(customer=>
                <li key={customer.id}>{customer.fname} {customer.lname}</li>)}
            </ul> */}
            </div>
         );
    }
}
 
export default carousel;