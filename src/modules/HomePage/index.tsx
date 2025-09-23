"use client";

import { TypoTagHeading } from "@/enums/typo";
import { Container } from "@Components/Container";
import ImagePlaceHolder from "@Components/ImagePlaceHolder";
import Heading from "@Components/Typo/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import splitType from "split-type";
import s from "./styles.module.scss";

function HomePage(): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const text = new splitType(".home h1", {
        types: "chars",
      });

      gsap.set(text.chars, {
        y: 50,
      });

      gsap.to(text.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power3.in",
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div className={"home"} ref={containerRef}>
      <Heading size={72} overflow={"hidden"} as={TypoTagHeading.h1}>
        Home Page
      </Heading>
      <Container>
        <div className={s.wrapper_inner}>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                "https://images.unsplash.com/photo-1726064855757-ac8720008fe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"unsplash"}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                "https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"unsplash"}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                "https://images.unsplash.com/photo-1646444254678-b937f153b221?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"unsplash"}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                "https://images.unsplash.com/photo-1662906551190-8cb78688bf87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"unsplash"}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                "https://images.unsplash.com/photo-1507476691696-10da4222fb71?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"unsplash"}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                "https://images.unsplash.com/photo-1642322610539-2816c111ad24?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"unsplash"}
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
