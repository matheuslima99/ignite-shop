import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import { CartContent, CartClose, CartItem, CartItemImage, CartItemDetails } from "./styles";

import { X } from "phosphor-react";

export function Cart() {
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

            {/* <p>Parece que seu carrinho está vazio :( </p> */}

            <CartItem>
              <CartItemImage>
                <Image 
                width={100}
                height={93}
                alt=""
                src="https://s3-alpha-sig.figma.com/img/fd95/f0b2/85d51884517403ad7e3fc5c12726f99a?Expires=1673222400&Signature=eesl1uKfpyxND1REcfBBNIrskTbEbF7OLOT-tf3e5W9rwmnV6R9YPg8KdbPvd5uULGXT1z2MSZIyaQ9WEQHPxh~zHep0odvlOwKRrXvptL7J3WEEpxMZnPeP03yFVYV7g8-xtA4Ko0NdozHlNP3yDFRxaK-5EmFI8pYvQHYAfryXWvYWR2QOjD-QezKc8E-RIAU8GcXLT7IdppXxeXRE3mUWFZaTDSBf1aw2bxHrm0zfKkJEqowIBwORvUdqWBzceqJyzEt17wFqNwV~rd0ke0oZgv60j9Y15XE~RZYMXajfoKxT7sXie5fJ3-XcqTLc-obcd54pPOLssSuWaVH-pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </CartItemImage>

              <CartItemDetails>
                <span>Camiseta Beyound the Limits</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </CartItemDetails>
            </CartItem>
          </section>
       
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
