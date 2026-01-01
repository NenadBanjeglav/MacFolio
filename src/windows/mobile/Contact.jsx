import { socials } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";

const MobileContactContent = () => {
  return (
    <>
      <MobileWindowHeader windowKey="contact" title="Contact me" />

      <div className="content">
        <div className="contact-card">
          <img src="/images/me.png" alt="Adrian" className="avatar" />

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
    </>
  );
};

const MobileContact = MobileWindowWrapper(MobileContactContent, "contact");

export default MobileContact;
