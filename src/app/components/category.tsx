'use client';
import { useState } from 'react';
import {
  Text,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

// interface styleProps {
//   selected: boolean;
// }

export const Btn = styled.button`
  padding: 5px 10px;
  width: 92px;
  height: 34px;
  text-align: center;
  background-color: #00ba61;
  border: 0;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 700;
`;
interface myprops {
  count: number;
  // eslint-disable-next-line no-unused-vars
  handleFilterData: (st: string, e: any) => void;
}

// interface mystate {
//   firstBtn: boolean;
//   secondBtn: boolean;
//   thirdBtn: boolean;
//   fourthBtn: boolean;
// }
export default function Category(props: myprops) {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <Box
      p="5"
      mt="30px"
      width={{ base: '90%', md: '85%', lg: '55%' }}
      maxW="798px"
      mx="auto"
      border="1px solid #E1E1E1"
      borderRadius="20px"
      backgroundColor="#fff"
    >
      <Text
        as="h1"
        ml={{ sm: '4.5%' }}
        mb="4"
        textAlign={{ base: 'center', sm: 'left' }}
        fontSize={['28px', '32px', null, null]}
        fontWeight="700"
      >
        Find your dream remote job
      </Text>
      <Box py="3" maxW="91%" mx="auto">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={AiOutlineSearch} w="20px" h="17px" color="#d9d9d9"></Icon>
          </InputLeftElement>
          <Input
            placeholder="Search Job Title"
            fontSize="12px"
            fontWeight="700"
            color="#000"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <InputRightElement width="100px">
            <Btn
              onClick={e => {
                props.handleFilterData(searchText, e);
                setSearchText('');
              }}
            >
              Find job
            </Btn>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box
        py="3"
        my="4"
        width="91%"
        maxW="91%"
        mx="auto"
        textAlign="center"
        border="1px solid #E1E1E1"
        borderRadius="5px"
        fontSize="12px"
        fontWeight="700"
        backgroundColor="#F4F6FB"
      >
        {props.count} Jobs Found
      </Box>
    </Box>
  );
}
