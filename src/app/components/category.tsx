import { Box } from '@chakra-ui/react'
import { Button, Flex, Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const Btn = styled.button`
  padding: 12px 25px;
  text-align: center;
  background-color: #f4f6fb;
  border: 0;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 700;
  &:focus {
    color: #fff;
    background-color: #00ba61;
  }
`

export default function Category() {
  return (
    <Box
      p='5'
      mt='30px'
      width={{ base: '90%', md: '85%', lg: '55%' }}
      maxW='798px'
      mx='auto'
      border='1px solid #E1E1E1'
      borderRadius='20px'
      backgroundColor='#fff'
    >
      <Text
        as='h1'
        ml={{ sm: '4.5%' }}
        mb='4'
        textAlign={{ base: 'center', sm: 'left' }}
        fontSize={['28px', '32px', null, null]}
        fontWeight='700'
      >
        Choose a Category
      </Text>
      <Flex
        maxW='91%'
        mx='auto'
        flexDirection={{ base: 'column', sm: 'row' }}
        justify='space-between'
        rowGap='4'
      >
        <Btn onClick={() => console.log('clicked')}>All Categories</Btn>
        <Btn>Software Eng</Btn>
        <Btn>FrontEnd Eng</Btn>
        <Btn>Data Analyst</Btn>
      </Flex>
      <Box
        py='3'
        my='4'
        width='91%'
        maxW='91%'
        mx='auto'
        textAlign='center'
        border='1px solid #E1E1E1'
        borderRadius='5px'
        fontSize='12px'
        fontWeight='700'
        backgroundColor='#F4F6FB'
      >
        350 Jobs Found
      </Box>
    </Box>
  )
}
