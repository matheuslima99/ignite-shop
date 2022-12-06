import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

import { priceFormatter } from "../../utils/formatter";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    description: string;
    price: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { query } = useRouter();

  console.log(query);

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  async function getStaticPaths() {
    return {
      paths: [`/product/${productId}`],
      fallback: true,
    };
  }

  getStaticPaths();
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        description: product.description,
        price: priceFormatter.format(price.unit_amount! / 100),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
