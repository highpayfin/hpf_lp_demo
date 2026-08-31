import fs from 'fs';

const files = [
  'src/components/DontPay.astro',
  'src/components/Faq.astro',
  'src/components/HowItWorks.astro',
  'src/components/Practicals.astro',
  'src/components/Product.astro',
  'src/components/Trust.astro',
  'src/components/WhoAreWe.astro'
];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/\.replace\(\/\\s\+\/g,\s*['"]<br \/>['"]\)/g, ".replace(/\\n/g, '<br />')");
  fs.writeFileSync(f, content, 'utf8');
  console.log('Fixed:', f);
}
