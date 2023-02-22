import { Button } from '@chakra-ui/react';
import React from 'react';

export const AuthButtons = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        width={{ base: '70px', md: '110px' }}
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
      >
        Log In
      </Button>
      <Button
        height="28px"
        width={{ base: '70px', md: '110px' }}
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
      >
        Sign Up
      </Button>
    </>
  );
};
