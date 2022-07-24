import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";
import { Box, Container } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Box as="main" pb={8}>
            <Container maxW="container.md" pt={14}>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <Main />
              <NextScript />
            </Container>
          </Box>
          {/* 👇 Here's the script */}
        </body>
      </Html>
    );
  }
}
