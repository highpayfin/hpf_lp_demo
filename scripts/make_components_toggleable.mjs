import fs from 'fs';

const components = [
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

for (const comp of components) {
  const filePath = `src/components/${comp}`;
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already has enabled
  if (content.includes('enabled !== false')) {
    console.log(`Already toggleable: ${comp}`);
    continue;
  }

  // Add enabled = true to destructuring
  content = content.replace(/(const\s*\{)/, '$1\n  enabled = true,');

  // Wrap section in {enabled !== false && (...)}
  const parts = content.split('---');
  if (parts.length >= 3) {
    const frontmatter = parts[1];
    let body = parts.slice(2).join('---').trim();

    const wrappedBody = `\n{enabled !== false && (\n  ${body}\n)}\n`;
    content = `---${frontmatter}---\n${wrappedBody}`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Made toggleable: ${comp}`);
  }
}
