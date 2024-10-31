import { Container, Row , Col } from "react-bootstrap"
import { SimpleProduct } from "../Data"
import { Link } from "react-router-dom"

export default function HomePage(){
	return(
		<div>
    <Container fluid className="mt-3 ">
          <Row>
            {SimpleProduct.map((product) => (
              <Col   sm={6} md={4} lg={3} className=" " key={product.slug}>
                 <Link to={'/prodcut/ ' + product.slug } >
                <div className="">
                  <img
                    className=" "
                    src={product.img}
                    alt={product.slug}
                  />
                  <h3 className="text-white">{product.slug}</h3>
                  <p className="text-white">{product.description}</p>
                  <p className="text-white">Price: ${product.price}</p>
                  <p className="text-white">Rating: {product.rating}</p>
                  <p className="text-white">Reviews: {product.numReviews}</p>
                </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>


		</div>
	)
}