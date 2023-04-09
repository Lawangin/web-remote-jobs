import {
  Box,
  Text,
  Flex,
  Icon,
  Image,
  Link as NextLink,
} from '@chakra-ui/react';

import { AiOutlineDollar } from 'react-icons/ai';
import { useState } from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { SiGoogleanalytics } from 'react-icons/si';
import DataDetailPage from './DataDetailPage';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 11px 28px;
  text-align: center;
  color: #fff;
  background-color: #00ba61;
  border: 0;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 700;
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
  handleBgColor: () => void;
};

export default function DisplayData({
  key,
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
  handleBgColor,
}: ChildComponentProps) {
  const [popUpState, setPopState] = useState<boolean>(false);

  const handlePopUpState = () => {
    setPopState(!popUpState);
    handleBgColor();
  };

  return (
    <Box
      p="5"
      mt="30px"
      width={{ base: '90%', md: '85%', lg: '60%', xl: '55%' }}
      maxW="798px"
      mx="auto"
      border="1px solid #E1E1E1"
      borderRadius="20px"
      backgroundColor="#fff"
    >
      {popUpState && (
        <DataDetailPage
          key={key}
          Title={Title}
          Company={Company}
          Location={Location}
          Description={Description}
          Salary={Salary}
          Type={Type}
          Industry={Industry}
          Function={Function}
          Level={Level}
          URL={URL}
          image_url={image_url}
          handlePopUpState={handlePopUpState}
        />
      )}

      <Flex align="center" maxW="91%" mx="auto">
        <Box
          w="60px"
          h="60px"
          backgroundColor="#d9d9d9"
          borderRadius="5px"
          mt="5px"
        >
          <Image src={image_url} width="100%" alt=""></Image>
        </Box>
        <Flex direction="column" ml={['24px', '30px', null, null]}>
          <Text
            as="h2"
            fontSize={['18px', '24px', null, null]}
            fontWeight="700"
            width={['100%', null]}
            cursor="pointer"
            onClick={handlePopUpState}
          >
            {Title}
          </Text>
          <Text fontSize="16px" color="#939598">
            {Company}
          </Text>
        </Flex>
      </Flex>
      <Box>
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
      </Box>
      <Flex
        justify="space-between"
        width="91%"
        maxW="91%"
        mx="auto"
        align={['center', null, null, null]}
        direction={['column', 'row']}
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
        </Flex>
        <Flex align="center">
          <Icon
            as={
              Level === 'Mid-Senior level'
                ? SiGoogleanalytics
                : TbBrandGoogleAnalytics
            }
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
          >
            {Level}
          </Text>
        </Flex>
        <Btn>
          <NextLink href={URL} isExternal>
            Apply Now
          </NextLink>
        </Btn>
      </Flex>
    </Box>
  );
}
