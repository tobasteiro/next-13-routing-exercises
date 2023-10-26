"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();

    // display success message
    createToast("Message sent!", "success");
    // redirect to home page
    router.push("/exercises/02-flash-messages");
  }
  return (
    <main>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
