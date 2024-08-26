'use server';

import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  'use server';
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    // throw new Error('something wrong'); // test for error
    await saveUser(newUser);
    revalidatePath('/actions'); // this is same page auto reload display
    // throw Error();
    return 'user created successfully...';
  } catch (error) {
    console.error(error);
    return 'failed to create user...';
  }
  // redirect('/'); // this is redirect to Home
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};
