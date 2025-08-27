interface AccountPageProps {
  onNavigate: (page: string) => void;
}

export function AccountPage({ onNavigate }: AccountPageProps) {
  return (
    <div className="min-h-screen bg-gallery-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gallery-dark-brown mb-4">My Account</h1>
          <p className="text-gallery-dark-brown/70 mb-8">Manage your profile and orders</p>
          <div className="bg-gallery-beige rounded-lg p-12">
            <p className="text-gallery-dark-brown/70 mb-6">Account page coming soon</p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-gallery-rose-gold text-gallery-white px-6 py-3 rounded-lg hover:bg-gallery-gold transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}