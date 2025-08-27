import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { spacingSystem } from '../../constants/designSystem';

export function SpacingSystem() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gallery-dark-brown">Spacing System</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {spacingSystem.map((spacing) => (
            <div key={spacing.name} className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-24 text-right">
                  <span className="font-semibold text-gallery-dark-brown">{spacing.name}</span>
                </div>
                <div 
                  className="bg-gallery-rose-gold h-4 rounded"
                  style={{ width: spacing.value }}
                />
                <div className="flex-1">
                  <span className="text-sm text-gallery-dark-brown">{spacing.value}</span>
                  <span className="text-sm text-gallery-dark-brown/70 ml-2">({spacing.px})</span>
                </div>
              </div>
              <div className="bg-gallery-beige p-3 rounded-lg ml-28">
                <div className="space-y-1">
                  <p className="text-xs text-gallery-dark-brown/70">CSS Variable:</p>
                  <code className="text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown">
                    var(--{spacing.token})
                  </code>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-gallery-dark-brown/70">Tailwind Classes:</p>
                  <code className="text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown">
                    {spacing.tailwind}
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