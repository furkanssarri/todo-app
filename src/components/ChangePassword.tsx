import Button from "./Button";

const ChangePassword = () => {
  return (
    <>
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
