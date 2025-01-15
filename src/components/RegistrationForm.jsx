import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    college: "",
    semester: "",
    course: "",
    password: "",
    confirmPassword: "",
    selectedEvents: [],
    paymentMode: "",
  });

  const [errors, setErrors] = useState({});

  const eventOptions = [
    { id: 1, name: "Event 1", image: "event1.jpg" },
    { id: 2, name: "Event 2", image: "event2.jpg" },
    { id: 3, name: "Event 3", image: "event3.jpg" },
    { id: 4, name: "Event 4", image: "event4.jpg" },
    { id: 5, name: "Event 5", image: "event5.jpg" },
    { id: 6, name: "Event 6", image: "event6.jpg" },
  ];

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.rollNumber.trim()) newErrors.rollNumber = "Roll number is required.";
    if (!formData.college.trim()) newErrors.college = "College is required.";
    if (!formData.course.trim()) newErrors.course = "Course is required.";
    if (!formData.semester || formData.semester < 1 || formData.semester > 8)
      newErrors.semester = "Semester must be between 1 and 8.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (formData.selectedEvents.length === 0) {
      setErrors({ selectedEvents: "Please select at least one event." });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventSelection = (eventId) => {
    setFormData((prevState) => {
      const isSelected = prevState.selectedEvents.includes(eventId);
      const selectedEvents = isSelected
        ? prevState.selectedEvents.filter((id) => id !== eventId)
        : [...prevState.selectedEvents, eventId];
      return { ...prevState, selectedEvents };
    });
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMode) {
      console.log("Final Form Data: ", formData);
      alert("Registration Successful!");
    } else {
      setErrors({ paymentMode: "Please select a payment mode." });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Event Registration</h2>
        {step === 1 && (
          <div className="step">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label>Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
            />
            {errors.rollNumber && <p className="error">{errors.rollNumber}</p>}

            <label>College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
            {errors.college && <p className="error">{errors.college}</p>}

            <label>Semester</label>
            <input
              type="number"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            />
            {errors.semester && <p className="error">{errors.semester}</p>}

            <label>Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
            {errors.course && <p className="error">{errors.course}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h3>Select Events</h3>
            <div className="event-options">
              {eventOptions.map((event) => (
                <div
                  key={event.id}
                  className={`event-card ${
                    formData.selectedEvents.includes(event.id)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleEventSelection(event.id)}
                >
                  <img src={event.image} alt={event.name} />
                  <p>{event.name}</p>
                </div>
              ))}
            </div>
            {errors.selectedEvents && (
              <p className="error">{errors.selectedEvents}</p>
            )}
            <div className="navigation-buttons">
              <button type="button" onClick={handleBack}>
                Back
              </button>
              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3>Payment Details</h3>
            <label>Payment Mode</label>
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            {errors.paymentMode && <p className="error">{errors.paymentMode}</p>}

            <div className="navigation-buttons">
              <button type="button" onClick={handleBack}>
                Back
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
