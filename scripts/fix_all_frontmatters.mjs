import fs from 'fs';

const list = [
  { file: 'Hero.astro', dataVar: 'heroData' },
  { file: 'Partners.astro', dataVar: 'partnersData' },
  { file: 'DontPay.astro', dataVar: 'dontPayData' },
  { file: 'Product.astro', dataVar: 'productData' },
  { file: 'WhoAreWe.astro', dataVar: 'whoAreWeData' },
  { file: 'HowItWorks.astro', dataVar: 'howItWorksData' },
  { file: 'Advantages.astro', dataVar: 'advantagesData' },
  { file: 'Practicals.astro', dataVar: 'practicalsData' },
  { file: 'WhoItsFor.astro', dataVar: 'whoItsForData' },
  { file: 'ConnectSteps.astro', dataVar: 'connectStepsData' },
  { file: 'Trust.astro', dataVar: 'trustData' },
  { file: 'Faq.astro', dataVar: 'faqData' },
  { file: 'ContactForm.astro', dataVar: 'contactData' }
];

for (const { file, dataVar } of list) {
  const filePath = `src/components/${file}`;
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix props
  content = content.replace(/const\s*\{\s*enabled\s*=\s*true,\s*lang\s*=\s*'en'\s*\}\s*=\s*Astro\.props;/, "const { lang = 'en' } = Astro.props;");

  // Fix data destructuring
  const targetRegex = new RegExp(`const\\s*\\{([\\s\\S]*?)\\}\\s*=\\s*${dataVar};`);
  content = content.replace(targetRegex, (match, inner) => {
    let cleaned = inner.replace(/enabled\s*=\s*true,?\s*/g, '').trim();
    return `const {\n  enabled = true,\n  ${cleaned}\n} = ${dataVar};`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed frontmatter in: ${file}`);
}
