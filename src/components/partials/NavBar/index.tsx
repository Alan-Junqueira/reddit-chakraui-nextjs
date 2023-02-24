import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Flex, Image } from '@chakra-ui/react';
import { auth } from '@/services/firebase/clientApp';

import { Directory } from './Directory';
import { RightContent } from './RightContent';
import { SearchInput } from './SearchInput';

export const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: 'space-between' }}
    >
      <Flex
        align="center"
        width={{ base: '40px', md: 'auto' }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src="/images/redditFace.svg" alt="logo reddit" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit"
          height="46px"
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
