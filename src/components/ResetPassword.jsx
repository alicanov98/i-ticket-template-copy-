//? Icons
import { VscChromeClose } from "react-icons/vsc";


//? i18n
import { useTranslation } from "react-i18next";


export const ResetPassword = ({ open, setOpen, setModal }) => {

const {t}=useTranslation()

  return (
    <div className="resetPasswordModal">
      <div
        className="overlay"
        onClick={() => {
          setOpen(false);
          setModal("login");
        }}
      ></div>
      <div className="row">
        <div className={`modalPassword ${open && "active"}`}>
          <div className="modalDialog ">
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
              <h4 className="modalTitle">{t("reset_password")}</h4>
            </div>
            <div className="modalBody">
              <form >
                <div className="formGroup">
                {/* {errors.email && errorSwal(errors.email.message)} */}
                  <input type="text" name="email" placeholder={t("email")}  />
                </div>
                <div className="formGroup">
                  <button className="btn" type="submit">
                    {t("reset")}
                  </button>
                </div>
              </form>
            </div>
            <div className="modalFooter">
              <span className="footerText">{t("remember_password")}</span>
              <p className="modalRegister" onClick={() => setModal("login")}>
                {t("login")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
