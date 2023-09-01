import { VscChromeClose } from "react-icons/vsc";

export const ResetPassword = ({ open, setOpen, setModal }) => {
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
              <h4 className="modalTitle">Şifrəni Sıfırla</h4>
            </div>
            <div className="modalBody">
              <form>
                <div className="formGroup">
                  <input type="text" name="login" placeholder="E-poçt" />
                </div>
                <div className="formGroup">
                  <button className="btn" type="submit">
                    Sıfırla
                  </button>
                </div>
              </form>
            </div>
            <div className="modalFooter">
              <span className="footerText">Şifrənizi xatırlayırsınız? </span>
              <p className="modalRegister" onClick={() => setModal("login")}>
                Daxil ol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
