const fs = require('fs');
const path = 'controllers/aiController.js';
let s = fs.readFileSync(path,'utf8');
const marker = 'const content = response.choices[0].message.content';
const idx = s.indexOf(marker);
if(idx === -1){
  console.error('marker not found');
  process.exit(1);
}
if(s.includes('response?.choices?.[0]?.message?.content')){
  console.log('already updated');
  process.exit(0);
}
const before = s.slice(0, idx);
const after = s.slice(idx + marker.length);
const replacement = 'const content = response?.choices?.[0]?.message?.content || response?.output_text || response?.data?.choices?.[0]?.message?.content;';
fs.writeFileSync(path,before + replacement + after,'utf8');
console.log('updated marker');