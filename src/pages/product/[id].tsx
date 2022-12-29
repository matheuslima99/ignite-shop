import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

import { priceFormatter } from "../../utils/formatter";
import { useCart } from "../../hooks/useCart";
import { iProduct } from "../../contexts/CartContext";

interface ProductProps {
  product: iProduct;
}

export default function Product({ product }: ProductProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart();

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id);

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={itemAlreadyInCart}
            onClick={() => addToCart(product)}
          >
            {itemAlreadyInCart
              ? "Produto já está no carrinho"
              : "Colocar na sacola"}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

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

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        description: product.description,
        price: priceFormatter.format(price.unit_amount! / 100),
        numberPrice: price.unit_amount! / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
