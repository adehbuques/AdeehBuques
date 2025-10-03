import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";
import butterfliesImage from "figma:asset/1111bc91fd059b2b5ccb7e494296cd0f27a6d381.png";
import rosesImage from "figma:asset/f044dfd910f67313f25bea9d9fffa44e48bbee68.png";
import chocolatesImage from "figma:asset/3a31ef64f35bd7af282cf8b6841e92feccb29925.png";

export function ProductCatalog() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: '#E8A5B0' }} />
          <h2 style={{ color: '#6B4F46' }}>Catálogo de Produtos</h2>
        </div>
        
        <div className="space-y-20">
          {/* Buquê de Borboletas */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="mb-6" style={{ color: '#6B4F46' }}>
                🦋 Buquê de Borboletas
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#F5D4D8' }}>
                      <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                        Tamanho
                      </th>
                      <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                        Quantidade
                      </th>
                      <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                        Preço
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">P</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">15 borboletas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 30
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">M</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">30 borboletas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 50
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">G</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">50 borboletas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 80
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">GG</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">120 borboletas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 150
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={butterfliesImage}
                alt="Buquê de Borboletas"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Buquê de Rosas */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={rosesImage}
                alt="Buquê de Rosas"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="mb-6" style={{ color: '#6B4F46' }}>
                🌹 Buquê de Rosas
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#F5D4D8' }}>
                      <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                        Tamanho
                      </th>
                      <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                        Quantidade
                      </th>
                      <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                        Preço
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">1 Rosa</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">1 rosa</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 25
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">P</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">5 rosas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 55
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">M</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">8 rosas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 80
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">G</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">15 rosas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 150
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">GG</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base">50 rosas</td>
                      <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                        R$ 200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Buquê de Bombom */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="mb-6" style={{ color: '#6B4F46' }}>
                🍫 Buquê de Bombom
              </h3>
              
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#F5D4D8' }}>
                <p className="mb-2" style={{ color: '#6B4F46' }}>
                  17 bombons (Sonho de Valsa ou Ouro Branco)
                </p>
                <p className="text-2xl" style={{ color: '#B85C75' }}>
                  R$ 100
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={chocolatesImage}
                alt="Buquê de Bombons"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Adicionais */}
          <div className="max-w-2xl mx-auto">
            <h3 className="mb-6 text-center" style={{ color: '#6B4F46' }}>
              ✨ Adicionais
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#F5D4D8' }}>
                    <th className="text-left py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                      Item
                    </th>
                    <th className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#6B4F46' }}>
                      Preço
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 sm:px-2 text-sm sm:text-base">Borboletas (cada)</td>
                    <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                      R$ 5
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 sm:px-2 text-sm sm:text-base">Bombons (cada)</td>
                    <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                      R$ 5
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 sm:px-2 text-sm sm:text-base">Foto polaroid</td>
                    <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                      R$ 7
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 sm:px-2 text-sm sm:text-base">Foto normal</td>
                    <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                      R$ 10
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 sm:px-2 text-sm sm:text-base">Lead</td>
                    <td className="text-center py-3 px-4 sm:px-2 text-sm sm:text-base" style={{ color: '#B85C75' }}>
                      R$ 5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
