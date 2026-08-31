import fs from 'fs';

const list = [
  'Hero.astro',
  'Partners.astro',
  'DontPay.astro',
  'Product.astro',
  'WhoAreWe.astro',
  'HowItWorks.astro',
  'Advantages.astro',
  'Practicals.astro',
  'WhoItsFor.astro',
  'ConnectSteps.astro',
  'Trust.astro',
  'Faq.astro',
  'ContactForm.astro'
];

for (const comp of list) {
  let content = fs.readFileSync(`src/components/${comp}`, 'utf8');

  // Replace bad props
  content = content.replace(/const\s*\{[\r\n\s]*enabled\s*=\s*true,[\r\n\s]*lang\s*=\s*'en'[\r\n\s]*\}\s*=\s*Astro\.props;/, "const { lang = 'en' } = Astro.props;");

  const parts = content.split('---');
  let frontmatter = parts[1];

  // Find the last 'const {' which is data destructuring
  const idx = frontmatter.lastIndexOf('const {');
  if (idx !== -1) {
    const before = frontmatter.substring(0, idx);
    const after = frontmatter.substring(idx);
    if (!after.includes('enabled = true')) {
      const newAfter = after.replace('const {', 'const {\n  enabled = true,');
      frontmatter = before + newAfter;
    }
  }

  content = `---${frontmatter}---${parts.slice(2).join('---')}`;
  fs.writeFileSync(`src/components/${comp}`, content, 'utf8');
  console.log(`Successfully fixed: ${comp}`);
}
