import { MapPin, Heart } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-block mb-6">
          <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#E8A5B0' }} />
        </div>
        
        <h2 style={{ color: '#6B4F46' }}>Sobre Nós</h2>
        
        <p className="mt-6 max-w-2xl mx-auto">
          Na AdeehBuqués, acreditamos que cada detalhe transmite amor. Nossos buquês são feitos com carinho, personalizados para cada momento especial. Seja para surpreender alguém ou tornar um dia inesquecível, estamos prontos para criar a lembrança perfeita para você.
        </p>
        
        <div 
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full"
          style={{ backgroundColor: '#F5D4D8' }}
        >
          <MapPin className="w-5 h-5" style={{ color: '#B85C75' }} />
          <span style={{ color: '#B85C75' }}>Jardim Eldorado – Palhoça/SC</span>
        </div>
      </div>
    </section>
  );
}
