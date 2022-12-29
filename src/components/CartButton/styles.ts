import { styled } from "@stitches/react";

export const CartButtonContainer = styled("button", {
  border: "none",
  outline: "none",
  borderRadius: 6,
  cursor: "pointer",
  padding: ".75rem",
  position: "relative",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  '& > span': {
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    top: "calc(-1.5rem / 2)",
    right: "calc(-1.5rem / 2)",
    fontSize: ".875rem",
    fontWeight: "bold",
    borderRadius: "50%",
    color: "$white",
    background: "$green500",
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray500",
      },
      green: {
        background: "$green500",
        color: "$white",

        "&:not(:disabled):hover": {
          background: "$green300",
        },
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: "gray",
    size: "medium",
  },
});
