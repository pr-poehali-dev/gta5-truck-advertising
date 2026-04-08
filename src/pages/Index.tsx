import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="bg-white text-black overflow-x-hidden font-body" style={{ aspectRatio: "4/3", width: "100%", maxHeight: "100vh", margin: "0 auto", overflow: "hidden" }}>

      {/* ─── ВЕРХНЯЯ СИГНАЛЬНАЯ ПОЛОСА ─── */}
      <div className="bg-[#FFD600] py-2 px-6 flex items-center justify-between">
        <span className="text-black font-black text-xs uppercase tracking-[0.3em]">⭐⭐⭐⭐⭐ РЕЙТИНГ 5/5</span>
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
                className="font-display font-black leading-none tracking-tighter"
                style={{ fontSize: "clamp(80px, 15vw, 200px)", color: "#FF2D2D", WebkitTextStroke: "3px #000" }}
              >
                Alonso.com
              </div>
              <div
                className="font-display font-black uppercase leading-none tracking-tighter -mt-4"
                style={{ fontSize: "clamp(40px, 8vw, 110px)", color: "#000" }}
              >
                АРЕНДА & ПРОДАЖА
              </div>
              <div
                className="font-display font-black uppercase leading-none tracking-tighter"
                style={{ fontSize: "clamp(30px, 5vw, 72px)", color: "#FF6B00" }}
              >
                ГРУЗОВЫХ И ЛЕГКОВЫХ АВТО
              </div>
            </div>

            {/* рейтинг блок */}
            <div className="hidden md:flex flex-col items-center bg-[#FFD600] px-8 py-6 ml-8 shrink-0">
              <div className="font-display font-black text-7xl text-black leading-none">5.0</div>
              <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
              <div className="font-black text-xs uppercase tracking-widest text-black">РЕЙТИНГ</div>
            </div>
          </div>

          {/* диагональный разделитель */}
          <div className="relative h-3 my-6 overflow-hidden">
            <div className="absolute inset-0"
              style={{ background: "repeating-linear-gradient(45deg, #FFD600 0px, #FFD600 20px, #000 20px, #000 24px)" }} />
          </div>

          {/* КОНТАКТЫ — БОЛЬШИЕ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Telegram */}
            <a
              href="https://t.me/5vito"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#FFD600] border-2 border-black px-6 py-6 hover:bg-[#FF6B00] transition-colors group"
            >
              <div className="bg-black p-3 shrink-0">
                <Icon name="Send" size={32} className="text-[#FFD600] group-hover:text-white" />
              </div>
              <div>
                <div className="font-black text-xs uppercase tracking-widest text-black/50 mb-1">Telegram</div>
                <div className="font-display font-black leading-none text-black"
                  style={{ fontSize: "clamp(22px, 4vw, 48px)" }}>
                  @5vito
                </div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-black" />
            </a>

            {/* 5vito */}
            <div className="flex items-center gap-4 bg-[#FF2D2D] border-2 border-black px-6 py-6">
              <div className="bg-black p-3 shrink-0">
                <Icon name="User" size={32} className="text-[#FFD600]" />
              </div>
              <div>
                <div className="font-black text-xs uppercase tracking-widest text-white/60 mb-1">5vito</div>
                <div className="font-display font-black leading-none text-white"
                  style={{ fontSize: "clamp(22px, 4vw, 48px)" }}>
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
                <div className="font-black text-xs uppercase tracking-widest text-white/40 mb-1">Discord</div>
                <div className="font-display font-black leading-none text-[#FFD600] group-hover:text-white"
                  style={{ fontSize: "clamp(22px, 4vw, 48px)" }}>
                  ramil707 / 5vito
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
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg">⭐</span>)}
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
      <footer className="bg-black border-t-4 border-[#FFD600] py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-display font-black text-base tracking-tight leading-none">
              <span className="text-[#FFD600]">Alonso</span>
              <span className="text-white">.com</span>
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Аренда и продажа авто</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://t.me/5vito"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#FFD600] text-[#FFD600] px-3 py-1.5 font-black uppercase text-xs hover:bg-[#FFD600] hover:text-black transition-colors"
            >
              <Icon name="Send" size={12} />
              @5vito
            </a>
            <a
              href="https://discord.gg/ramil707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#FF6B00] text-[#FF6B00] px-3 py-1.5 font-black uppercase text-xs hover:bg-[#FF6B00] hover:text-black transition-colors"
            >
              <Icon name="MessageCircle" size={12} />
              ramil707
            </a>
          </div>

          <div className="text-gray-700 text-xs uppercase tracking-widest">© 2026</div>
        </div>
      </footer>
    </div>
  );
}