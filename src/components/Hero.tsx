import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import butterfliesImage from "figma:asset/1111bc91fd059b2b5ccb7e494296cd0f27a6d381.png";
import rosesImage from "figma:asset/f044dfd910f67313f25bea9d9fffa44e48bbee68.png";
import chocolatesImage from "figma:asset/3a31ef64f35bd7af282cf8b6841e92feccb29925.png";
import blueBouquetImage from "figma:asset/19e7cd3c67931ecd2832f1d077707e1771595e94.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: '#F5D4D8' }}
            >
              <Sparkles className="w-4 h-4" style={{ color: '#D4879D' }} />
              <span className="text-sm" style={{ color: '#B85C75' }}>Buquês Artesanais</span>
            </div>
            
            <h1 
              className="text-5xl lg:text-6xl tracking-tight" 
              style={{ 
                color: '#6B4F46',
                fontFamily: 'serif'
              }}
            >
              AdeehBuqués
            </h1>
            
            <p 
              className="text-xl lg:text-2xl italic" 
              style={{ color: '#6B4F46' }}
            >
              Buquês que encantam e emocionam
            </p>
            
            <p className="max-w-md mx-auto lg:mx-0">
              Cada detalhe transmite amor. Nossos buquês são feitos com carinho, personalizados para cada momento especial.
            </p>
            
            <a
              href="https://wa.me/message/GEPMOYC4YUTTD1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="rounded-full px-8 mt-4 hover:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: '#E8A5B0',
                  color: '#ffffff'
                }}
              >
                Faça seu pedido pelo WhatsApp
              </Button>
            </a>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={rosesImage}
                alt="Buquê de Rosas"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={chocolatesImage}
                alt="Buquê de Bombons"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src={blueBouquetImage}
                alt="Buquê Azul com Borboletas"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={butterfliesImage}
                alt="Buquê de Borboletas"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
