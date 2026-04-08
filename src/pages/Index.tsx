import Icon from "@/components/ui/icon";

const prices = [
  { label: "Фура / сутки", price: "от 15 000 ₽", icon: "Truck" },
  { label: "Легковое / сутки", price: "от 2 500 ₽", icon: "Car" },
  { label: "Выкуп фур", price: "от 1 200 000 ₽", icon: "BadgeDollarSign" },
  { label: "Продажа легковых", price: "от 350 000 ₽", icon: "CircleDollarSign" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-body print:bg-white">

      {/* ─── ВЕРХНЯЯ СИГНАЛЬНАЯ ПОЛОСА ─── */}
      <div className="bg-[#FFD600] py-2 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-black font-black text-xs uppercase tracking-[0.3em]">⭐⭐⭐⭐⭐ РЕЙТИНГ 5/5</span>
        </div>
        <div className="flex items-center gap-4 text-black font-black text-xs uppercase tracking-wider">
          <span>АРЕНДА ФУР</span>
          <span className="text-[#FF6B00]">▶</span>
          <span>АРЕНДА АВТО</span>
          <span className="text-[#FF6B00]">▶</span>
          <span>ПРОДАЖА</span>
        </div>
      </div>

      {/* ─── ГЛАВНЫЙ ПРИНТ — БОК ФУРЫ ─── */}
      <section className="relative bg-white border-b-8 border-[#FFD600] overflow-hidden">
        {/* левая красная вертикальная полоса */}
        <div className="absolute left-0 top-0 w-6 h-full bg-[#FF2D2D]" />
        {/* правая вертикальная полоса */}
        <div className="absolute right-0 top-0 w-6 h-full bg-[#FF2D2D]" />
        {/* тонкая жёлтая рядом */}
        <div className="absolute left-6 top-0 w-2 h-full bg-[#FFD600]" />
        <div className="absolute right-6 top-0 w-2 h-full bg-[#FFD600]" />

        <div className="px-16 py-12">
          {/* НАЗВАНИЕ ОГРОМНОЕ */}
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="font-display font-black uppercase leading-none tracking-tighter"
                style={{ fontSize: "clamp(80px, 15vw, 200px)", color: "#FF2D2D", WebkitTextStroke: "3px #000" }}>
                RAMIL
              </div>
              <div className="font-display font-black uppercase leading-none tracking-tighter -mt-4"
                style={{ fontSize: "clamp(40px, 8vw, 110px)", color: "#000" }}>
                АРЕНДА & ПРОДАЖА
              </div>
              <div className="font-display font-black uppercase leading-none tracking-tighter"
                style={{ fontSize: "clamp(30px, 5vw, 72px)", color: "#FF6B00" }}>
                ГРУЗОВЫХ И ЛЕГКОВЫХ АВТО
              </div>
            </div>

            {/* рейтинг блок справа */}
            <div className="hidden md:flex flex-col items-center bg-[#FFD600] px-8 py-6 ml-8 shrink-0">
              <div className="font-display font-black text-7xl text-black leading-none">5.0</div>
              <div className="text-2xl mb-1">⭐⭐⭐⭐⭐</div>
              <div className="font-black text-xs uppercase tracking-widest text-black">РЕЙТИНГ</div>
            </div>
          </div>

          {/* диагональный разделитель */}
          <div className="relative h-3 my-4 overflow-hidden">
            <div className="absolute inset-0"
              style={{ background: "repeating-linear-gradient(45deg, #FFD600 0px, #FFD600 20px, #000 20px, #000 24px)" }} />
          </div>

          {/* ЦЕНЫ — ГЛАВНЫЙ БЛОК */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-black mb-4">
            {prices.map((item, i) => (
              <div key={i} className="border border-black p-5 bg-white group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#FFD600] p-1.5">
                    <Icon name={item.icon} size={16} className="text-black" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-wider text-gray-600">
                    {item.label}
                  </span>
                </div>
                <div className="font-display font-black text-2xl md:text-3xl text-[#FF2D2D] leading-tight">
                  {item.price}
                </div>
                <div className="flex items-center gap-1 mt-2 text-[#FF6B00]">
                  <Icon name="ArrowRight" size={12} />
                  <span className="text-xs font-black uppercase tracking-wider">Пиши сейчас</span>
                </div>
              </div>
            ))}
          </div>

          {/* КОНТАКТЫ — БОЛЬШИЕ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Telegram */}
            <a
              href="https://t.me/294562"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#FFD600] border-2 border-black px-6 py-5 hover:bg-[#FF6B00] transition-colors group"
            >
              <div className="bg-black p-3 shrink-0">
                <Icon name="Send" size={28} className="text-[#FFD600] group-hover:text-white" />
              </div>
              <div>
                <div className="font-black text-xs uppercase tracking-widest text-black/60">Telegram</div>
                <div className="font-display font-black text-3xl md:text-4xl text-black leading-none uppercase">
                  @294562
                </div>
              </div>
              <Icon name="ArrowRight" size={28} className="ml-auto text-black" />
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/ramil707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-black border-2 border-black px-6 py-5 hover:bg-[#FF2D2D] transition-colors group"
            >
              <div className="bg-[#FFD600] p-3 shrink-0">
                <Icon name="MessageCircle" size={28} className="text-black" />
              </div>
              <div>
                <div className="font-black text-xs uppercase tracking-widest text-white/60">Discord</div>
                <div className="font-display font-black text-3xl md:text-4xl text-[#FFD600] group-hover:text-white leading-none uppercase">
                  ramil707/5vito
                </div>
              </div>
              <Icon name="ArrowRight" size={28} className="ml-auto text-[#FFD600]" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── УСЛУГИ ─── */}
      <section className="bg-[#111] py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-[#FFD600]" />
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white tracking-tight">
              ЧТО МЫ ПРЕДЛАГАЕМ
            </h2>
            <Icon name="ArrowRight" size={28} className="text-[#FFD600]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#333]">
            {[
              { title: "АРЕНДА ФУР", desc: "Тентованные, рефрижераторы, контейнеровозы. Любой маршрут по России и СНГ.", icon: "Truck", color: "#FFD600", bg: "#181818" },
              { title: "АРЕНДА ЛЕГКОВЫХ", desc: "Эконом, комфорт, бизнес-класс. Без водителя и с водителем. Долгосрочная аренда.", icon: "Car", color: "#FF6B00", bg: "#141414" },
              { title: "ПРОДАЖА АВТО", desc: "Фуры с пробегом и новые. Юридическая чистота, полный пакет документов.", icon: "BadgeCheck", color: "#FF2D2D", bg: "#181818" },
            ].map((s, i) => (
              <div key={i} className="border border-[#333] p-8 hover:translate-y-[-4px] transition-transform cursor-pointer" style={{ background: s.bg }}>
                <div className="inline-flex items-center justify-center p-3 mb-5" style={{ background: s.color }}>
                  <Icon name={s.icon} size={26} className="text-black" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase mb-3 tracking-tight" style={{ color: s.color }}>
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-2 mt-5" style={{ color: s.color }}>
                  <Icon name="ArrowRight" size={14} />
                  <span className="font-black text-xs uppercase tracking-wider">Написать в чат</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── СТАТИСТИКА ─── */}
      <section className="bg-[#FFD600] py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-0 text-center">
            <div className="border-r border-black/20 px-4">
              <div className="font-display font-black text-5xl md:text-6xl text-black leading-none">500+</div>
              <div className="font-black text-xs uppercase tracking-widest text-black/60 mt-1">Клиентов</div>
            </div>
            <div className="border-r border-black/20 px-4">
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

      {/* ─── НИЖНЯЯ КОНТАКТНАЯ ПОЛОСА ─── */}
      <footer className="bg-black border-t-4 border-[#FFD600] py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-black text-4xl tracking-tight leading-none">
              <span className="text-[#FFD600]">RAMIL</span>
              <span className="text-white">707</span>
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Аренда и продажа авто</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://t.me/294562" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#FFD600] text-[#FFD600] px-4 py-2 font-black uppercase text-sm hover:bg-[#FFD600] hover:text-black transition-colors">
              <Icon name="Send" size={16} />
              @294562
            </a>
            <a href="https://discord.gg/ramil707" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#FF6B00] text-[#FF6B00] px-4 py-2 font-black uppercase text-sm hover:bg-[#FF6B00] hover:text-black transition-colors">
              <Icon name="MessageCircle" size={16} />
              ramil707/5vito
            </a>
          </div>

          <div className="text-gray-700 text-xs uppercase tracking-widest">© 2026 · Россия и СНГ</div>
        </div>
      </footer>
    </div>
  );
}
