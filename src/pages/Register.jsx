import { useState } from "react";
import Input from "../components/Input";
import ToastNotif from "../components/ToastNotif";
import { Link } from "react-router-dom";
import { regist } from "../api/public.service";

const Register = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    regist(fields);
  };

  return (
    <div className="hero min-h-screen">
      <ToastNotif />
      <div className="hero-content flex-col lg:flex-row-reverse p-9">
        <div className="text-center lg:ml-12 lg:text-left lg:w-3/6">
          <h1 className="text-5xl font-bold text-center tracking-wide leading-tight">
            Register now!
          </h1>
          <p className="pt-10 pb-4 text-center">
            Lets create your account to start managing your links and sharing
            your content with ease
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control gap-6">
              <div>
                <Input
                  label="Name"
                  isRequire
                  name="name"
                  placeholder="John Doe"
                  handleInputChange={handleFieldChange}
                />
              </div>

              <div>
                <Input
                  label="Email"
                  isRequire
                  name="email"
                  placeholder="youremail99@email.com"
                  handleInputChange={handleFieldChange}
                />
              </div>

              <div>
                <Input
                  type="password"
                  label="Password"
                  isRequire
                  name="password"
                  placeholder="yourpassword"
                  handleInputChange={handleFieldChange}
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Daftar
              </button>
            </div>
          </form>

          <Link to="/login">
            <button className="text-blue-500 hover:underline text-sm w-full pb-4">
              Sudah memiliki akun? Klik untuk masuk
            </button>
          </Link>

          <Link to="/" className="flex justify-end px-4 pt-2 pb-6">
            <button className="btn btn-sm btn-outline btn-warning">
              Kembali ke halaman utama
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
