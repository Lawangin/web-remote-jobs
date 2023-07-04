import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { Box, Button, Flex, Grid, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);
    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  const handleConsent = (consent: boolean) => {
    setCookieConsent(consent);
    toast({
      title: 'Cookie consent updated',
      description: `You have ${consent ? 'granted' : 'denied'} cookie consent.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  return cookieConsent === null ? (
    <Grid
      position="fixed"
      templateColumns="1fr"
      templateRows="1fr 1fr"
      px={['10%', '30%']}
      width="100%"
      backgroundColor="white"
      bottom={0}
      boxShadow="xs"
    >
      <Box alignSelf={'center'}>
        <Text>We use cookies on our site.</Text>
      </Box>
      <Flex justifySelf="end" alignItems="start" pb={4}>
        <Button
          colorScheme="red"
          variant={'outline'}
          mr={4}
          onClick={() => handleConsent(false)}
        >
          Decline
        </Button>
        <Button colorScheme="green" onClick={() => handleConsent(true)}>
          Allow Cookies
        </Button>
      </Flex>
    </Grid>
  ) : (
    <></>
  );
};

export default CookieBanner;
