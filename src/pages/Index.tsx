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
      <div style={{ background: "#FFD600", borderBottom: "4px solid #000", padding: "6px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#000", fontWeight: 900, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em" }}>★★★★★ РЕЙТИНГ 5/5</span>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#000", fontWeight: 900, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          <span>АРЕНДА ФУР</span>
          <span style={{ color: "#FF2D2D" }}>▶</span>
          <span>АРЕНДА АВТО</span>
          <span style={{ color: "#FF2D2D" }}>▶</span>
          <span>ПРОДАЖА</span>
        </div>
      </div>

      {/* ─── ГЛАВНЫЙ ПРИНТ ─── */}
      <section style={{ position: "relative", background: "#fff", borderBottom: "8px solid #FFD600", overflow: "hidden" }}>
        {/* боковые полосы */}
        <div style={{ position: "absolute", left: 0, top: 0, width: "24px", height: "100%", background: "#FF2D2D" }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: "24px", height: "100%", background: "#FF2D2D" }} />
        <div style={{ position: "absolute", left: "24px", top: 0, width: "8px", height: "100%", background: "#FFD600" }} />
        <div style={{ position: "absolute", right: "24px", top: 0, width: "8px", height: "100%", background: "#FFD600" }} />

        <div style={{ padding: "40px 64px" }}>

          {/* НАЗВАНИЕ + РЕЙТИНГ */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ fontSize: "120px", color: "#FF2D2D", WebkitTextStroke: "3px #000", lineHeight: 1, fontWeight: 900, letterSpacing: "-2px" }}>
                Alonso.com
              </div>
              <div style={{ fontSize: "72px", color: "#000", lineHeight: 1, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px" }}>
                АРЕНДА & ПРОДАЖА
              </div>
              <div style={{ fontSize: "48px", color: "#FF6B00", lineHeight: 1, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px" }}>
                ГРУЗОВЫХ И ЛЕГКОВЫХ АВТО
              </div>
            </div>

            {/* рейтинг блок */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#FFD600", padding: "24px 32px", marginLeft: "32px", flexShrink: 0 }}>
              <div style={{ fontSize: "72px", color: "#000", lineHeight: 1, fontWeight: 900 }}>5.0</div>
              <div style={{ fontSize: "28px", color: "#000", lineHeight: 1.2, fontWeight: 900 }}>★★★★★</div>
              <div style={{ fontSize: "11px", color: "#000", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 900, marginTop: "4px" }}>РЕЙТИНГ</div>
            </div>
          </div>

          {/* диагональный разделитель */}
          <div style={{ height: "12px", margin: "20px 0", overflow: "hidden", background: "repeating-linear-gradient(45deg, #FFD600 0px, #FFD600 20px, #000 20px, #000 24px)" }} />

          {/* КОНТАКТЫ — БОЛЬШИЕ */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <div style={{ fontWeight: 900, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#000" }}>КОНТАКТЫ</div>
            <div style={{ flex: 1, height: "2px", background: "rgba(0,0,0,0.4)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            {/* Dash */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#FFD600", border: "2px solid #000", padding: "24px" }}>
              <div style={{ background: "#000", padding: "12px", flexShrink: 0 }}>
                <Icon name="Zap" size={32} className="text-[#FFD600]" />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#000", marginBottom: "4px" }}>DASH</div>
                <div style={{ fontWeight: 900, fontSize: "36px", lineHeight: 1, color: "#000" }}>alonso.com</div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-black" />
            </div>

            {/* 5vito */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#FF2D2D", border: "2px solid #000", padding: "24px" }}>
              <div style={{ background: "#000", padding: "12px", flexShrink: 0 }}>
                <Icon name="User" size={32} className="text-[#FFD600]" />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff", marginBottom: "4px" }}>5vito</div>
                <div style={{ fontWeight: 900, fontSize: "36px", lineHeight: 1, color: "#fff" }}>@294562</div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-white" />
            </div>

            {/* Discord */}
            <a href="https://discord.gg/ramil707" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "16px", background: "#000", border: "2px solid #000", padding: "24px", textDecoration: "none" }}>
              <div style={{ background: "#FFD600", padding: "12px", flexShrink: 0 }}>
                <Icon name="MessageCircle" size={32} className="text-black" />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff", marginBottom: "4px" }}>Discord</div>
                <div style={{ fontWeight: 900, fontSize: "36px", lineHeight: 1, color: "#FFD600" }}>ramil707</div>
              </div>
              <Icon name="ArrowRight" size={32} className="ml-auto text-[#FFD600]" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── СТАТИСТИКА ─── */}
      <section style={{ background: "#FFD600", padding: "32px 0" }}>
        <div style={{ display: "flex", textAlign: "center" }}>
          <div style={{ flex: 1, padding: "0 16px", borderRight: "1px solid rgba(0,0,0,0.2)" }}>
            <div style={{ fontWeight: 900, fontSize: "56px", color: "#000", lineHeight: 1 }}>500+</div>
            <div style={{ fontWeight: 900, fontSize: "11px", color: "rgba(0,0,0,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>Клиентов</div>
          </div>
          <div style={{ flex: 1, padding: "0 16px", borderRight: "1px solid rgba(0,0,0,0.2)" }}>
            <div style={{ fontWeight: 900, fontSize: "56px", color: "#000", lineHeight: 1 }}>5.0</div>
            <div style={{ fontWeight: 900, fontSize: "20px", color: "#000", marginTop: "4px" }}>★★★★★</div>
          </div>
          <div style={{ flex: 1, padding: "0 16px" }}>
            <div style={{ fontWeight: 900, fontSize: "56px", color: "#000", lineHeight: 1 }}>24/7</div>
            <div style={{ fontWeight: 900, fontSize: "11px", color: "rgba(0,0,0,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>Поддержка</div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#000", borderTop: "4px solid #FFD600", padding: "8px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: "12px", lineHeight: 1 }}>
            <span style={{ color: "#FFD600" }}>Alonso</span>
            <span style={{ color: "#fff" }}>.com</span>
          </div>
          <div style={{ color: "#9ca3af", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "3px" }}>Аренда и продажа авто</div>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ border: "2px solid #FFD600", color: "#FFD600", padding: "3px 10px", fontWeight: 900, fontSize: "11px", textTransform: "uppercase" }}>
            DASH alonso.com
          </div>
          <div style={{ border: "2px solid #FF2D2D", color: "#FF2D2D", padding: "3px 10px", fontWeight: 900, fontSize: "11px", textTransform: "uppercase" }}>
            5vito @294562
          </div>
          <div style={{ border: "2px solid #FF6B00", color: "#FF6B00", padding: "3px 10px", fontWeight: 900, fontSize: "11px", textTransform: "uppercase" }}>
            Discord — ramil707
          </div>
        </div>

        <div style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>© 2026</div>
      </footer>
    </div>
    </div>
  );
}