import React from "react";
import {
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
  Tag,
  Divider,
} from "@chakra-ui/react";
import Section from "../../common/Section/Section";
import Paragraph from "../../common/Paragraph/Paragraph";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function ProjectSection() {
  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Projects
      </Heading>
      <Heading as="h4" size="lg" variant="sectino-subtitle" mt={5}>
        (주)젠틀에너지
      </Heading>
      (2022.08~재직중, 1년)
      <Heading as="h5" size="md" mt={5}>
        Skills?
      </Heading>
      <Box>
        {[
          "Next.js",
          "Typescript",
          "SASS",
          "React Query",
          "Redux Toolkit",
          "Echart.js",
          "Storybook",
          "Chromatic",
          "Github Actions",
          "Vercel",
          "Jest",
          "React Testing Library",
        ].map((item: string) => (
          <Tag key={item} size="sm" colorScheme="teal" mr={"3px"}>
            {item}
          </Tag>
        ))}
      </Box>
      <Heading as="h5" size="md" mt={5}>
        What I Do?
      </Heading>
      <List spacing={3} pt="20px">
        <ListItem>
          {}
          <ListIcon as={CheckCircleIcon} color="teal.300" />
          Factoroid 공장 가동현황 / 히스토리를 확인할 수 있는 실시간 대시보드
          개발
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.300" />
          SpringBoot 기반의 Vanilla JS (Jquery) 프로젝트 Next.js 로 마이그레이션
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.300" />
          차트 라이브러리를(Echart.js, Chart.js) 활용한 대시보드 개발
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.300" />
          디자인 시스템 도입 및 관리를 위한 모노레포 세팅 (turborepo)
        </ListItem>
      </List>
    </Section>
  );
}
