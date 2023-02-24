import { authModalState } from '@/atoms/authModalAtom';
import { auth, firestore } from '@/services/firebase/clientApp';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '@/services/firebase/errors';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

export const SignUp = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [{ email, password, confirmPassword }, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError('');
    if (confirmPassword !== password) {
      setError('Password do no match');
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const createUserDocument = async (user: User) => {
    await addDoc(
      collection(firestore, 'users'),
      JSON.parse(JSON.stringify(user))
    );
  };

  useEffect(() => {
    // if user where successful created
    if (userCred) {
      console.log(userCred.user)
      createUserDocument(userCred.user);
    }
  }, [userCred]);

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
      <Input
        name="confirmPassword"
        placeholder="confirm password"
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
      {(error || userError) && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {error ||
            FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button
        type="submit"
        width="100%"
        height="36px"
        marginBlock={2}
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login'
            }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};
