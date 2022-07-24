import type { NextPage } from "next";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  Tag,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import profileImg from "../assets/profile-image.jpeg";
import Section from "../components/common/Section/Section";
import Paragraph from "../components/common/Paragraph/Paragraph";
import CareerSection from "../components/section/CareerSectin/CareerSection";
import ProjectSection from "../components/section/ProjectSection/ProjectSection";
const Home: NextPage = () => {
  return (
    <Container>
      <Box
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        textAlign="center"
        borderRadius={"lg"}
      >
        Hello I&apos; am a Frontend Developer Seoyeon
      </Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        <Box flexShrink={0} mr={10} textAlign="center" alignItems="center">
          <Image
            borderColor="whiteAlpha.800"
            borderStyle="solid"
            maxWidth="120px"
            display={"inline-block"}
            borderRadius="100%"
            src={profileImg.src}
            alt="Profile Image"
          ></Image>
        </Box>
        <Box>
          <Heading as="h2" variant={"page-title"}>
            Seoyeon Kim
          </Heading>
          <Tag colorScheme="purple">Frontend Developer</Tag>
          <p>
            Github :{" "}
            <NextLink href="https://github.com/aeong98">
              <Link>https://github.com/aeong98</Link>
            </NextLink>
          </p>
          <p>
            Blog :{" "}
            <NextLink href="https://velog.io/@aeong98">
              <Link>https://velog.io/@aeong98</Link>
            </NextLink>
          </p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          도전과 성장을 추구하는 사람으로, 새로운 기술을 습득하고 실제 결과물을
          도출해내는 과정에서 가장 큰 보람을 느낍니다. 웹 서비스의 최전선에서
          가치를 전달하는 프론트엔드에 빠져 학창시절 동아리부터 시작해 현재
          스타트업 프론트엔드 개발자로서 커리어를 이어오고 있습니다. 최근에는
          디자이너와 원활히 소통하고, 디테일을 놓지지 않는 개발자가 되기 위한
          방법에 대해 고민하고 있습니다
        </Paragraph>
      </Section>
      <CareerSection></CareerSection>
      <ProjectSection></ProjectSection>
    </Container>
  );
};

export default Home;
