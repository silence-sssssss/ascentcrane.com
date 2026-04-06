import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import sharp from 'sharp';

const rootDir = process.cwd();
const sourceRoot = path.join(rootDir, 'Product_Source');
const outputContentRoot = path.join(rootDir, 'src', 'content', 'products');
const outputImageRoot = path.join(rootDir, 'public', 'assets', 'images', 'products');
const outputVideoRoot = path.join(rootDir, 'public', 'assets', 'videos');
const langs = ['zh', 'en', 'ru', 'de', 'fr', 'es'];

const folderMeta = {
  '不锈钢镀锌C型起重机吊线滑轮无锡式10号工字钢电缆滑车带轴承': {
    slug: 'c-track-cable-trolley',
    category: 'parts',
    baseName: 'C-Track Cable Trolley',
    zhName: 'C型轨道电缆滑车'
  },
  '卷扬机钢丝绳提升牵引设备一字型5吨10吨矿用起重机升降机吊车': {
    slug: 'industrial-wire-rope-winch',
    category: 'hoists',
    baseName: 'Industrial Wire Rope Winch',
    zhName: '工业钢丝绳卷扬机'
  },
  '厂家直售510T起重机吊钩行车钩头防脱钩加厚钢丝绳电动葫芦吊钩': {
    slug: 'heavy-duty-crane-hook',
    category: 'parts',
    baseName: 'Heavy-Duty Crane Hook',
    zhName: '重型起重机吊钩'
  },
  '工业用HS-3B声光报警器起重机行车警报装置安全蜂鸣器工业级防撞': {
    slug: 'hs3b-crane-alarm',
    category: 'parts',
    baseName: 'HS-3B Crane Alarm',
    zhName: 'HS-3B 声光报警器'
  },
  '手推移动式小型龙门架遥控电动升降龙门架工厂仓库装卸搬运龙门吊': {
    slug: 'mobile-warehouse-gantry-crane',
    category: 'gantry',
    baseName: 'Mobile Warehouse Gantry Crane',
    zhName: '手推移动式龙门架'
  },
  '液压货梯升降机链条式货物升降机工厂仓库装卸货平台提升机举升机': {
    slug: 'chain-driven-hydraulic-cargo-lift',
    category: 'lifts',
    baseName: 'Chain-Driven Hydraulic Cargo Lift',
    zhName: '链条式液压货梯'
  },
  '现货电动葫芦3~10吨钢丝绳电葫芦380v吊链行车升降起重微型葫芦': {
    slug: 'wire-rope-electric-hoist',
    category: 'hoists',
    baseName: 'Wire Rope Electric Hoist',
    zhName: '钢丝绳电动葫芦'
  },
  '电动葫芦排绳器0.5吨1吨2吨16吨10吨5吨3吨导绳器钢丝绳吊葫芦': {
    slug: 'electric-hoist-rope-guide',
    category: 'parts',
    baseName: 'Electric Hoist Rope Guide',
    zhName: '电动葫芦导绳器'
  },
  '移动剪叉式升降平台园林高空作业维修车全自动液压自行走升降机': {
    slug: 'self-propelled-scissor-lift-platform',
    category: 'lifts',
    baseName: 'Self-Propelled Scissor Lift Platform',
    zhName: '自行走剪叉式升降平台'
  },
  '起重机行车聚氨酯缓冲器 JHQ-C型防撞器缓冲垫高弹性电梯缓冲器': {
    slug: 'jhqc-polyurethane-crane-buffer',
    category: 'buffers',
    baseName: 'JHQ-C Polyurethane Crane Buffer',
    zhName: 'JHQ-C 聚氨酯缓冲器'
  }
};

