import Button from "./Button";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";

const ChangePassword = () => {
  const { isMobile, isTablet } = useContext(MobileContext);
  return (
    <>
      {(isTablet || isMobile) && (
        <div className="mobile-actions">
          <div className="mobile-go-back">
            <NoteActionsMobile
              exclude={["archive", "restore", "cancel", "delete", "save"]}
            />
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
