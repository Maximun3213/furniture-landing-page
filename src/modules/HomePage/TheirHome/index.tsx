import ArrowEffect from "@/components/ArrowEffect";
import { Container } from "@/components/Container";
import ImagePlaceHolder from "@/components/ImagePlaceHolder";
import Heading from "@/components/Typo/Heading";
import { Box, Flex, Grid } from "@chakra-ui/react";

function TheirHome(): React.ReactElement {
  return (
    <Box py={"15rem"}>
      <Container>
        <Flex
          flexDirection={"column"}
          placeItems={"center"}
          gap={"5rem"}
          maxWidth={"60.6rem"}
          margin={"0 auto"}
          textAlign={"center"}
        >
          <Heading size={48} fontWeight={400}>
            For People Who Love Their Home
          </Heading>
          <ArrowEffect isBlack />
        </Flex>
        <Grid
          gridTemplateColumns={"repeat(4, 1fr)"}
          mt={"10rem"}
          rowGap={"3rem"}
          columnGap={"var(--gap-x)"}
        >
          <Box gridColumn={"span 2"} gridRow={"span 2"}>
            <ImagePlaceHolder
              src={"/img/h1.jpg"}
              alt={"their home"}
              width={500}
              height={500}
            />
          </Box>
          <Box gridColumn={"span 1"} gridRow={"span 1"}>
            <ImagePlaceHolder
              src={"/img/h2.jpg"}
              alt={"their home"}
              width={500}
              height={500}
            />
          </Box>
          <Box gridColumn={"span 1"} gridRow={"span 1"}>
            <ImagePlaceHolder
              src={"/img/h3.jpg"}
              alt={"their home"}
              width={500}
              height={500}
            />
          </Box>
          <Box gridColumn={"span 1"} gridRow={"span 1"}>
            <ImagePlaceHolder
              src={"/img/h4.jpg"}
              alt={"their home"}
              width={500}
              height={500}
            />
          </Box>
          <Box gridColumn={"span 1"} gridRow={"span 1"}>
            <ImagePlaceHolder
              src={"/img/h5.jpg"}
              alt={"their home"}
              width={500}
              height={500}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default TheirHome;
