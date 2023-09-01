import { VscChromeClose } from "react-icons/vsc";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
const RegisterModal = ({ open, setOpen, setModal }) => {
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
              <form>
                <div className="formGroup">
                  <input type="text" placeholder="Ad" />
                </div>
                <div className="formGroup">
                  <input type="text" placeholder="Soyad" />
                </div>
                <div className="formGroup">
                  <input type="text" placeholder="Mobil" />
                </div>
                <div className="formGroup">
                  <input type="email" name="email" placeholder="E-poçt" />
                </div>
                <div className="formGroup">
                  <input
                    className="regInp"
                    type="password"
                    name="password"
                    placeholder="Şifrə"
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="password"
                    className="regInp"
                    name="password"
                    placeholder="Şifrəni təsdiqləyin "
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