const languagePacks = {
  zh: {
    title: (meta) => meta.zhName,
    seoTitle: (title) => `${title} | Ascent Crane 产品中心`,
    metaDescription: (title, summary) => `${title}，${summary}。适用于全球工业项目、出口采购与定制化交付。`,
    intro: (title, summary) => `${title}面向工业采购、设备改造和出口型项目场景。基于源数据整理后，本页面汇总了核心规格、常见型号与现场应用要点，便于快速进行技术选型。${summary}`,
    specsHeading: '核心规格摘要',
    variantsHeading: '主要型号与参数',
    assetsHeading: '图像与视频资源',
    notesHeading: '应用说明',
    notes: (category) => `该产品已归类至 ${category} 体系，适用于需要稳定供货、明确参数和多语言资料输出的采购场景。`
  },
  en: {
    title: (meta) => meta.baseName,
    seoTitle: (title) => `${title} | Ascent Crane`,
    metaDescription: (title, summary) => `${title}. ${summary}. Prepared for industrial buyers, export projects, and specification-led sourcing.`,
    intro: (title, summary) => `${title} is positioned for industrial procurement, retrofit projects, and export-oriented lifting applications. This page converts the original factory data into a buyer-friendly specification brief with mainstream terminology for international markets. ${summary}`,
    specsHeading: 'Core Specification Snapshot',
    variantsHeading: 'Main Models and Variant Data',
    assetsHeading: 'Image and Video Assets',
    notesHeading: 'Application Notes',
    notes: (category) => `This product is mapped to the ${category} category and is structured for technical review, distributor quotation, and project-level sourcing.`
  },
  ru: {
    title: (meta) => `${meta.baseName}`,
    seoTitle: (title) => `${title} | Ascent Crane`,
    metaDescription: (title, summary) => `${title}. ${summary}. Подходит для экспортных поставок и инженерных закупок.`,
    intro: (title, summary) => `${title} подготовлен для промышленных закупок, модернизации оборудования и экспортных проектов. Исходные китайские данные преобразованы в более понятную международную спецификацию. ${summary}`,
    specsHeading: 'Краткие характеристики',
    variantsHeading: 'Основные модели и параметры',
    assetsHeading: 'Изображения и видео',
    notesHeading: 'Примечания по применению',
    notes: (category) => `Товар отнесен к категории ${category} и подходит для технической оценки, запроса цены и проектных поставок.`
  },
  de: {
    title: (meta) => `${meta.baseName}`,
    seoTitle: (title) => `${title} | Ascent Crane`,
    metaDescription: (title, summary) => `${title}. ${summary}. Geeignet für Exportprojekte und technische Beschaffung.`,
    intro: (title, summary) => `${title} richtet sich an industrielle Einkäufer, Retrofit-Projekte und exportorientierte Anwendungen. Die ursprünglichen chinesischen Fabrikdaten wurden in eine international lesbare Produktbeschreibung überführt. ${summary}`,
    specsHeading: 'Technische Kurzübersicht',
    variantsHeading: 'Hauptmodelle und Varianten',
    assetsHeading: 'Bilder und Videos',
    notesHeading: 'Anwendungshinweise',
    notes: (category) => `Dieses Produkt ist der Kategorie ${category} zugeordnet und für technische Bewertung, Angebotsanfragen und Projektbeschaffung aufbereitet.`
  },
  fr: {
    title: (meta) => `${meta.baseName}`,
    seoTitle: (title) => `${title} | Ascent Crane`,
    metaDescription: (title, summary) => `${title}. ${summary}. Adapté aux achats industriels et aux projets export.`,
    intro: (title, summary) => `${title} vise les acheteurs industriels, les projets de modernisation et les demandes export. Les données d’origine ont été reformulées en une fiche plus lisible pour les marchés internationaux. ${summary}`,
    specsHeading: 'Résumé des spécifications',
    variantsHeading: 'Modèles principaux et variantes',
    assetsHeading: 'Ressources image et vidéo',
    notesHeading: 'Notes d’application',
    notes: (category) => `Ce produit est rattaché à la catégorie ${category} et structuré pour l’évaluation technique, la demande de prix et les achats projet.`
  },
  es: {
    title: (meta) => `${meta.baseName}`,
    seoTitle: (title) => `${title} | Ascent Crane`,
    metaDescription: (title, summary) => `${title}. ${summary}. Adecuado para compras industriales y proyectos de exportación.`,
    intro: (title, summary) => `${title} está orientado a compradores industriales, proyectos de modernización y aplicaciones de exportación. Los datos originales de fábrica se han convertido en una ficha técnica más clara para mercados internacionales. ${summary}`,
    specsHeading: 'Resumen de especificaciones',
    variantsHeading: 'Modelos principales y variantes',
    assetsHeading: 'Recursos de imagen y video',
    notesHeading: 'Notas de aplicación',
    notes: (category) => `Este producto se asigna a la categoría ${category} y está estructurado para revisión técnica, cotización y compras de proyecto.`
  }
};

