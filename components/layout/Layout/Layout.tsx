import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children, router }: any) {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath}></Navbar>
      <Container maxW={"container.md"} pt={14}>
        {children}
      </Container>
    </Box>
  );
}
