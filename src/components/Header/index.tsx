import Image from "next/image";
import Link from "next/link";
import { HeaderContainer } from "./styles";

import igniteLogo from "../../assets/logo.svg";
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={igniteLogo} alt="" priority />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
