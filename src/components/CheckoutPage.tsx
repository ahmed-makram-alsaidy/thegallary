interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  return (
    <div className="min-h-screen bg-gallery-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gallery-dark-brown mb-4">Checkout</h1>
          <p className="text-gallery-dark-brown/70 mb-8">Complete your purchase</p>
          <div className="bg-gallery-beige rounded-lg p-12">
            <p className="text-gallery-dark-brown/70 mb-6">Checkout page coming soon</p>
            <button
              onClick={() => onNavigate('cart')}
              className="bg-gallery-rose-gold text-gallery-white px-6 py-3 rounded-lg hover:bg-gallery-gold transition-colors"
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}