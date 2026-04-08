export const blogImageBySlug = {
  '2025-safety-guide-for-portable-gantry-cranes': '/assets/images/content/img_2.jpg',
  'aluminum-vs-steel-which-gantry-crane-to-choose': '/assets/images/content/img_2.jpg',
  'global-standards-for-lifting-equipment-a-complete-overview': '/assets/images/content/img_3.jpg',
  'how-digitalization-improves-lifting-efficiency': '/assets/images/content/img_1.jpg',
  'maintenance-tips-for-hydraulic-scissor-lifts': '/assets/images/content/img_1.jpg'
} as const;

export const solutionImageBySlug = {
  'construction-site-portable-crane': '/assets/images/content/img_2.jpg',
  'manufacturing-assembly-line-lift': '/assets/images/content/img_2.jpg',
  'precision-laboratory-lifting': '/assets/images/content/img_1.jpg',
  'retail-supermarket-handling': '/assets/images/content/img_1.jpg',
  'warehouse-logistics-lifting': '/assets/images/content/img_2.jpg'
} as const;

const contentImageModules = import.meta.glob('../assets/images/content/*.{jpg,jpeg,png,webp}', { eager: true });
const contentImagePool = Object.keys(contentImageModules)
  .map((modulePath) => modulePath.replace('../assets/images', '/assets/images'))
  .sort();

function getSeededContentImage(seed: string) {
  if (contentImagePool.length === 0) return '/assets/images/content/img_1.jpg';
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return contentImagePool[hash % contentImagePool.length];
}

function isLegacyPlaceholderImage(path?: string) {
  return path === '/assets/images/content/img_1.jpg' || path === '/assets/images/content/img_2.jpg' || path === '/assets/images/content/img_3.jpg';
}

export function getBlogImage(slug: string) {
  const mapped = blogImageBySlug[slug as keyof typeof blogImageBySlug];
  if (mapped && !isLegacyPlaceholderImage(mapped)) return mapped;
  return getSeededContentImage(`blog:${slug}`);
}

export function getSolutionImage(slug: string) {
  const mapped = solutionImageBySlug[slug as keyof typeof solutionImageBySlug];
  if (mapped && !isLegacyPlaceholderImage(mapped)) return mapped;
  return getSeededContentImage(`solution:${slug}`);
}
