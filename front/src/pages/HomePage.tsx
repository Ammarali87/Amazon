import { Container, Row , Col } from "react-bootstrap"
import { SimpleProduct } from "../Data"
import ProdcutItem from  "../components/ProdcutItem"
import ProdcutItem from  "../components/LoadingBox"
import ProdcutItem from  "../components/MessageBox"
import {Product} from "../types/Product"







export default function HomePage(){

  type State = {
    prodcuts : Product[] 
     loadin :boolean 
     error : string 
    }

    type Action = |{ 
      type :"FETCH _REQUEST "} 
      | { 
        type : "FETCH_SUCCESS"
         payload : Product[]
      }
      | { 
        type : "FETCH_FAIL"
         payload : String 
      }

       // const intialState : State ={}

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