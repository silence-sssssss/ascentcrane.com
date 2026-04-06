import type { SiteLang } from './i18n';

export const productCategoryOrder = ['gantry', 'lifts', 'hoists', 'buffers', 'parts'] as const;

export type ProductCategory = (typeof productCategoryOrder)[number];

interface ProductCategoryMeta {
  anchorId: string;
  labels: Record<SiteLang, string>;
  descriptions: Record<SiteLang, string>;
}

export const productCategoryMap: Record<ProductCategory, ProductCategoryMeta> = {
  gantry: {
    anchorId: 'category-gantry',
    labels: {
      en: 'Gantry Cranes',
      zh: '龙门架',
      ru: 'Портальные краны',
      de: 'Portalkrane',
      fr: 'Portiques',
      es: 'Pórticos'
    },
    descriptions: {
      en: 'Portable gantry systems built for efficient handling, fast deployment, and dependable lifting performance across industrial sites.',
      zh: '面向工厂、仓储与项目现场打造的移动龙门架系统，兼顾部署效率、承载稳定性与工业应用可靠性。',
      ru: 'Мобильные портальные системы для производств, складов и проектов, сочетающие быстрый монтаж и надежную грузоподъемность.',
      de: 'Mobile Portalsysteme für Werk, Lager und Projekte mit hoher Einsatzflexibilität, schneller Bereitstellung und stabiler Hebeleistung.',
      fr: 'Des portiques mobiles pensés pour l’industrie, avec mise en service rapide, manutention efficace et performance de levage fiable.',
      es: 'Sistemas pórtico móviles para industria, almacenes y proyectos, con despliegue rápido y rendimiento de elevación confiable.'
    }
  },
  lifts: {
    anchorId: 'category-lifts',
    labels: {
      en: 'Lifts',
      zh: '升降机',
      ru: 'Подъемники',
      de: 'Hebebühnen',
      fr: 'Nacelles et plateformes',
      es: 'Elevadores'
    },
    descriptions: {
      en: 'Lift platforms engineered for safe elevation, smooth operation, and dependable performance in maintenance and access applications.',
      zh: '升降平台系列面向高空作业与设备维护场景，突出安全稳定、运行平顺与持续作业能力。',
      ru: 'Подъемные платформы для безопасной работы на высоте, технического обслуживания и устойчивой ежедневной эксплуатации.',
      de: 'Hubplattformen für sicheren Höhenzugang, reibungslosen Betrieb und verlässliche Leistung in Wartung und Einsatz vor Ort.',
      fr: 'Plateformes élévatrices conçues pour la sécurité en hauteur, la fluidité d’utilisation et la fiabilité en maintenance.',
      es: 'Plataformas elevadoras diseñadas para trabajo seguro en altura, operación fluida y rendimiento confiable.'
    }
  },
  hoists: {
    anchorId: 'category-hoists',
    labels: {
      en: 'Hoists',
      zh: '起重葫芦',
      ru: 'Тали',
      de: 'Hebezeuge',
      fr: 'Palans',
      es: 'Polipastos'
    },
    descriptions: {
      en: 'Hoist products focused on lifting efficiency, steady operation, and integration with professional industrial lifting systems.',
      zh: '起重葫芦系列聚焦起吊效率、运行稳定性与系统适配能力，满足多种工业起重配置需求。',
      ru: 'Тали, ориентированные на эффективность подъема, стабильную работу и интеграцию в профессиональные промышленные системы.',
      de: 'Hebezeuge mit Fokus auf Hubleistung, ruhigen Betrieb und flexible Einbindung in professionelle Industriesysteme.',
      fr: 'Une gamme de palans axée sur l’efficacité de levage, la stabilité d’utilisation et l’intégration aux systèmes industriels.',
      es: 'Polipastos enfocados en eficiencia de elevación, operación estable e integración con sistemas industriales profesionales.'
    }
  },
  buffers: {
    anchorId: 'category-buffers',
    labels: {
      en: 'Buffers',
      zh: '缓冲器',
      ru: 'Буферы',
      de: 'Puffer',
      fr: 'Butées et buffers',
      es: 'Amortiguadores'
    },
    descriptions: {
      en: 'Industrial buffer solutions that improve collision protection, absorb impact energy, and strengthen crane travel safety.',
      zh: '工业缓冲器产品可提升防撞保护能力、吸收冲击能量，并增强起重设备运行安全性。',
      ru: 'Буферные решения для промышленности, повышающие защиту от удара и безопасность движения кранового оборудования.',
      de: 'Industrielle Pufferlösungen zur Verbesserung von Aufprallschutz, Energieaufnahme und Fahrsicherheit von Krananlagen.',
      fr: 'Des solutions de buffers industrielles pour renforcer la protection anticollision et la sécurité des équipements de levage.',
      es: 'Soluciones industriales de amortiguación para mejorar la protección contra impactos y la seguridad operativa de las grúas.'
    }
  },
  parts: {
    anchorId: 'category-parts',
    labels: {
      en: 'Other Parts',
      zh: '其他配件',
      ru: 'Прочие комплектующие',
      de: 'Weitere Komponenten',
      fr: 'Autres pièces',
      es: 'Otros accesorios'
    },
    descriptions: {
      en: 'Supporting crane parts and accessories selected to improve durability, compatibility, and stable long-term system service.',
      zh: '配件与部件产品用于提升整机耐用性、系统适配性与长期运行稳定性。',
      ru: 'Комплектующие и аксессуары для повышения долговечности, совместимости и стабильной долгосрочной работы оборудования.',
      de: 'Ergänzende Komponenten und Zubehörteile zur Verbesserung von Haltbarkeit, Kompatibilität und langfristiger Betriebssicherheit.',
      fr: 'Pièces et accessoires conçus pour améliorer la durabilité, la compatibilité et la stabilité de service à long terme.',
      es: 'Piezas y accesorios orientados a mejorar la durabilidad, compatibilidad y estabilidad operativa a largo plazo.'
    }
  }
};

export function getProductCategoryLabel(lang: SiteLang, category: ProductCategory) {
  return productCategoryMap[category].labels[lang];
}

export function getProductCategoryDescription(lang: SiteLang, category: ProductCategory) {
  return productCategoryMap[category].descriptions[lang];
}

export function getProductCategoryAnchor(category: ProductCategory) {
  return productCategoryMap[category].anchorId;
}
