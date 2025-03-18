"use client";

import SectionHeading from "./section-header";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 dark:text-gray-200 -mt-6 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          huynhnhums@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          placeholder="Your email"
          maxLength={500}
          className="inputStyle"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          maxLength={5000}
          className="inputStyle my-4 h-40"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
