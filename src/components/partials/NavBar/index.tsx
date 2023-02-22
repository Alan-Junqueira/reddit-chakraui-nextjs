import { auth } from '@/services/firebase/clientApp';
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RightContent } from './RightContent';
import { SearchInput } from './SearchInput';

export const NavBar = () => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="logo reddit"  height="30px"/>
        <Image src="/images/redditText.svg" alt="reddit" height="46px" display={{base: 'none', md: 'unset'}}/>
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent user={user}/>
    </Flex>
  );
};
