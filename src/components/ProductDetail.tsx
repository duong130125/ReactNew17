import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); 

  return (
    <>
      <h3>Product Detail</h3>
      <p>Product ID: {id}</p>
    </>
  );
};

export default ProductDetail;
