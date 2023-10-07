import { useState } from "react";

//? Icons
import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

//? Components
import RegisterModal from "./RegisterModal";
import { ResetPassword } from "./ResetPassword";

//? Form hook
import { useForm } from "react-hook-form";

//? Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

//? Axios
import axios from "axios";

//? i18n
import { useTranslation } from "react-i18next";

//? React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//? ----------------------------------------------
const LoginModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  //! Form Validation
  const [modal, setModal] = useState("login");

  //! Login Form Validation
  const loginSchema = object({
    email: string()
      .trim("Email will not be empty.")
      .matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
        message: t("email_error"),
        excludeEmptyString: true,
      })
      .required(),
    password: string()
      .trim("")
      .required(`${t("password_error")}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  //! Post form data
  const submitForm = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    console.log(body);

    //! Api Post Login
    await axios
      .post("http://localhost:7000/iticket-api/login", body)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success(t("provided_match"), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(true);
        setModal("login");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        toast.error(`${t("provided_not_match")}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  //! ---------------------------------------------
  return (
    <div className={`loginModal ${open && "active"}`}>

      {/* //! React ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* //! Overlay */}
      <div
        className="overlay"
        onClick={() => {
          setOpen(false);
          setModal("login");
        }}
      ></div>
      
{/* //! Login Modals Open and close */}
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
                <h4 className="modalTitle">{t("login")}</h4>
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
                      placeholder={t("email_or_phone")}
                      {...register("email")}
                      className={errors.email && "errorInp"}
                    />
                    {errors.email && (
                      <span className="errorMsg">{errors.email.message}</span>
                    )}
                  </div>
                  <div className="formGroup">
                    <input
                      type="password"
                      name="password"
                      placeholder={t("password")}
                      className={errors.email && "errorInp"}
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="errorMsg">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="formGroup">
                    <button className="btn" type="submit">
                      {t("login")}
                    </button>
                  </div>
                </form>
              </div>
              <div className="modalFooter">
                <span className="footerText">{t("new_to_itcket")}</span>
                <p
                  className="modalRegister"
                  onClick={() => setModal("register")}
                >
                  {t("sging_up")}
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
