import React, { useState, useEffect } from "react";
import Landing from "../../screens/Landing";

const Profile_Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    skills: "",
    projects: [
      { name: "", description: "", github_url: "" },
      { name: "", description: "", github_url: "" },
      { name: "", description: "", github_url: "" },
    ],
    college_name: "",
  });

  useEffect(() => {
    // Replace 'john_doe' with the actual username you want to fetch data for
    const username = 'deepgohil_';
    const API_URL = `https://spit-hackthn.vercel.app/getdata/?username=${username}`;

    fetch(API_URL, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Assuming the API returns the data in the format you've shown
      if (data && data.length > 0) {
        const user = data[0];
        setFormData({
          username: username,
          skills: user.skills.join(', '), // Convert array to comma-separated string
          projects: user.projects.length > 0 ? user.projects : formData.projects, // Use fetched projects or default if none
          college_name: user.college_name
        });
      }
    })
    .catch(error => console.error('Error fetching initial data:', error));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("projects")) {
      const index = parseInt(name.split(".")[1], 10);
      const fieldName = name.split(".")[2];
      const updatedProjects = formData.projects.map((project, i) =>
        i === index ? { ...project, [fieldName]: value } : project
      );
      setFormData({ ...formData, projects: updatedProjects });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data for submission
    const submissionData = {
      ...formData,
      skills: formData.skills.split(",").map((skill) => skill.trim()), // Convert skills string to array and trim whitespace
    };

    // API endpoint
    const API_URL = "https://spit-hackthn.vercel.app/submit-data/";

    // Make the API call
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Data submitted successfully");
        
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting data");
      });
  };

  return (
    <div className="container" style={{textAlign:'center'}}>
        <h3 style={{fontSize:'25px', paddingBottom:'20px'}}><b>Enter your details</b></h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #000",
            width: "50%",
            color: "000h"
          }}
        />
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma-separated, e.g., Python, React)"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #000",
            width: "50%"
          }}
        />
        {formData.projects.map((project, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", gap: "10px", width: "50%" }}
          >
            <input
              type="text"
              name={`projects.${index}.name`}
              value={project.name}
              onChange={handleChange}
              placeholder={`Project ${index + 1} Name`}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #000",
                
              }}
            />
            <textarea
              name={`projects.${index}.description`}
              value={project.description}
              onChange={handleChange}
              placeholder={`Project ${index + 1} Description`}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #000",
                resize: "vertical",
                
              }}
            />
            <input
              type="text"
              name={`projects.${index}.github_url`}
              value={project.github_url}
              onChange={handleChange}
              placeholder={`Project ${index + 1} GitHub URL`}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #000",
                
              }}
            />
          </div>
        ))}
        <input
          type="text"
          name="college_name"
          value={formData.college_name}
          onChange={handleChange}
          placeholder="College Name"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #000",
            width: "50%",
            color: '000h'
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "50%"
          }}
          onClick={()=><Landing></Landing>}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile_Form;
