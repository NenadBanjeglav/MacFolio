import MobileWindowHeader from "#components/mobile/WindowHeader";
import { techStack } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { Check, Flag } from "lucide-react";

const MobileTerminalContent = () => {
  return (
    <>
      <MobileWindowHeader windowKey="terminal" title="Tech Stack" />

      <div className="techstack">
        <p>
          <span className="font-bold">@nenad %</span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex flex-col">
              <div className="flex flex-row items-center">
                <Check className="check" size={20} />
                <h3>{category}</h3>
              </div>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} /> {techStack.length} of {techStack.length} stacks
            loaded successfully (100%)
          </p>

          <p className="text-black dark:text-white">
            <Flag size={15} fill="black" />
            Render time: {techStack.length}ms
          </p>
        </div>
      </div>
    </>
  );
};

const MobileTerminal = MobileWindowWrapper(MobileTerminalContent, "terminal");

export default MobileTerminal;
