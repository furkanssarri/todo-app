import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import IconArrowLeft from "./icons/IconArrowLeft";

const ChangePassword = () => {
  const { isMobile, isTablet } = useContext(MobileContext);
  const navigate = useNavigate();
  return (
    <>
      {(isTablet || isMobile) && (
        <div className="mobile-actions">
          <div className="mobile-go-back">
            <a href="#" onClick={() => navigate(-1)}>
              <IconArrowLeft />
              Settings
            </a>
          </div>
        </div>
      )}
      <h2 className="setting-heading">Change Password</h2>
      <form className="setting-selector">
        <div className="pw-form-row">
          <label htmlFor="old-password" className="text-preset-4">
            Old Password
          </label>
          <input type="password" name="oldPassword" id="old-password" />
        </div>
        <div className="pw-form-row">
          <label htmlFor="new-password" className="text-preset-4">
            New Password
          </label>
          <input type="password" name="newPassword" id="new-password" />
        </div>
        <div className="pw-form-row">
          <label htmlFor="confirm-password" className="text-preset-4">
            Confirm Password
          </label>
          <input type="password" name="confirmPassword" id="confirm-password" />
        </div>
        <div className="submit-button">
          <Button
            color="primary"
            size="lg"
            onClick={() => {
              // setTheme(selectedTheme);
              // localStorage.setItem("theme", selectedTheme);
            }}
          >
            Save Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
