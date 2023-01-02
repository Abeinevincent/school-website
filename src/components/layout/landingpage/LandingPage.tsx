import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../../sections/navbar/Navbar";
type LandingPaProps = {
  children: React.ReactNode
}
export default function LandingPage({ children, ...others }: LandingPaProps) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...others}
    >
      <NavBar />
      <Box>

      {children}
      </Box>
    </Flex>
  );
}
