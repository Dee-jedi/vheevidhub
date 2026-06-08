const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/components/layout/academy.tsx');
let content = fs.readFileSync(file, 'utf8');

// Replace imports and COURSES
content = content.replace(/import \{ useState, useEffect \} from 'react';\r?\nimport \{ motion, Variants, AnimatePresence \} from 'framer-motion';\r?\nimport Link from 'next\/link';\r?\n\r?\nconst COURSES = \['Product Design \\(UI\/UX\\)', 'Software\/Web Development', 'Brand Identity', 'CRM & Automation', 'Book & Video Editing', 'Other'\];/g, 
  "import { motion, Variants } from 'framer-motion';\nimport Link from 'next/link';");

// Replace modal logic inside Academy()
content = content.replace(/export function Academy\(\) \{[\s\S]*?return \(/g, 'export function Academy() {\n  return (');

// Replace button with Link
content = content.replace(/<button\s+onClick=\{\(\) => setIsModalOpen\(true\)\}\s+className=\"flex w-full min-\[480px\]:w-auto items-center justify-center h-14 sm:h-16 px-8 sm:px-10 text-\[16px\] sm:text-\[18px\] font-medium text-white bg-\[#D62500\] rounded-full transition-all duration-200 hover:bg-\[#b81f00\] hover:shadow-lg hover:shadow-red-500\/20 active:scale-95 cursor-pointer\"\s*>\s*Join waitlist\s*<\/button>/g, 
  '<Link\n                href="/waitlist"\n                className="flex w-full min-[480px]:w-auto items-center justify-center h-14 sm:h-16 px-8 sm:px-10 text-[16px] sm:text-[18px] font-medium text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-95 cursor-pointer"\n              >\n                Join waitlist\n              </Link>');

// Remove the modal code block
content = content.replace(/\s*\{\/\* Waitlist Modal \*\/\}\s*<AnimatePresence>[\s\S]*?<\/AnimatePresence>\s*<\/section>\s*\);\s*\}/g, '\n    </section>\n  );\n}');

fs.writeFileSync(file, content);
console.log('Modified academy.tsx');
