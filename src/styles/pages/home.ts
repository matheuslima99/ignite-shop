import { styled } from "..";

export const HomeContainer = styled("main", {
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  minHeight: "41rem",
  marginLeft: "auto",

  display: "flex",
  gap: "3rem",
});

export const Product = styled("a", {
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    padding: "2rem",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s  ease-in-out",
    background: "rgba(0, 0, 0, 0.6)",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
