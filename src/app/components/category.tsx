'use client';
import { useState } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';

interface styleProps {
  selected: boolean;
}

export const Btn = styled.button<styleProps>`
  padding: 12px 25px;
  text-align: center;
  background-color: ${props => (props.selected ? '#00ba61' : '#f4f6fb')};
  border: 0;
  color: ${props => (props.selected ? '#ffffff' : '#000000')};
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 700;
`;
interface myprops {
  count: number;
  // eslint-disable-next-line no-unused-vars
  handleFilterData: (st: string, e: any) => void;
}

interface mystate {
  firstBtn: boolean;
  secondBtn: boolean;
  thirdBtn: boolean;
  fourthBtn: boolean;
}
export default function Category(props: myprops) {
  const [selectedBtn, setSelected] = useState<mystate>({
    firstBtn: true,
    secondBtn: false,
    thirdBtn: false,
    fourthBtn: false,
  });
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
        Choose a Category
      </Text>
      <Flex
        maxW="91%"
        mx="auto"
        flexDirection={{ base: 'column', sm: 'row' }}
        justify="space-between"
        rowGap="4"
      >
        <Btn
          selected={selectedBtn.firstBtn}
          onClick={e => {
            const st = ' ';
            setSelected({
              firstBtn: true,
              secondBtn: false,
              thirdBtn: false,
              fourthBtn: false,
            });
            props.handleFilterData(st, e);
          }}
        >
          All Categories
        </Btn>
        <Btn
          selected={selectedBtn.secondBtn}
          onClick={e => {
            const st = 'software';
            setSelected({
              firstBtn: false,
              secondBtn: true,
              thirdBtn: false,
              fourthBtn: false,
            });
            props.handleFilterData(st, e);
          }}
        >
          Software Eng
        </Btn>
        <Btn
          selected={selectedBtn.thirdBtn}
          onClick={e => {
            const st = 'front';
            setSelected({
              firstBtn: false,
              secondBtn: false,
              thirdBtn: true,
              fourthBtn: false,
            });
            props.handleFilterData(st, e);
          }}
        >
          FrontEnd Eng
        </Btn>
        <Btn
          selected={selectedBtn.fourthBtn}
          onClick={e => {
            const st = 'data analyst';
            setSelected({
              firstBtn: false,
              secondBtn: false,
              thirdBtn: false,
              fourthBtn: true,
            });
            props.handleFilterData(st, e);
          }}
        >
          Data Analyst
        </Btn>
      </Flex>
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
