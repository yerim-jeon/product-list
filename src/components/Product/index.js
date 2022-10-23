import styled from 'styled-components';

import Button from '../Shared/Button';

const Product = ({ item, openModal }) => {
  const { product_id, product_name, thumbnail, details } = item;

  return (
    <Wrapper onClick={openModal}>
      <div className="top">
        <span className="image"><img src={`${process.env.PUBLIC_URL}/images/product_${product_id}/${thumbnail}`} alt={product_name} /></span>
        <span className="text">{details.count}가지 디자인</span>
      </div>
      <div className="bottom">
        <span>{product_name}</span>
        <StyledButton></StyledButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 360px;
  height: 480px;
  margin: 0 30px 30px 0;
  box-sizing: border-box;
  cursor: pointer;

  :nth-child(3n) {
    margin-right: 0;
  }

  :hover {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    transition: all .45s ease-out;

    .top {
      .text {
        opacity: 1;
        transition: visibility .45s ease-out, opacity .45s ease-out;
      }
    }
  }

  .top {
    position: relative;
    .image {
      img {
        background-color: rgb(242, 244, 247);
      }
    }

    .text {
      position: absolute;
      left: 15px;
      bottom: 15px;
      padding: 6px 6px 6px 6px;
      border: solid 1px #ddd;
      border-radius: 3px;
      background-color: #fff;
      font-size: 12px;
      opacity: 0;
    }
  }

  .bottom {
    display: flex;
    padding: 0 15px;

    span {
      margin-right: auto;
      line-height: 40px;
      font-weight: 600;
    }
  }
`;

const StyledButton = styled(Button)`
  z-index: 1;
  position: relative;
  margin-left: auto;
  width: 24px;
  height: 24px;
  margin: 8px 0;
  background: url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/png/good-b-2424-3x.png") 0% 0%/cover no-repeat;
`;

export default Product;
