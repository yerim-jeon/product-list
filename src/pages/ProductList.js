import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getProducts } from '../api';

import Product from '../components/Product';
import Detail from '../components/Product/Detail';
import { ModalContext } from '../contexts/ModalContext';

const ProductList = () => {
  const { handleModal } = useContext(ModalContext);

  const [allProducts, setAllProducts] = useState([]);

  const ViewDetail = (item) => {
    handleModal(<Detail item={item} />);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();

      setAllProducts(data);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <ul>
        {allProducts.map((item) => {
          return <Product item={item} key={item.product_id.toString()} openModal={() => ViewDetail(item)} />;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1140px;
  box-sizing: border-box;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;

export default ProductList;
