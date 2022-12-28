import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    color: "$gray100",
    backgroundColor: "$gray900",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  
  "::-webkit-scrollbar": {
    width: "0.45rem",
  }, 

  "::-webkit-scrollbar-track": {
    background: "$gray700"
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "2rem",
    background: "$green500",
  }
});
