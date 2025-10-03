import { Truck, CreditCard, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

export function HowItWorks() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-12" style={{ color: '#6B4F46' }}>
          Como Funciona?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Retirada ou Entrega */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#F8F2ED' }}>
            <Truck className="w-10 h-10 mb-4" style={{ color: '#6B4F46' }} />
            <h3 style={{ color: '#6B4F46' }}>Retirada ou Entrega</h3>
            
            <div className="mt-4 space-y-3">
              <div>
                <p className="mb-1" style={{ color: '#6B4F46' }}>
                  <strong>Retirada:</strong>
                </p>
                <p className="text-sm">
                  No Jardim Eldorado (Palhoça)
                </p>
              </div>
              
              <div>
                <p className="mb-1" style={{ color: '#6B4F46' }}>
                  <strong>Entrega:</strong>
                </p>
                <p className="text-sm">
                  Entregamos com taxa (valor conforme localização)
                </p>
              </div>
            </div>
          </div>
          
          {/* Pagamento */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#F8F2ED' }}>
            <CreditCard className="w-10 h-10 mb-4" style={{ color: '#6B4F46' }} />
            <h3 style={{ color: '#6B4F46' }}>Pagamento</h3>
            
            <div className="mt-4 space-y-3">
              <div>
                <p className="mb-1" style={{ color: '#6B4F46' }}>
                  <strong>Sinal:</strong>
                </p>
                <p className="text-sm">
                  50% antecipado para confirmar o pedido
                </p>
              </div>
              
              <div>
                <p className="mb-1" style={{ color: '#6B4F46' }}>
                  <strong>Aceitamos:</strong>
                </p>
                <p className="text-sm">
                  Pix e dinheiro
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Observação Importante */}
        <div 
          className="p-6 rounded-xl mb-8 flex gap-4"
          style={{ backgroundColor: '#F5D4D8' }}
        >
          <AlertCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#B85C75' }} />
          <div>
            <p style={{ color: '#B85C75' }}>
              <strong>Observação Importante:</strong> O pedido só é confirmado após o pagamento do sinal.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <a
            href="wa.me/message/GEPMOYC4YUTTD1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="rounded-full px-12 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#E8A5B0',
                color: '#ffffff'
              }}
            >
              Fazer pedido
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
