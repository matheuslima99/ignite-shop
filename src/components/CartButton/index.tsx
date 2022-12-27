import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { CartButtonContainer } from "./styles";

interface CartButtonProps extends ComponentProps<typeof CartButtonContainer> {}

export function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      <Handbag weight="bold" />
    </CartButtonContainer>
  );
}
