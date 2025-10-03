import { Sparkles } from "lucide-react";
import rapunzelBouquet from "figma:asset/a4b2d047229406d98217f85351f43bc3c82ad75e.png";
import pinkButterflyBouquet from "figma:asset/60c8d128f9294ae6e8955b1a10cff373b3aa863f.png";
import stitchBouquet from "figma:asset/3109307cc9e0b73837427e273b5e52b538403382.png";
import insideOutBouquet from "figma:asset/f8d8fb9480b09443c47c40c99673ceb7f46bb38a.png";
import ledButterflyBouquet from "figma:asset/6dd1ad7eac86ed79a8e576de6fc517179ab84d42.png";
import colorfulButterflyBouquet from "figma:asset/9c741f85c6a65b0124d59df9d52e644be8fc736e.png";

export function Gallery() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F8F2ED' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: '#E8A5B0' }} />
          <h2 style={{ color: '#6B4F46' }}>Galeria de Buquês Personalizados</h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6B4F46' }}>
            Cada buquê é único e especial. Personalizamos com temas, cores e elementos que você mais ama!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buquê Rapunzel/Enrolados */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={rapunzelBouquet}
              alt="Buquê Temático Enrolados"
              className="w-full h-96 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            >
              <div className="p-6 text-white">
                <h3 className="mb-2">Buquê Temático</h3>
                <p className="text-sm">Personalizado com tema Enrolados</p>
              </div>
            </div>
          </div>

          {/* Buquê Rosa Pink com Borboletas e Bombons */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={pinkButterflyBouquet}
              alt="Buquê Rosa com Borboletas e Bombons"
              className="w-full h-96 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            >
              <div className="p-6 text-white">
                <h3 className="mb-2">Buquê Completo</h3>
                <p className="text-sm">Borboletas e bombons</p>
              </div>
            </div>
          </div>

          {/* Buquê Stitch */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={stitchBouquet}
              alt="Buquê Temático Stitch"
              className="w-full h-96 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            >
              <div className="p-6 text-white">
                <h3 className="mb-2">Buquê Stitch</h3>
                <p className="text-sm">Personalizado com tema Lilo & Stitch</p>
              </div>
            </div>
          </div>

          {/* Buquê Divertida Mente (Inside Out) */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={insideOutBouquet}
              alt="Buquê Divertida Mente"
              className="w-full h-96 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            >
              <div className="p-6 text-white">
                <h3 className="mb-2">Buquê Divertida Mente</h3>
                <p className="text-sm">Rosas coloridas com personagens</p>
              </div>
            </div>
          </div>

          {/* Buquê LED Roxo */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={ledButterflyBouquet}
              alt="Buquê com LED Roxo"
              className="w-full h-96 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            >
              <div className="p-6 text-white">
                <h3 className="mb-2">Buquê LED</h3>
                <p className="text-sm">Borboletas com luzes LED</p>
              </div>
            </div>
          </div>

          {/* Buquê Borboletas Coloridas */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={colorfulButterflyBouquet}
              alt="Buquê de Borboletas Coloridas"
              className="w-full h-96 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            >
              <div className="p-6 text-white">
                <h3 className="mb-2">Borboletas Vibrantes</h3>
                <p className="text-sm">Mix de cores com LED</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p style={{ color: '#6B4F46' }}>
            💕 Personalize seu buquê com o tema que você preferir!
          </p>
        </div>
      </div>
    </section>
  );
}
