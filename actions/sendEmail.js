"use server";
export const sendEmail = async (formData) => {
  const userEmail = formData.get("email");

  const emails = [
    {
      userEmail,
    },
    {
      pairedEmail: "Leojjad@gmail.com",
    },
  ];
  console.log(emails);
  const URL = process.env.NEXT_PUBLIC_URL;
  console.log(URL);

  try {
    const res = await fetch(`${URL}/api/send`, {
      method: "POST",
      body: JSON.stringify(emails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(JSON.stringify(res));
    return JSON.stringify(res);
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
};
