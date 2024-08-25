'use server';

export const createUser = async (formData: FormData) => {
  'use server';

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  console.log({ firstName, lastName });
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
};
