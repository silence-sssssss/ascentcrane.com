import banner1 from '../assets/images/banners/banner_1.jpg';
import banner2 from '../assets/images/banners/banner_2.jpg';
import banner3 from '../assets/images/banners/banner_3.jpg';
import banner4 from '../assets/images/banners/banner_4.jpg';
import contentImg1 from '../assets/images/content/img_1.jpg';
import indexImg1 from '../assets/images/index/index_1.jpg';
import indexImg2 from '../assets/images/index/index_2.jpg';
import indexImg3 from '../assets/images/index/index_3.jpg';
import indexImg4 from '../assets/images/index/index_4.jpg';
import logo36px from '../assets/images/logo36px.png';
import cTrackCableTrolley01 from '../assets/images/products/c-track-cable-trolley-01.webp';
import chainDrivenHydraulicCargoLift01 from '../assets/images/products/chain-driven-hydraulic-cargo-lift-01.webp';
import electricHoistRopeGuide01 from '../assets/images/products/electric-hoist-rope-guide-01.webp';
import heavyDutyCraneHook01 from '../assets/images/products/heavy-duty-crane-hook-01.webp';
import industrialWireRopeWinch01 from '../assets/images/products/industrial-wire-rope-winch-01.webp';
import jhqcPolyurethaneCraneBuffer01 from '../assets/images/products/jhqc-polyurethane-crane-buffer-01.webp';
import mobileWarehouseGantryCrane01 from '../assets/images/products/mobile-warehouse-gantry-crane-01.webp';
import selfPropelledScissorLiftPlatform01 from '../assets/images/products/self-propelled-scissor-lift-platform-01.webp';
import wireRopeElectricHoist01 from '../assets/images/products/wire-rope-electric-hoist-01.webp';

export const heroBannerImages = [banner1, banner2, banner3, banner4] as const;

const contentImageModules = import.meta.glob('../assets/images/content/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

export const contentImageByPath = Object.fromEntries(
  Object.entries(contentImageModules).map(([modulePath, value]) => {
    const normalizedPath = modulePath.replace('../assets/images', '/assets/images');
    return [normalizedPath, value];
  })
);

export const productHeroImageByPath = {
  '/assets/images/products/c-track-cable-trolley-01.webp': cTrackCableTrolley01,
  '/assets/images/products/chain-driven-hydraulic-cargo-lift-01.webp': chainDrivenHydraulicCargoLift01,
  '/assets/images/products/electric-hoist-rope-guide-01.webp': electricHoistRopeGuide01,
  '/assets/images/products/heavy-duty-crane-hook-01.webp': heavyDutyCraneHook01,
  '/assets/images/products/industrial-wire-rope-winch-01.webp': industrialWireRopeWinch01,
  '/assets/images/products/jhqc-polyurethane-crane-buffer-01.webp': jhqcPolyurethaneCraneBuffer01,
  '/assets/images/products/mobile-warehouse-gantry-crane-01.webp': mobileWarehouseGantryCrane01,
  '/assets/images/products/self-propelled-scissor-lift-platform-01.webp': selfPropelledScissorLiftPlatform01,
  '/assets/images/products/wire-rope-electric-hoist-01.webp': wireRopeElectricHoist01
} as const;

export const indexImageByPath = {
  '/assets/images/index/index_1.jpg': indexImg1,
  '/assets/images/index/index_2.jpg': indexImg2,
  '/assets/images/index/index_3.jpg': indexImg3,
  '/assets/images/index/index_4.jpg': indexImg4
} as const;

const productGalleryModules = import.meta.glob('../assets/images/products/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

const productGalleryImageByPath = Object.fromEntries(
  Object.entries(productGalleryModules).map(([modulePath, value]) => {
    const normalizedPath = modulePath.replace('../assets/images', '/assets/images');
    return [normalizedPath, value];
  })
);

export function getMappedContentImage(path: string) {
  return contentImageByPath[path as keyof typeof contentImageByPath] ?? contentImg1;
}

export function getMappedProductHeroImage(path?: string) {
  if (!path) return mobileWarehouseGantryCrane01;
  return productHeroImageByPath[path as keyof typeof productHeroImageByPath] ?? mobileWarehouseGantryCrane01;
}

export function getMappedProductGalleryImage(path: string) {
  return productGalleryImageByPath[path as keyof typeof productGalleryImageByPath] ?? mobileWarehouseGantryCrane01;
}

export function getMappedIndexImage(path: string) {
  return indexImageByPath[path as keyof typeof indexImageByPath] ?? indexImg1;
}

export function getLogoImage() {
  return logo36px;
}
