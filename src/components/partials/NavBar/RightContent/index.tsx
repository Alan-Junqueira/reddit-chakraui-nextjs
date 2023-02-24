import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AuthButtons } from './AuthButtons';
import { User } from 'firebase/auth';
import { Icons } from './Icons';
import { UserMenu } from './UserMenu';
import { AuthModal } from '@/components/Modal/Auth/AuthModal';

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
