import ArrowEffect from "@/components/ArrowEffect";
import { Container } from "@/components/Container";
import Heading from "@/components/Typo/Heading";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor } from "@/enums/typo";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

function SolutionItem({
  description,
}: {
  description: string;
}): React.JSX.Element {
  return (
    <Flex gap={"5rem"} alignItems={"center"}>
      <Box
        w={"1.5rem"}
        h={"1.5rem"}
        bgColor={TypoColor.white}
        borderRadius={"50%"}
      />
      <Paragraph size={24} fontWeight={400} color={TypoColor.white}>
        {description}
      </Paragraph>
    </Flex>
  );
}

function Solution(): React.JSX.Element {
  return (
    <Box position={"relative"} pt={"10.8rem"} pb={"18.8rem"}>
      <Box
        bgColor={"var(--black)"}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        clipPath={"polygon(0 0, 100% 0, 100% 85%, 0% 100%)"}
      ></Box>
      <Container>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading
              size={48}
              fontWeight={400}
              color={TypoColor.white}
              maxWidth={"51.7rem"}
            >
              Your Imagination is Our Best Solution
            </Heading>
            <Box mt={"5rem"} mb={"7rem"}>
              <ArrowEffect />
            </Box>
            <Flex gap={"6.1rem"}>
              <Flex flexDirection={"column"} gap={"2rem"}>
                <SolutionItem description="Make your design style" />
                <SolutionItem description="Comfort your home" />
                <SolutionItem description="New look, new taste" />
                <SolutionItem description="Happy sale furniture" />
              </Flex>
              <Flex flexDirection={"column"} gap={"2rem"}>
                <SolutionItem description="Interior design" />
                <SolutionItem description="Comfort your home" />
                <SolutionItem description="New look, new taste" />
              </Flex>
            </Flex>
          </Box>
          <Flex gap={"6.2rem"}>
            <Box width={"33rem"} height={"33rem"}>
              <Image
                src={"/img/s_1.jpg"}
                alt={"solution"}
                aspectRatio={1}
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box width={"33rem"} height={"33rem"}>
              <Image
                src={"/img/s_2.jpg"}
                alt={"solution"}
                aspectRatio={1}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Solution;
