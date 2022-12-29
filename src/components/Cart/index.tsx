import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import {
  CartContent,
  CartClose,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartFooter,
  CartFooterDetails,
} from "./styles";

import { priceFormatter } from "../../utils/formatter";

import { X } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import axios from "axios";

export function Cart() {
  const { cartItems, removeFromCart, cartTotal } = useCart();
  const cartQuantity = cartItems.length;

  const formattedCartTotal = priceFormatter.format(cartTotal);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleCheckoutCart() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio :(</p>}

            {cartItems.map((product) => (
              <CartItem key={product.id}>
                <CartItemImage>
                  <Image
                    width={100}
                    height={93}
                    alt=""
                    src={product.imageUrl}
                  />
                </CartItemImage>

                <CartItemDetails>
                  <span>{product.name}</span>
                  <strong>{product.price}</strong>
                  <button onClick={() => removeFromCart(product.id)}>
                    Remover
                  </button>
                </CartItemDetails>
              </CartItem>
            ))}
          </section>

          <CartFooter>
            <CartFooterDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity != 1
                    ? `${cartQuantity} itens`
                    : `${cartQuantity} item`}
                </p>
              </div>

              <div>
                <span>Valor total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </CartFooterDetails>

            <button
              onClick={handleCheckoutCart}
              disabled={isCreatingCheckoutSession || cartQuantity <= 0}
            >
              Finalizar compra
            </button>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
