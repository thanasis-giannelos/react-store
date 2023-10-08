import React from "react";
import Product from "./product";
import {
  CartItem,
  addToCart,
  decrement,
  getCurrentQuantityById,
  increment,
} from "../cart/cartSlice";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Button from "../../ui/Button";

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
`;

const ProductControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;

const ImgContainer = styled.div`
  height: 300px;
`;
const Img = styled.img`
  height: 100%;
`;

type ProductListItemProps = {
  item: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  const { id, title, thumbnail, price } = item;
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => getCurrentQuantityById(state, id));

  function addToCartHandler() {
    const newCartItem: CartItem = {
      id: id,
      img: thumbnail,
      name: title,
      quantity: 1,
      unitPrice: price,
      totalPrice: price,
    };
    dispatch(addToCart(newCartItem));
  }

  return (
    <ProductItem>
        <ImgContainer>
          <Img src={thumbnail} alt="" />
        </ImgContainer>
        <div>
          <p>{title}</p>
          <p>$ {price}</p>
        </div>
      <div>
        {quantity ? (
          <ProductControls>
            <Button variation="primary" size='medium' onClick={() => dispatch(decrement(id))}>-</Button>
            <span>{quantity}</span>
            <Button variation="primary" size='medium' onClick={() => dispatch(increment(id))}>+</Button>
          </ProductControls>
        ) : (
          <Button variation="primary" size='medium' onClick={addToCartHandler}>ADD TO CART</Button>
        )}
      </div>
    </ProductItem>
  );
};

export default ProductListItem;
