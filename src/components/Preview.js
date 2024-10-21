const Preview = ({ formData }) => (
    <div className="preview" id="resume-preview">
      <h2>{formData.name}</h2>
      <p><strong>Education:</strong> {formData.education}</p>
      <p><strong>Experience:</strong> {formData.experience}</p>
      <p><strong>Skills:</strong> {formData.skills}</p>
    </div>
  );
  
  export default Preview;
  