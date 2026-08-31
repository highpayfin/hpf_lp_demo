import fs from 'fs';
import path from 'path';

const componentConfigs = [
  {
    file: 'src/components/Hero.astro',
    dataKey: 'home-hero',
    defaultDataVar: 'heroData'
  },
  {
    file: 'src/components/Partners.astro',
    dataKey: 'partners',
    defaultDataVar: 'partnersData'
  },
  {
    file: 'src/components/DontPay.astro',
    dataKey: 'dont-pay',
    defaultDataVar: 'dontPayData'
  },
  {
    file: 'src/components/Product.astro',
    dataKey: 'product',
    defaultDataVar: 'productData'
  },
  {
    file: 'src/components/WhoAreWe.astro',
    dataKey: 'who-are-we',
    defaultDataVar: 'whoAreWeData'
  },
  {
    file: 'src/components/HowItWorks.astro',
    dataKey: 'how-it-works',
    defaultDataVar: 'howItWorksData'
  },
  {
    file: 'src/components/Advantages.astro',
    dataKey: 'advantages',
    defaultDataVar: 'advantagesData'
  },
  {
    file: 'src/components/Practicals.astro',
    dataKey: 'practicals',
    defaultDataVar: 'practicalsData'
  },
  {
    file: 'src/components/WhoItsFor.astro',
    dataKey: 'who-its-for',
    defaultDataVar: 'whoItsForData'
  },
  {
    file: 'src/components/ConnectSteps.astro',
    dataKey: 'connect-steps',
    defaultDataVar: 'connectStepsData'
  },
  {
    file: 'src/components/Trust.astro',
    dataKey: 'trust',
    defaultDataVar: 'trustData'
  },
  {
    file: 'src/components/Faq.astro',
    dataKey: 'faq',
    defaultDataVar: 'faqData'
  },
  {
    file: 'src/components/ContactForm.astro',
    dataKey: 'contact',
    defaultDataVar: 'contactData'
  },
  {
    file: 'src/components/ContactModal.astro',
    dataKey: 'contact',
    defaultDataVar: 'contactData'
  },
  {
    file: 'src/components/Footer.astro',
    dataKey: 'footer',
    defaultDataVar: 'footerData'
  }
];

for (const cfg of componentConfigs) {
  if (!fs.existsSync(cfg.file)) continue;
  let content = fs.readFileSync(cfg.file, 'utf8');

  // Replace import JSON with getI18nData
  const frontmatterRegex = /---([\s\S]*?)---/;
  const match = content.match(frontmatterRegex);
  if (!match) continue;

  let fm = match[1];

  // Remove old json import
  fm = fm.replace(/import\s+\w+\s+from\s+['"]\.\.\/data\/[^'"]+['"];?/g, '');

  // Add i18n import if not present
  if (!fm.includes('getI18nData')) {
    fm = `\nimport { getI18nData, type SupportedLang } from '../utils/i18n';\ninterface Props {\n  lang?: SupportedLang;\n}\nconst { lang = 'en' } = Astro.props;\nconst ${cfg.defaultDataVar} = getI18nData(lang, '${cfg.dataKey}');\n` + fm.trim();
  }

  content = content.replace(frontmatterRegex, `---\n${fm.trim()}\n---`);
  fs.writeFileSync(cfg.file, content, 'utf8');
  console.log(`Updated ${cfg.file} for i18n`);
}
