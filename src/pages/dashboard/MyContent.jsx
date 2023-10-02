import { useEffect } from "react";
import { getSelectedAccount } from "../../api/private.service";
import AuthNav from "../../components/AuthNav";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import InputImage from "../../components/InputImage";
import Button from "../../components/Button";

const MyContent = ({ token }) => {
  // useEffect(() => {
  //   getSelectedAccount();
  // }, []);

  return (
    <div>
      <AuthNav />
      <div className="pt-24 px-4 pb-10">
        <div className="pb-16">
          <h1 className="text-2xl text-center font-semibold">KONTEN SAYA</h1>

          <div className="divider" />

          {/* CARD */}
          <div className="card w-auto bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://www.beautifulworld.com/wp-content/uploads/2016/09/Angel-Falls.jpg"
                alt="Air Terjun"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Air Terjun</h2>
              <p>
                Air terjun tertinggi di dunia. Pemandangannya indah, keren gituu
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl text-center font-semibold">TAMBAH KONTEN</h1>

          <div className="divider" />
          <form
            // onSubmit={handleSubmit}
            className="flex flex-wrap gap-8 px-3 lg:pr-12 justify-between w-full lg:w-9/12"
          >
            <div className="w-full lg:basis-2/4">
              <div className="flex flex-col w-full lg:basis-1/3 items-start mb-7">
                <InputImage
                  label="Foto Konten"
                  name="photo"
                  // selectedImage={selectedImage}
                  // handleImageChange={handleImageChange}
                />
              </div>

              <Input
                label="Judul Konten"
                isRequire
                name="title"
                placeholder="Review Nasi Padang"
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

            <div className="w-full lg:basis-1/3">
              <Input
                label="Link Konten"
                isRequire
                name="slug"
                placeholder="https://instagram.com/..."
                // handleInputChange={handleInputChange}
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
    </div>
  );
};

export default MyContent;
