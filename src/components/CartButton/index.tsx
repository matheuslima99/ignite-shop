import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { CartButtonContainer } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      <Handbag weight="bold" />
    </CartButtonContainer>
  );
}
