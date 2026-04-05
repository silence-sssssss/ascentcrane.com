export const supportedLangs = ['en', 'zh', 'ru', 'de', 'fr', 'es'] as const;

export type SiteLang = (typeof supportedLangs)[number];

export const defaultLang: SiteLang = 'en';

export const languageLabels: Record<SiteLang, { short: string; native: string; locale: string; flag: string }> = {
  en: { short: 'EN', native: 'English', locale: 'en_US', flag: '🇺🇸' },
  zh: { short: 'ZH', native: '中文', locale: 'zh_CN', flag: '🇨🇳' },
  ru: { short: 'RU', native: 'Русский', locale: 'ru_RU', flag: '🇷🇺' },
  de: { short: 'DE', native: 'Deutsch', locale: 'de_DE', flag: '🇩🇪' },
  fr: { short: 'FR', native: 'Français', locale: 'fr_FR', flag: '🇫🇷' },
  es: { short: 'ES', native: 'Español', locale: 'es_ES', flag: '🇪🇸' }
};

export const siteCopy = {
  en: {
    nav: { home: 'Home', products: 'Products', solutions: 'Solutions', blog: 'Blog', contact: 'Contact', quote: 'Request a Crane Quote' },
    home: {
      eyebrow: 'AscentCrane Export Solutions',
      title: 'Ascent Crane | Portable Gantry Crane & Scissor Lift Manufacturer',
      description: 'We help overseas buyers source dependable gantry cranes, hoists, and custom lifting systems with engineering support, factory delivery, and export-ready documentation.',
      primaryCta: 'View Crane Specifications',
      secondaryCta: 'Request a Custom Crane Quote'
    },
    products: {
      eyebrow: 'Product Center',
      title: 'Portable gantry cranes and lifting platforms for industrial buyers',
      description: 'Explore Ascent Crane product lines for workshops, warehouses, ports, and project sites. Each product page includes specifications, application notes, and quote access.'
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Lifting systems aligned with your industry and project workflow',
      description: 'We tailor crane and access platform solutions for specific operating environments, compliance requirements, and delivery constraints.'
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Technical articles for gantry crane and lifting platform buyers',
      description: 'This section is prepared for long-form SEO content around gantry cranes, scissor lifts, and industrial lifting procurement.'
    },
    contact: {
      eyebrow: 'Contact Sales',
      title: 'Let’s discuss your lifting project',
      description: 'Share your project specifications and our team will respond with a practical proposal, delivery guidance, and commercial quotation path.'
    },
    footer: {
      company: 'Company',
      products: 'Products',
      solutions: 'Solutions'
    }
  },
  zh: {
    nav: { home: '首页', products: '产品中心', solutions: '解决方案', blog: '博客', contact: '联系我们', quote: '获取起重机报价' },
    home: {
      eyebrow: 'AscentCrane 出口解决方案',
      title: 'Ascent Crane | 便携式龙门吊与剪叉升降平台制造商',
      description: '我们帮助全球买家采购可靠的龙门吊、电动葫芦和定制化起重系统，并提供工程支持、工厂交付与出口资料。',
      primaryCta: '查看起重机参数',
      secondaryCta: '获取定制报价'
    },
    products: {
      eyebrow: '产品中心',
      title: '面向工业采购商的便携式龙门吊与升降平台',
      description: '浏览 Ascent Crane 面向车间、仓库、港口和项目现场的产品系列。每个产品页都包含技术参数、应用说明和询盘入口。'
    },
    solutions: {
      eyebrow: '解决方案',
      title: '匹配行业场景与项目流程的起重解决方案',
      description: '我们针对不同工况、合规要求和交付限制，提供定制化起重设备与高空作业平台方案。'
    },
    blog: {
      eyebrow: '博客',
      title: '面向龙门吊和升降平台采购商的技术文章',
      description: '本栏目将持续发布龙门吊、剪叉升降平台和工业起重采购相关的长尾 SEO 技术内容。'
    },
    contact: {
      eyebrow: '联系销售',
      title: '欢迎沟通您的起重项目需求',
      description: '请提交项目参数，我们将为您回复可执行的设备方案、交期建议与商务报价路径。'
    },
    footer: {
      company: '公司',
      products: '产品',
      solutions: '解决方案'
    }
  },
  ru: {
    nav: { home: 'Главная', products: 'Продукция', solutions: 'Решения', blog: 'Блог', contact: 'Контакты', quote: 'Запросить предложение' },
    home: {
      eyebrow: 'Экспортные решения AscentCrane',
      title: 'Ascent Crane | Производитель мобильных козловых кранов и ножничных подъемников',
      description: 'Мы помогаем международным покупателям закупать надежные козловые краны, тали и индивидуальные подъемные системы с инженерной поддержкой.',
      primaryCta: 'Смотреть характеристики кранов',
      secondaryCta: 'Запросить индивидуальное предложение'
    },
    products: {
      eyebrow: 'Каталог продукции',
      title: 'Мобильные козловые краны и подъемные платформы для промышленности',
      description: 'Изучите продуктовые линейки Ascent Crane для цехов, складов, портов и проектных площадок.'
    },
    solutions: {
      eyebrow: 'Решения',
      title: 'Подъемные системы под вашу отрасль и проектный процесс',
      description: 'Мы адаптируем подъемное оборудование под условия эксплуатации, требования соответствия и ограничения поставки.'
    },
    blog: {
      eyebrow: 'Блог',
      title: 'Технические статьи для покупателей кранов и подъемных платформ',
      description: 'Раздел для SEO-материалов о козловых кранах, ножничных подъемниках и закупке подъемного оборудования.'
    },
    contact: {
      eyebrow: 'Связаться с отделом продаж',
      title: 'Обсудим ваш подъемный проект',
      description: 'Отправьте параметры проекта, и наша команда предложит практичное решение, сроки поставки и коммерческий путь.'
    },
    footer: {
      company: 'Компания',
      products: 'Продукция',
      solutions: 'Решения'
    }
  },
  de: {
    nav: { home: 'Startseite', products: 'Produkte', solutions: 'Lösungen', blog: 'Blog', contact: 'Kontakt', quote: 'Kranangebot anfordern' },
    home: {
      eyebrow: 'AscentCrane Exportlösungen',
      title: 'Ascent Crane | Hersteller für mobile Portalkrane und Scherenhebebühnen',
      description: 'Wir unterstützen internationale Käufer bei der Beschaffung zuverlässiger Portalkrane, Hebezeuge und kundenspezifischer Hebesysteme.',
      primaryCta: 'Kranspezifikationen ansehen',
      secondaryCta: 'Individuelles Angebot anfordern'
    },
    products: {
      eyebrow: 'Produktzentrum',
      title: 'Mobile Portalkrane und Hebebühnen für industrielle Einkäufer',
      description: 'Entdecken Sie die Ascent Crane Produktlinien für Werkstätten, Lager, Häfen und Projektstandorte.'
    },
    solutions: {
      eyebrow: 'Lösungen',
      title: 'Hebesysteme passend zu Branche und Projektablauf',
      description: 'Wir passen Krane und Arbeitsbühnen an Betriebsumgebungen, Compliance-Anforderungen und Liefergrenzen an.'
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Fachartikel für Käufer von Portalkranen und Hebebühnen',
      description: 'Bereich für SEO-Inhalte rund um Portalkrane, Scherenhebebühnen und den internationalen Einkauf von Hebetechnik.'
    },
    contact: {
      eyebrow: 'Vertrieb kontaktieren',
      title: 'Lassen Sie uns über Ihr Hebeprojekt sprechen',
      description: 'Teilen Sie uns Ihre Projektdaten mit, und unser Team antwortet mit einer praktikablen Empfehlung und einem Angebotsweg.'
    },
    footer: {
      company: 'Unternehmen',
      products: 'Produkte',
      solutions: 'Lösungen'
    }
  },
  fr: {
    nav: { home: 'Accueil', products: 'Produits', solutions: 'Solutions', blog: 'Blog', contact: 'Contact', quote: 'Demander un devis' },
    home: {
      eyebrow: 'Solutions export AscentCrane',
      title: 'Ascent Crane | Fabricant de portiques mobiles et plateformes élévatrices à ciseaux',
      description: 'Nous aidons les acheteurs internationaux à sélectionner des portiques, palans et systèmes de levage fiables avec support technique.',
      primaryCta: 'Voir les spécifications des grues',
      secondaryCta: 'Demander un devis personnalisé'
    },
    products: {
      eyebrow: 'Centre de produits',
      title: 'Portiques mobiles et plateformes élévatrices pour acheteurs industriels',
      description: 'Découvrez les gammes Ascent Crane pour ateliers, entrepôts, ports et chantiers de projet.'
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Systèmes de levage adaptés à votre secteur et à vos projets',
      description: 'Nous adaptons les équipements de levage aux environnements d’exploitation, exigences de conformité et contraintes logistiques.'
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Articles techniques pour acheteurs de portiques et plateformes élévatrices',
      description: 'Section dédiée aux contenus SEO sur les portiques, les nacelles ciseaux et l’achat international d’équipements de levage.'
    },
    contact: {
      eyebrow: 'Contacter les ventes',
      title: 'Discutons de votre projet de levage',
      description: 'Partagez les paramètres de votre projet et notre équipe vous répondra avec une proposition concrète et une voie de devis.'
    },
    footer: {
      company: 'Entreprise',
      products: 'Produits',
      solutions: 'Solutions'
    }
  },
  es: {
    nav: { home: 'Inicio', products: 'Productos', solutions: 'Soluciones', blog: 'Blog', contact: 'Contacto', quote: 'Solicitar cotización' },
    home: {
      eyebrow: 'Soluciones de exportación AscentCrane',
      title: 'Ascent Crane | Fabricante de grúas pórtico portátiles y plataformas tipo tijera',
      description: 'Ayudamos a compradores internacionales a adquirir grúas pórtico, polipastos y sistemas de elevación personalizados con soporte técnico.',
      primaryCta: 'Ver especificaciones de grúas',
      secondaryCta: 'Solicitar cotización personalizada'
    },
    products: {
      eyebrow: 'Centro de productos',
      title: 'Grúas pórtico portátiles y plataformas de elevación para compradores industriales',
      description: 'Explore las líneas de productos de Ascent Crane para talleres, almacenes, puertos y proyectos industriales.'
    },
    solutions: {
      eyebrow: 'Soluciones',
      title: 'Sistemas de elevación alineados con su industria y flujo de proyecto',
      description: 'Adaptamos grúas y plataformas de acceso a entornos operativos, requisitos normativos y limitaciones de entrega.'
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Artículos técnicos para compradores de grúas pórtico y plataformas elevadoras',
      description: 'Sección preparada para contenido SEO sobre grúas pórtico, plataformas tipo tijera y compras internacionales.'
    },
    contact: {
      eyebrow: 'Contactar ventas',
      title: 'Hablemos de su proyecto de elevación',
      description: 'Comparta las especificaciones de su proyecto y nuestro equipo responderá con una propuesta práctica y una vía de cotización.'
    },
    footer: {
      company: 'Empresa',
      products: 'Productos',
      solutions: 'Soluciones'
    }
  }
} as const;

export function isSupportedLang(value: string): value is SiteLang {
  return supportedLangs.includes(value as SiteLang);
}

export function getLocalizedPath(lang: SiteLang, path = '/') {
  const normalizedPath = path === '/' ? '' : path.replace(/^\/+/, '');
  return `/${lang}${normalizedPath ? `/${normalizedPath}` : ''}`;
}

export function buildLanguageSwitcherPath(targetLang: SiteLang, currentPath: string) {
  const segments = currentPath.split('/').filter(Boolean);
  const pathWithoutLang = segments.length > 0 && isSupportedLang(segments[0]) ? segments.slice(1).join('/') : segments.join('/');
  return getLocalizedPath(targetLang, pathWithoutLang ? `/${pathWithoutLang}` : '/');
}

export function getAllLangStaticPaths() {
  return supportedLangs.map((lang) => ({ params: { lang } }));
}
