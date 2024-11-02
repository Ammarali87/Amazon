import { useReducer, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SimpleProduct } from "../Data";
import ProductItem from "../components/ProductItem"; // Corrected import
import LoadingBox from "../components/LoadingBox";    // Corrected import
import MessageBox from "../components/MessageBox";    // Corrected import
import { Product } from "../types/Product";
import axios from "axios"; // Add axios for data fetching
import { Helmet } from "react-helmet-async";


 
export default function HomePage() {

  const {data: products , isLoading , error } = useGetProdcutQuery()  
      // data and  give intial value   and continue var
      
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div>
      <Container fluid className="mt-3">
        <Row>
          <Helmet>
            <title>Amazon</title>
            <meta name="description" content="Product listings on Amazon" />
          </Helmet>
          {products!.map((product) => (
            <Col sm={6} md={4} lg={3} key={product.slug}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
