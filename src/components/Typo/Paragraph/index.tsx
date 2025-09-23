import cn from "classnames";
import React from "react";

import {
  FontWeight,
  TypoColor,
  TypoTagParagraph
} from "@/enums/typo";

import { Text, TextProps } from "@chakra-ui/react";
import styles from "./styles.module.scss";

interface BodyProps extends TextProps {
  size?: 48 | 36 | 30 | 24 | 16 | 18;
  tag?: TypoTagParagraph;
  ref?: React.Ref<HTMLDivElement | HTMLParagraphElement>;
}

const Paragraph = ({ ...props }: BodyProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 18,
    as = TypoTagParagraph.div,
    fontWeight = FontWeight.normal,
    className,
    children,
    ...restProps
  } = props;

  const textClassNames = cn(
    styles.text,
    styles[`text__${size}`],
    `text__${color}`,
    className
  );

  return (
    <Text
      {...restProps}
      ref={ref}
      as={as}
      fontWeight={fontWeight}
      className={textClassNames}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
