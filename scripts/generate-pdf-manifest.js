const fs = require('fs');
const path = require('path');

const pdfDirectory = path.join(__dirname, '..', 'public', 'pdf');
const manifestPath = path.join(__dirname, '..', 'public', 'pdf-manifest.json');

try {
  const pdfFiles = fs.readdirSync(pdfDirectory).filter(file => file.endsWith('.pdf'));
  fs.writeFileSync(manifestPath, JSON.stringify(pdfFiles, null, 2));
  console.log('PDF manifest generated successfully.');
} catch (error) {
  console.error('Error generating PDF manifest:', error);
  process.exit(1);
} 