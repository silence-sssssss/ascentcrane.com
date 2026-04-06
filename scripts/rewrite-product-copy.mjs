import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/content/products');

const replacements = {
  en: {
    description: (title) => `${title} from Ascent Crane is engineered for dependable lifting performance, export delivery, and long-term industrial service.`,
    metaDescription: (title) => `${title} from Ascent Crane delivers dependable lifting performance, export-ready quality, and reliable service support for industrial buyers and project supply.`
  },
  zh: {
    description: (title) => `${title}是 Ascent Crane 面向工业应用与出口项目推出的主力产品，兼顾可靠性能、稳定交付与长期服务保障。`,
    metaDescription: (title) => `${title}由 Ascent Crane 提供，面向工业采购、海外项目与定制化交付，突出可靠性能、稳定质量与持续服务能力。`
  },
  ru: {
    description: (title) => `${title} от Ascent Crane разработан для надежной подъемной работы, экспортных поставок и долгосрочной промышленной эксплуатации.`,
    metaDescription: (title) => `${title} от Ascent Crane сочетает надежную работу, экспортную готовность и стабильную сервисную поддержку для промышленных заказчиков и проектных поставок.`
  },
  de: {
    description: (title) => `${title} von Ascent Crane steht für zuverlässige Hebeleistung, exportgerechte Lieferung und langfristigen industriellen Einsatz.`,
    metaDescription: (title) => `${title} von Ascent Crane bietet verlässliche Leistung, exportfähige Qualität und stabile Serviceunterstützung für Industrieeinkauf und Projektgeschäft.`
  },
  fr: {
    description: (title) => `${title} signé Ascent Crane est conçu pour offrir une performance de levage fiable, une livraison export maîtrisée et un service durable.`,
    metaDescription: (title) => `${title} par Ascent Crane réunit performance fiable, qualité prête à l’export et support de service stable pour les acheteurs industriels et projets internationaux.`
  },
  es: {
    description: (title) => `${title} de Ascent Crane está diseñado para ofrecer rendimiento de elevación confiable, entrega exportadora y servicio industrial de largo plazo.`,
    metaDescription: (title) => `${title} de Ascent Crane combina rendimiento confiable, calidad lista para exportación y soporte estable para compradores industriales y proyectos internacionales.`
  }
};

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const lines = source.split(/\r?\n/);
  if (lines[0] !== '---') return false;

  const langLine = lines.find((line) => line.startsWith('lang: '));
  const titleLine = lines.find((line) => line.startsWith('title: '));
  if (!langLine || !titleLine) return false;

  const lang = langLine.replace('lang: ', '').trim();
  const langCopy = replacements[lang];
  if (!langCopy) return false;

  const title = titleLine.replace(/^title:\s*/, '').trim().replace(/^"|"$/g, '');

  let changed = false;
  const updated = lines.map((line) => {
    if (line.startsWith('description: ')) {
      changed = true;
      return `description: "${langCopy.description(title)}"`;
    }
    if (line.startsWith('metaDescription: ')) {
      changed = true;
      return `metaDescription: "${langCopy.metaDescription(title)}"`;
    }
    return line;
  });

  if (changed) {
    fs.writeFileSync(filePath, updated.join('\n'));
  }

  return changed;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      processFile(fullPath);
    }
  }
}

walk(root);
console.log('Product copy rewrite completed.');
