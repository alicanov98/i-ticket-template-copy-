import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import RegisterModal from "./RegisterModal";
import { ResetPassword } from "./ResetPassword";
import { useState } from "react";

const LoginModal = ({ open, setOpen }) => {
  const [modal, setModal] = useState("login");

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
                <form>
                  <div className="formGroup">
                    <input
                      type="text"
                      name="login"
                      placeholder="E-poçt və ya telefon nömrəsi"
                    />
                  </div>
                  <div className="formGroup">
                    <input
                      type="password"
                      name="password"
                      placeholder="Şifrə"
                    />
                    <p className="forgot" onClick={() => setModal("reset")}>
                      Unutmusunuz?
                    </p>
                  </div>
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
