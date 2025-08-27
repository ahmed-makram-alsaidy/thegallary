export const brandColors = [
  { 
    name: 'Gallery White', 
    value: '#FFFFFF', 
    css: 'gallery-white', 
    tailwind: 'bg-gallery-white text-gallery-white border-gallery-white',
    usage: 'Primary background, text on dark surfaces' 
  },
  { 
    name: 'Gallery Beige', 
    value: '#F6EFE9', 
    css: 'gallery-beige', 
    tailwind: 'bg-gallery-beige text-gallery-beige border-gallery-beige',
    usage: 'Secondary background, subtle sections' 
  },
  { 
    name: 'Gallery Dark Brown', 
    value: '#8B4513', 
    css: 'gallery-dark-brown', 
    tailwind: 'bg-gallery-dark-brown text-gallery-dark-brown border-gallery-dark-brown',
    usage: 'Primary text, headers, navigation' 
  },
  { 
    name: 'Gallery Rose Gold', 
    value: '#B76E79', 
    css: 'gallery-rose-gold', 
    tailwind: 'bg-gallery-rose-gold text-gallery-rose-gold border-gallery-rose-gold',
    usage: 'Primary CTA, accents, hover states' 
  },
  { 
    name: 'Gallery Gold', 
    value: '#D4AF37', 
    css: 'gallery-gold', 
    tailwind: 'bg-gallery-gold text-gallery-gold border-gallery-gold',
    usage: 'Secondary CTA, premium elements' 
  },
  { 
    name: 'Gallery Silver', 
    value: '#C0C0C0', 
    css: 'gallery-silver', 
    tailwind: 'bg-gallery-silver text-gallery-silver border-gallery-silver',
    usage: 'Neutral accents, borders' 
  },
  { 
    name: 'Gallery Black', 
    value: '#111111', 
    css: 'gallery-black', 
    tailwind: 'bg-gallery-black text-gallery-black border-gallery-black',
    usage: 'High contrast text, premium variants' 
  }
];

export const typographyScale = [
  { 
    name: 'Heading 1', 
    class: 'text-4xl font-bold', 
    font: 'Playfair Display', 
    usage: 'Hero titles, page headers',
    css: 'font-size: 2.25rem; font-weight: 700; font-family: var(--font-heading);'
  },
  { 
    name: 'Heading 2', 
    class: 'text-3xl font-bold', 
    font: 'Playfair Display', 
    usage: 'Section headers',
    css: 'font-size: 1.875rem; font-weight: 700; font-family: var(--font-heading);'
  },
  { 
    name: 'Heading 3', 
    class: 'text-2xl font-semibold', 
    font: 'Playfair Display', 
    usage: 'Subsection headers',
    css: 'font-size: 1.5rem; font-weight: 600; font-family: var(--font-heading);'
  },
  { 
    name: 'Heading 4', 
    class: 'text-xl font-semibold', 
    font: 'Playfair Display', 
    usage: 'Component headers',
    css: 'font-size: 1.25rem; font-weight: 600; font-family: var(--font-heading);'
  },
  { 
    name: 'Body Large', 
    class: 'text-lg font-normal', 
    font: 'Poppins', 
    usage: 'Lead paragraphs, important text',
    css: 'font-size: 1.125rem; font-weight: 400; font-family: var(--font-body);'
  },
  { 
    name: 'Body Regular', 
    class: 'text-base font-normal', 
    font: 'Poppins', 
    usage: 'Standard body text',
    css: 'font-size: 1rem; font-weight: 400; font-family: var(--font-body);'
  },
  { 
    name: 'Body Small', 
    class: 'text-sm font-normal', 
    font: 'Poppins', 
    usage: 'Caption text, metadata',
    css: 'font-size: 0.875rem; font-weight: 400; font-family: var(--font-body);'
  },
  { 
    name: 'Label', 
    class: 'text-sm font-medium', 
    font: 'Poppins', 
    usage: 'Form labels, UI labels',
    css: 'font-size: 0.875rem; font-weight: 500; font-family: var(--font-body);'
  },
  { 
    name: 'Button', 
    class: 'text-sm font-semibold', 
    font: 'Poppins', 
    usage: 'Button text, CTAs',
    css: 'font-size: 0.875rem; font-weight: 600; font-family: var(--font-body);'
  }
];

