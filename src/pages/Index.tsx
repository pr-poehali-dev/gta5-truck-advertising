import Icon from "@/components/ui/icon";

const TRUCK_IMG =
  "https://cdn.poehali.dev/projects/2c07ed08-1efe-42cb-b82f-0198877e8cb4/files/86f1fc0f-2433-4fc1-ac94-f355a771f76d.jpg";

const prices = [
  { label: "Фура / сутки", price: "от 15 000 ₽", icon: "Truck" },
  { label: "Легковое / сутки", price: "от 2 500 ₽", icon: "Car" },
  { label: "Выкуп фур", price: "от 1 200 000 ₽", icon: "BadgeDollarSign" },
  { label: "Продажа легковых", price: "от 350 000 ₽", icon: "CircleDollarSign" },
];

const services = [
  {
    title: "АРЕНДА ФУР",
    desc: "Тентованные, рефрижераторы, контейнеровозы. Любой маршрут по России и СНГ.",
    icon: "Truck",
    color: "#FFD600",
  },
  {
    title: "АРЕНДА ЛЕГКОВЫХ",
    desc: "Эконом, комфорт, бизнес-класс. Без водителя и с водителем. Долгосрочная аренда.",
    icon: "Car",
    color: "#FF6B00",
  },
  {
    title: "ПРОДАЖА АВТО",
    desc: "Фуры с пробегом и новые, легковые авто. Документы, юридическая чистота, гарантия.",
    icon: "BadgeCheck",
    color: "#FF2D2D",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${TRUCK_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />
        <div className="absolute top-0 right-0 w-3 h-full bg-[#FFD600]" />
        <div className="absolute top-0 right-8 w-1 h-full bg-[#FF6B00] opacity-70" />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 bg-[#FFD600] text-black px-5 py-2 mb-8 font-black text-sm uppercase tracking-widest">
            <span>⭐⭐⭐⭐⭐</span>
            <span>РЕЙТИНГ 5/5 · ЛУЧШИЙ СЕРВИС</span>
          </div>

          <h1 className="font-display text-7xl md:text-[9rem] font-black uppercase leading-none mb-1 tracking-tight">
            <span className="text-[#FFD600]">RAMIL</span>
          </h1>
          <h2 className="font-display text-4xl md:text-7xl font-black uppercase leading-none mb-1 text-white tracking-tight">
            АРЕНДА
          </h2>
          <h2 className="font-display text-4xl md:text-7xl font-black uppercase leading-none mb-10 tracking-tight">
            <span className="text-[#FF6B00]">&amp; ПРОДАЖА АВТО</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
            Фуры и легковые авто — аренда и продажа.<br />
            Быстро. Надёжно. По всей России и СНГ.
          </p>

          <div className="flex items-center gap-3 text-[#FFD600] mb-10">
            <Icon name="ArrowDown" size={28} />
            <span className="font-black uppercase tracking-widest text-sm">СМОТРЕТЬ ЦЕНЫ</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/294562"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#FFD600] text-black px-7 py-4 font-black uppercase text-lg hover:bg-white transition-colors"
            >
              <Icon name="Send" size={22} />
              TELEGRAM @294562
            </a>
            <a
              href="https://discord.com/users/ramil707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-[#FF6B00] text-[#FF6B00] px-7 py-4 font-black uppercase text-lg hover:bg-[#FF6B00] hover:text-black transition-colors"
            >
              <Icon name="MessageCircle" size={22} />
              DISCORD ramil707
            </a>
          </div>
        </div>
      </section>

      {/* ─── ПОЛОСА ЦЕНЫ НА БОРТУ ─── */}
      <section className="bg-[#FFD600] py-3 overflow-hidden">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <Icon name="ArrowRight" size={22} className="text-black" />
          <span className="font-black uppercase text-black text-sm tracking-[0.3em]">
            АКТУАЛЬНЫЕ ЦЕНЫ НА АРЕНДУ И ПРОДАЖУ
          </span>
          <Icon name="ArrowRight" size={22} className="text-black" />
        </div>
      </section>

      {/* ─── ПРАЙС ─── */}
      <section className="bg-[#111111] py-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#222]">
            {prices.map((item, i) => (
              <div
                key={i}
                className="relative border border-[#222] p-8 hover:bg-[#1A1A1A] transition-colors group cursor-pointer"
              >
                <div className="text-[#FFD600] font-black text-6xl opacity-10 absolute top-3 right-4 font-display leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#FFD600] p-2">
                    <Icon name={item.icon} size={20} className="text-black" />
                  </div>
                  <span className="text-gray-500 uppercase text-xs tracking-widest font-bold">
                    {item.label}
                  </span>
                </div>
                <div className="font-display font-black text-3xl text-[#FFD600] group-hover:text-white transition-colors leading-tight">
                  {item.price}
                </div>
                <div className="flex items-center gap-2 mt-4 text-[#FF6B00]">
                  <Icon name="ArrowRight" size={14} />
                  <span className="text-xs font-bold uppercase tracking-wider">Написать</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── УСЛУГИ ─── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-14">
            <div className="h-1 w-16 bg-[#FFD600]" />
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight">
              НАШИ УСЛУГИ
            </h2>
            <Icon name="ArrowRight" size={32} className="text-[#FFD600]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="relative border-l-4 bg-[#111111] p-8 hover:translate-x-2 transition-transform group cursor-pointer"
                style={{ borderColor: s.color }}
              >
                <div
                  className="inline-flex items-center justify-center p-3 mb-5"
                  style={{ background: s.color }}
                >
                  <Icon name={s.icon} size={28} className="text-black" />
                </div>
                <h3
                  className="font-display font-black text-2xl uppercase mb-3 tracking-tight"
                  style={{ color: s.color }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                <div className="flex items-center gap-2 mt-6" style={{ color: s.color }}>
                  <Icon name="ArrowRight" size={16} />
                  <span className="font-black uppercase text-sm tracking-wider">Заказать</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── РЕЙТИНГ ─── */}
      <section className="py-16 bg-[#111111] border-y border-[#222]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display font-black text-7xl text-[#FFD600] mb-2 leading-none">500+</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm font-bold mt-2">
                Довольных клиентов
              </div>
            </div>
            <div className="border-x border-[#222]">
              <div className="font-display font-black text-7xl text-[#FFD600] mb-2 leading-none">5.0</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FFD600] text-2xl">⭐</span>
                ))}
              </div>
              <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">
                Рейтинг качества
              </div>
            </div>
            <div>
              <div className="font-display font-black text-7xl text-[#FFD600] mb-2 leading-none">24/7</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm font-bold mt-2">
                Поддержка клиентов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── КОНТАКТЫ ─── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 bg-[#FF6B00]" />
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight">
              СВЯЗАТЬСЯ
            </h2>
            <Icon name="ArrowRight" size={32} className="text-[#FF6B00]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <a
              href="https://t.me/294562"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#FFD600] text-black p-7 hover:scale-105 transition-transform group"
            >
              <Icon name="Send" size={36} />
              <div>
                <div className="font-black text-2xl uppercase">Telegram</div>
                <div className="font-bold text-lg opacity-70">@294562</div>
              </div>
              <Icon name="ArrowRight" size={24} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://discord.com/users/ramil707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#111111] border-2 border-[#FF6B00] text-[#FF6B00] p-7 hover:scale-105 transition-transform group"
            >
              <Icon name="MessageCircle" size={36} />
              <div>
                <div className="font-black text-2xl uppercase">Discord</div>
                <div className="font-bold text-lg opacity-70">ramil707</div>
              </div>
              <Icon name="ArrowRight" size={24} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-black border-t-4 border-[#FFD600] py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-black text-2xl tracking-tight">
            <span className="text-[#FFD600]">RAMIL</span>
            <span className="text-white">707</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>⭐⭐⭐⭐⭐</span>
            <span>Аренда и продажа авто · Россия и СНГ</span>
          </div>
          <div className="text-gray-700 text-sm">© 2026</div>
        </div>
      </footer>
    </div>
  );
}