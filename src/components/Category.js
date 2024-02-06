import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from 'react-reveal/Roll';

const Category = ({ filterbyCategory, allCategory }) => {
  // to filter
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };
  return (
    <Row 
    
    className="my-3 mb-5">
    <Roll>
      <Col sm="12" className="justify-content-center d-flex">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <div >
                <button
                  onClick={() => {
                    onFilter(cat);
                  }}
                  style={{ border: "1px solid #B45B35" }}
                  className="btn mx-2"
                >
                {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h4> لا توجد تصنيفات </h4>
        )}
      </Col>
      </Roll>
    </Row>
  );
};

export default Category;
