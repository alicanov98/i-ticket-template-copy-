import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import RegisterModal from "./RegisterModal";
import { ResetPassword } from "./ResetPassword";
import { useState } from "react";
import { object, string } from "yup";
import { errorSwal } from "../utils/swal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const LoginModal = ({ open, setOpen }) => {
  const [modal, setModal] = useState("login");

  const loginSchema = object({
    email: string()
      .trim("Email bos olmasin")
      .matches(
        /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "Email formati yalnisdir"
      ),
    password: string()
      .trim("Sifre bos olmasin")
      .matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,18}$/, "Sifrenin formati yalnisdir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data) => {
    const body ={
      email: data.email,
      password: data.password,
    }

    await axios
    .post("http://localhost:7000/iticket-api/login", body)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
  

      if (res.status === 200) {
        setOpen(true);
        setModal("login");
        window.location.reload();
      }
    })
    .catch((err) => {
      if (err.response.status === 404) {
        console.log("Istifadeci tapilmadi");
      }
    });
  };

  return (
    <div className={`loginModal ${open && "active"}`}>
      <div
        className="overlay"
        onClick={() => {
          setOpen(false);
          setModal("login");
        }}
      ></div>
      {modal === "login" ? (
        <div className="row">
          <div className="modal">
            <div className="modalDialog loginDialog">
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
                <h4 className="modalTitle">Daxil ol</h4>
                <div className="modalHeaderAddons">
                  <button className="ico-btn socialFb">
                    <BiLogoFacebook />
                  </button>
                  <button className="ico-btn socialGoogle">
                    <BsGoogle />
                  </button>
                </div>
              </div>
              <div className="modalBody">
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="formGroup">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-poçt və ya telefon nömrəsi"
                      {...register("email")}
                    />
                  </div>
                  {errors.password && errorSwal(errors.password.message)}
                  <div className="formGroup">
                    <input
                      type="password"
                      name="password"
                      placeholder="Şifrə"
                      {...register("password")}
                    />
                    <p className="forgot" onClick={() => setModal("reset")}>
                      Unutmusunuz?
                    </p>
                  </div>
                  {errors.email && errorSwal(errors.email.message)}
                  <div className="formGroup">
                    <button className="btn" type="submit">
                      Daxil ol
                    </button>
                  </div>
                </form>
              </div>
              <div className="modalFooter">
                <span className="footerText">iTicket.AZ-da yenisiniz?</span>
                <p
                  className="modalRegister"
                  onClick={() => setModal("register")}
                >
                  Qeydiyyatdan keçin
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : modal === "register" ? (
        <RegisterModal open={open} setOpen={setOpen} setModal={setModal} />
      ) : modal === "reset" ? (
        <ResetPassword open={open} setOpen={setOpen} setModal={setModal} />
      ) : null}
    </div>
  );
};

export default LoginModal;
