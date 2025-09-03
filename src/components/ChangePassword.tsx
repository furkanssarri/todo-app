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
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate(-1)}
              aria-label="Go back to Settings"
            >
              <IconArrowLeft aria-hidden="true" focusable="false" />
              <span className="sr-only">Back to Settings</span>
              Settings
            </button>
          </div>
        </div>
      )}
      <form
        className="setting-selector"
        aria-labelledby="change-password-heading"
      >
        <h2 id="change-password-heading" className="setting-heading">
          Change Password
        </h2>
        <p>
          This page is a placeholder for the future. Currently, there's no
          authentication and a backend implemented yet.
        </p>
        <div className="pw-form-row">
          <label htmlFor="old-password" className="text-preset-4">
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            id="old-password"
            required
          />
        </div>
        <div className="pw-form-row">
          <label htmlFor="new-password" className="text-preset-4">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            id="new-password"
            required
          />
        </div>
        <div className="pw-form-row">
          <label htmlFor="confirm-password" className="text-preset-4">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            required
          />
        </div>
        <div className="submit-button">
          <Button color="primary" size="lg" type="submit">
            Save Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
