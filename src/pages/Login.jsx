import { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/public.service";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(fields);
    if (data.user !== null) {
      setToken(data);
      navigate("/dashboard");
    } else {
      toast.error("Maaf, akun yang kamu masukkan salah 🗿");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse p-8">
        <div className="text-center lg:ml-12 lg:text-left lg:w-3/6">
          <h1 className="text-5xl font-bold text-center tracking-wide">
            Login now!
          </h1>
          <p className="pt-10 pb-4 text-center">
            Welcome back! Log in to manage your links and share your content.
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control gap-6">
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
                Masuk
              </button>
            </div>
          </form>

          <Link to="/register">
            <button className="text-blue-500 hover:underline text-sm w-full pb-4">
              Belum punya akun? Klik untuk pendaftaran
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

export default Login;
