import React from 'react';

export interface AutoLayoutProps {
  children: React.ReactNode;

  // Direction
  direction?: 'horizontal' | 'vertical';

  // Alignment (cross-axis)
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  // Justification (main-axis)
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  // Gap between items
  gap?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64;

  // Padding
  padding?: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64;
  paddingH?: 16 | 24 | 32;
  paddingV?: 16 | 24 | 32;

  // Wrap
  wrap?: boolean;

  // Preset layouts
  preset?: 'stack' | 'inline' | 'grid' | 'center' | 'sidebar' | 'header';

  // Premium styles
  premium?: boolean;
  glass?: boolean;

  // Responsive
  mobileVertical?: boolean;
  smVertical?: boolean;

  // Width/Height
  width?: 'fill' | 'hug' | 320 | 480 | 640 | 960;
  height?: 'fill' | 'hug' | 480 | 640;

  // Animation
  animated?: boolean | 'slow';

  // Debug mode
  debug?: boolean;

  // Additional classes
  className?: string;

  // HTML attributes
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * AutoLayout - Figma-inspired layout component
 *
 * @example
 * // Simple vertical stack
 * <AutoLayout direction="vertical" gap={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </AutoLayout>
 *
 * @example
 * // Horizontal with center alignment
 * <AutoLayout direction="horizontal" align="center" gap={8}>
 *   <button>Cancel</button>
 *   <button>Save</button>
 * </AutoLayout>
 *
 * @example
 * // Use preset
 * <AutoLayout preset="stack" premium>
 *   <h2>Title</h2>
 *   <p>Description</p>
 * </AutoLayout>
 */
export default function AutoLayout({
  children,
  direction = 'horizontal',
  align,
  justify,
  gap,
  padding,
  paddingH,
  paddingV,
  wrap,
  preset,
  premium,
  glass,
  mobileVertical,
  smVertical,
  width,
  height,
  animated,
  debug,
  className = '',
  as: Component = 'div',
  ...props
}: AutoLayoutProps) {
  const classes = [
    // Base class or preset
    preset ? `auto-layout-${preset}` : 'auto-layout',

    // Direction (only if not using preset)
    !preset && direction && `auto-layout-${direction}`,

    // Alignment
    align && `auto-layout-align-${align}`,

    // Justification
    justify && `auto-layout-justify-${justify}`,

    // Gap
    gap !== undefined && `auto-layout-gap-${gap}`,

    // Padding
    padding !== undefined && `auto-layout-padding-${padding}`,
    paddingH && `auto-layout-padding-h-${paddingH}`,
    paddingV && `auto-layout-padding-v-${paddingV}`,

    // Wrap
    wrap === true && 'auto-layout-wrap',
    wrap === false && 'auto-layout-nowrap',

    // Premium styles
    premium && 'auto-layout-premium',
    glass && 'auto-layout-glass',

    // Responsive
    mobileVertical && 'auto-layout-mobile-vertical',
    smVertical && 'auto-layout-sm-vertical',

    // Width
    width && `auto-layout-w-${width === 'fill' || width === 'hug' ? width : `fixed-${width}`}`,

    // Height
    height && `auto-layout-h-${height === 'fill' || height === 'hug' ? height : `fixed-${height}`}`,

    // Animation
    animated === true && 'auto-layout-animated',
    animated === 'slow' && 'auto-layout-animated-slow',

    // Debug
    debug && 'auto-layout-debug',

    // Custom classes
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

/**
 * AutoLayoutItem - Child component for controlling individual item behavior
 */
export interface AutoLayoutItemProps {
  children: React.ReactNode;

  // Resizing behavior
  resize?: 'hug' | 'fill' | 'fixed';

  // Self alignment
  alignSelf?: 'start' | 'center' | 'end' | 'stretch';

  // Additional classes
  className?: string;

  // HTML attributes
  as?: keyof JSX.IntrinsicElements;
}

export function AutoLayoutItem({
  children,
  resize = 'hug',
  alignSelf,
  className = '',
  as: Component = 'div',
  ...props
}: AutoLayoutItemProps) {
  const classes = [
    `auto-layout-${resize}`,
    alignSelf && `auto-layout-self-${alignSelf}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
