import ArrowEffect from "@/components/ArrowEffect";
import { Container, GridContainer } from "@/components/Container";
import Heading from "@/components/Typo/Heading";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import NumCircle from "./NumCircle";

function Interesting(): React.JSX.Element {
  return (
    <Box pt={"15rem"} pb={"16.2rem"}>
      <Container>
        <GridContainer>
          <Box gridColumn={"span 8"}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingRight={"9.3rem"}
            >
              <NumCircle
                num={215}
                title={"Coworker"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing"
                }
              />
              <NumCircle
                num={300}
                title={"Desk"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing"
                }
              />
              <NumCircle
                num={50}
                title={"Rooms"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing"
                }
              />
            </Flex>
          </Box>
          <Box gridColumn={"span 4"}>
            <Flex flexDirection={"column"} gap={"4rem"}>
              <Heading size={48} fontWeight={400} color={TypoColor.black}>
                Interesting Design & Great Look
              </Heading>
              <ArrowEffect isBlack />
              <Paragraph size={18} fontWeight={500} color={TypoColor.gray}>
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
