const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const components = [
  'threads',
  'hyperspeed',
  'particles',
  'balatro',
  'aurora',
  'splash-cursor',
  'blob-cursor'
];

function downloadComponent(name) {
  const url = `https://reactbits.dev/r/${name}`;
  console.log(`Fetching ${name} via execFileSync from ${url}...`);
  
  // Run curl.exe shell-independently with exact headers
  const output = execFileSync('curl.exe', [
    '-H', 'Accept: application/json',
    '-s', url
  ], { encoding: 'utf8' });
  
  let registryData;
  try {
    registryData = JSON.parse(output);
  } catch (err) {
    console.error(`Failed to parse output for ${name}:`, err.message);
    console.error('Raw Output (first 300 chars):', output.slice(0, 300));
    throw err;
  }
  
  if (registryData.files && registryData.files.length > 0) {
    for (const file of registryData.files) {
      // Resolve path relative to the src/components/ui/ directory
      const targetPath = path.join(__dirname, '..', 'src', 'components', 'ui', file.path);
      const dir = path.dirname(targetPath);
      
      // Ensure target directory exists
      fs.mkdirSync(dir, { recursive: true });
      
      // Save content
      fs.writeFileSync(targetPath, file.content, 'utf8');
      console.log(`Saved file to: ${targetPath}`);
    }
  } else {
    console.warn(`No files found for component: ${name}`);
  }
}

function downloadAll() {
  console.log('Starting download of React Bits components...');
  for (const comp of components) {
    try {
      downloadComponent(comp);
    } catch (err) {
      console.error(`Error downloading component ${comp}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

downloadAll();
