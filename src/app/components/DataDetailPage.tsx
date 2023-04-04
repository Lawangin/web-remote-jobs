'use client';

import { Box, Flex, Text, Icon, Link, Image } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { RiBuildingFill } from 'react-icons/ri';
import { AiOutlineDollar, AiOutlineClose } from 'react-icons/ai';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import styled from 'styled-components';

const Btn = styled.button`
  width: 77%;
  height: 44px;
  text-align: center;
  color: #fff;
  background-color: #00ba61;
  border: 0;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 20px;
`;

type ChildComponentProps = {
  key: number;
  Title: string;
  Company: string;
  Description: string;
  Location: string;
  Salary: number;
  Level: string;
  Type: string;
  Function: string;
  Industry: string;
  URL: string;
  image_url: string;
  handlePopUpState: () => void;
};

export default function DataDetailPage({
  Title,
  Company,
  Description,
  Salary,
  Type,
  Function,
  Location,
  Industry,
  Level,
  URL,
  image_url,
  handlePopUpState,
}: ChildComponentProps) {
  return (
    <Box
      pt="70px"
      backgroundColor="#fff"
      position="fixed"
      top="0"
      left="50%"
      overflow="scroll"
      height="100vh"
    >
      <Box maxW="91%" mx="auto" position="relative">
        <Flex align="start">
          <Box w="78px" h="78px" backgroundColor="#d9d9d9" borderRadius="5px">
            <Image src={image_url} width="100%" alt=""></Image>
          </Box>
          <Flex direction="column" ml={['24px', '30px', null, null]}>
            <Text
              as="h2"
              m="0"
              fontSize={['18px', '24px', null, null]}
              fontWeight="700"
              width={['100%', null]}
            >
              {Title}
            </Text>
            <Flex align="center">
              <Icon as={MdLocationOn} w="17px" h="17px" color="#b7b6b3" />
              <Text fontSize="16px" color="#939598" ml="8px">
                {Location}
              </Text>
            </Flex>
            <Flex align="center">
              <Icon
                as={RiBuildingFill}
                w="17px"
                h="17px"
                color="#b7b6b3"
                mt="0"
              />
              <Text fontSize="16px" color="#939598" ml="8px" my="0">
                {Company}
              </Text>
            </Flex>
          </Flex>
          <Icon
            as={AiOutlineClose}
            w="20px"
            h="20px"
            ml="150px"
            onClick={handlePopUpState}
          />
        </Flex>
        <Flex align="center" mt="30px">
          <Flex align="center">
            <Icon as={AiOutlineDollar} w="25px" h="25px" color="#006333" />
            <>
              {Salary !== null ? (
                <>
                  <Text
                    fontSize={['18px', '13px', '18px']}
                    fontWeight="700"
                    ml="5px"
                    width="100%"
                  >
                    {Salary}
                  </Text>
                  <Text fontSize="16px" color="#939598" ml="3px" mt="2px">
                    /Year
                  </Text>
                </>
              ) : (
                <Text
                  fontSize={['18px', '13px', '18px']}
                  fontWeight="700"
                  color="#939598"
                  ml="5px"
                >
                  Not Available
                </Text>
              )}
            </>
          </Flex>
          <Flex align="center" ml="60px">
            <Icon
              as={TbBrandGoogleAnalytics}
              w="25px"
              h="25px"
              color="#006333"
              mt="2px"
            />
            <Text
              fontSize={['18px', '13px', '18px']}
              fontWeight="700"
              color="#939598"
              ml="5px"
              mt="2px"
              mb="0"
            >
              {Level}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" mt="30px">
          <Text as="h3" fontSize="16px" fontWeight="700" my="0">
            About The Job
          </Text>
          <Text fontSize="16px" color="#2F2E41" width="77%" mt="15px" mb="0">
            {Description}
          </Text>
        </Flex>
        <Flex direction="column" mt="30px">
          <Text as="h3" fontSize="16px" fontWeight="700" my="0">
            Industry:
          </Text>
          <Text fontSize="16px" mt="15px" mb="0">
            {Industry}
          </Text>
        </Flex>
        <Flex direction="column" mt="20px">
          <Text as="h3" fontSize="16px" fontWeight="700" my="0">
            Department:
          </Text>
          <Text fontSize="16px" mt="15px" mb="0">
            {Function}
          </Text>
        </Flex>
        <Flex direction="column" mt="20px">
          <Text as="h3" fontSize="16px" fontWeight="700" my="0">
            Type:
          </Text>
          <Text fontSize="16px" mt="15px" mb="0">
            {Type}
          </Text>
        </Flex>
        <Btn>
          <Link href={URL} isExternal>
            Apply Now
          </Link>
        </Btn>
      </Box>
    </Box>
  );
}
