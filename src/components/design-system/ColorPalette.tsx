import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Copy, Check } from 'lucide-react';
import { toast } from "sonner@2.0.3";
import { brandColors } from '../../constants/designSystem';

export function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    toast(`${colorName} color copied!`, {
      description: text,
    });
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gallery-dark-brown">Brand Colors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brandColors.map((color) => (
            <div key={color.name} className="space-y-3">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-lg border border-gallery-beige shadow-sm"
                  style={{ backgroundColor: color.value }}
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gallery-dark-brown">{color.name}</h4>
                  <p className="text-sm text-gallery-dark-brown/70">{color.value}</p>
                  <p className="text-xs text-gallery-dark-brown/50">--{color.css}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(color.value, color.name)}
                  className="text-gallery-rose-gold"
                >
                  {copiedColor === color.name ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="bg-gallery-beige p-3 rounded-lg">
                <p className="text-xs text-gallery-dark-brown/70 mb-2">Usage:</p>
                <p className="text-sm text-gallery-dark-brown">{color.usage}</p>
                <div className="mt-2">
                  <code className="text-xs bg-gallery-white px-2 py-1 rounded text-gallery-dark-brown">
                    {color.tailwind}
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