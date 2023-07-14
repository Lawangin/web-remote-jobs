import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Link } from '@chakra-ui/next-js';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import logo from '../../../public/logo.png';

const Btn = styled.button`
  background-color: #97ffcd;
  color: #006333;
  border: 0;
  padding: 12px 30px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
`;

interface myprops {
  // eslint-disable-next-line no-unused-vars
  handleAboutUsPage: (bool1?: boolean) => void;
}
export default function TopBar(props: myprops) {
  return (
    <Box>
      <Box
        position="absolute"
        mt="20px"
        ml="20px"
        mr={['50px', '0', '0', '0']}
        w={['0', '120px', '180px']}
      >
        <Image src={logo} alt="logo"></Image>
      </Box>
      <Box
        backgroundColor="#fff"
        maxW="100%"
        px="auto"
        py="28px"
        display="flex"
        justifyContent="center"
        borderBottom="2px solid #e1e1e1"
      >
        <Box
          width={['80px', '0', '0', '0']}
          mr={['20px', '0']}
          mt={['5px', '0', '0', '0']}
        >
          <Image src={logo} alt="logo" height={50}></Image>
        </Box>
        <Btn onClick={() => props.handleAboutUsPage(false)}>Find Work</Btn>
        <Flex
          align="center"
          ml={['20px', '30px', null, null]}
          onClick={() => props.handleAboutUsPage()}
        >
          <Icon
            as={AiOutlineInfoCircle}
            w="25px"
            h="25px"
            display="block"
            color="#006333"
          />
          <Link href="/" ml="5px" onClick={() => props.handleAboutUsPage()}>
            <Text fontSize="12px" fontWeight="700" color="black">
              Learn How It Works
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
