import cn from "classnames";
import React from "react";

import { FontWeight, TypoColor, TypoElement, TypoTagLabel } from "@/enums/typo";

import { Text, TextProps } from "@chakra-ui/react";
import styles from "./styles.module.scss";

interface LabelProps extends TextProps {
  size?: 200 | 64 | 28 | 24 | 20 | 18 | 17 | 16 | 14 | 12 | 13;
  as?: TypoTagLabel;
  ref?: React.Ref<TypoElement>;
}

const Label = ({ ...props }: LabelProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 18,
    as = TypoTagLabel.span,
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
      ref={ref as React.Ref<HTMLParagraphElement>}
      as={as}
      fontWeight={fontWeight}
      className={textClassNames}
    >
      {children}
    </Text>
  );
};

export default Label;
