import ArrowEffect from "@/components/ArrowEffect";
import { Container, GridContainer } from "@/components/Container";
import Heading from "@/components/Typo/Heading";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";

function Interesting(): React.JSX.Element {
  return (
    <Box pt={"15rem"} pb={"16.2rem"}>
      <Container>
        <GridContainer>
          <Box gridColumn={"span 8"}>c</Box>
          <Box gridColumn={"span 4"}>
            <Flex flexDirection={"column"} gap={"5rem"}>
              <Heading size={48} fontWeight={400} color={TypoColor.black}>
                Interesting Design & Great Look
              </Heading>
              <ArrowEffect isBlack />
              <Paragraph
                size={18}
                fontWeight={500}
                style={{ color: "#7a7a7a" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                condimentum adipiscing sapien proin. Aliquet amet non enim, ut
                aliquet in pulvinar eu. er condimentum adipiscing sapien proin.
                Aliquet amet entum adipiscing sapien proin. r condimentum
                adipiscin
              </Paragraph>
            </Flex>
          </Box>
        </GridContainer>
      </Container>
    </Box>
  );
}

export default Interesting;
