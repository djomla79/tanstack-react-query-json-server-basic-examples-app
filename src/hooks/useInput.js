import { useState, useCallback } from 'react';

const useInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeHandler = useCallback((event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    if (targetName === 'firstName') {
      setFirstName(targetValue);
    } else if (targetName === 'lastName') {
      setLastName(targetValue);
    } else if (targetName === 'email') {
      setEmail(targetValue);
    }
  }, []);

  return {
    firstName,
    lastName,
    email,
    onChangeHandler,
  };
};

export default useInput;
