import fs from 'fs';

const list = [
  { file: 'Hero.astro', dataKey: 'home-hero' },
  { file: 'Partners.astro', dataKey: 'partners' },
  { file: 'DontPay.astro', dataKey: 'dont-pay' },
  { file: 'Product.astro', dataKey: 'product' },
  { file: 'WhoAreWe.astro', dataKey: 'who-are-we' },
  { file: 'HowItWorks.astro', dataKey: 'how-it-works' },
  { file: 'Advantages.astro', dataKey: 'advantages' },
  { file: 'Practicals.astro', dataKey: 'practicals' },
  { file: 'WhoItsFor.astro', dataKey: 'who-its-for' },
  { file: 'ConnectSteps.astro', dataKey: 'connect-steps' },
  { file: 'Trust.astro', dataKey: 'trust' },
  { file: 'Faq.astro', dataKey: 'faq' },
  { file: 'ContactForm.astro', dataKey: 'contact' }
];

for (const item of list) {
  let content = fs.readFileSync('src/components/' + item.file, 'utf8');

  // Fix Astro.props
  content = content.replace(/interface Props[\s\S]*?Astro\.props;/, "interface Props {\n  lang?: SupportedLang;\n}\nconst { lang = 'en' } = Astro.props;");

  // Fix data destructuring (const { ... } = xxxData;)
  content = content.replace(/const\s*\{([\s\S]*?)\}\s*=\s*(\w+Data);/, (match, p1, p2) => {
    let inner = p1.replace(/enabled\s*=\s*true,?\s*/g, '').trim();
    return `const {\n  enabled = true,\n  ${inner}\n} = ${p2};`;
  });

  fs.writeFileSync('src/components/' + item.file, content, 'utf8');
  console.log('Cleaned and linked:', item.file);
}
