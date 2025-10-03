import { MessageCircle, Instagram, MapPin, Heart } from "lucide-react";

export function Contact() {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: '#6B4F46' }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#E8A5B0' }} />
          <h2 style={{ color: '#F8F2ED' }}>Entre em Contato</h2>
          <p className="mt-4" style={{ color: '#F8F2ED' }}>
            Estamos prontos para criar o buquê perfeito para você
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/message/GEPMOYC4YUTTD1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all hover:scale-105"
            style={{ backgroundColor: 'rgba(232, 165, 176, 0.15)' }}
          >
            <MessageCircle className="w-8 h-8" style={{ color: '#E8A5B0' }} />
            <div className="text-center">
              <p className="text-sm mb-1" style={{ color: '#E8A5B0' }}>WhatsApp</p>
              <p className="text-sm" style={{ color: '#F8F2ED' }}>+55 69 9398-5538</p>
            </div>
          </a>
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/adeeh_buques?igsh=eTM1bW9hdTJjdno1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all hover:scale-105"
            style={{ backgroundColor: 'rgba(232, 165, 176, 0.15)' }}
          >
            <Instagram className="w-8 h-8" style={{ color: '#E8A5B0' }} />
            <div className="text-center">
              <p className="text-sm mb-1" style={{ color: '#E8A5B0' }}>Instagram</p>
              <p className="text-sm" style={{ color: '#F8F2ED' }}>@deehbuques</p>
            </div>
          </a>
          
          {/* Localização */}
          <div
            className="flex flex-col items-center gap-3 p-6 rounded-2xl"
            style={{ backgroundColor: 'rgba(232, 165, 176, 0.15)' }}
          >
            <MapPin className="w-8 h-8" style={{ color: '#E8A5B0' }} />
            <div className="text-center">
              <p className="text-sm mb-1" style={{ color: '#E8A5B0' }}>Localização</p>
              <p className="text-sm" style={{ color: '#F8F2ED' }}>Jardim Eldorado</p>
              <p className="text-sm" style={{ color: '#F8F2ED' }}>Palhoça/SC</p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(232, 165, 176, 0.2)' }}>
          <p className="text-sm" style={{ color: '#E8A5B0' }}>
            © 2025 AdeehBuqués. Feito com amor ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
