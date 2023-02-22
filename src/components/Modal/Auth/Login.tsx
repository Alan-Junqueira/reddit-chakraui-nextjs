import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export const Login = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = () => {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        required
        mb={2}
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid blue.500' }}
        _focus={{ outline: 'none', border: '1px solid blue.500' }}
        onChange={handleChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        required
        mb={2}
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid blue.500' }}
        _focus={{ outline: 'none', border: '1px solid blue.500' }}
        onChange={handleChange}
      />
      <Button type="submit" width="100%" height="36px" marginBlock={2}>
        Log In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New hehre?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'signup'
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};