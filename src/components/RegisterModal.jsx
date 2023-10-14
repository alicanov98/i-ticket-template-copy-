//? React icons
import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

//? React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//? Yup
import * as yup from "yup";

//? Axios
import axios from "axios";

//? Translation
import { useTranslation } from "react-i18next";

//? React toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterModal = ({ open, setOpen, setModal }) => {
  //? Translation
  const { t } = useTranslation();

  //? Yup schema
  const registerSchema = yup.object({
    name: yup.string().trim().min(3, t("Must_characterss")).required(t("name_empty")),
    surname: yup.string().trim().min(3, t("Must_characterss")).required(t("surname_empty")),
    email: yup.string().trim().required(t("email_not_empty")).matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
      message: t("email_error"),
      excludeEmptyString: true,
    }),
    mobile: yup
      .string()
      .trim()
      .min(10, t("Must_characters"))
      .required(t("phone_empty"))
      .matches(/^[0-9+]+$/, t("just_numbers")),
    password: yup
      .string()
      .trim()
      .required(t("password_empty"))
      .min(6, t("password_short")),
    confirmPassword: yup
      .string()
      .trim()
      .required(t("confirm_password_empty"))
      .test("passwords-match", t("passwords_not_match"), function (value) {
        return this.parent.password === value;
      }),
  });

  //? React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  //? Register
  const formSubmit = async (data) => {
    const body = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post(process.env.REACT_APP_REGISTER, body)
      .then((res) => {
        console.log(res);
        toast.success(t("successful_registration"), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(t("something_wrong"), {
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

  return (
    <div className="registerModal">
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
              <h4 className="modalTitle">{t("register")}</h4>
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
                  <input
                    type="text"
                    placeholder={t("first_name")}
                    name="name"
                    {...register("name")}
                    className={errors.name && "errorInp"}
                  />
                  {errors.name && (
                    <span className="errorMsg">{errors.name.message}</span>
                  )}
                </div>
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder={t("last_name")}
                    name="surname"
                    {...register("surname")}
                    className={errors.surname && "errorInp"}
                  />
                  {errors.surname && (
                    <span className="errorMsg">{errors.surname.message}</span>
                  )}
                </div>
                <div className="formGroup">
                  <input
                    type="text"
                    name="mobile"
                    className={errors.mobile && "errorInp"}
                    placeholder={t("mobile")}
                    {...register("mobile")}
                  />
                  {errors.mobile && (
                    <span className="errorMsg">{errors.mobile.message}</span>
                  )}
                </div>
                <div className="formGroup">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                    {...register("email")}
                    className={errors.email && "errorInp"}
                  />
                  {errors.email && (
                    <span className="errorMsg">{errors.email.message}</span>
                  )}
                </div>
                <div className="formGroup">
                  <input
                    className={errors.password ? "errorInp" : "regInp"}
                    type="password"
                    name="password"
                    placeholder={t("password")}
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="errorMsg">{errors.password.message}</span>
                  )}
                </div>
                <div className="formGroup">
                  <input
                    type="password"
                    className={errors.confirmPassword ? "errorInp" : "regInp"}
                    name="confirmPassword"
                    placeholder={t("confirm_password")}
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="errorMsg">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <div className="formGroup">
                  <button className="btn" type="submit">
                    {t("register")}
                  </button>
                </div>
              </form>
            </div>
            <div className="modalFooter">
              <span className="footerText regFooterText">
                {t("already_registered")}
              </span>
              <p className="signUp" onClick={() => setModal("login")}>
                {t("sgin_in")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
