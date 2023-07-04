import {
  Box,
  Text,
  Flex,
  Icon,
  Image,
  Link,
  Button,
  Center,
  Grid,
} from '@chakra-ui/react';

import { AiOutlineDollar } from 'react-icons/ai';
import { useState } from 'react';
import { iconPicker } from '../../lib/iconPicker';
import DataDetailPage from './DataDetailPage';

type ChildComponentProps = {
  id: number;
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
  id,
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
      width={{ base: '90%', md: '85%', lg: '70%', xl: '60%' }}
      maxW="798px"
      mx="auto"
      border="1px solid #E1E1E1"
      borderRadius="20px"
      backgroundColor="#fff"
      cursor="pointer"
      onClick={handlePopUpState}
    >
      {popUpState && (
        <DataDetailPage
          key={id}
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
        <Center w="60px" h="60px" borderRadius="5px" mt="5px">
          <Image src={image_url} width="100%" alt=""></Image>
        </Center>
        <Flex direction="column" ml={['24px', '30px', null, null]}>
          <Text
            as="h2"
            fontSize={['18px', '24px', null, null]}
            fontWeight="700"
            width={['100%', null]}
            color="black"
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
      {/* <Flex
        justify="space-between"
        width="91%"
        maxW="91%"
        mx="auto"
        align={['center', null, null, null]}
        direction={['column', 'row']}
        rowGap="4"
      > */}
      <Grid
        templateColumns={['repeat(1, 1fr)', '2fr 1fr 1fr']}
        maxW="91%"
        margin="auto"
        gap={['4', '0']}
      >
        <Flex align="center" justifySelf="start">
          <Icon
            as={AiOutlineDollar}
            w="25px"
            h="25px"
            color={Salary !== null ? '#006333' : 'grey'}
            mt="2px"
          />
          {Salary !== null ? (
            <>
              <Text
                fontSize={'14px'}
                fontWeight="700"
                ml="5px"
                width="100%"
                color="black"
              >
                {Salary}
              </Text>
            </>
          ) : (
            <Text fontSize={'14px'} fontWeight="700" color="black" ml="5px">
              -
            </Text>
          )}
        </Flex>
        <Flex align="center" justifySelf="start">
          <Icon
            as={iconPicker(Level)}
            w="25px"
            h="25px"
            color="#006333"
            mt="2px"
          />
          <Text
            fontSize={'14px'}
            fontWeight="700"
            color="black"
            ml="5px"
            mt="2px"
          >
            {Level}
          </Text>
        </Flex>
        <Box justifySelf="end" width={['100%', 'auto']}>
          <Link
            href={URL}
            _hover={{ textDecoration: 'none' }}
            isExternal
            width={['100%', '60%']}
          >
            <Button
              onClick={e => e.stopPropagation()}
              colorScheme="green"
              width="100%"
            >
              Apply Now
            </Button>
          </Link>
        </Box>
      </Grid>
      {/* </Flex> */}
    </Box>
  );
}
