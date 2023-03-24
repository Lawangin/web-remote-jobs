import { Box, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { AiOutlineDollar } from "react-icons/Ai";
import { TbBrandGoogleAnalytics } from "react-icons/Tb";
import styled from "styled-components";

const Btn = styled.button`
  padding: 12px 30px;
  text-align: center;
  color: #fff;
  background-color: #00ba61;
  border: 0;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 700;
`;
type ChildComponentProps = {
  Title: string;
  Company: string;
  Description: string;
  Salary: number;
  Level: string;
  URL: string;
};

export default function DisplayData({
  Title,
  Company,
  Description,
  Salary,
  Level,
  URL,
}: ChildComponentProps) {
  return (
    <Box
      p="5"
      mt="30px"
      width={{ base: "90%", md: "85%", lg: "55%" }}
      maxW="798px"
      mx="auto"
      border="1px solid #E1E1E1"
      borderRadius="20px"
      backgroundColor="#fff"
    >
      <Flex align="center" maxW="91%" mx="auto">
        <Box
          w="60px"
          h="60px"
          backgroundColor="#d9d9d9"
          borderRadius="5px"
          mt="5px"
        ></Box>
        <Flex direction="column" ml={["24px", "30px", null, null]}>
          <Text
            as="h2"
            fontSize={["18px", "24px", null, null]}
            fontWeight="700"
            width={["100%", null]}
          >
            {Title}
          </Text>
          <Text fontSize="16px" color="#939598">
            {Company}
          </Text>
        </Flex>
      </Flex>
      <Text
        fontSize="16px"
        color="#2F2E41"
        my="20px"
        maxW="91%"
        mx="auto"
        noOfLines={3}
      >
        {Description}
      </Text>
      <Flex
        justify="space-between"
        width="91%"
        maxW="91%"
        mx="auto"
        alignItems={["center", null, null, null]}
        direction={["column", "row"]}
        rowGap="4"
      >
        <Flex align="center">
          <Icon
            as={AiOutlineDollar}
            w="25px"
            h="25px"
            color="#006333"
            mt="2px"
          />
          {Salary !== null ? (
            <>
              <Text fontSize="20px" fontWeight="700" ml="5px">
                {Salary}
              </Text>
              <Text fontSize="16px" color="#939598" ml="3px" mt="2px">
                /Year
              </Text>
            </>
          ) : (
            <Text fontSize="20px" fontWeight="700" color="#939598" ml="5px">
              Not Available
            </Text>
          )}
        </Flex>

        <Flex align="center">
          <Icon
            as={TbBrandGoogleAnalytics}
            w="25px"
            h="25px"
            color="#006333"
            mt="2px"
          />
          <Text
            fontSize="20px"
            fontWeight="700"
            color="#939598"
            ml="5px"
            mt="2px"
          >
            {Level}
          </Text>
        </Flex>
        <Btn>
          <Link href={URL} isExternal>
            Apply Now
          </Link>
        </Btn>
      </Flex>
    </Box>
  );
}
