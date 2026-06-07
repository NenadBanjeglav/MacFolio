import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";
import useWindowStore from "#store/window";
import TextFileBody from "../../file/TextFileBody";

const MobileTextContent = () => {
  const {
    windows: {
      txtfile: { data },
    },
  } = useWindowStore();

  if (!data) return null;

  return (
    <>
      <MobileWindowHeader windowKey="txtfile" title={data.name || "Preview"} />

      <TextFileBody data={data} variant="mobile" />
    </>
  );
};

const MobileText = MobileWindowWrapper(MobileTextContent, "txtfile");

export default MobileText;
