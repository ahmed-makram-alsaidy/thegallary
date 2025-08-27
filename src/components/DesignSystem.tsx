import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ColorPalette } from './design-system/ColorPalette';
import { TypographyScale } from './design-system/TypographyScale';
import { SpacingSystem } from './design-system/SpacingSystem';
import { ComponentShowcase } from './design-system/ComponentShowcase';
import { breakpoints, iconLibrary, tailwindTokens } from '../constants/designSystem';
import logo from 'figma:asset/d4eee8882349ce637ad96f0862b6108fcddc8983.png';

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-gallery-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <img src={logo} alt="The Gallery" className="h-16 w-auto mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gallery-dark-brown mb-4">
            The Gallery Design System
          </h1>
          <p className="text-xl text-gallery-dark-brown/70 max-w-3xl mx-auto">
            A comprehensive design system for premium women's stainless steel accessories e-commerce
          </p>
        </div>

        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="mt-6">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography" className="mt-6">
            <TypographyScale />
          </TabsContent>

          <TabsContent value="spacing" className="mt-6">
            <SpacingSystem />
          </TabsContent>

          <TabsContent value="components" className="mt-6">
            <ComponentShowcase />
          </TabsContent>

          <TabsContent value="patterns" className="mt-6">
            <div className="space-y-8">
              {/* Breakpoints */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gallery-dark-brown">Responsive Breakpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {breakpoints.map((breakpoint) => (
                      <div key={breakpoint.name} className="flex items-center justify-between p-4 bg-gallery-beige rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gallery-dark-brown">{breakpoint.name}</h4>
                          <p className="text-sm text-gallery-dark-brown/70">{breakpoint.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-gallery-dark-brown">{breakpoint.value}</p>
                          <code className="text-xs text-gallery-dark-brown/70">{breakpoint.tailwind}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Icon Library */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gallery-dark-brown">Icon Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {iconLibrary.map((library) => (
                      <div key={library.name} className="p-4 bg-gallery-beige rounded-lg">
                        <h4 className="font-semibold text-gallery-dark-brown mb-2">{library.name}</h4>
                        <p className="text-sm text-gallery-dark-brown/70 mb-3">{library.description}</p>
                        <p className="text-sm text-gallery-dark-brown">Usage: {library.usage}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Design Principles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gallery-dark-brown">Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gallery-dark-brown mb-2">Elegance</h4>
                        <p className="text-sm text-gallery-dark-brown/70">Clean, sophisticated design that reflects the premium nature of our jewelry</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gallery-dark-brown mb-2">Femininity</h4>
                        <p className="text-sm text-gallery-dark-brown/70">Soft curves, rose gold accents, and thoughtful spacing create a feminine aesthetic</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gallery-dark-brown mb-2">Accessibility</h4>
                        <p className="text-sm text-gallery-dark-brown/70">High contrast ratios, focus states, and semantic markup ensure accessibility for all users</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gallery-dark-brown mb-2">Performance</h4>
                        <p className="text-sm text-gallery-dark-brown/70">Optimized images, efficient animations, and responsive design for fast, smooth experiences</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="mt-6">
            <div className="space-y-8">
              {tailwindTokens.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-gallery-dark-brown">{category.category} Tokens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.tokens.map((token) => (
                        <div key={token.name} className="p-4 bg-gallery-beige rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gallery-dark-brown">{token.name}</h4>
                            <span className="font-mono text-sm text-gallery-dark-brown">{token.value}</span>
                          </div>
                          <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown">
                            {token.usage}
                          </code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Developer Handoff Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gallery-dark-brown">Developer Handoff Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-3">Asset Export Specifications</h4>
                      <div className="bg-gallery-beige p-4 rounded-lg space-y-2">
                        <p className="text-sm text-gallery-dark-brown">• Product images: 800x800px WebP format, 1x and 2x variants</p>
                        <p className="text-sm text-gallery-dark-brown">• Icons: SVG format with 24x24px default size</p>
                        <p className="text-sm text-gallery-dark-brown">• Logo: SVG format with multiple size variants</p>
                        <p className="text-sm text-gallery-dark-brown">• Hero images: 1920x1080px WebP format</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-3">Animation Guidelines</h4>
                      <div className="bg-gallery-beige p-4 rounded-lg space-y-2">
                        <p className="text-sm text-gallery-dark-brown">• Product hover: Scale 1.05 with 300ms ease-out transition</p>
                        <p className="text-sm text-gallery-dark-brown">• Button hover: Background color transition 200ms ease</p>
                        <p className="text-sm text-gallery-dark-brown">• Page transitions: Fade with 400ms duration</p>
                        <p className="text-sm text-gallery-dark-brown">• Loading states: Shimmer animation with rose gold gradient</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-3">Accessibility Requirements</h4>
                      <div className="bg-gallery-beige p-4 rounded-lg space-y-2">
                        <p className="text-sm text-gallery-dark-brown">• Minimum 4.5:1 contrast ratio for text</p>
                        <p className="text-sm text-gallery-dark-brown">• Focus states with 2px outline in rose gold</p>
                        <p className="text-sm text-gallery-dark-brown">• Alt text for all product images</p>
                        <p className="text-sm text-gallery-dark-brown">• Semantic HTML structure with proper headings</p>
                        <p className="text-sm text-gallery-dark-brown">• ARIA labels for interactive elements</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-3">SEO Meta Templates</h4>
                      <div className="bg-gallery-beige p-4 rounded-lg space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gallery-dark-brown">Home Page:</p>
                          <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown mt-1">
                            Title: "Premium Stainless Steel Jewelry for Women | The Gallery"
                          </code>
                          <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown mt-1">
                            Description: "Discover elegant stainless steel necklaces, bracelets, earrings & rings. Hypoallergenic, tarnish-resistant jewelry with lifetime warranty. Free shipping on orders $100+."
                          </code>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gallery-dark-brown">Product Page Example:</p>
                          <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown mt-1">
                            Title: "Rose Gold Pendant Necklace - Premium Stainless Steel | The Gallery"
                          </code>
                          <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown mt-1">
                            Description: "Elegant rose gold pendant necklace in premium stainless steel. Hypoallergenic, adjustable 16-20 inch chain. $149 with lifetime warranty & free shipping."
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}