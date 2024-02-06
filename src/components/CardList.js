import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';



const CardList = ({ itemsData }) => {
  return (
    <Row>
    <Zoom >
      {itemsData.length >= 1 ? (itemsData.map(((item) => {
        return(
          <Col key={item.id} sm="12" className="mb-3">
          <Card
            style={{ backgroundColor: "#f8f8f8" }}
            className="d-flex flex-row"
          >
            <Card.Img className="img-item" variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Text className="d-flex  justify-content-between">
                <div className="item-title"> {item.title} </div>
                <div className="item-price"> {item.price} </div>
              </Card.Text>
              <Card.Text className="py-2">
                <div className="item-description">
                {item.description}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      }
      ))) : (
        <h3 style={{  fontFamily: "Almarai"
      }} className="text-center ">لا يوجد اصناف</h3>
      )}
      </Zoom>
    </Row>
  );
};

export default CardList;
