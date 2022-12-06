import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          ducimus ab aliquid praesentium, tempore facere blanditiis tempora
          voluptatum dicta accusantium aut cumque tenetur quas. Enim quidem sint
          ipsam deleniti delectus!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
