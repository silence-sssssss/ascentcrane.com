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

export function getBlogImage(slug: string) {
  return blogImageBySlug[slug as keyof typeof blogImageBySlug] ?? '/assets/images/content/img_1.jpg';
}

export function getSolutionImage(slug: string) {
  return solutionImageBySlug[slug as keyof typeof solutionImageBySlug] ?? '/assets/images/content/img_1.jpg';
}