export const spacingSystem = [
  { name: 'XS', value: '0.25rem', token: 'spacing-xs', px: '4px', tailwind: 'p-1 m-1 gap-1' },
  { name: 'SM', value: '0.5rem', token: 'spacing-sm', px: '8px', tailwind: 'p-2 m-2 gap-2' },
  { name: 'MD', value: '1rem', token: 'spacing-md', px: '16px', tailwind: 'p-4 m-4 gap-4' },
  { name: 'LG', value: '1.5rem', token: 'spacing-lg', px: '24px', tailwind: 'p-6 m-6 gap-6' },
  { name: 'XL', value: '2rem', token: 'spacing-xl', px: '32px', tailwind: 'p-8 m-8 gap-8' },
  { name: '2XL', value: '3rem', token: 'spacing-2xl', px: '48px', tailwind: 'p-12 m-12 gap-12' },
  { name: '3XL', value: '4rem', token: 'spacing-3xl', px: '64px', tailwind: 'p-16 m-16 gap-16' }
];

export const breakpoints = [
  { name: 'Mobile', value: '375px', description: 'Small mobile devices', tailwind: 'Default (no prefix)' },
  { name: 'Tablet', value: '768px', description: 'Tablets and large mobile', tailwind: 'md:' },
  { name: 'Desktop', value: '1024px', description: 'Desktop and laptop screens', tailwind: 'lg:' },
  { name: 'Large', value: '1440px', description: 'Large desktop screens', tailwind: 'xl:' }
];

export const componentVariants = [
  {
    name: 'Primary Button',
    description: 'Main call-to-action button',
    code: 'bg-gallery-rose-gold hover:bg-gallery-gold text-gallery-white',
    usage: 'Primary actions, main CTAs'
  },
  {
    name: 'Secondary Button',
    description: 'Alternative action button',
    code: 'border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white',
    usage: 'Secondary actions, alternative choices'
  },
  {
    name: 'Product Card',
    description: 'Card for displaying products',
    code: 'bg-gallery-white border-none shadow-lg hover:shadow-xl transition-all duration-300',
    usage: 'Product grids, featured items'
  },
  {
    name: 'Input Field',
    description: 'Form input styling',
    code: 'bg-gallery-beige border-none focus:ring-gallery-rose-gold',
    usage: 'Forms, search, user input'
  }
];

export const iconLibrary = [
  { name: 'Lucide React', description: 'Primary icon library', usage: 'UI icons, navigation, actions' },
  { name: 'Heroicons', description: 'Alternative icon set', usage: 'Supplementary icons if needed' }
];

export const tailwindTokens = [
  {
    category: 'Colors',
    tokens: [
      { name: 'gallery-white', value: '#FFFFFF', usage: 'bg-gallery-white, text-gallery-white, border-gallery-white' },
      { name: 'gallery-beige', value: '#F6EFE9', usage: 'bg-gallery-beige, text-gallery-beige, border-gallery-beige' },
      { name: 'gallery-dark-brown', value: '#8B4513', usage: 'bg-gallery-dark-brown, text-gallery-dark-brown, border-gallery-dark-brown' },
      { name: 'gallery-rose-gold', value: '#B76E79', usage: 'bg-gallery-rose-gold, text-gallery-rose-gold, border-gallery-rose-gold' },
      { name: 'gallery-gold', value: '#D4AF37', usage: 'bg-gallery-gold, text-gallery-gold, border-gallery-gold' },
      { name: 'gallery-silver', value: '#C0C0C0', usage: 'bg-gallery-silver, text-gallery-silver, border-gallery-silver' },
      { name: 'gallery-black', value: '#111111', usage: 'bg-gallery-black, text-gallery-black, border-gallery-black' }
    ]
  },
  {
    category: 'Spacing',
    tokens: [
      { name: 'spacing-xs', value: '0.25rem', usage: 'p-1, m-1, gap-1 (4px)' },
      { name: 'spacing-sm', value: '0.5rem', usage: 'p-2, m-2, gap-2 (8px)' },
      { name: 'spacing-md', value: '1rem', usage: 'p-4, m-4, gap-4 (16px)' },
      { name: 'spacing-lg', value: '1.5rem', usage: 'p-6, m-6, gap-6 (24px)' },
      { name: 'spacing-xl', value: '2rem', usage: 'p-8, m-8, gap-8 (32px)' },
      { name: 'spacing-2xl', value: '3rem', usage: 'p-12, m-12, gap-12 (48px)' },
      { name: 'spacing-3xl', value: '4rem', usage: 'p-16, m-16, gap-16 (64px)' }
    ]
  },
  {
    category: 'Typography',
    tokens: [
      { name: 'font-heading', value: 'Playfair Display', usage: 'font-family: var(--font-heading)' },
      { name: 'font-body', value: 'Poppins', usage: 'font-family: var(--font-body)' }
    ]
  }
];