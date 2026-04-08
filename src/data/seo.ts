import type { SiteLang } from './i18n';
import type { ProductCategory } from './productCategories';

export interface SeoFaqEntry {
  question: string;
  answer: string;
}

function getPrimaryTopic(title: string) {
  return title
    .replace(/[?？!！].*$/, '')
    .replace(/[：:].*$/, '')
    .trim();
}

export function getBlogSeoDescription(title: string, description: string, lang: SiteLang) {
  const topic = getPrimaryTopic(title);
  const fallback = description.trim();

  const templateByLang: Record<SiteLang, string> = {
    en: `Find the right ${topic} specs, price factors, and buying tips in 1 min. ${fallback}`,
    zh: `1 分钟了解 ${topic} 的关键规格、价格因素与采购要点。${fallback}`,
    ru: `За 1 минуту узнайте ключевые характеристики, ценовые факторы и советы по выбору для ${topic}. ${fallback}`,
    de: `Erfahren Sie in 1 Minute die wichtigsten Spezifikationen, Preisfaktoren und Kaufhinweise zu ${topic}. ${fallback}`,
    fr: `Découvrez en 1 minute les spécifications clés, les facteurs de prix et les conseils d’achat pour ${topic}. ${fallback}`,
    es: `Descubra en 1 minuto las especificaciones clave, los factores de precio y los consejos de compra para ${topic}. ${fallback}`
  };

  return templateByLang[lang];
}

