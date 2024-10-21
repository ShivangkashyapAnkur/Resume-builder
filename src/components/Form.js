const Form = ({ formData, handleChange }) => (
    <form className="form">
      <div className="field">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Education:</label>
        <input type="text" name="education" value={formData.education} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Work Experience:</label>
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Skills:</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </div>
    </form>
  );
  
  export default Form;
  