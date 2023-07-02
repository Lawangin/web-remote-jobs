'use client';
import { Text, Box, Flex } from '@chakra-ui/react';

export default function AboutUs() {
  return (
    <Box
      p="5"
      mt="30px"
      width={{ base: '90%', md: '85%', lg: '60%', xl: '55%' }}
      maxW="798px"
      height={{ base: '900px', md: '800px' }}
      maxH="100%"
      mx="auto"
      border="1px solid #E1E1E1"
      borderRadius="20px"
      backgroundColor="#fff"
      cursor="pointer"
    >
      <Flex display="column" mx={{ base: '30px', md: '45px', lg: '75px' }}>
        <Text
          as="h2"
          fontSize={['18px', '24px', null, null]}
          fontWeight="700"
          width={['100%', null]}
        >
          About Us
        </Text>
        <Text mt="40px" fontSize="12px">
          Welcome to Tech Remote Careers, the premier platform for finding and
          connecting with the best remote tech job opportunities. Our mission is
          to empower tech professionals to work from anywhere while helping
          companies discover the top remote talent they need to grow and thrive.
          <br></br>
          <br></br>
          As remote work gains popularity, job seekers are overwhelmed by the
          multitude of job boards and listings available. At the same time,
          employers struggle to reach the right candidates for their remote
          positions. Tech Remote Careers simplifies the job search process by
          aggregating remote tech jobs from popular job listing sites, providing
          a one-stop solution for both job seekers and employers.
          <br></br>
          <br></br>
          At Tech Remote Careers, we believe in transparency, ease of use, and
          continuous improvement. Our platform is designed to provide a seamless
          user-friendly experience, making it easy for job seekers to find
          relevant opportunities and for employers to reach the right
          candidates. We are committed to staying up-to-date with industry
          trends and constantly improving our services to meet the evolving
          needs of our users.
          <br></br>
          <br></br>
          Tech Remote Careers plans to offers an array of features and services
          to support job seekers and employers, including accurate job listings,
          personalized job alerts, a user-friendly resume builder, featured job
          listings for employers, and a comprehensive blog covering remote work
          and professional development.
          <br></br>
          <br></br>
          Discover the possibilities of remote work with Tech Remote Careers.
          Browse our job listings, create a personalized job alert, or sign up
          for our newsletter to stay informed about the latest opportunities and
          resources.
        </Text>
      </Flex>
    </Box>
  );
}
