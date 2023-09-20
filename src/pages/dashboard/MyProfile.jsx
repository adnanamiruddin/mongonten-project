import AuthNav from "../../components/AuthNav";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import InputImage from "../../components/InputImage";
import Button from "../../components/Button";

const MyProfile = () => {
  return (
    <div>
      <AuthNav />
      <div className="pt-24 px-4 pb-10">
        <h1 className="text-2xl text-center font-semibold">PROFIL SAYA</h1>

        <div className="divider" />
        <form
          // onSubmit={handleSubmit}
          className="flex flex-wrap gap-8 px-3 justify-between w-full lg:w-9/12"
        >
          <div className="w-full lg:basis-2/4">
            <Input
              label="Nama Lengkap"
              isRequire
              name="fullname"
              placeholder="John Doe"
              // handleInputChange={handleInputChange}
            />
          </div>

          <div className="w-full lg:basis-2/4">
            <Input
              label="Domisili"
              isRequire
              name="location"
              placeholder="Makassar"
              // handleInputChange={handleInputChange}
            />
          </div>

          <div className="w-full lg:basis-1/3">
            <Input
              label="URL"
              isRequire
              name="slug"
              placeholder="your.name"
              // handleInputChange={handleInputChange}
            />
          </div>

          <div className="w-full lg:basis-2/4">
            <TextArea
              label="Bio (pengenalan singkat)"
              name="bio"
              placeholder="I am..."
              // handleInputChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col w-full lg:basis-1/3 items-start">
            <InputImage
              label="Foto"
              name="photo"
              // selectedImage={selectedImage}
              // handleImageChange={handleImageChange}
            />
          </div>

          <Button
            label={
              "SIMPAN"
              // userData.account.fullname !== "(Your Full Name...)"
              //   ? "UPDATE"
              //   : "SAVE"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
