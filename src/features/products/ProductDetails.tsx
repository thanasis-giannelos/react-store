import ImageGallery from "../../components/image-gallery/ImageGallery";
import Product from "./product";
import { getProduct } from "../../services/apiProducts";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import {
  CartItem,
  addToCart,
  decrement,
  increment,
  removeFromCart,
} from "../cart/cartSlice";

export async function loader({ params }: LoaderFunctionArgs): Promise<Product> {
  return await getProduct(params.productId as string);
}

const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useLoaderData() as Product;

  function addToCartHandler() {
    const newCartItem: CartItem = {
      id: product.id,
      img: product.thumbnail,
      name: product.title,
      quantity: 1,
      unitPrice: product.price,
      totalPrice: 0,
    };
    dispatch(addToCart(newCartItem));
  }

  return (
    <div className="container">
      <ImageGallery images={product.images} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h3>$ {product.price}</h3>
      <button onClick={addToCartHandler}>ADD TO CART</button>
      <button onClick={() => dispatch(decrement(product.id))}>-</button>
      <button onClick={() => dispatch(increment(product.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(product.id))}>
        REMOVE
      </button>
    </div>
  );
};

export default ProductDetails;
