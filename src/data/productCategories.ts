import type { SiteLang } from './i18n';

export const productCategoryOrder = ['gantry', 'lifts', 'hoists', 'buffers', 'handling', 'parts'] as const;

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
      en: 'Portable and adjustable gantry systems for workshops, maintenance teams, and flexible lifting stations.',
      zh: '适用于车间、检修团队和柔性起吊工位的便携式与可调式龙门架系统。',
      ru: 'Переносные и регулируемые портальные системы для мастерских, сервисных команд и гибких подъемных участков.',
      de: 'Mobile und höhenverstellbare Portalsysteme für Werkstätten, Wartungsteams und flexible Hebestationen.',
      fr: 'Systèmes portiques portables et réglables pour ateliers, maintenance et postes de levage flexibles.',
      es: 'Sistemas pórtico portátiles y ajustables para talleres, mantenimiento y puestos de elevación flexibles.'
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
      en: 'Scissor lifts and access platforms designed for vertical reach, maintenance, and material positioning.',
      zh: '面向高空作业、检修维护和物料定位场景的剪叉升降平台与高空设备。',
      ru: 'Ножничные подъемники и платформы доступа для вертикального подъема, обслуживания и позиционирования материалов.',
      de: 'Scherenbühnen und Hubplattformen für vertikalen Zugang, Wartung und Materialpositionierung.',
      fr: 'Plateformes élévatrices et ciseaux pour accès en hauteur, maintenance et positionnement de charges.',
      es: 'Plataformas elevadoras y tijeras para acceso vertical, mantenimiento y posicionamiento de materiales.'
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
      en: 'Electric and manual hoist units for repeated lifting integration across gantry, jib, and overhead systems.',
      zh: '适配龙门架、悬臂和桥机系统的电动或手动起重葫芦单元。',
      ru: 'Электрические и ручные тали для интеграции в портальные, консольные и мостовые подъемные системы.',
      de: 'Elektrische und manuelle Hubwerke für den Einsatz in Portal-, Schwenkarm- und Brückensystemen.',
      fr: 'Palans électriques et manuels pour intégration dans des systèmes portiques, potences et ponts roulants.',
      es: 'Polipastos eléctricos y manuales para integración en sistemas pórtico, pluma y puente grúa.'
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
      en: 'Impact absorption and end-stop protection components for crane travel paths, transfer zones, and docking points.',
      zh: '用于起重机行走端部、转运区域与设备对接点的缓冲吸能与防撞部件。',
      ru: 'Компоненты для поглощения удара и защиты конечных остановов на путях движения и стыковочных участках.',
      de: 'Stoßdämpfende Endanschlag-Komponenten für Kranfahrwege, Übergabezonen und Andockpunkte.',
      fr: 'Composants d’absorption d’impact et de protection de fin de course pour voies de roulement et zones de transfert.',
      es: 'Componentes de absorción de impacto y protección de fin de carrera para recorridos y zonas de transferencia.'
    }
  },
  handling: {
    anchorId: 'category-handling',
    labels: {
      en: 'Material Handling',
      zh: '装卸设备',
      ru: 'Погрузочно-разгрузочное оборудование',
      de: 'Handhabungstechnik',
      fr: 'Équipements de manutention',
      es: 'Equipos de manipulación'
    },
    descriptions: {
      en: 'Manual and assisted handling equipment for positioning loads, warehouse support, and internal transfers.',
      zh: '用于载荷定位、仓储辅助和内部转运的手动及半自动装卸设备。',
      ru: 'Ручное и вспомогательное оборудование для позиционирования грузов, складской поддержки и внутренних перемещений.',
      de: 'Manuelle und unterstützte Handhabungstechnik für Lastpositionierung, Lagerunterstützung und interne Transporte.',
      fr: 'Équipements de manutention manuels et assistés pour positionnement de charges et transferts internes.',
      es: 'Equipos manuales y asistidos para posicionamiento de carga, apoyo logístico y transferencias internas.'
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
      en: 'Electrical, control, and supporting spare parts that complete lifting system delivery and retrofit projects.',
      zh: '用于完善起重系统交付与改造项目的电气、控制及其他配件。',
      ru: 'Электрические, управляющие и вспомогательные комплектующие для поставки и модернизации подъемных систем.',
      de: 'Elektrische, steuerungstechnische und ergänzende Ersatzteile für Lieferung und Retrofit von Hebesystemen.',
      fr: 'Pièces électriques, de commande et accessoires complétant les projets de levage et de retrofit.',
      es: 'Piezas eléctricas, de control y accesorios que completan proyectos de elevación y retrofit.'
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
