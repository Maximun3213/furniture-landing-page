import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ImagePlaceHolder from "@/components/ImagePlaceHolder";
import Heading from "@/components/Typo/Heading";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor, TypoTagHeading, TypoTagParagraph } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";

function Live(): React.JSX.Element {
  return (
    <Box position={"relative"} py={"10rem"}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
      >
        <ImagePlaceHolder
          src={"/img/live.jpg"}
          alt={"live"}
          width={1920}
          height={557}
        />
      </Box>
      <Flex flexDirection={"column"} gap={"5rem"} alignItems={"center"}>
        <Heading
          size={48}
          fontWeight={400}
          color={TypoColor.white}
          as={TypoTagHeading.h2}
          maxWidth={"51.7rem"}
          textAlign={"center"}
        >
          Furniture Change Your Live
        </Heading>
        <Paragraph
          size={18}
          fontWeight={500}
          color={TypoColor.white}
          as={TypoTagParagraph.p}
          maxWidth={"137.3rem"}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          condimentum adipiscing sapien proin. Aliquet amet non enim, ut aliquet
          in pulvinar eu. er condimentum adipiscing sapien proin. Aliquet amet
          entum adipiscing sapien proin. r condimentum adipiscin adipiscing
          sapien proin. Aliquet amet scing sapien proin. r condimentum adipiscin
          adipiscing sapien proin.
        </Paragraph>
        <PrimaryButton text="Details" color="white" />
      </Flex>
    </Box>
  );
}

export default Live;
