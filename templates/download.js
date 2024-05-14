document.getElementById('download-pdf').addEventListener('click', function() {
  const pdf = new jsPDF('p', 'pt', 'letter');
  pdf.setFontSize(20);
  pdf.setFont('helvetica');
  const predictedDisease = document.getElementById('predicted-disease').textContent;
  pdf.text('Predicted Disease', 50, 50);
  pdf.text(predictedDisease, 50, 80);
  pdf.text('Step 1: Consult a healthcare professional for further information and treatment.', 50, 110);
  pdf.text('Step 2: Follow the recommended precautions to prevent the spread of the disease.', 50, 140);
  pdf.text('Step 3: Take the prescribed medications as directed by the healthcare professional.', 50, 170);
  pdf.text('Step 4: Maintain a healthy diet and exercise regularly to boost your immune system.', 50, 200);
  pdf.line(10, 230, 200, 230); // Add the horizontal line
  pdf.save('predicted_disease.pdf');
});