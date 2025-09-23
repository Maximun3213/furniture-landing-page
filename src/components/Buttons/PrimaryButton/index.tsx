import Label from "@Components/Typo/Label";
import cn from "classnames";
import React from "react";

import { TypoColor, TypoTagLabel } from "@/enums/typo";

import { Button, ButtonProps } from "@chakra-ui/react";
import s from "./styles.module.scss";

type TPrimaryButton = ButtonProps & {
  color?: "dark" | "yellow";
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline";
  weight?: "light" | "regular" | "bold";
  transform?: "uppercase" | "lowercase" | "capitalize";
  text?: string;
};

export default function PrimaryButton({
  ...props
}: TPrimaryButton): React.JSX.Element {
  const {
    text = "",
    className,
    variant = "solid",
    color = "dark",
    size = "large",
    ...restProps
  } = props;

  const primaryButtonClassNames = cn(
    s.primaryButton,
    size && s[`primaryButton_${size}`],
    s[`primaryButton_${variant}`],
    s[`primaryButton_${variant}_${color}`],
    className
  );

  return (
    <Button
      minWidth={"17.6rem"}
      bgColor={"var(--black)"}
      height={"5.5rem"}
      cursor={"pointer"}
      {...restProps}
    >
      <Label
        color={TypoColor.white_primary}
        size={24}
        as={TypoTagLabel.label}
        fontWeight={500}
      >
        {text}
      </Label>
    </Button>
  );
}
