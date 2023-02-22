import { Button } from '@chakra-ui/react';
import { AuthModal } from '@/components/Modal/Auth/AuthModal';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AuthButtons } from './AuthButtons';
import { signOut, User } from 'firebase/auth';
import { auth } from '@/services/firebase/clientApp';
import { Icons } from './Icons';
import { UserMenu } from './UserMenu';

interface IRightConent {
  user?: User | null;
}

export const RightContent = ({ user }: IRightConent) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
