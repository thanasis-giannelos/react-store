import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import ProductListItem from "./ProductListItem";
import Product from "./product";
import { styled } from "styled-components";

export async function loader() {
  return await getProducts();
}

const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProductsList: React.FC = () => {
  const products = useLoaderData() as Product[];
  return (
    <StyledProductsList>
      {products.map((product, index) => {
        return <ProductListItem key={index} item={product} />;
      })}
    </StyledProductsList>
  );
};

export default ProductsList;
