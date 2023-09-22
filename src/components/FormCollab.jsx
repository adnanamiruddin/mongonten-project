import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import InputImage from "./InputImage";

const FormCollab = () => {
  const [request, setRequest] = useState({
    name: "",
    type: "",
    desc: "",
    no_wa: "",
    photo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
    // setNewUserData({ ...newUserData, [name]: value });
  };

  return (
    <>
      <button
        className="btn btn-md btn-accent text-xs ml-auto mt-4"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Ajak Kolaborasi
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gray-300">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="flex flex-col gap-4">
            <div className="w-full lg:basis-2/4">
              <Input
                label="Nama"
                isRequire
                name="name"
                placeholder="John Doe"
                handleInputChange={handleInputChange}
              />
            </div>

            <div className="w-full lg:basis-2/4">
              <Input
                label="Jenis UMKM"
                isRequire
                name="type"
                placeholder="Coto Makassar"
                handleInputChange={handleInputChange}
              />
            </div>

            <div className="w-full lg:basis-2/4">
              <TextArea
                label="Deskripsi Singkat"
                name="name"
                placeholder="UMKM saya berfokus pada..."
                handleInputChange={handleInputChange}
              />
            </div>

            <div className="w-full lg:basis-2/4">
              <Input
                label="Nomor WhatsApp"
                isRequire
                name="no_wa"
                placeholder="0812345678"
                handleInputChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col w-full lg:basis-1/3 items-start">
              <InputImage
                label="Foto UMKM"
                name="photo"
                // handleImageChange={handleImageChange}
              />
            </div>
            <Button label="Kirim" />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default FormCollab;
