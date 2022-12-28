import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContent = styled(Dialog.Content, {
  width: "30rem",
  padding: "3rem",
  paddingTop: "4.5rem",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  backgroundColor: "$gray800",

  display: "flex",
  flexDirection: "column",

  h2: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
    marginTop: "1.5rem",
  },

  section: {
    marginTop: "2rem",
    overflowY: "auto",
  },
});

export const CartClose = styled(Dialog.Close, {
  border: "none",
  outline: "none",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",
  marginLeft: "auto",
  cursor: "pointer",
  color: "$gray500",
  background: "transparent",

  svg: {
    color: "$gray500",
  },
});

export const CartItem = styled("div", {
  width: "100%",
  height: "5.8125rem",
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",

  "& + div": {
    marginTop: "1.5rem",
  },
});

export const CartItemImage = styled("div", {
  width: "6.3125rem",
  height: "5.8125rem",
  borderRadius: 8,
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const CartItemDetails = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",

  p: {
    color: "$gray300",
    fontSize: "1.125rem",
  },

  strong: {
    marginTop: 4,
    fontSize: "1.125rem",
  },

  button: {
    width: "max-content",
    fontSize: "1rem",
    fontWeight: 700,
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "$green500",
    background: "none",
    marginTop: "auto",
  },
});

export const CartFooter = styled("footer", {
  marginTop: "auto",

  display: "flex",
  flexDirection: "column",

  button: {
    fontSize: "$md",
    fontWeight: 700,
    border: "none",
    outline: "none",
    borderRadius: 8,
    cursor: "pointer",
    padding: "1.25rem 2rem",
    color: "$white",
    background: "$green500",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      background: "$green300",
    },
  },
});

export const CartFooterDetails = styled("section", {
  marginBottom: "3.5625rem",

  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    p: {
      fontSize: "$md",
      color: "$gray300",
    },

    "&:last-child": {
      fontWeight: 700,

      span: {
        fontSize: "$md",
      },

      p: {
        fontSize: "$xl",
        color: "$gray100",
      },
    },
  },
});
