import ImagePlaceHolder from "@/components/ImagePlaceHolder";
import { Grid } from "@chakra-ui/react";
import React from "react";

const AboutPage = (): React.JSX.Element => {
  return (
    <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4} marginTop={"5rem"}>
      <div>
        <ImagePlaceHolder
          src={
            "https://images.unsplash.com/photo-1726064855757-ac8720008fe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"unsplash"}
          width={500}
          height={500}
        />
      </div>
      <div>
        <ImagePlaceHolder
          src={
            "https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"unsplash"}
          width={500}
          height={500}
        />
      </div>
      <div>
        <ImagePlaceHolder
          src={
            "https://images.unsplash.com/photo-1646444254678-b937f153b221?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"unsplash"}
          width={500}
          height={500}
        />
      </div>
    </Grid>
  );
};

export default AboutPage;
