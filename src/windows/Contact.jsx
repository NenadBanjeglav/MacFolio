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
      <div className="contact-body">
        <div className="contact-card">
          <img src="/images/me.png" alt="Nenad" className="avatar" />

          <div className="copy">
            <h3>Let's Connect</h3>
            <p>
              Have an idea you're excited about? Want a hand with the frontend?
              Or just feel like saying hi? Drop me a note with a few details,
              and I'll get back to you as soon as I can.
            </p>
          </div>

          <a
            href="mailto:nenad.banjeglav.dev@gmail.com"
            className="email-link"
          >
            nenad.banjeglav.dev@gmail.com
          </a>
        </div>

        <div className="contact-actions">
          <p className="label">Find me online</p>
          <ul className="socials">
            {socials.map(({ id, bg, link, icon, text }) => (
              <li key={id} style={{ backgroundColor: bg }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={text}
                  className="social-link"
                >
                  <span className="social-icon">
                    <img src={icon} alt={text} className="size-5" />
                  </span>
                  <span className="social-text">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
