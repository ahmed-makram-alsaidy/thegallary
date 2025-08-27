interface CartPageProps {
  onNavigate: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  return (
    <div className="min-h-screen bg-gallery-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gallery-dark-brown mb-4">Shopping Cart</h1>
          <p className="text-gallery-dark-brown/70 mb-8">Review your selected items</p>
          <div className="bg-gallery-beige rounded-lg p-12">
            <p className="text-gallery-dark-brown/70 mb-6">Your cart is empty</p>
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-gallery-rose-gold text-gallery-white px-6 py-3 rounded-lg hover:bg-gallery-gold transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}