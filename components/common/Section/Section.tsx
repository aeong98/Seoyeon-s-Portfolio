import React from "react";
import { Container, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionDiv: any = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function Section({ children, delay = 0 }: any) {
  return (
    <MotionDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
      }}
      mb={6}
    >
      {children}
    </MotionDiv>
  );
}
