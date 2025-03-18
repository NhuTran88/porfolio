import React from "react";

type EmailTemplateProps = {
  message: string;
  senderEmail: string;
};

export default function EmailTemplate({
  message,
  senderEmail,
}: EmailTemplateProps) {
  return (
    <div>
      <h1></h1>
      <p>{message}</p>
      <p className="italic font-medium">
        You received message from{" "}
        <span className="underline">{senderEmail}</span>
      </p>
    </div>
  );
}
