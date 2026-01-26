import React, { useState } from 'react';
import { File, Download, Star, ChevronDown, Eye } from 'lucide-react';

const MaterialsDropdown = ({ materials = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Se não houver materiais, não renderiza nada ou renderiza estado vazio
    if (!materials || materials.length === 0) {
        return null;
    }

    const handleDownload = (link) => {
      if (link) {
        window.open(link, '_blank');
      } else {
        alert("Link do PDF não configurado.");
      }
    };

    return (
      <div className="rounded-2xl overflow-hidden border border-white/5 transition-all duration-300">
        <div onClick={() => setIsOpen(!isOpen)} className={`flex h-20 cursor-pointer ${isOpen ? 'bg-[#1e293b]' : 'bg-[#0f172a] hover:bg-[#1e293b]'}`}>
          <div className="w-20 bg-blue-600 flex items-center justify-center shrink-0">
            <div className="p-2 bg-white/20 rounded-lg">
              <File className="text-white" size={24} />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <Download size={10} className="text-blue-600" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between px-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-bold text-lg text-white">Material de apoio</h3>
                <span className="bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <Star size={8} fill="white" /> Bônus
                </span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition shadow-lg shadow-blue-900/20">
                Baixar Tudo
              </button>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-sm font-medium">{materials.length} Arquivo{materials.length !== 1 ? 's' : ''}</span>
              <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="bg-[#1e293b] border-t border-white/5 p-4 animate-in slide-in-from-top-2 space-y-2">
            {materials.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-black/20 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0f172a] rounded-lg flex items-center justify-center text-red-400 font-bold text-xs">PDF</div>
                  <span 
                    className="font-semibold text-gray-200 group-hover:text-blue-400 transition cursor-pointer line-clamp-1" 
                    onClick={() => handleDownload(item.pdfLink)}
                    title={item.title}
                  >
                    {item.title}
                  </span>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => handleDownload(item.pdfLink)} className="bg-[#0f172a] hover:bg-blue-600/20 text-blue-400 hover:text-white px-4 py-2 rounded-lg font-bold text-xs transition flex items-center gap-2">
                    <Eye size={14} /> <span className="hidden sm:inline">Visualizar</span>
                  </button>
                  <button onClick={() => handleDownload(item.pdfLink)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-xs transition flex items-center gap-2">
                    <Download size={14} /> <span className="hidden sm:inline">Baixar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}
export default MaterialsDropdown;