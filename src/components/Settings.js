import React from "react";
import { useState } from "react";

const Settings = () => {
  const [emailTemplate, setEmailTemplate] = useState("");
  const [userRole, setUserRole] = useState("");
  const [systemPreference, setSystemPreference] = useState("");

  const handleEmailTemplateChange = (event) => {
    setEmailTemplate(event.target.value);
  };

  const handleUserRoleChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleSystemPreferenceChange = (event) => {
    setSystemPreference(event.target.value);
  };

  return (
    <div>
      <h1>Settings</h1>
      <form>
        <div>
          <label>Email Template:</label>
          <input
            type="text"
            value={emailTemplate}
            onChange={handleEmailTemplateChange}
          />
        </div>
        <div>
          <label>User Role:</label>
          <input
            type="text"
            value={userRole}
            onChange={handleUserRoleChange}
          />
        </div>
        <div>
          <label>System Preference:</label>
          <input
            type="text"
            value={systemPreference}
            onChange={handleSystemPreferenceChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
