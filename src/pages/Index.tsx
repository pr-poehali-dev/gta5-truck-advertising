import Icon from "@/components/ui/icon";
import { useRef } from "react";
import html2canvas from "html2canvas";

export default function Index() {
  const pageRef = useRef<HTMLDivElement>(null);

  const downloadPNG = async () => {
    if (!pageRef.current) return;
    const el = pageRef.current;
    const rect = el.getBoundingClientRect();
    const canvas = await html2canvas(el, {
      scale: 4,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: rect.width,
      height: rect.height,
      windowWidth: rect.width,
      windowHeight: rect.height,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      logging: false,
    });
    const link = document.createElement("a");
    link.download = "alonso-4k.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  return (
    <div className="relative">
      <button
        onClick={downloadPNG}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FFD600] border-2 border-black px-5 py-3 font-black uppercase text-sm hover:bg-[#FF2D2D] hover:text-white transition-colors shadow-lg"
      >
        <Icon name="Download" size={18} />
        Скачать PNG 4K
      </button>
    <div ref={pageRef} className="bg-white text-black overflow-x-hidden font-body" style={{ aspectRatio: "4/3", width: "100%", maxHeight: "100vh", margin: "0 auto", overflow: "hidden" }}>

      {/* ─── ВЕРХНЯЯ СИГНАЛЬНАЯ ПОЛОСА ─── */}
      <div className="bg-[#FFD600] py-1.5 px-6 flex items-center justify-between border-b-4 border-black">
        <span className="text-black font-black text-xs uppercase tracking-[0.3em]">★★★★★ РЕЙТИНГ 5/5</span>
        <div className="flex items-center gap-4 text-black font-black text-xs uppercase tracking-wider">
          <span>АРЕНДА ФУР</span>
          <span className="text-[#FF2D2D]">▶</span>
          <span>АРЕНДА АВТО</span>
          <span className="text-[#FF2D2D]">▶</span>
          <span>ПРОДАЖА</span>
        </div>
      </div>

      {/* ─── ГЛАВНЫЙ ПРИНТ — БОК ФУРЫ ─── */}
      <section className="relative bg-white border-b-8 border-[#FFD600] overflow-hidden">
        {/* боковые полосы */}
        <div className="absolute left-0 top-0 w-6 h-full bg-[#FF2D2D]" />
        <div className="absolute right-0 top-0 w-6 h-full bg-[#FF2D2D]" />
        <div className="absolute left-6 top-0 w-2 h-full bg-[#FFD600]" />
        <div className="absolute right-6 top-0 w-2 h-full bg-[#FFD600]" />

        <div className="px-16 py-12">

          {/* НАЗВАНИЕ + РЕЙТИНГ */}
          <div className="flex items-end justify-between mb-2">
            <div>
              <div
                className="font-display font-black tracking-tighter"
                style={{ fontSize: "120px", color: "#FF2D2D", WebkitTextStroke: "3px #000", lineHeight: 1 }}
              >
                Alonso.com
              </div>
              <div
                className="font-display font-black uppercase tracking-tighter"
                style={{ fontSize: "72px", color: "#000", lineHeight: 1.1 }}
              >
                АРЕНДА & ПРОДАЖА
              </div>
              <div
                className="font-display font-black uppercase tracking-tighter"
                style={{ fontSize: "48px", color: "#FF6B00", lineHeight: 1.2 }}
              >
                ГРУЗОВЫХ И ЛЕГКОВЫХ АВТО
              </div>
            </div>

            {/* рейтинг блок */}
            <div className="flex flex-col items-center bg-[#FFD600] px-8 py-6 ml-8 shrink-0">
              <div className="font-display font-black text-black" style={{ fontSize: "72px", lineHeight: 1 }}>5.0</div>
              <div className="font-black text-black" style={{ fontSize: "28px", lineHeight: 1.2 }}>★★★★★</div>
              <div className="font-black text-xs uppercase tracking-widest text-black mt-1">РЕЙТИНГ</div>
            </div>
          </div>

          {/* диагональный разделитель */}
          <div className="relative h-3 my-6 overflow-hidden">
            <div className="absolute inset-0"
              style={{ background: "repeating-linear-gradient(45deg, #FFD600 0px, #FFD600 20px, #000 20px, #000 24px)" }} />
          </div>

          {/* КОНТАКТЫ — БОЛЬШИЕ */}
          <div className="flex items-center gap-4 mb-3">
            <div className="font-black text-base uppercase tracking-[0.3em] text-black">КОНТАКТЫ</div>
            <div className="flex-1 h-0.5 bg-black/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Dash */}
            <div className="flex items-center gap-4 bg-[#FFD600] border-2 border-black px-6 py-6">
              <div className="bg-black p-3 shrink-0">
                <Icon name="Zap" size={32} className="text-[#FFD600]" />
              </div>
              <div>
                <div className="font-black text-sm uppercase tracking-widest text-black font-extrabold mb-1">DASH</div>
                <div className="font-display font-black text-black" style={{ fontSize: "36px", lineHeight: 1 }}>
                  alonso.com
                </div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-black" />
            </div>

            {/* 5vito */}
            <div className="flex items-center gap-4 bg-[#FF2D2D] border-2 border-black px-6 py-6">
              <div className="bg-black p-3 shrink-0">
                <Icon name="User" size={32} className="text-[#FFD600]" />
              </div>
              <div>
                <div className="font-black text-sm uppercase tracking-widest text-white mb-1">5vito</div>
                <div className="font-display font-black text-white" style={{ fontSize: "36px", lineHeight: 1 }}>
                  @294562
                </div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-white" />
            </div>

            {/* Discord */}
            <a
              href="https://discord.gg/ramil707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-black border-2 border-black px-6 py-6 hover:bg-[#FF2D2D] transition-colors group"
            >
              <div className="bg-[#FFD600] p-3 shrink-0">
                <Icon name="MessageCircle" size={32} className="text-black" />
              </div>
              <div>
                <div className="font-black text-sm uppercase tracking-widest text-white mb-1">Discord</div>
                <div className="font-display font-black text-[#FFD600] group-hover:text-white" style={{ fontSize: "36px", lineHeight: 1 }}>
                  ramil707
                </div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-[#FFD600]" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── СТАТИСТИКА ─── */}
      <section className="bg-[#FFD600] py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-0 text-center divide-x divide-black/20">
            <div className="px-4">
              <div className="font-display font-black text-5xl md:text-6xl text-black leading-none">500+</div>
              <div className="font-black text-xs uppercase tracking-widest text-black/60 mt-1">Клиентов</div>
            </div>
            <div className="px-4">
              <div className="font-display font-black text-5xl md:text-6xl text-black leading-none">5.0</div>
              <div className="flex justify-center gap-0.5 mt-1">
                <span className="font-black text-black" style={{ fontSize: "20px" }}>★★★★★</span>
              </div>
            </div>
            <div className="px-4">
              <div className="font-display font-black text-5xl md:text-6xl text-black leading-none">24/7</div>
              <div className="font-black text-xs uppercase tracking-widest text-black/60 mt-1">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-black border-t-4 border-[#FFD600] py-2">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            <div className="font-display font-black text-xs tracking-tight leading-none">
              <span className="text-[#FFD600]">Alonso</span>
              <span className="text-white">.com</span>
            </div>
            <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">Аренда и продажа авто</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 border-2 border-[#FFD600] text-[#FFD600] px-3 py-1 font-black uppercase text-xs">
              <Icon name="Zap" size={11} />
              DASH alonso.com
            </div>
            <div className="flex items-center gap-1.5 border-2 border-[#FF2D2D] text-[#FF2D2D] px-3 py-1 font-black uppercase text-xs">
              <Icon name="User" size={11} />
              5vito @294562
            </div>
            <a
              href="https://discord.gg/ramil707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border-2 border-[#FF6B00] text-[#FF6B00] px-3 py-1 font-black uppercase text-xs hover:bg-[#FF6B00] hover:text-black transition-colors"
            >
              <Icon name="MessageCircle" size={11} />
              Discord — ramil707
            </a>
          </div>

          <div className="text-gray-500 text-xs uppercase tracking-widest">© 2026</div>
        </div>
      </footer>
    </div>
    </div>
  );
}