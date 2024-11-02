import { useReducer, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SimpleProduct } from "../Data";
import ProductItem from "../components/ProductItem"; // Corrected import
import LoadingBox from "../components/LoadingBox";    // Corrected import
import MessageBox from "../components/MessageBox";    // Corrected import
import { Product } from "../types/Product";
import axios from "axios"; // Add axios for data fetching
import { Helmet } from "react-helmet-async";

// Define initial state type
type State = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

// Define action types
type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: Product[] }
  | { type: "FETCH_FAIL"; payload: string };

// Reducer function to handle state transitions
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload, error: null };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function HomePage() {
  // Initial state setup
  const initialState: State = { products: [], loading: false, error: null };

  // Set up reducer with useReducer
  const [{ loading, products, error }, dispatch] = useReducer(reducer, initialState);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get("/api/products"); // Assuming endpoint exists
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error: any) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };

    fetchProducts();
  }, []);

  // Conditional rendering based on loading and error states
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Container fluid className="mt-3">
        <Row>
          <Helmet>
            <title>Amazon</title>
            <meta name="description" content="Product listings on Amazon" />
          </Helmet>
          {products.map((product) => (
            <Col sm={6} md={4} lg={3} key={product.slug}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
