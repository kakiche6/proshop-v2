import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import { useGetProductsByCategoryQuery } from "../slices/productSlice";
import Message from "../components/Message";
import Loader from "./Loader";

const ProductsByCategory = ({ category }) => {
  const { data, isLoading, error } = useGetProductsByCategoryQuery(category);

  return (
    <div className='mt-5'>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h2>{category}</h2>
          <Row>
            {data.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};
export default ProductsByCategory;
