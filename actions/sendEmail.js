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

  try {
    const res = await fetch(`${URL}/api/send`, {
      method: "POST",
      body: JSON.stringify(emails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res) {
      console.log("Fetch api did not work");
      return;
    } else {
      console.log("Posting User Email Details");
      console.log(res);
      return res;
    }
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
};
