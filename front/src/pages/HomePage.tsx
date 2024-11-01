import { Container, Row , Col } from "react-bootstrap"
import { SimpleProduct } from "../Data"
import ProdcutItem from  "../components/ProdcutItem"
import ProdcutItem from  "../components/LoadingBox"
import ProdcutItem from  "../components/MessageBox"
import {Product} from "../types/Product"

export default function HomePage(){
	return(
		<div>
    <Container fluid className="mt-3 ">
          <Row>
            {SimpleProduct.map((product) => (
              <Col   sm={6} md={4} lg={3} className=" " key={product.slug}>
                <ProdcutItem prodcut={product}/>
              </Col>
            ))}
          </Row>
        </Container>


		</div>
	)
}