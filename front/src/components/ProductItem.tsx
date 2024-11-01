 import {Prodcut} from "../types/Prodcut.ts"
 import { Link } from "react-router-dom"
 
function ProdcutItem({prodcut } :{ prodcut:Prodcut }) {

	return (
		<Card>
			  <Link to={'/prodcut/ ' + product.slug } >
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.slug}
                  />
                  <h3 className="text-white">{product.slug}</h3>
                  <p className="text-white">{product.description}</p>
                  <p className="text-white">Price: ${product.price}</p>
                  <p className="text-white">Rating: {product.rating}</p>
                  <p className="text-white">Reviews: {product.numReviews}</p>
                </Link>
				<Card.Body>
				<Link to={'/prodcut/ ' + product.slug } >
				<Card.Title>	{product.name}	</Card.Title>
                </Link>
				<Rating numReviews={prodcut.numReviews} rating={prodcut.rating} />
				<Card.Text>{prodcut.price}$</Card.Text>
               {prodcut.countInStock === 0 ? (
                 <Button variant="light" disabled> out of stock  </Button>
			   ) : (  
				<Button > add to cart </Button>
			   )
			   }

				</Card.Body>
		</Card>
	)
	   
 }

export default ProdcutItem