const categoryLabels = {
  gantry: { zh: '龙门起重', en: 'gantry cranes', ru: 'портальные краны', de: 'Portalkrane', fr: 'portiques', es: 'pórticos' },
  lifts: { zh: '升降平台', en: 'lifts', ru: 'подъемники', de: 'Hebebühnen', fr: 'plateformes élévatrices', es: 'elevadores' },
  hoists: { zh: '起重葫芦', en: 'hoists', ru: 'тали', de: 'Hebezeuge', fr: 'palans', es: 'polipastos' },
  buffers: { zh: '缓冲器', en: 'buffers', ru: 'буферы', de: 'Puffer', fr: 'buffers', es: 'amortiguadores' },
  handling: { zh: '装卸设备', en: 'material handling equipment', ru: 'погрузочно-разгрузочное оборудование', de: 'Handhabungstechnik', fr: 'équipements de manutention', es: 'equipos de manipulación' },
  parts: { zh: '配件部件', en: 'parts and accessories', ru: 'комплектующие', de: 'Komponenten', fr: 'pièces et accessoires', es: 'piezas y accesorios' }
};

await ensureDir(outputImageRoot);
await ensureDir(outputVideoRoot);
for (const lang of langs) {
  await ensureDir(path.join(outputContentRoot, lang));
}

