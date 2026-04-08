import Icon from "@/components/ui/icon";

const W = 3840;
const H = 2880;

function drawPNG() {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const c = canvas.getContext("2d")!;

  // фон
  c.fillStyle = "#ffffff";
  c.fillRect(0, 0, W, H);

  // ── ВЕРХНЯЯ ПОЛОСА ──
  c.fillStyle = "#FFD600";
  c.fillRect(0, 0, W, 80);
  c.fillStyle = "#000";
  c.fillRect(0, 80, W, 8);
  c.font = "bold 36px Arial, sans-serif";
  c.fillStyle = "#000";
  c.textBaseline = "middle";
  c.fillText("★★★★★  РЕЙТИНГ 5/5", 48, 44);
  c.textAlign = "right";
  c.fillText("АРЕНДА ФУР  ▶  АРЕНДА АВТО  ▶  ПРОДАЖА", W - 48, 44);
  c.textAlign = "left";

  // ── БОКОВЫЕ ПОЛОСЫ ──
  const mainTop = 88;
  const mainH = 1900;
  c.fillStyle = "#FF2D2D";
  c.fillRect(0, mainTop, 48, mainH);
  c.fillRect(W - 48, mainTop, 48, mainH);
  c.fillStyle = "#FFD600";
  c.fillRect(48, mainTop, 16, mainH);
  c.fillRect(W - 64, mainTop, 16, mainH);

  // ── ЗАГОЛОВОК ──
  const tx = 128;
  let ty = mainTop + 80;

  // Alonso.com
  c.font = "900 200px Arial Black, Arial, sans-serif";
  c.fillStyle = "#FF2D2D";
  c.fillText("Alonso.com", tx, ty);
  c.strokeStyle = "#000";
  c.lineWidth = 6;
  c.strokeText("Alonso.com", tx, ty);
  ty += 220;

  // АРЕНДА & ПРОДАЖА
  c.font = "900 130px Arial Black, Arial, sans-serif";
  c.fillStyle = "#000";
  c.lineWidth = 0;
  c.fillText("АРЕНДА & ПРОДАЖА", tx, ty);
  ty += 150;

  // ГРУЗОВЫХ И ЛЕГКОВЫХ АВТО
  c.font = "900 90px Arial Black, Arial, sans-serif";
  c.fillStyle = "#FF6B00";
  c.fillText("ГРУЗОВЫХ И ЛЕГКОВЫХ АВТО", tx, ty);

  // ── РЕЙТИНГ БЛОК ──
  const rb = { x: W - 560, y: mainTop + 60, w: 440, h: 380 };
  c.fillStyle = "#FFD600";
  c.fillRect(rb.x, rb.y, rb.w, rb.h);
  c.font = "900 180px Arial Black, Arial, sans-serif";
  c.fillStyle = "#000";
  c.textAlign = "center";
  c.fillText("5.0", rb.x + rb.w / 2, rb.y + 190);
  c.font = "bold 72px Arial, sans-serif";
  c.fillText("★★★★★", rb.x + rb.w / 2, rb.y + 290);
  c.font = "bold 32px Arial, sans-serif";
  c.fillText("РЕЙТИНГ", rb.x + rb.w / 2, rb.y + 355);
  c.textAlign = "left";

  // ── ДИАГОНАЛЬНАЯ ПОЛОСА ──
  ty = mainTop + 600;
  for (let x = 0; x < W; x += 40) {
    c.fillStyle = x % 80 < 40 ? "#FFD600" : "#000";
    c.fillRect(x, ty, 40, 24);
  }

  // ── КОНТАКТЫ подпись ──
  ty += 60;
  c.font = "900 40px Arial Black, Arial, sans-serif";
  c.fillStyle = "#000";
  c.fillText("КОНТАКТЫ", tx, ty + 30);
  c.fillStyle = "rgba(0,0,0,0.4)";
  c.fillRect(tx + 340, ty + 18, W - tx - 340 - 128, 4);

  // ── КАРТОЧКИ КОНТАКТОВ ──
  ty += 70;
  const cardW = (W - 128 * 2 - 32 * 2) / 3;
  const cardH = 280;
  const cards = [
    { bg: "#FFD600", label: "DASH", value: "alonso.com", textColor: "#000", labelColor: "#000" },
    { bg: "#FF2D2D", label: "5vito", value: "@294562", textColor: "#fff", labelColor: "#fff" },
    { bg: "#000000", label: "Discord", value: "ramil707", textColor: "#FFD600", labelColor: "#fff" },
  ];
  cards.forEach((card, i) => {
    const cx = tx + i * (cardW + 32);
    c.fillStyle = card.bg;
    c.strokeStyle = "#000";
    c.lineWidth = 4;
    c.fillRect(cx, ty, cardW, cardH);
    c.strokeRect(cx, ty, cardW, cardH);

    // иконка фон
    c.fillStyle = card.bg === "#000000" ? "#FFD600" : "#000";
    c.fillRect(cx + 24, ty + 24, 80, 80);

    // label
    c.font = "bold 32px Arial, sans-serif";
    c.fillStyle = card.labelColor;
    c.fillText(card.label, cx + 130, ty + 80);

    // value
    c.font = "900 72px Arial Black, Arial, sans-serif";
    c.fillStyle = card.textColor;
    c.fillText(card.value, cx + 130, ty + 190);
  });

  // ── СТАТИСТИКА ──
  const statsY = mainTop + mainH;
  c.fillStyle = "#FFD600";
  c.fillRect(0, statsY, W, 260);
  const stats = [
    { val: "500+", label: "Клиентов" },
    { val: "5.0", label: "★★★★★" },
    { val: "24/7", label: "Поддержка" },
  ];
  stats.forEach((s, i) => {
    const sx = (W / 3) * i;
    c.textAlign = "center";
    c.font = "900 120px Arial Black, Arial, sans-serif";
    c.fillStyle = "#000";
    c.fillText(s.val, sx + W / 6, statsY + 145);
    c.font = "bold 36px Arial, sans-serif";
    c.fillStyle = "rgba(0,0,0,0.6)";
    c.fillText(s.label, sx + W / 6, statsY + 210);
    if (i < 2) {
      c.fillStyle = "rgba(0,0,0,0.2)";
      c.fillRect(sx + W / 3 - 2, statsY + 20, 4, 220);
    }
  });

  // ── НИЖНИЙ ФУТЕР ──
  const footerY = statsY + 260;
  c.fillStyle = "#000";
  c.fillRect(0, footerY, W, H - footerY);
  c.fillStyle = "#FFD600";
  c.fillRect(0, footerY, W, 8);

  c.textAlign = "left";
  c.font = "900 36px Arial Black, Arial, sans-serif";
  c.fillStyle = "#FFD600";
  c.fillText("Alonso", 48, footerY + 72);
  c.fillStyle = "#fff";
  const aw = c.measureText("Alonso").width;
  c.fillText(".com", 48 + aw, footerY + 72);

  c.font = "bold 24px Arial, sans-serif";
  c.fillStyle = "#9ca3af";
  c.fillText("АРЕНДА И ПРОДАЖА АВТО", 48, footerY + 110);

  // кнопки футера
  const btns = ["DASH  alonso.com", "5vito  @294562", "Discord — ramil707"];
  const bcolors = ["#FFD600", "#FF2D2D", "#FF6B00"];
  let bx = W / 2 - 700;
  btns.forEach((b, i) => {
    c.strokeStyle = bcolors[i];
    c.lineWidth = 4;
    c.strokeRect(bx, footerY + 30, 420, 80);
    c.font = "bold 28px Arial, sans-serif";
    c.fillStyle = bcolors[i];
    c.textAlign = "center";
    c.fillText(b, bx + 210, footerY + 78);
    bx += 450;
  });

  c.textAlign = "right";
  c.font = "bold 24px Arial, sans-serif";
  c.fillStyle = "#6b7280";
  c.fillText("© 2026", W - 48, footerY + 80);

  return canvas;
}

export default function Index() {
  const downloadPNG = () => {
    const canvas = drawPNG();
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
    <div className="bg-white text-black overflow-x-hidden font-body" style={{ aspectRatio: "4/3", width: "100%", maxHeight: "100vh", margin: "0 auto", overflow: "hidden" }}>

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