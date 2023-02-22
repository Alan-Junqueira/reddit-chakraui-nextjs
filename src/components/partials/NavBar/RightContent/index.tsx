import { Button } from '@chakra-ui/react';
import { AuthModal } from '@/components/Modal/Auth/AuthModal';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AuthButtons } from './AuthButtons';
import { signOut } from 'firebase/auth';
import { auth } from '@/services/firebase/clientApp';

interface IRightConent {
  user: any;
}

export const RightContent = ({ user }: IRightConent) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
