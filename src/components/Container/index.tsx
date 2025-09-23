import cn from "classnames";
import React, { PropsWithChildren } from "react";

import { Box } from "@chakra-ui/react";
import s from "./styles.module.scss";

type Props = PropsWithChildren & {
  className?: string;
};

export const Container = ({
  children,
  className,
}: Props): React.JSX.Element => {
  return <Box className={cn(s.container, className)}>{children}</Box>;
};

export const GridContainer = ({
  children,
  className,
}: Props): React.JSX.Element => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(4, 1fr)",
        md: "repeat(8, 1fr)",
        lg: "repeat(12, 1fr)",
      }}
      className={cn(s.container_grid, className)}
    >
      {children}
    </Box>
  );
};
