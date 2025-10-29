'use client';

import React from 'react';

/* ====================
   SPECIAL LAYOUT COMPONENTS
   Type-safe React wrappers for special layout patterns
   ==================== */

// ===== COMMON TYPES =====

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// ===== MASONRY LAYOUT =====

export interface MasonryLayoutProps extends BaseLayoutProps {
  /** Number of columns (auto-responsive by default) */
  columns?: 1 | 2 | 3;
  /** Gap between items in pixels */
  gap?: 16 | 24 | 32;
}

export function MasonryLayout({
  children,
  columns,
  gap = 24,
  className = '',
  as: Component = 'div'
}: MasonryLayoutProps) {
  const columnsClass = columns ? `columns-${columns}` : '';
  const gapClass = gap !== 24 ? `gap-${gap}` : '';

  return (
    <Component className={`layout-masonry ${columnsClass} ${gapClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function MasonryItem({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-masonry-item ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== BENTO BOX LAYOUT =====

export interface BentoLayoutProps extends BaseLayoutProps {
  /** Bento pattern variant */
  pattern?: 1 | 2;
}

export function BentoLayout({
  children,
  pattern = 1,
  className = '',
  as: Component = 'div'
}: BentoLayoutProps) {
  return (
    <Component className={`layout-bento layout-bento-${pattern} ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== MAGAZINE LAYOUT =====

export function MagazineLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-magazine ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function MagazineHero({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`magazine-hero ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function MagazineMain({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`magazine-main ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function MagazineSidebar({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`magazine-sidebar ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function MagazineFeature({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`magazine-feature ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function MagazineSecondary({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`magazine-secondary ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== ZIGZAG LAYOUT =====

export function ZigzagLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-zigzag ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function ZigzagItem({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`zigzag-item ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function ZigzagContent({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`zigzag-content ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function ZigzagMedia({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`zigzag-media ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== SPLIT SCREEN LAYOUT =====

export function SplitLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-split ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function SplitLeft({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`split-left ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function SplitRight({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`split-right ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== FLOATING CARDS LAYOUT =====

export function FloatingLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-floating ${className}`.trim()}>
      {children}
    </Component>
  );
}

export interface FloatingCardProps extends BaseLayoutProps {
  /** Card position (1-4) */
  position?: 1 | 2 | 3 | 4;
}

export function FloatingCard({
  children,
  position = 1,
  className = '',
  as: Component = 'div'
}: FloatingCardProps) {
  return (
    <Component className={`floating-card floating-card-${position} ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== DIAGONAL LAYOUT =====

export function DiagonalLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-diagonal ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function DiagonalItem({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`diagonal-item ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== OVERLAPPING LAYOUT =====

export function OverlapLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-overlap ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function OverlapItem({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`overlap-item ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== HOLY GRAIL LAYOUT =====

export function HolyGrailLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-holy-grail ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function HolyGrailHeader({ children, className = '', as: Component = 'header' }: BaseLayoutProps) {
  return (
    <Component className={`holy-grail-header ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function HolyGrailSidebarLeft({ children, className = '', as: Component = 'aside' }: BaseLayoutProps) {
  return (
    <Component className={`holy-grail-sidebar-left ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function HolyGrailMain({ children, className = '', as: Component = 'main' }: BaseLayoutProps) {
  return (
    <Component className={`holy-grail-main ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function HolyGrailSidebarRight({ children, className = '', as: Component = 'aside' }: BaseLayoutProps) {
  return (
    <Component className={`holy-grail-sidebar-right ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function HolyGrailFooter({ children, className = '', as: Component = 'footer' }: BaseLayoutProps) {
  return (
    <Component className={`holy-grail-footer ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== SWISS POSTER LAYOUT =====

export function SwissLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-swiss ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function SwissTitle({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`swiss-title ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function SwissImage({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`swiss-image ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function SwissText({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`swiss-text ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function SwissAccent({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`swiss-accent ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== MOSAIC LAYOUT =====

export function MosaicLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-mosaic ${className}`.trim()}>
      {children}
    </Component>
  );
}

export interface MosaicItemProps extends BaseLayoutProps {
  /** Size variant */
  size?: 'default' | 'large' | 'wide' | 'tall';
}

export function MosaicItem({
  children,
  size = 'default',
  className = '',
  as: Component = 'div'
}: MosaicItemProps) {
  const sizeClass = size === 'large' ? 'mosaic-large' :
                    size === 'wide' ? 'mosaic-wide' :
                    size === 'tall' ? 'mosaic-tall' : '';

  return (
    <Component className={`${sizeClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== GOLDEN RATIO LAYOUT =====

export function GoldenLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-golden ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function GoldenMajor({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`golden-major ${className}`.trim()}>
      {children}
    </Component>
  );
}

export function GoldenMinor({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`golden-minor ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== ANIMATION WRAPPER =====

export function AnimatedLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-animate-in ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ===== PARALLAX WRAPPER =====

export function ParallaxLayout({ children, className = '', as: Component = 'div' }: BaseLayoutProps) {
  return (
    <Component className={`layout-parallax ${className}`.trim()}>
      {children}
    </Component>
  );
}

export interface ParallaxLayerProps extends BaseLayoutProps {
  /** Layer depth */
  depth?: 'back' | 'middle' | 'front';
}

export function ParallaxLayer({
  children,
  depth = 'middle',
  className = '',
  as: Component = 'div'
}: ParallaxLayerProps) {
  const depthClass = depth === 'back' ? 'parallax-layer-back' :
                     depth === 'front' ? 'parallax-layer-front' : '';

  return (
    <Component className={`parallax-layer ${depthClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}