const folders = fs.readdirSync(sourceRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
const report = [];

for (const folderName of folders) {
  const meta = folderMeta[folderName];
  if (!meta) {
    report.push({ folderName, status: 'skipped', reason: 'No metadata mapping configured' });
    continue;
  }

  const folderPath = path.join(sourceRoot, folderName);
  const files = fs.readdirSync(folderPath);
  const xlsxFile = files.find((file) => file.toLowerCase().endsWith('.xlsx'));

  if (!xlsxFile) {
    report.push({ folderName, status: 'skipped', reason: 'No xlsx file found' });
    continue;
  }

  const workbook = xlsx.readFile(path.join(folderPath, xlsxFile));
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(firstSheet, { header: 1, defval: '' });

  if (!rows.length) {
    report.push({ folderName, status: 'skipped', reason: 'Empty xlsx content' });
    continue;
  }

  const headers = normalizeHeaders(rows[0]);
  const variantRows = rows.slice(1).filter((row) => Array.isArray(row) && row.some((cell) => String(cell).trim() !== ''));
  const validRows = variantRows.filter((row) => !String(row[0] || '').includes('产品信息电子图册'));
  const primaryRow = validRows[0] || variantRows[0] || [];

  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|bmp|webp)$/i.test(file)).sort();
  const videoFiles = files.filter((file) => /\.(mp4|mov|avi|mkv|webm)$/i.test(file)).sort();

  const imageOutputs = [];
  let imageIndex = 1;
  for (const imageFile of imageFiles) {
    const imageName = `${meta.slug}-${String(imageIndex).padStart(2, '0')}.webp`;
    const outputPath = path.join(outputImageRoot, imageName);
    await sharp(path.join(folderPath, imageFile)).webp({ quality: 82 }).toFile(outputPath);
    imageOutputs.push(`/assets/images/products/${imageName}`);
    imageIndex += 1;
  }

  const videoOutputs = [];
  let videoIndex = 1;
  for (const videoFile of videoFiles) {
    const ext = path.extname(videoFile).toLowerCase();
    const outputName = `${meta.slug}-${String(videoIndex).padStart(2, '0')}${ext}`;
    const outputPath = path.join(outputVideoRoot, outputName);
    fs.copyFileSync(path.join(folderPath, videoFile), outputPath);
    videoOutputs.push(`/assets/videos/${outputName}`);
    videoIndex += 1;
  }

  const normalizedPrimary = mapRowToObject(headers, primaryRow);
  const specSummary = buildSpecSummary(meta, normalizedPrimary);
  const tonnage = extractFieldValue(normalizedPrimary, ['额定载荷(kg)', '额定载重(吨)', '荷载(T)', '额定起重力矩(kN.m)', '配件适用对象']);
  const liftingHeight = extractFieldValue(normalizedPrimary, ['最高高度(mm)', '标准提升高度(m)', '工作行程(mm)', '本体高度(mm)', '本体高度']);
  const powerSource = extractFieldValue(normalizedPrimary, ['电源电压(V)', '电源电压(kw)', '电机功率(kw)', '起升功率(kw)', '电机功率']);
  const span = extractFieldValue(normalizedPrimary, ['台面尺寸(mm)', '台面尺寸', '产品尺寸(mm)', '最大宽度(m)', '长(cm)']);
  const model = String(primaryRow[0] || meta.zhName || meta.baseName).trim();
  const price = extractPrice(primaryRow, headers);
  const descriptionSummary = buildDescriptionSummary(meta, normalizedPrimary);
  const tableHeaders = headers.filter((header) => header);
  const tableRows = validRows.map((row) => tableHeaders.map((_, index) => String(row[index] ?? '').replace(/\|/g, '/').trim() || '-'));
  const imageMarkdown = imageOutputs.map((imagePath, index) => `![${meta.baseName} image ${index + 1}](${imagePath})`).join('\n\n');
  const videoMarkdown = videoOutputs.map((videoPath, index) => `- [Product video ${index + 1}](${videoPath})`).join('\n');

  for (const lang of langs) {
    const pack = languagePacks[lang];
    const title = pack.title(meta);
    const summary = localizeSummary(lang, specSummary, meta.category);
    const seoTitle = pack.seoTitle(title);
    const metaDescription = pack.metaDescription(title, summary);
    const body = '';

    const frontmatter = [
      '---',
      `lang: ${lang}`,
      `slug: ${meta.slug}`,
      `category: ${meta.category}`,
      `title: ${yamlValue(title)}`,
      `description: ${yamlValue(summary)}`,
      `model: ${yamlValue(model)}`,
      `tonnage: ${yamlValue(tonnage || fallbackByCategory(meta.category, lang, 'tonnage'))}`,
      `span: ${yamlValue(span || fallbackByCategory(meta.category, lang, 'span'))}`,
      `liftingHeight: ${yamlValue(liftingHeight || fallbackByCategory(meta.category, lang, 'liftingHeight'))}`,
      `powerSource: ${yamlValue(powerSource || fallbackByCategory(meta.category, lang, 'powerSource'))}`,
      'stockStatus: https://schema.org/InStock',
      `price: ${yamlValue(price || '0')}`,
      'priceCurrency: USD',
      `heroImage: ${yamlValue(imageOutputs[0] || '/assets/images/hero.png')}`,
      `seoTitle: ${yamlValue(seoTitle)}`,
      `metaDescription: ${yamlValue(metaDescription)}`,
      `videoUrls: ${yamlArray(videoOutputs)}`,
      `galleryImages: ${yamlArray(imageOutputs)}`,
      `tableHeaders: ${yamlArray(tableHeaders)}`,
      `tableRows: ${yamlMatrix(tableRows)}`,
      '---',
      ''
    ].join('\n');

    const outputFile = path.join(outputContentRoot, lang, `${meta.slug}.md`);
    fs.writeFileSync(outputFile, frontmatter + body + '\n', 'utf8');
  }

  report.push({ folderName, status: 'generated', slug: meta.slug, images: imageOutputs.length, videos: videoOutputs.length });
}

