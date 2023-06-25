import React, { useState } from 'react';
import LeftInput from './LeftInput';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
  
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleEnrollStudent = () => {
    const newStudent = {
      name,
      email,
      website,
      image,
      gender,
      skills,
    };
    setEnrolledStudents([...enrolledStudents, newStudent]);
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setWebsite('');
    setImage('');
    setGender('');
    setSkills([]);
  };

  return (
    <div>
    <h1 className='Heading'>Student Enrollment Form</h1>
    <div className="registration-form"> 
      <div className="left-side">
        <h2>Registration Form</h2>
        <LeftInput label="Name" id="name" value={name} onChange={handleNameChange} />
        <LeftInput label="Email" id="email" value={email} onChange={handleEmailChange} />
        <LeftInput label="Website" id="website" value={website} onChange={handleWebsiteChange} />
        <LeftInput label="Image Link" id="image" value={image} onChange={handleImageChange} />
        <div className='gen'>
          <label>Gender:</label>
          <div>
            <div className='inline'>
            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
            <label htmlFor="male">Male</label>
            </div>
            <div className='inline'>
            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
            <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <br/>

        </div>
        <div className='skills'>
          <label>Skills:</label>
          <div className='skills'>
            <input type="checkbox" id="java" value="java" onChange={handleSkillsChange} checked={skills.includes('java')} />
            <label htmlFor="java">Java</label>
         
            <input type="checkbox" id="html" value="html" onChange={handleSkillsChange} checked={skills.includes('html')} />
            <label htmlFor="html">HTML</label>
         
            <input type="checkbox" id="css" value="css" onChange={handleSkillsChange} checked={skills.includes('css')} />
            <label htmlFor="css">CSS</label>
          </div>
        </div>
        <br/>
        <div>
          <button onClick={handleEnrollStudent} className='enroll-button '>Enroll Student</button>
          <button onClick={clearForm} className='clear-button  '>Clear</button>
        </div>
      </div>
      <div className="right-side">
        <h2>Enrolled Students</h2>
        {enrolledStudents.length === 0 ? (
          <p>No students enrolled yet.</p>
        ) : (
            enrolledStudents.map((student, index) => (
                <div className="student-card" key={index}>
                  <div className='details'>
                    <h3>{student.name}</h3>
                    <p>Email: {student.email}</p>
                    <p>Website: {student.website}</p>
                    <p>Gender: {student.gender}</p>
                    <p>Skills: {student.skills.join(', ')}</p>
                  </div>
                  <div className="image-container">
                    <img src={student.image} alt={student.name} />
                  </div>
                </div>

            ))
        )}
      </div>
    </div>

  );
};

export default RegistrationForm;
