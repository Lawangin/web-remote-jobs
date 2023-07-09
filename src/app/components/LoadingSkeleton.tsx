import { Box, Flex, Grid, Stack, Skeleton } from '@chakra-ui/react';

export default function LoadingSkeleton() {
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
    >
      <Flex align="center" maxW="91%" mx="auto">
        <Skeleton
          width={['100px', '60px', '60px', '60px']}
          height={['50px', '60px']}
          mr={['6px', '10px']}
          mb={['30px', '25px']}
        ></Skeleton>
        <Flex direction="column" ml={['24px', '30px', null, null]}>
          <Skeleton
            width={['200px', '220px', '318px']}
            height="30px"
          ></Skeleton>
          <Skeleton
            width={['150px', '180px', '233px']}
            height="30px"
            mt="8px"
            mb="10px"
          ></Skeleton>
        </Flex>
      </Flex>
      <Box my="25px">
        <Stack maxW="91%" mx="auto">
          <Skeleton height="15px"></Skeleton>
          <Skeleton height="15px"></Skeleton>
          <Skeleton width="50%" height="15px"></Skeleton>
        </Stack>
      </Box>
      <Grid
        templateColumns={['repeat(1, 1fr)', '1fr 1fr']}
        templateRows={['repeat(4, 1fr)', 'repeat(2, 1fr)']}
        maxW="91%"
        margin="auto"
        gap={'4'}
      >
        {[...Array(3)].map((_, i) => (
          <Flex align="center" justifySelf="start" key={i}>
            <Skeleton w="30px" h="28px" />
            <Skeleton w="130px" h="28px" ml={'8px'} />
          </Flex>
        ))}
        <Flex align="center">
          {[...Array(5)].map((_, i) => (
            <Skeleton
              w={['40px', '30px']}
              h="28px"
              ml={i > 0 ? '5px' : 0}
              key={i}
            />
          ))}
        </Flex>
      </Grid>
      <Box
        display="flex"
        justifyContent="end"
        width={'100%'}
        maxW="91%"
        margin="auto"
        py={'4'}
      >
        <Skeleton
          width={['100%', '100px']}
          ml={[null, null, '200px']}
          height="44px"
        ></Skeleton>
      </Box>
    </Box>
  );
}
