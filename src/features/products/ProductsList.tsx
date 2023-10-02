import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import ProductListItem from "./ProductListItem";
import Product from "./product";

export async function loader() {
  return await getProducts();
}

const ProductsList: React.FC = () => {
  const products = useLoaderData() as Product[];
  return (
    <ul>
      {products.map((product, index) => {
        return <ProductListItem key={index} item={product} />;
      })}
    </ul>
  );
};

export default ProductsList;
