import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../api"; // Ensure this import is correct
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Helmet } from "react-helmet-async";
import { Row, Col, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";
import { apiError } from "../types/apiError"; // Ensure you have this type defined in your types
import { Badge, Col } from "react-bootstrap";

// Function to convert the error object to a readable error message
const getError = (error: apiError) => {
  return error.message || "An unexpected error occurred";
};

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  // Destructure data and query states from the custom hook
  const {
    data: product,
    refetch,
    isLoading,
    error
  } = useGetProductDetailsBySlugQuery(slug!);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as apiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h1>Product Page</h1>
      <Row>
        <Col md={6}>
          <img className="large" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description: {product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card > 
			<Card.Body>
			<ListGroup variant =" flus">
			<ListGroup.Item>
		<Col> Price: </Col>
		<Col>${product.price}</Col>
            </ListGroup.Item>
			<ListGroup.Item>
				<Row>


					<Col>Status: </Col>
					<Col>
					{product.countInStock > 0 ? (
						<Badge bg="success">In Stock</Badge>
					) : (
						<Badge bg="danger">Out of Stock</Badge>
					)}
					</Col>

			</Row>
            </ListGroup.Item>
          </ListGroup>
			</Card.Body>
		  </Card>
        </Col>
      </Row>
    </div>
  );
}
