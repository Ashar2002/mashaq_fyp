import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  let isButtonDisabled = false;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone && message) {
      sendEmail();
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const sendEmail = () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const emailData = {
      sender: { email: "asharrashid18@gmail.com" },
      to: [{ email: "asharrashid18@gmail.com" }],
      subject: "Contact Form Submission | Mashaq",
      htmlContent: `
        <p className="sm:text-base text-sm"><strong>Last Name:</strong> ${name}</p>
        <p className="sm:text-base text-sm"><strong>Email:</strong> ${email}</p>
        <p className="sm:text-base text-sm"><strong>Phone:</strong> ${phone}</p>
        <p className="sm:text-base text-sm"><strong>Message:</strong> ${message}</p>
      `,
    };

    fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Email sent successfully");
          console.log(response);
          isButtonDisabled = true; // Disable the button temporarily
          resetForm(); // Reset the form
        } else {
          if (response.status === 400) {
            toast.error(
              "There is an issue sending the email. Please check your email address and try again."
            );
          } else {
            toast.error(
              "There is an issue sending the email. Please try again later."
            );
          }
        }
      })
      .catch((error) => {
        toast.error("Email not sent, try again");
        console.error(error);
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    isButtonDisabled = false; // Enable the button
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="text-brown-0 sm:text-xl text-lg uppercase tracking-wider font-nunito mb-2">
                Contact Us
              </p>
              <h2 className="text-2xl font-bold text-brown-0 md:text-3xl mb-4">
                Reach Out and Connect
              </h2>

              <p className="max-w-xl text-lg">
                We value your input and inquiries, and we are readily available
                to assist you in any way we can. At Mashaq, your feedback is
                vital to our continuous enhancement and commitment to delivering
                exceptional shopping experiences. Please don't hesitate to reach
                out to us using the contact details below, and we'll be
                delighted to assist you:
              </p>

              <div className="mt-8">
                <a
                  href="tel:+923158540707"
                  className="text-2xl font-bold text-lightbrown-0"
                >
                  0315 8540707
                </a>

                <address className="mt-2 not-italic">
                  13 National Stadium Rd, Karsaz Faisal Cantonment, Karachi
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className={`inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto ${
                      isButtonDisabled ? "disabled:opacity-50" : ""
                    }`}
                    disabled={isButtonDisabled}
                  >
                    {isButtonDisabled ? "Form Submitted" : "Send Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
