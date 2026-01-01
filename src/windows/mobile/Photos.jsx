import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";

const MobilePhotosContent = () => {
  return (
    <>
      <MobileWindowHeader windowKey="photos" title="All Photos" />

      <div className="gallery">
        <p className="text-sm text-gray-500">No photos available.</p>
      </div>
    </>
  );
};

const MobilePhotos = MobileWindowWrapper(MobilePhotosContent, "photos");

export default MobilePhotos;
