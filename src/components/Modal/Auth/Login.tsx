import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/services/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/services/firebase/errors';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

export const Login = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [{ email, password }, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

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
      {error && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button
        type="submit"
        width="100%"
        height="36px"
        marginBlock={2}
        isLoading={loading}
      >
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
