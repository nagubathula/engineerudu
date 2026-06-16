const fs = require('fs');

const path = 'src/app/courses/[id]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace dark mode colors with light mode equivalents
content = content.replace(/text-white\/40/g, 'text-zinc-500');
content = content.replace(/text-white\/50/g, 'text-zinc-500');
content = content.replace(/text-white\/60/g, 'text-zinc-600');
content = content.replace(/text-white\/70/g, 'text-zinc-700');
content = content.replace(/text-white\/80/g, 'text-zinc-800');
content = content.replace(/text-white/g, 'text-zinc-900');
content = content.replace(/border-white\/5/g, 'border-zinc-200');
content = content.replace(/border-white\/10/g, 'border-zinc-300');
content = content.replace(/border-white\/20/g, 'border-zinc-300');
content = content.replace(/border-white\/30/g, 'border-zinc-400');
content = content.replace(/bg-white\/5/g, 'bg-zinc-100');
content = content.replace(/bg-white\/10/g, 'bg-zinc-200');
content = content.replace(/bg-black\/30/g, 'bg-zinc-100');
content = content.replace(/bg-black\/40/g, 'bg-zinc-100');

// Fix the TOC extraction logic
content = content.replace(
  /cleanPara\.startsWith\("# "\)\) \{\n\s*headings\.push\(\{ id: `heading-\$\{i\}`, title: cleanPara\.replace\("# ", ""\), level: 1 \}\);\n\s*\}/g,
  `cleanPara.startsWith("# ")) {
        const firstLine = cleanPara.split("\\n")[0];
        headings.push({ id: \`heading-\${i}\`, title: firstLine.replace("# ", ""), level: 1 });
      }`
);

fs.writeFileSync(path, content);
console.log('Fixed page.tsx');
