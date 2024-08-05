import React from "react";
import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrawer from "./Sidedrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <Sidedrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <Topnav title={title} onOpen={onOpen} />
          <Container
           
            mt="6"
            maxW="70rem"
            
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
