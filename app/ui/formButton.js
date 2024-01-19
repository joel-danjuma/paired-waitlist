"use client";
import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg shrink-0 hover:bg-blue-600">
      {pending
        ? //   <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          "Joining Waitlist ..."
        : "Join the Waitlist"}
    </button>
  );
};

export default FormButton;
