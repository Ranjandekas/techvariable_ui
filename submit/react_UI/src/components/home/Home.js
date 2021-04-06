import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/tsr.png';
import image2 from '../../assets/pav-bhaji.png';
import 'bootstrap/dist/css/bootstrap.css';
import { masterService } from '../../components/common/services/index';
import {
  Col,
  Input,
  Row, Container,
} from 'reactstrap';
import Filter from '../filter/Filter';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
}



function Home() {
  

  let [orders, setOrders] = useState([]);
  let [formatList, setFormatList] = useState([{'name': 'Buffet'},{'name': 'Mini Buffet'},{'name': 'Lunch Box'}]);
  let [listOccasion, setlistOccasion] = useState([{'name': 'Birthday'},{'name': 'Baby Shower'},{'name': 'House Warming'}]);
  
  useEffect(() => {
    let mounted = true;
    masterService.getList()
      .then(items => {
        if(mounted) {
          for(let i=0; i<items.length; i++){
            if(i%2==0){
              items[i].image = image1;
            }
            else{
              items[i].image = image2;
            }
          }
          setOrders(items)
        }
      })
    return () => mounted = false;
  }, [])
  
  function selectOccasion(){

  }

  function selectFormat(){
    
  }

 
  return (
    <div>
    <Row>
      <Col md="12" xs="12" className='carousel-back'>
      <Container>
        <h3>Most Frequently Ordered</h3>
      <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              showDots={false}
              infinite={true}
              slidesToSlide={1}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="all 1s"
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="pad-40"
            >
              {orders.map(row => {
                return (
                  <div>
                    <img src={row.image} />
                    <div>
                      <h6 >{row.hotel}</h6>
                      <p>Re-order</p>
                                         </div>
                    
                  </div>
                );
              }, this)}
            </Carousel>
    </Container>
  
      </Col>
    </Row>
    <Container>
    <Row>
     
      <Col md="4" xs="12">
      <h3>Filters </h3>
      <Filter 
                        formats={formatList} 
                        occasion={listOccasion} 
                        selectFormat={selectFormat.bind(this)}
                        selectOccasion={selectOccasion.bind(this)}/>

    <div>
      <label htmlFor="customRange1">Price</label>
      <input type="range" className="custom-range" id="customRange1" min="500" max="5000"/>
    </div>
      </Col>
      <Col md="8" xs="12">
      <h3>Results</h3>
      <Row>
        <Col md="12" xs="12">
          <div style={{float: 'right'}}>
          <label htmlFor="sort">Sort by</label>
      <Input type="select" name="sort" value='popular'  className="dropdownwidth2"  style={{width: "100%"}}>
                        <option value="">Select Device</option>
                        <option value="popular">Most Popular</option>
                        
                      </Input>
          </div>
      
                      </Col>
      </Row>
      
      <Row className="card-border">
      {orders.map((row, ind) => {
                return (
                  <Col md="4"  xs="6" key={ind+1}>
                    <div className="card-border">
                    <img src={row.image} className="img-dim"/>
                    <div>
                      <h6 >{row.hotel}</h6>
                      <p><span className="text-warning">Rs. 199</span> per head . 10 dishes</p>
                      <p><span className={`badge ${parseInt(row.rating) > 3 ? 'badge-primary': 'badge-danger'}`}> *{row.rating}</span> 213 Ratings</p>
                                         </div>
                                         </div>
                    
                  </Col>
                );
              }, this)}
      </Row>
      </Col>
      
    </Row>
    </Container>
    </div>
   );
}

export default Home;
