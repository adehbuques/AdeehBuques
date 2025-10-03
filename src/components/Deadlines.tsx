import { Clock } from "lucide-react";

export function Deadlines() {
  const deadlines = [
    { product: "Borboletas (P/M)", days: "2 dias de antecedência" },
    { product: "Borboletas (G/GG)", days: "7 dias de antecedência" },
    { product: "Rosas", days: "7 dias de antecedência" },
    { product: "Bombom", days: "5 dias de antecedência" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: '#E8A5B0' }} />
          <h2 style={{ color: '#6B4F46' }}>Prazos de Encomenda</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '2px solid #E8A5B0' }}>
                <th className="text-left py-4 px-4 sm:px-2" style={{ color: '#6B4F46' }}>
                  Buquê
                </th>
                <th className="text-left py-4 px-4 sm:px-2" style={{ color: '#6B4F46' }}>
                  Prazo Mínimo de Encomenda
                </th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((item, index) => (
                <tr 
                  key={index}
                  className="border-b border-border"
                >
                  <td className="py-4 px-4 sm:px-2" style={{ color: '#6B4F46' }}>
                    {item.product}
                  </td>
                  <td className="py-4 px-4 sm:px-2">
                    {item.days}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
