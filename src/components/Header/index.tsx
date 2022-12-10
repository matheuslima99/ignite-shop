import Image from "next/image";
import Link from "next/link";
import { HeaderContainer } from "./styles";

import igniteLogo from "../../assets/logo.svg";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={igniteLogo} alt="" priority />
      </Link>
      <Cart />
    </HeaderContainer>
  );
}