console.log(JSON.stringify(report, null, 2));

function normalizeHeaders(headers) {
  return headers.map((header) => String(header || '').trim());
}

function mapRowToObject(headers, row) {
  return headers.reduce((acc, header, index) => {
    if (!header) return acc;
    acc[header] = String(row[index] ?? '').trim();
    return acc;
  }, {});
}

function extractFieldValue(record, keys) {
  for (const key of keys) {
    if (record[key] && record[key] !== '-') {
      return record[key];
    }
  }
  return '';
}

function buildSpecSummary(meta, record) {
  const bits = [];
  const load = extractFieldValue(record, ['额定载荷(kg)', '额定载重(吨)', '荷载(T)', '额定起重力矩(kN.m)']);
  const voltage = extractFieldValue(record, ['电源电压(V)', '电源电压(kw)']);
  const height = extractFieldValue(record, ['最高高度(mm)', '标准提升高度(m)', '工作行程(mm)']);
  const speed = extractFieldValue(record, ['提升速度(mmin)', '提升速度', '上升时间', '上升时间(s)']);
  const material = extractFieldValue(record, ['设备材质', '材质', '表面处理', '类型']);

  if (load) bits.push(`load reference ${load}`);
  if (height) bits.push(`working height ${height}`);
  if (voltage) bits.push(`power input ${voltage}`);
  if (speed) bits.push(`movement profile ${speed}`);
  if (material) bits.push(`construction detail ${material}`);

  return bits.length ? bits.join(', ') : `${meta.baseName} prepared from factory source data`;
}

function buildDescriptionSummary(meta, record) {
  const structure = extractFieldValue(record, ['结构形式', '规格', '工程机械种类', '配件适用对象']);
  const material = extractFieldValue(record, ['设备材质', '材质', '表面处理']);
  const width = extractFieldValue(record, ['最大宽度(m)', '台面尺寸', '台面尺寸(mm)', '产品尺寸(mm)']);
  return [structure, material, width].filter(Boolean).join(', ') || meta.baseName;
}

function buildVariantsTable(headers, rows) {
  const usefulHeaders = headers.slice(0, Math.min(headers.length, 6));
  const lines = [
    `| ${usefulHeaders.join(' | ')} |`,
    `| ${usefulHeaders.map(() => '---').join(' | ')} |`
  ];

  for (const row of rows) {
    const values = usefulHeaders.map((_, index) => String(row[index] ?? '').replace(/\|/g, '/').trim() || '-');
    lines.push(`| ${values.join(' | ')} |`);
  }

  return lines.join('\n');
}

function buildTableReferenceNote(lang) {
  const notes = {
    zh: '详细的 Excel 原始规格表已在页面专用数据表模块中展示。',
    en: 'The detailed factory Excel specification sheet is rendered in the dedicated data table module on the page.',
    ru: 'Подробная заводская таблица Excel отображается в отдельном модуле спецификаций на странице.',
    de: 'Die detaillierte werkseitige Excel-Spezifikation wird im separaten Datentabellen-Modul der Seite dargestellt.',
    fr: 'Le tableau Excel détaillé des spécifications usine est affiché dans le module de données dédié de la page.',
    es: 'La tabla detallada de especificaciones Excel de fábrica se muestra en el módulo de datos dedicado de la página.'
  };
  return notes[lang];
}

