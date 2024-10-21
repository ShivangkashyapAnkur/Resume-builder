import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportResume = ({ formData }) => {
  const handleDownload = () => {
    const input = document.getElementById('resume-preview');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="export">
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default ExportResume;
