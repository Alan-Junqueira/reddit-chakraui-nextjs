import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export const OAuthButtons = () => {
  return (
    <Flex direction="column" width="100%" mb="4">
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" alt="google" height="20px" mr={4}/>
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
    </Flex>
  );
};