function buildLocalizedSpecBullets(lang, record) {
  const labelMap = {
    zh: ['- **原始规格**：以下内容依据源表格自动整理。'],
    en: ['- **Source specification**: the following fields are normalized from the original workbook.'],
    ru: ['- **Исходные данные**: нижеприведенные поля нормализованы из исходной таблицы.'],
    de: ['- **Quelldaten**: Die folgenden Felder wurden aus der ursprünglichen Tabelle normalisiert.'],
    fr: ['- **Données source** : les champs ci-dessous sont normalisés depuis le classeur d’origine.'],
    es: ['- **Datos fuente**: los siguientes campos se han normalizado a partir de la hoja original.']
  };

  const bullets = [...labelMap[lang]];
  for (const [key, value] of Object.entries(record)) {
    if (!value || value === '-') continue;
    bullets.push(`- **${localizeLabel(lang, key)}**: ${value}`);
  }
  return bullets;
}

function localizeLabel(lang, key) {
  const map = {
    '产品规格': { zh: '产品规格', en: 'Product Variant', ru: 'Исполнение', de: 'Produktvariante', fr: 'Variante produit', es: 'Variante del producto' },
    '额定载荷(kg)': { zh: '额定载荷', en: 'Rated Load', ru: 'Номинальная нагрузка', de: 'Nennlast', fr: 'Charge nominale', es: 'Carga nominal' },
    '额定载重(吨)': { zh: '额定载重', en: 'Rated Capacity', ru: 'Номинальная грузоподъемность', de: 'Nenntragfähigkeit', fr: 'Capacité nominale', es: 'Capacidad nominal' },
    '标准提升高度(m)': { zh: '标准提升高度', en: 'Standard Lift Height', ru: 'Стандартная высота подъема', de: 'Standardhubhöhe', fr: 'Hauteur de levage standard', es: 'Altura estándar de elevación' },
    '最高高度(mm)': { zh: '最高高度', en: 'Maximum Height', ru: 'Максимальная высота', de: 'Maximale Höhe', fr: 'Hauteur maximale', es: 'Altura máxima' },
    '电源电压(V)': { zh: '电源电压', en: 'Power Supply Voltage', ru: 'Напряжение питания', de: 'Versorgungsspannung', fr: 'Tension d’alimentation', es: 'Voltaje de alimentación' },
    '电机功率(kw)': { zh: '电机功率', en: 'Motor Power', ru: 'Мощность двигателя', de: 'Motorleistung', fr: 'Puissance moteur', es: 'Potencia del motor' },
    '起升功率(kw)': { zh: '起升功率', en: 'Lifting Motor Power', ru: 'Мощность подъема', de: 'Hubleistung', fr: 'Puissance de levage', es: 'Potencia de elevación' },
    '工作行程(mm)': { zh: '工作行程', en: 'Working Stroke', ru: 'Рабочий ход', de: 'Arbeitsweg', fr: 'Course utile', es: 'Recorrido de trabajo' },
    '设备材质': { zh: '设备材质', en: 'Equipment Material', ru: 'Материал оборудования', de: 'Werkstoff', fr: 'Matériau', es: 'Material del equipo' },
    '材质': { zh: '材质', en: 'Material', ru: 'Материал', de: 'Material', fr: 'Matériau', es: 'Material' },
    '结构形式': { zh: '结构形式', en: 'Structural Form', ru: 'Конструктивное исполнение', de: 'Bauform', fr: 'Structure', es: 'Forma estructural' },
    '产品尺寸(mm)': { zh: '产品尺寸', en: 'Product Dimensions', ru: 'Размеры изделия', de: 'Produktabmessungen', fr: 'Dimensions du produit', es: 'Dimensiones del producto' },
    '最大宽度(m)': { zh: '最大宽度', en: 'Maximum Width', ru: 'Максимальная ширина', de: 'Maximale Breite', fr: 'Largeur maximale', es: 'Ancho máximo' },
    '台面尺寸': { zh: '台面尺寸', en: 'Platform Size', ru: 'Размер платформы', de: 'Plattformgröße', fr: 'Dimensions de plateforme', es: 'Dimensión de plataforma' },
    '台面尺寸(mm)': { zh: '台面尺寸', en: 'Platform Size', ru: 'Размер платформы', de: 'Plattformgröße', fr: 'Dimensions de plateforme', es: 'Dimensión de plataforma' },
    '价格': { zh: '价格', en: 'Price', ru: 'Цена', de: 'Preis', fr: 'Prix', es: 'Precio' },
    '价格 | 库存(台)': { zh: '价格/库存', en: 'Price / Stock', ru: 'Цена / Наличие', de: 'Preis / Bestand', fr: 'Prix / Stock', es: 'Precio / Stock' },
    '价格 | 库存(件)': { zh: '价格/库存', en: 'Price / Stock', ru: 'Цена / Наличие', de: 'Preis / Bestand', fr: 'Prix / Stock', es: 'Precio / Stock' },
    '价格 | 库存(个)': { zh: '价格/库存', en: 'Price / Stock', ru: 'Цена / Наличие', de: 'Preis / Bestand', fr: 'Prix / Stock', es: 'Precio / Stock' },
    '型号': { zh: '型号', en: 'Model', ru: 'Модель', de: 'Modell', fr: 'Modèle', es: 'Modelo' }
  };
  return map[key]?.[lang] || key;
}

