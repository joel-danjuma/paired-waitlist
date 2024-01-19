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

  try {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send`, {
      method: "POST",
      body: JSON.stringify(emails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(process.env.NEXT_PUBLIC_URL);
    console.log("Posting User Email Details");
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
};
