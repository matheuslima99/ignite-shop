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

import { X } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Cart() {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.length;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
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
                  <button onClick={() => console.log("remove")}>Remover</button>
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
                <p>R$ 270,00</p>
              </div>
            </CartFooterDetails>

            <button>Finalizar compra</button>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
