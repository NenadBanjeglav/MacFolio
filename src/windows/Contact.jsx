import { WindowControlls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="window-header">
        <WindowControlls target="contact" />
        <h2>Contact me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img src="/images/me.png" alt="Adrian" className="w-20 rounded-full" />

        <h3>Let’s Connect</h3>
        <p>
          Have an idea you’re excited about? Want a hand with the frontend? Or
          just feel like saying hi? Drop me a note with a few details, and I’ll
          get back to you as soon as I can.
        </p>
        <a
          href="mailto:nenad.banjeglav.dev@gmail.com"
          className="text-blue-600 hover:underline"
        >
          nenad.banjeglav.dev@gmail.com
        </a>
        <ul className="mt-4">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="cursor-pointer"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="social-link"
              >
                <img src={icon} alt={text} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