export function getProductFaqEntries({
  lang,
  title,
  category
}: {
  lang: SiteLang;
  title: string;
  category: ProductCategory;
}): SeoFaqEntry[] {
  const categoryLabelByLang: Record<SiteLang, Record<ProductCategory, string>> = {
    en: {
      gantry: 'gantry crane',
      lifts: 'lifting platform',
      hoists: 'hoist',
      buffers: 'crane buffer',
      handling: 'material handling equipment',
      parts: 'crane part'
    },
    zh: {
      gantry: '龙门吊',
      lifts: '升降平台',
      hoists: '电动葫芦',
      buffers: '起重机缓冲器',
      handling: '搬运设备',
      parts: '起重机配件'
    },
    ru: {
      gantry: 'козловой кран',
      lifts: 'подъёмная платформа',
      hoists: 'таль',
      buffers: 'крановый буфер',
      handling: 'грузоподъёмное оборудование',
      parts: 'крановая запчасть'
    },
    de: {
      gantry: 'Portalkran',
      lifts: 'Hubarbeitsbühne',
      hoists: 'Hebezeug',
      buffers: 'Kranpuffer',
      handling: 'Handhabungstechnik',
      parts: 'Kranteil'
    },
    fr: {
      gantry: 'portique',
      lifts: 'plateforme élévatrice',
      hoists: 'palan',
      buffers: 'tampon de grue',
      handling: 'équipement de manutention',
      parts: 'pièce de grue'
    },
    es: {
      gantry: 'grúa pórtico',
      lifts: 'plataforma elevadora',
      hoists: 'polipasto',
      buffers: 'tope de grúa',
      handling: 'equipo de manipulación',
      parts: 'pieza de grúa'
    }
  };

  const categoryLabel = categoryLabelByLang[lang][category];

  const faqByLang: Record<SiteLang, SeoFaqEntry[]> = {
    en: [
      {
        question: `What capacity and working range should I choose for ${title}?`,
        answer: `Choose ${title} based on your real load, lifting height, span or platform size, duty frequency, and site limits. For export projects, the safest approach is to confirm your heaviest load case, working environment, and required configuration before ordering.`
      },
      {
        question: `What affects the price of ${title} from China?`,
        answer: `The price of ${title} usually depends on capacity, structure size, travel or lifting configuration, electrical options, material grade, and customization level. Packaging, certification, and destination market requirements also affect the final quotation.`
      },
      {
        question: `Can ${title} be customized for my project?`,
        answer: `Yes. Most ${categoryLabel} projects can be customized for dimensions, voltage, control method, lifting height, span, finish, and export packaging. Sharing your application details helps suppliers recommend a configuration that matches your project and budget.`
      }
    ],
    zh: [
      {
        question: `${title} 应该如何选择合适的载荷与工作范围？`,
        answer: `选择 ${title} 时，应结合实际载荷、起升高度、跨度或平台尺寸、使用频率以及现场空间限制综合判断。对于出口项目，建议先确认最重工况、使用环境和所需配置，再进行采购。`
      },
      {
        question: `中国供应的 ${title} 价格通常受哪些因素影响？`,
        answer: `${title} 的价格通常取决于载荷能力、结构尺寸、行走或起升配置、电气选项、材料等级以及定制程度。包装方式、认证要求和目标市场要求也会影响最终报价。`
      },
      {
        question: `${title} 可以根据项目需求定制吗？`,
        answer: `可以。大多数 ${categoryLabel} 项目都支持尺寸、电压、控制方式、起升高度、跨度、表面处理和出口包装等定制。提供具体应用场景后，供应商更容易给出匹配项目和预算的方案。`
      }
    ],
    ru: [
      {
        question: `Как выбрать подходящую грузоподъёмность и рабочую конфигурацию для ${title}?`,
        answer: `Подбирать ${title} следует по реальной массе груза, высоте подъёма, пролёту или размеру платформы, частоте работы и ограничениям площадки. Для экспортных проектов лучше заранее подтвердить самый тяжёлый рабочий сценарий и нужную конфигурацию.`
      },
      {
        question: `От чего зависит цена ${title} из Китая?`,
        answer: `Цена ${title} обычно зависит от грузоподъёмности, размеров конструкции, схемы перемещения или подъёма, электрических опций, класса материалов и степени индивидуальной настройки. Также на итоговое предложение влияют упаковка, сертификация и требования рынка назначения.`
      },
      {
        question: `Можно ли адаптировать ${title} под мой проект?`,
        answer: `Да. Большинство решений в категории ${categoryLabel} можно настраивать по размерам, напряжению, типу управления, высоте подъёма, пролёту, покрытию и экспортной упаковке. Чем точнее вы опишете задачу, тем точнее будет рекомендованная конфигурация.`
      }
    ],
    de: [
      {
        question: `Wie wähle ich die passende Tragfähigkeit und Arbeitskonfiguration für ${title}?`,
        answer: `Die Auswahl von ${title} sollte sich an realer Last, Hubhöhe, Spannweite oder Plattformgröße, Einsatzhäufigkeit und Platzverhältnissen orientieren. Für Exportprojekte empfiehlt es sich, den schwersten realen Lastfall und die gewünschte Konfiguration vor der Bestellung zu bestätigen.`
      },
      {
        question: `Welche Faktoren beeinflussen den Preis von ${title} aus China?`,
        answer: `Der Preis von ${title} hängt meist von Tragfähigkeit, Baugröße, Fahr- oder Hubkonfiguration, elektrischen Optionen, Materialqualität und Anpassungsgrad ab. Auch Verpackung, Zertifizierung und Marktanforderungen beeinflussen das endgültige Angebot.`
      },
      {
        question: `Kann ${title} für mein Projekt angepasst werden?`,
        answer: `Ja. Die meisten Lösungen im Bereich ${categoryLabel} lassen sich bei Abmessungen, Spannung, Steuerung, Hubhöhe, Spannweite, Oberflächenbehandlung und Exportverpackung anpassen. Wenn Sie Ihre Anwendung genau beschreiben, kann eine passendere Konfiguration empfohlen werden.`
      }
    ],
    fr: [
      {
        question: `Comment choisir la bonne capacité et la bonne configuration de travail pour ${title} ?`,
        answer: `Le choix de ${title} doit se faire selon la charge réelle, la hauteur de levage, la portée ou la taille de plateforme, la fréquence d’utilisation et les contraintes du site. Pour un projet export, il est préférable de confirmer le cas de charge le plus lourd et la configuration attendue avant commande.`
      },
      {
        question: `Quels facteurs influencent le prix de ${title} depuis la Chine ?`,
        answer: `Le prix de ${title} dépend généralement de la capacité, des dimensions de la structure, de la configuration de translation ou de levage, des options électriques, du niveau de matière et du degré de personnalisation. L’emballage, la certification et les exigences du marché cible influencent aussi l’offre finale.`
      },
      {
        question: `${title} peut-il être personnalisé pour mon projet ?`,
        answer: `Oui. La plupart des solutions de type ${categoryLabel} peuvent être personnalisées en dimensions, tension, commande, hauteur de levage, portée, finition et emballage export. Plus vous fournissez de détails sur votre application, plus la recommandation sera précise.`
      }
    ],
    es: [
      {
        question: `¿Cómo elegir la capacidad y la configuración de trabajo adecuadas para ${title}?`,
        answer: `La selección de ${title} debe basarse en la carga real, la altura de elevación, la luz o tamaño de plataforma, la frecuencia de trabajo y las limitaciones del sitio. En proyectos de exportación, conviene confirmar primero el caso de carga más exigente y la configuración necesaria.`
      },
      {
        question: `¿Qué factores afectan el precio de ${title} desde China?`,
        answer: `El precio de ${title} suele depender de la capacidad, el tamaño estructural, la configuración de elevación o desplazamiento, las opciones eléctricas, el nivel de material y el grado de personalización. El embalaje, la certificación y los requisitos del mercado de destino también afectan la cotización final.`
      },
      {
        question: `¿Se puede personalizar ${title} para mi proyecto?`,
        answer: `Sí. La mayoría de los proyectos de tipo ${categoryLabel} permiten personalización en dimensiones, voltaje, método de control, altura de elevación, luz, acabado y embalaje de exportación. Si comparte más detalles de la aplicación, el proveedor podrá recomendar una configuración más adecuada.`
      }
    ]
  };

  return faqByLang[lang];
}
