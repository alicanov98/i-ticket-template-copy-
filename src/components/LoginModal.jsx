import { useState } from "react";

//? Icons
import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

//? Components
import RegisterModal from "./RegisterModal";
import { ResetPassword } from "./ResetPassword";

//? React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//? Yup
import { object, string } from "yup";



//? Translation
import { useTranslation } from "react-i18next";

//? React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginModal = ({ open, setOpen,setUser }) => {


  
  //? Translation
  const { t } = useTranslation();

  //? Local states
  const [modal, setModal] = useState("login");

  //? Yup schema
  const loginSchema = object({
    email: string()
      .trim()
      .matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
        message: t("email_error"),
        excludeEmptyString: true,
      })
      .required(`${t("email_not_empty")}`),
    password: string()
      .trim("")
      .required(`${t("password_error")}`),
  });

  //? React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  //? Login
  const submitForm = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const user = storedUser.find((user) => user.email === data.email && user.password === data.password);

    if (user) {
      
    
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
      setUser(true);
    } else {
    
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
    }
  };
  
  

  return (
    <div className={`loginModal ${open && "active"}`}>
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
