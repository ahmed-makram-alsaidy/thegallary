import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { typographyScale } from '../../constants/designSystem';

export function TypographyScale() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gallery-dark-brown">Typography Scale</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {typographyScale.map((type) => (
            <div key={type.name} className="space-y-3">
              <div className={type.class}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="bg-gallery-beige p-4 rounded-lg space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gallery-dark-brown">Style:</span>
                    <span className="text-gallery-dark-brown/70 ml-2">{type.name}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gallery-dark-brown">Font:</span>
                    <span className="text-gallery-dark-brown/70 ml-2">{type.font}</span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gallery-dark-brown text-sm">Usage:</span>
                  <span className="text-gallery-dark-brown/70 text-sm ml-2">{type.usage}</span>
                </div>
                <div className="space-y-1">
                  <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown">
                    Tailwind: {type.class}
                  </code>
                  <code className="block text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown">
                    CSS: {type.css}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}