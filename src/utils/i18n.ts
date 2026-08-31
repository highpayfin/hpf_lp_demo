// Internationalization (i18n) Data Loader

// English datasets
import enSiteConfig from '../data/en/site-config.json';
import enHero from '../data/en/home-hero.json';
import enPartners from '../data/en/partners.json';
import enDontPay from '../data/en/dont-pay.json';
import enProduct from '../data/en/product.json';
import enWhoAreWe from '../data/en/who-are-we.json';
import enHowItWorks from '../data/en/how-it-works.json';
import enAdvantages from '../data/en/advantages.json';
import enPracticals from '../data/en/practicals.json';
import enWhoItsFor from '../data/en/who-its-for.json';
import enConnectSteps from '../data/en/connect-steps.json';
import enTrust from '../data/en/trust.json';
import enFaq from '../data/en/faq.json';
import enContact from '../data/en/contact.json';
import enFooter from '../data/en/footer.json';
import enCustomSections from '../data/en/custom-sections.json';

// Vietnamese datasets
import viSiteConfig from '../data/vi/site-config.json';
import viHero from '../data/vi/home-hero.json';
import viPartners from '../data/vi/partners.json';
import viDontPay from '../data/vi/dont-pay.json';
import viProduct from '../data/vi/product.json';
import viWhoAreWe from '../data/vi/who-are-we.json';
import viHowItWorks from '../data/vi/how-it-works.json';
import viAdvantages from '../data/vi/advantages.json';
import viPracticals from '../data/vi/practicals.json';
import viWhoItsFor from '../data/vi/who-its-for.json';
import viConnectSteps from '../data/vi/connect-steps.json';
import viTrust from '../data/vi/trust.json';
import viFaq from '../data/vi/faq.json';
import viContact from '../data/vi/contact.json';
import viFooter from '../data/vi/footer.json';
import viCustomSections from '../data/vi/custom-sections.json';

// Chinese datasets
import zhSiteConfig from '../data/zh/site-config.json';
import zhHero from '../data/zh/home-hero.json';
import zhPartners from '../data/zh/partners.json';
import zhDontPay from '../data/zh/dont-pay.json';
import zhProduct from '../data/zh/product.json';
import zhWhoAreWe from '../data/zh/who-are-we.json';
import zhHowItWorks from '../data/zh/how-it-works.json';
import zhAdvantages from '../data/zh/advantages.json';
import zhPracticals from '../data/zh/practicals.json';
import zhWhoItsFor from '../data/zh/who-its-for.json';
import zhConnectSteps from '../data/zh/connect-steps.json';
import zhTrust from '../data/zh/trust.json';
import zhFaq from '../data/zh/faq.json';
import zhContact from '../data/zh/contact.json';
import zhFooter from '../data/zh/footer.json';
import zhCustomSections from '../data/zh/custom-sections.json';

// Korean datasets
import koSiteConfig from '../data/ko/site-config.json';
import koHero from '../data/ko/home-hero.json';
import koPartners from '../data/ko/partners.json';
import koDontPay from '../data/ko/dont-pay.json';
import koProduct from '../data/ko/product.json';
import koWhoAreWe from '../data/ko/who-are-we.json';
import koHowItWorks from '../data/ko/how-it-works.json';
import koAdvantages from '../data/ko/advantages.json';
import koPracticals from '../data/ko/practicals.json';
import koWhoItsFor from '../data/ko/who-its-for.json';
import koConnectSteps from '../data/ko/connect-steps.json';
import koTrust from '../data/ko/trust.json';
import koFaq from '../data/ko/faq.json';
import koContact from '../data/ko/contact.json';
import koFooter from '../data/ko/footer.json';
import koCustomSections from '../data/ko/custom-sections.json';

export type SupportedLang = 'en' | 'vi' | 'zh' | 'ko';

export interface LanguageInfo {
  code: SupportedLang;
  name: string;
  flag: string;
  path: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', flag: '/assets/img/en-lang.webp', path: '/' },
  { code: 'vi', name: 'Tiếng Việt', flag: '/assets/img/Vietnam.webp', path: '/vi/' },
  { code: 'zh', name: '中文', flag: '/assets/img/cn-lang.webp', path: '/zh/' },
  { code: 'ko', name: '한국어', flag: '/assets/img/SouthKorea.webp', path: '/ko/' }
];

const dataStore: Record<SupportedLang, Record<string, any>> = {
  en: {
    'site-config': enSiteConfig,
    'home-hero': enHero,
    'partners': enPartners,
    'dont-pay': enDontPay,
    'product': enProduct,
    'who-are-we': enWhoAreWe,
    'how-it-works': enHowItWorks,
    'advantages': enAdvantages,
    'practicals': enPracticals,
    'who-its-for': enWhoItsFor,
    'connect-steps': enConnectSteps,
    'trust': enTrust,
    'faq': enFaq,
    'contact': enContact,
    'footer': enFooter,
    'custom-sections': enCustomSections
  },
  vi: {
    'site-config': viSiteConfig,
    'home-hero': viHero,
    'partners': viPartners,
    'dont-pay': viDontPay,
    'product': viProduct,
    'who-are-we': viWhoAreWe,
    'how-it-works': viHowItWorks,
    'advantages': viAdvantages,
    'practicals': viPracticals,
    'who-its-for': viWhoItsFor,
    'connect-steps': viConnectSteps,
    'trust': viTrust,
    'faq': viFaq,
    'contact': viContact,
    'footer': viFooter,
    'custom-sections': viCustomSections
  },
  zh: {
    'site-config': zhSiteConfig,
    'home-hero': zhHero,
    'partners': zhPartners,
    'dont-pay': zhDontPay,
    'product': zhProduct,
    'who-are-we': zhWhoAreWe,
    'how-it-works': zhHowItWorks,
    'advantages': zhAdvantages,
    'practicals': zhPracticals,
    'who-its-for': zhWhoItsFor,
    'connect-steps': zhConnectSteps,
    'trust': zhTrust,
    'faq': zhFaq,
    'contact': zhContact,
    'footer': zhFooter,
    'custom-sections': zhCustomSections
  },
  ko: {
    'site-config': koSiteConfig,
    'home-hero': koHero,
    'partners': koPartners,
    'dont-pay': koDontPay,
    'product': koProduct,
    'who-are-we': koWhoAreWe,
    'how-it-works': koHowItWorks,
    'advantages': koAdvantages,
    'practicals': koPracticals,
    'who-its-for': koWhoItsFor,
    'connect-steps': koConnectSteps,
    'trust': koTrust,
    'faq': koFaq,
    'contact': koContact,
    'footer': koFooter,
    'custom-sections': koCustomSections
  }
};

export function getI18nData<T = any>(lang: string = 'en', key: string): T {
  const validLang: SupportedLang = ['en', 'vi', 'zh', 'ko'].includes(lang) ? (lang as SupportedLang) : 'en';
  return (dataStore[validLang]?.[key] || dataStore['en']?.[key]) as T;
}
