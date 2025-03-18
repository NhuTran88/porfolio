"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@lib/utils";
import EmailTemplate from "@components/EmailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = resend.emails.send({
      from: "Contact From <onboarding@resend.dev>",
      to: "huynhnhums@gmail.com",
      subject: "Message from your portfolio",
      replyTo: senderEmail,
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
