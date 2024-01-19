"use server";
import { headers } from "@/next.config";
import axios from "axios";
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

  const URL = process.env.NEXT_PUBLIC_URL;

  try {
    // const res = await fetch(`${URL}/api/send`, {
    //   method: "POST",
    //   body: JSON.stringify(emails),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = await axios.post(`${URL}/api/send`, emails, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Onboarding Email has been sent");
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};
