import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUser } from '../api';

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['addUser'],
    mutationFn: addUser,
    // Persist mutations can be persisted to storage if needed and resumed at a later point
    // queryClient.setMutationDefaults(['addUser'], {
    // mutationFn: addUser,
    // onMutate: async (newUser) => {
    //   await queryClient.invalidateQueries({ queryKey: ['users'] });
    //   let optimisticUser = newUser;

    //   queryClient.setQueryData(['users'], (prev) => {
    //     // in this case id is a number, but in real case we could use uuid
    //     optimisticUser = { id: prev.data?.length + 1, ...newUser };
    //     return {
    //       ...prev,
    //       data: [...prev.data, optimisticUser],
    //     };
    //   });
    //   return { optimisticUser };
    // },
    // onSuccess: (result, variables, context) => {
    //   queryClient.setQueryData(['users'], (old) =>
    //     old.map((user) =>
    //       user.id === context.optimisticUser.id ? result : user
    //     )
    //   );
    // },
    // onError: (error, variables, context) => {
    //   queryClient.setQueryData(['users'], (old) =>
    //     old.filter((user) => user.id !== context.optimisticUser.id)
    //   );
    // },
    // retry: 3,
    onSettled: async (_, error) =>
      error
        ? console.log(error)
        : await queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  // If the mutation has been paused because the device is for example offline,
  // // Then the paused mutation can be dehydrated when the application quits:
  // const state = dehydrate(queryClient);

  // // The mutation can then be hydrated again when the application is started:
  // hydrate(queryClient, state);

  // // Resume the paused mutations:
  // queryClient.resumePausedMutations();
};
