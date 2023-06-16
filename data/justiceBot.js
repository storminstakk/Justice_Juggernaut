const fs = require('fs');
const path = require('path');

const dataDirectory = path.join(__dirname, 'Justice_Juggernaut-main', 'data');

// Function to read data from a file
function readDataFromFile(filename) {
  const filePath = path.join(dataDirectory, filename);
  try {
    const fileExtension = path.extname(filename).toLowerCase();
    let data;

    switch (fileExtension) {
      case '.json':
      case '.jsonl':
      case '.csv':
      case '.sql':
      case '.txt':
        data = fs.readFileSync(filePath, 'utf8');
        break;
      case '.png':
      case '.pdf':
      case '.docx':
      case '.jpg':
      case '.jpeg':
        data = fs.readFileSync(filePath);
        break;
      default:
        console.error(`Unsupported file type: ${fileExtension}`);
        return null;
    }

    return data;
  } catch (error) {
    console.error(`Error reading data from file ${filename}:`, error);
    return null;
  }
}

// Function to import a file
function importFile(filename) {
  const filePath = path.join(dataDirectory, filename);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(`Successfully imported file ${filename}:`);
    console.log(fileContent);
  } catch (error) {
    console.error(`Error importing file ${filename}:`, error);
  }
}

// Function to export data to a file
function exportFile(filename, data) {
  const filePath = path.join(dataDirectory, filename);
  try {
    fs.writeFileSync(filePath, data);
    console.log(`Successfully exported data to file ${filename}`);
  } catch (error) {
    console.error(`Error exporting data to file ${filename}:`, error);
  }
}

module.exports = {
  readDataFromFile,
  importFile,
  exportFile,
};
