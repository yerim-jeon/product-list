import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Shared/Button';
import Checkbox from '../Shared/Checkbox';

const Detail = ({ item }) => {
  const { product_id, product_name, details, detail_images, price } = item;
  const { description, count, product, option } = details;

  const [currentImage, setCurrentImage] = useState(detail_images[0]);
  const [checkedImages, setCheckedImages] = useState([]);

  const handleClickImage = (image) => {
    setCurrentImage(image);
  };

  const handleChange = (event) => {
    const { id, checked } = event.target;

    if (checked) {
      setCheckedImages([...checkedImages, id]);
    } else {
      setCheckedImages(checkedImages.filter((item) => item !== id));
    }
  };

  return (
    <Wrapper>
      <ImageBox>
        <div className="top">
          <span><img src={`${process.env.PUBLIC_URL}/images/product_${product_id}/${currentImage}`} alt={product_name} /></span>
        </div>
        <div className="bottom">
          <ul>
            {detail_images.map((image, index) => {
              let isActive = '';

              if (image === currentImage) {
                isActive = 'active';
              }

              const checkboxList = index === 0 ? '' : (
                <Checkbox
                  key={image}
                  checked={checkedImages.includes(image) ? true : false}
                  id={image}
                  name="detail"
                  onChange={handleChange}>
                </Checkbox>
              );

              return <>
                <li key={image} className={isActive}>
                  {checkboxList}
                  <div onClick={() => handleClickImage(image)}>
                    <img src={`${process.env.PUBLIC_URL}/images/product_${product_id}/${image}`} alt={product_name} />
                  </div>
                </li>
              </>;
            })}
          </ul>
          <p>원하는 뒷면 디자인을 선택해주세요.(<em>{checkedImages.length}</em>/{count}개)</p>
        </div>
      </ImageBox>
      <DescBox>
        <div className="top">
          <strong>{product_name}</strong>
          <span>{description}</span>
          <span>하나의 앞면 디자인에<br />{count}가지 디자인이<br />한 세트인 상품입니다.</span>
          <div>
            <span>상품 : {product}</span>
            <span>옵션 : {option}</span>
          </div>
        </div>
        <div className="bottom">
          <div className="price">
            <span>가격</span>
            <em>{price}원</em>
          </div>
          <div className="options">
            <StyledButton type="button" disabled={!checkedImages.length}>디자인 선택</StyledButton>
            <StyledLikeButton type="button"></StyledLikeButton>
          </div>
        </div>
      </DescBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1140px;
  height: 620px;
  background-color: #fff;
`;

const ImageBox = styled.div`
  margin-right: auto;
  width: 860px;
  background-color: #f2f4f7;

  .top {
    display: flex;
    height: 442px;
    justify-content: center;
    align-items: center;

    span {
      width: 230px;
      height: 230px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

      img {
        display: inline-block;
      }
    }
  }

  .bottom {
    position: relative;
    height: 178px;
    background: #edf0f4;
    border-top: 1px solid #ddd;
    overflow: hidden;
    text-align: center;

    ul {
      display: flex;
      padding-top: 15px;
      justify-content: center;

      li {
        :first-child {
          margin-top: 17px;
        }

        &.active {
          div {
            outline: 1px solid #000;
          }
        }

        div {
          margin-top: 5px;
          width: 80px;
          height: 80px;
          padding: 12px;
          box-sizing: content-box;
        }
      }
    }

    p {
      padding-top: 8px;
      color: #191919;

      em {
        color: #2c83e9;
      }
    }
  }
`;

const DescBox = styled.div`
  position: relative;
  margin-left: auto;
  width: 280px;

  .top {
    position: absolute;
    padding: 43px 30px 24px 30px;

    div {
      span {
        position: relative;
        margin-bottom: 8px;
        padding-left: 9px;
        padding-bottom: 0;
        font-size: 11px;

        :before {
          position: absolute;
          display: inline-block;
          top: 8px;
          left: 0;
          width: 3px;
          height: 3px;
          content: '';
          background: #2c83e9;
        }
      }
    }

    strong {
      display: block;
      font-size: 20px;
      padding-bottom: 20px;
      font-weight: normal;
      line-height: 28px;
      word-break: break-all;
    }

    span {
      display: block;
      padding-bottom: 20px;
      font-size: 12px;
      font-weight: normal;
      line-height: 20px;
      padding-bottom: 20px;
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;

    .price {
      display: flex;
      margin: 0 30px;
      border-top: 1px solid #eee;
      line-height: 60px;

      span {
        margin-right: auto;
        font-weight: 500;
      }

      em {
        margin-left: auto;
        font-weight: 500;
        color: #e5362c;
        font-size: 13px;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  height: 50px;
  width: 230px;
  padding: 0 30px;
  border: 1px solid #2c83e9;
  background-color: #2c83e9;
  font-size: 12px;
  box-sizing: border-box;
  color: #fff;

  :disabled {
    border: 1px solid #c7cdd3;
    background-color: #c7cdd3;
    text-align: center;
  }
`;

const StyledLikeButton = styled(Button)`
  z-index: 1;
  border-left: 1px solid rgba(0,0,0,0.2);
  position: relative;
  margin-left: auto;
  width: 50px;
  height: 50px;
  vertical-align: bottom;
  background: #2c83e9 url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/png/good-w-b-2424-3x.png") 50% 50%/24px 24px no-repeat;
`;

export default Detail;
