import { socials } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";

const MobileContactContent = () => {
  return (
    <>
      <MobileWindowHeader windowKey="contact" title="Contact me" />

      <div className="content">
        <div className="contact-card">
          <img src="/images/me.png" alt="Nenad" className="avatar" />

          <div className="copy">
            <h3>Let's Build</h3>
            <p>
              I build React and TypeScript product experiences, API-backed
              flows, testing coverage, and AI-assisted engineering workflows.
              Send a few details and I will get back to you.
            </p>
          </div>

          <a href="mailto:nenad.banjeglav.dev@gmail.com" className="email-link">
            nenad.banjeglav.dev@gmail.com
          </a>
        </div>

        <ul className="socials">
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
                aria-label={text}
                className="social-link"
              >
                <span className="social-icon">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="size-5"
                  />
                </span>
                <span className="social-text">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const MobileContact = MobileWindowWrapper(MobileContactContent, "contact");

export default MobileContact;
