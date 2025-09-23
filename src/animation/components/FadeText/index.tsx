import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type FadeTextProps = PropsWithChildren & {
  text: string;
};

function FadeText({ children }: FadeTextProps): React.JSX.Element {
  return <Box>{children}</Box>;
}

export default FadeText;
