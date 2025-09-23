import cn from "classnames";
import React from "react";

import { TypoColor, TypoTagHeading } from "@/enums/typo";

import { Text, TextProps } from "@chakra-ui/react";
import styles from "./styles.module.scss";

interface HeadingProps extends TextProps {
  size?: 25 | 30 | 36 | 60 | 64 | 72 | 85 | 88 | 250;
  as?: TypoTagHeading;
  ref?: React.Ref<HTMLHeadingElement>;
}

const Heading = ({ ...props }: HeadingProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 72,
    as = TypoTagHeading.h1,
    children,
    className,
    ...restProps
  } = props;

  const textClassNames = cn(
    styles.text,
    styles[`text__${size}`],
    `text__${color}`,
    className
  );

  return (
    <Text {...restProps} ref={ref} as={as} className={textClassNames}>
      {children}
    </Text>
  );
};

Heading.displayName = "Heading";

export default Heading;
