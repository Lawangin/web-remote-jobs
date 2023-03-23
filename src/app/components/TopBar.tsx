import { Box, Flex, Icon, createIcon, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { AiOutlineInfoCircle } from 'react-icons/Ai'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: #97ffcd;
  color: #006333;
  border: 0;
  padding: 12px 30px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
`

export default function TopBar() {
  return (
    <Box
      backgroundColor='#fff'
      maxW='100%'
      px='auto'
      py='28px'
      display='flex'
      justifyContent='center'
      borderBottom='2px solid #e1e1e1'
    >
      <Btn>Find Work</Btn>
      <Flex align='center' ml={['20px', '30px', null, null]}>
        <Icon
          as={AiOutlineInfoCircle}
          w='25px'
          h='25px'
          display='block'
          color='#006333'
        />
        <Link href='/' ml='5px'>
          <Text fontSize='12px' fontWeight='700'>
            Learn How It Works
          </Text>
        </Link>
      </Flex>
    </Box>
  )
}
