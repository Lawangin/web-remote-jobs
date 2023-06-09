import { IData } from '@/types/api';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsPersonFillGear } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { RiBuildingFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { iconPicker } from '../../lib/iconPicker';
import splitStringToList from '../../lib/stringToListHelper';
import { SkillPill } from './SkillPill';

type IDataSubset = Omit<IData, 'Link' | 'Date' | 'id'>;

interface ChildComponentProps extends IDataSubset {
  URL: string;
  handlePopUpState: () => void;
}

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
  Skills,
  handlePopUpState,
}: ChildComponentProps) {
  function splitLines(text: string) {
    // Split the input text by newline characters
    const lines = text.split('\n');
    // Define the maximum number of consecutive <br /> elements
    const maxConsecutiveBreaks = 2;
    // Initialize a counter to track the number of consecutive breaks
    let consecutiveBreaks = 0;

    // Use the flatMap function to iterate over the lines array
    return lines.flatMap((line, index) => {
      // If the line is an empty string, meaning it's a newline character
      if (line === '') {
        consecutiveBreaks++;
        // If the counter has reached the maximum allowed consecutive breaks
        if (consecutiveBreaks >= maxConsecutiveBreaks) {
          // Return an empty array to skip the current newline character
          return [];
        } else {
          // Otherwise, return a single <br /> element wrapped in a Fragment
          return (
            <Fragment key={index}>
              <br />
            </Fragment>
          );
        }
      } else {
        // If the line is not an empty string, reset the consecutive breaks counter
        consecutiveBreaks = 0;

        // Return the current line with an additional <br /> element (except for the last line)
        return (
          <Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
          </Fragment>
        );
      }
    });
  }

  const skillsList = Skills ? splitStringToList(Skills) : [''];

  return (
    <Box
      background="#00000050"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      zIndex="1"
      onClick={handlePopUpState}
    >
      <Box
        onClick={e => e.stopPropagation()}
        maxW={['100%', '60%']}
        marginLeft="auto"
        position="relative"
        backgroundColor="#fff"
        overflow="auto"
        zIndex="auto"
        maxHeight="100vh"
        borderLeft="2px solid #b7b6b3"
        padding="10px"
      >
        <Box maxW="80%" margin="50px auto 20px auto">
          <Flex align="start">
            <Center w="78px" h="78px" borderRadius="5px">
              <Image src={image_url} width="100%" alt=""></Image>
            </Center>
            <Flex direction="column" ml={['24px', '30px', null, null]}>
              <Text
                as="h2"
                m="0"
                fontSize={['18px', '24px', null, null]}
                fontWeight="700"
                width={['100%', null]}
                color="black"
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
          </Flex>
          <Grid
            templateColumns={['1fr', '1fr 1fr']}
            templateRows={['repeat(3, 1fr)', '1fr']}
            justifyContent={['left', 'center']}
            mt="30px"
            gap={'4'}
          >
            <Flex align="center">
              <Icon
                as={RiMoneyDollarCircleFill}
                w="25px"
                h="25px"
                color={Salary !== null ? '#006333' : 'grey'}
              />
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
            <Flex align={['left', 'center']}>
              <Icon
                as={iconPicker(Level)}
                w="25px"
                h="25px"
                color="#006333"
                fill="50%"
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
            <Flex
              align={['left', 'center']}
              gridColumnStart={'1'}
              gridColumnEnd={['1', '3']}
            >
              <Icon
                as={BsPersonFillGear}
                w="25px"
                h="25px"
                color={Skills !== null ? '#006333' : 'grey'}
                fill="50%"
                mt="2px"
              />

              <SkillPill skills={skillsList} />
            </Flex>
          </Grid>
          <Flex direction="column" mt="30px">
            <Text as="h3" fontSize="16px" fontWeight="700" my="0" color="black">
              About The Job
            </Text>
            <Text fontSize="16px" color="#2F2E41" width="95%" mt="15px" mb="0">
              {splitLines(Description)}
            </Text>
          </Flex>
          <Flex direction="column" mt="30px">
            <Text as="h3" fontSize="16px" fontWeight="700" my="0" color="black">
              Industry:
            </Text>
            <Text fontSize="16px" mt="15px" mb="0" color="black">
              {Industry}
            </Text>
          </Flex>
          <Flex direction="column" mt="20px">
            <Text as="h3" fontSize="16px" fontWeight="700" my="0" color="black">
              Department:
            </Text>
            <Text fontSize="16px" mt="15px" mb="0" color="black">
              {Function}
            </Text>
          </Flex>
          <Flex direction="column" mt="20px" pb={6}>
            <Text as="h3" fontSize="16px" fontWeight="700" my="0" color="black">
              Type:
            </Text>
            <Text fontSize="16px" mt="15px" mb="0" color="black">
              {Type}
            </Text>
          </Flex>

          <Link
            href={URL}
            display="block"
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            <Button
              onClick={e => e.stopPropagation()}
              colorScheme="green"
              width="100%"
            >
              Apply Now
            </Button>
          </Link>
          <Box py={6}>
            <Button
              onClick={handlePopUpState}
              colorScheme="red"
              width="100%"
              variant="outline"
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
