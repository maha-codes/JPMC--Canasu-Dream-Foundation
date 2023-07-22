import { useState, useContext } from "react";
import { AppContext } from "../../context/Context";
import "./login.css";
import Swal from "sweetalert2";
import { Checkbox, Dropdown } from "semantic-ui-react";
import Axios from "axios";
import { BsSoundwave } from "react-icons/bs";

function Registration({ handleRegister, showPassword, setShowPassword }) {
  const { setUserData } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "mentee",
    fields: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event, { name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleLoading() {
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty) {
      setLoading(false);
    } else setLoading(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("https://basalt-equatorial-paw.glitch.me/users", formData)
      .then((response) => {
        setUserData(response.data);
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Thank you for registering! Proceed to log in with your new credentials",
        });
        setFormData({
          fullName: "",
          email: "",
          password: "",
          role: "mentee",
          fields: [],
        });
        handleRegister();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Sorry, an error occurred during registration.",
        });
        setLoading(false);
      });
  };

  const renderAdditionalFields = () => {
    if (formData.role === "mentee") {
      const fieldOptions1 = [
        { key: "field1", value: "field1", text: "Government Engineering College, Banglore" },
        { key: "field2", value: "field2", text: "Government RC College Of Commerce and Management" },        
        { key: "field3", value: "field2", text: "Hassan Institute Of Medical Sciences" },
      ];
      const fieldOptions2 = [
        { key: "field3", value: "field3", text: "Kannada" },
        { key: "field4", value: "field4", text: "Telugu" },
        { key: "field4", value: "field4", text: "English" },
        { key: "field4", value: "field4", text: "Hindi" },
      ];
      const fieldOptions3 = [
        { key: "field5", value: "field5", text: "Under-Graduate" },
        { key: "field6", value: "field6", text: "Post-Graduate" },
      ];
      const fieldOptions4 = [
        { key: "field7", value: "field7", text: "IT" },
        { key: "field8", value: "field8", text: "Written Ability" },        
        { key: "field8", value: "field8", text: "Public Speaking" },        
        { key: "field8", value: "field8", text: "Home Sciences" },
      ];

      return (
        <>
          <div className="input-field">
            <label>College Name</label>
            <Dropdown
              name="fields"
              placeholder="Select a field"
              selection
              options={fieldOptions1}
              value={formData.fields}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Languages</label>
            <Dropdown
              name="fields"
              placeholder="Select a field"
              selection
              options={fieldOptions2}
              value={formData.fields}
              onChange={handleChange}
              multiple
              required
            />
          </div>
          <div className="input-field">
            <label>Education</label>
            <Dropdown
              name="fields"
              placeholder="Select a field"
              selection
              options={fieldOptions3}
              value={formData.fields}
              onChange={handleChange}
              
              required
            />
          </div>
          <div className="input-field">
            <label>Aspiration</label>
            <Dropdown
              name="fields"
              placeholder="Select a field"
              selection
              options={fieldOptions4}
              value={formData.fields}
              onChange={handleChange}
              multiple
              required
              style={{ width: '300px', backgroundColor: 'lightgray' }}
            />
          </div>
          
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="login-container">
      <div className="navbar-logo">
        <img src="./src/Images/logo.webp"></img>
      </div>
      <div id="login-page">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Full Name</label>
            <input
              name="fullName"
              placeholder="Enter your full name"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <i className="user icon" id="user-icon"></i>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className="mail icon" id="email-icon"></i>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              minLength={8}
              placeholder="********"
              title="Password must contain numbers and letters"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i className="lock icon" id="password-icon"></i>
          </div>
          <div className="input-field">
            <Checkbox
              value={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            <span> {!showPassword ? "Show" : "Hide"} Password</span>
          </div>
          <div className="input-field">
            <label>Account Type</label>
            <select
              name="role"
              className="ui select dropdown register-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          {renderAdditionalFields()}
          <div className="input-field">
            <span>
              By continuing, you agree to the <a>terms and conditions</a>
            </span>
          </div>
          <button
            onClick={handleLoading}
            type="submit"
            className={!loading ? "register-btn" : "ui fluid loading primary button"}
          >
            <i className="signup icon"></i> Register
          </button>
        </form>
        <div className="ui bottom attached message" id="register-message">
          Already signed up ? <a onClick={handleRegister}>Login here</a> instead.
        </div>
      </div>
    </div>
  );
}

export default Registration;

