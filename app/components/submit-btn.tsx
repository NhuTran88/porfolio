import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group btn btn-primary font-charm text-lg"
      disabled={pending}
    >
      {pending ? (
        <>
          Sending...{" "}
          <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-white/[0.04]"></span>
        </>
      ) : (
        <>
          Send Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
