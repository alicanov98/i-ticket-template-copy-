import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { errorSwal } from "../utils/swal";
const RegisterModal = ({ open, setOpen, setModal }) => {
  const registerSchema = yup.object({
    name: yup.string().trim().required("Ad Bos olmaz"),
    surname: yup.string().trim().required("Soyad Bos olmaz"),
    email: yup.string().trim().required("Email Bos olmaz"),
    password: yup
      .string()
      .trim()
      .required("Sifre Bos olmaz")
      .min(6, "Şifrə çox qısa"),
    confirmPassword: yup
      .string()
      .trim()
      .required("Şifrəni təsdiqləyin bos olmaz")
      .test("passwords-match", "Şifrələr uyğun gəlmir", function (value) {
        return this.parent.password === value;
      }),
  });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(registerSchema),
    });

  const formSubmit = async (data) => {
    const body = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:7000/iticket-api/register", body)
      .then((res) => {
        console.log(res);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="registerModal">
      <div
        className="overlay"
        onClick={() => {
          setOpen(false);
          setModal("login");
        }}
      ></div>
      <div className="row">
        <div className={`registersModal ${open && "active"}`}>
          <div className="modalDialog">
            <span className="hat"></span>
            <button
              className="close"
              onClick={() => {
                setOpen(false);
                setModal("login");
              }}
            >
              <VscChromeClose className="icoClose" />
            </button>
            <div className="modalHeader">
              <h4 className="modalTitle">Qeydiyyat</h4>
              <div className="modalHeaderAddons">
                <button className="ico-btn  socialFb">
                  <BiLogoFacebook />
                </button>
                <button className="ico-btn  socialGoogle">
                  <BsGoogle />
                </button>
              </div>
            </div>
            <div className="modalBody">
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="formGroup">
                  {errors.confirmPassword && errorSwal(errors.confirmPassword.message)}
                {errors.password && errorSwal(errors.password.message)}
                {errors.email && errorSwal(errors.email.message)}
                  {errors.surname && errorSwal(errors.surname.message)}
                {errors.name && errorSwal(errors.name.message)}
                  <input
                    type="text"
                    placeholder="Ad"
                    name="name"
                    {...register("name")}
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder="Soyad"
                    name="surname"
                    {...register("surname")}
                  />
                </div>
                <div className="formGroup">
                  <input type="text" placeholder="Mobil" />
                </div>
                <div className="formGroup">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-poçt"
                    {...register("email")}
                  />
                </div>
                <div className="formGroup">
                  <input
                    className="regInp"
                    type="password"
                    name="password"
                    placeholder="Şifrə"
                    {...register("password")}
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="password"
                    className="regInp"
                    name="confirmPassword"
                    placeholder="Şifrəni təsdiqləyin "
                    {...register("confirmPassword")}
                  />
                </div>
                <div className="formGroup">
                  <button className="btn" type="submit">
                    Qeydiyyat
                  </button>
                </div>
              </form>
            </div>
            <div className="modalFooter">
              <span className="footerText regFooterText">
                Artıq qeydiyyatdan keçmisiniz?{" "}
              </span>
              <p className="signUp" onClick={() => setModal("login")}>
                Daxil olun
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
