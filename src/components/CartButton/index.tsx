import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { useCart } from "../../hooks/useCart";
import { CartButtonContainer } from "./styles";

interface CartButtonProps extends ComponentProps<typeof CartButtonContainer> {
  quantity?: boolean;
}

export function CartButton({ quantity, ...props }: CartButtonProps) {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.length;

  return (
    <CartButtonContainer {...props}>
      <Handbag weight="bold" />
      {quantity && cartQuantity >= 1 && <span>{cartQuantity}</span>}
    </CartButtonContainer>
  );
}
