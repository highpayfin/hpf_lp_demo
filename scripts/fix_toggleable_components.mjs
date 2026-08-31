import fs from 'fs';

const components = [
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

for (const { file, dataVar } of components) {
  const filePath = `src/components/${file}`;
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Clean up Astro.props
  content = content.replace(/const\s*\{\s*enabled\s*=\s*true,\s*lang\s*=\s*'en'\s*\}\s*=\s*Astro\.props;/, "const { lang = 'en' } = Astro.props;");

  // Ensure enabled is extracted from dataVar
  // e.g. const { ... } = partnersData; -> const { enabled = true, ... } = partnersData;
  const regex = new RegExp(`const\\s*\\{([\\s\\S]*?)\\}\\s*=\\s*${dataVar};`);
  const match = content.match(regex);
  if (match) {
    let fields = match[1];
    if (!fields.includes('enabled')) {
      fields = `\n  enabled = true,${fields}`;
      content = content.replace(regex, `const {${fields}} = ${dataVar};`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Properly linked toggle for: ${file} (using ${dataVar}.enabled)`);
}
