import { styled } from "@stitches/react";

export const CartButtonContainer = styled("button", {
  width: "3rem",
  height: "3rem",
  border: "none",
  outline: "none",
  borderRadius: 6,
  cursor: "pointer",
  padding: ".75rem",
  position: "relative",
  background: "$gray800",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  svg: {
    fontSize: 24,
    color: "$gray500",
  },
});
