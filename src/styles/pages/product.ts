import { styled } from "@stitches/react";

export const ProductContainer = styled("main", {
  maxWidth: 1180,
  margin: "0 auto",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
  padding: "0.25rem",
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontFamily: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "2.5rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    background: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      background: "$green300",
      transition: "0.2s",
    },
  },
});
