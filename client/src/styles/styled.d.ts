import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;

    colors: {
      backgrounds: {
        white: string;
        cards: string;
        base: string;
        pink: string;
        softPink: string;
      };
      typography: {
        darkest: string;
        dark: string;
        light: string;
        lighter: string;
        poppins: string;
        openSans: string;
        Roboto: string;
      };
      details: {
        primary: string;
        secondary: string;
        secondary1: string;
        secondary2: string;
      };
    };
  }
}
