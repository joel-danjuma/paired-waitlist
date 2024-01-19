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

  try {
    const email = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send`, {
      method: "POST",
      body: JSON.stringify(emails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Posting User Email Details");
    console.log(email);
    return email;
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
};
