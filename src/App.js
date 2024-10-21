import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';
import ExportResume from './components/ExportResume';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Form formData={formData} handleChange={handleChange} />
        <Preview formData={formData} />
      </div>
      <ExportResume formData={formData} />
    </div>
  );
};

export default App;