function localizeSummary(lang, summary, category) {
  const categoryLabel = categoryLabels[category][lang];
  if (lang === 'zh') return `已按 ${categoryLabel} 类目整理，核心参数包括 ${summary}`;
  if (lang === 'ru') return `Материал отнесен к категории ${categoryLabel}; ключевые параметры включают ${summary}`;
  if (lang === 'de') return `Der Eintrag ist der Kategorie ${categoryLabel} zugeordnet; die wichtigsten Daten umfassen ${summary}`;
  if (lang === 'fr') return `Cette fiche relève de la catégorie ${categoryLabel}; les paramètres clés incluent ${summary}`;
  if (lang === 'es') return `Este producto pertenece a la categoría ${categoryLabel}; los parámetros clave incluyen ${summary}`;
  return `Structured under the ${categoryLabel} category with key data points covering ${summary}`;
}

function extractPrice(primaryRow, headers) {
  const priceIndex = headers.findIndex((header) => header.includes('价格'));
  if (priceIndex === -1) return '0';
  const value = primaryRow[priceIndex];
  return String(value ?? '0').trim() || '0';
}

function yamlValue(value) {
  return JSON.stringify(String(value ?? ''));
}

function yamlArray(values) {
  if (!values.length) return '[]';
  return `[${values.map((value) => JSON.stringify(value)).join(', ')}]`;
}

function yamlMatrix(rows) {
  if (!rows.length) return '[]';
  return `[${rows.map((row) => `[${row.map((value) => JSON.stringify(value)).join(', ')}]`).join(', ')}]`;
}

function fallbackByCategory(category, lang, field) {
  const fallback = {
    tonnage: {
      zh: '见下方规格表', en: 'Refer to variant table', ru: 'См. таблицу вариантов', de: 'Siehe Variantentabelle', fr: 'Voir tableau des variantes', es: 'Ver tabla de variantes'
    },
    span: {
      zh: '按具体型号', en: 'By model variant', ru: 'По варианту модели', de: 'Je nach Modell', fr: 'Selon la variante', es: 'Según variante'
    },
    liftingHeight: {
      zh: '按具体型号', en: 'By model variant', ru: 'По варианту модели', de: 'Je nach Modell', fr: 'Selon la variante', es: 'Según variante'
    },
    powerSource: {
      zh: '见原始参数', en: 'See source data', ru: 'См. исходные данные', de: 'Siehe Quelldaten', fr: 'Voir données source', es: 'Ver datos fuente'
    }
  };
  return fallback[field][lang];
}

async function ensureDir(targetDir) {
  await fs.promises.mkdir(targetDir, { recursive: true });
}
