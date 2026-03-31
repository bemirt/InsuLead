import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    ad: "",
    telefon: "",
    arac: "",
    sehir: "",
  });

  const [loading, setLoading] = useState(false);

  const path = window.location.pathname;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/xreokbvj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      setTimeout(() => {
        window.location.href = "/tesekkur";
      }, 1600);
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      setLoading(false);
    }
  };

  if (path === "/tesekkur") {
    return (
      <div style={pageWrapStyle}>
        <div style={centerCardStyle}>
          <div style={successIconStyle}>✓</div>
          <h1 style={successTitleStyle}>Talebiniz alındı</h1>
          <p style={successTextStyle}>
            Bilgileriniz bize ulaştı. Size en kısa sürede dönüş yapacağız.
          </p>
          <p style={successSubTextStyle}>
            Telefonunuz açık olsun. Dilerseniz WhatsApp üzerinden de yazabilirsiniz.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <a href="/" style={primaryButtonStyle}>
              Ana sayfaya dön
            </a>
            <a
              href="https://wa.me/905050727306"
              target="_blank"
              rel="noreferrer"
              style={whatsappButtonStyle}
            >
              WhatsApp’tan yaz
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={pageWrapStyle}>
        <div style={centerCardStyle}>
          <div style={spinnerStyle}></div>
          <h1 style={loadingTitleStyle}>Teklif süreci hazırlanıyor</h1>
          <p style={loadingTextStyle}>
            Bilgileriniz alındı. Uygun seçenekler için ön değerlendirme yapılıyor.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={appStyle}>
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <div style={heroLeftStyle}>
            <div style={miniBadgeStyle}>INSULEAD</div>

            <h1 style={heroTitleStyle}>
              Sigorta teklif sürecini daha hızlı ve daha net hale getirin
            </h1>

            <p style={heroTextStyle}>
              Araç bilgilerinizle başvurunuzu bırakın, size uygun teklif süreci için
              kısa süre içinde dönüş sağlayalım. Gereksiz uğraşmadan, net ve hızlı ilerleyin.
            </p>

            <div style={heroPointsWrapStyle}>
              <div style={heroPointStyle}>✓ Ücretsiz ön değerlendirme</div>
              <div style={heroPointStyle}>✓ Hızlı geri dönüş</div>
              <div style={heroPointStyle}>✓ Telefon ve WhatsApp desteği</div>
            </div>

            <div style={trustGridStyle}>
              <div style={trustCardStyle}>
                <div style={trustCardNumberStyle}>1</div>
                <div>
                  <div style={trustCardTitleStyle}>Bilginizi bırakın</div>
                  <div style={trustCardTextStyle}>
                    Temel araç ve iletişim bilgilerinizi iletin.
                  </div>
                </div>
              </div>

              <div style={trustCardStyle}>
                <div style={trustCardNumberStyle}>2</div>
                <div>
                  <div style={trustCardTitleStyle}>Ön değerlendirme yapılsın</div>
                  <div style={trustCardTextStyle}>
                    Talebiniz kısa sürede incelensin.
                  </div>
                </div>
              </div>

              <div style={trustCardStyle}>
                <div style={trustCardNumberStyle}>3</div>
                <div>
                  <div style={trustCardTitleStyle}>Size dönüş sağlansın</div>
                  <div style={trustCardTextStyle}>
                    Uygun süreç ve seçenekler size aktarılsın.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={heroRightStyle}>
            <div style={formCardStyle}>
              <h2 style={formTitleStyle}>Hızlı teklif talebi oluşturun</h2>
              <p style={formSubTitleStyle}>
                Formu doldurun, sizinle kısa süre içinde iletişime geçelim.
              </p>

              <form onSubmit={handleSubmit} style={formStyle}>
                <input
                  name="ad"
                  placeholder="Adınız Soyadınız"
                  required
                  value={form.ad}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="telefon"
                  placeholder="Telefon Numaranız"
                  required
                  value={form.telefon}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="arac"
                  placeholder="Araç Marka / Model"
                  required
                  value={form.arac}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="sehir"
                  placeholder="Bulunduğunuz Şehir"
                  required
                  value={form.sehir}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <button type="submit" style={submitButtonStyle}>
                  Teklif sürecini başlat
                </button>
              </form>

              <div style={contactLinksWrapStyle}>
                <a href="tel:05050727306" style={contactLinkStyle}>
                  📞 Hemen arayın
                </a>

                <a
                  href="https://wa.me/905050727306"
                  target="_blank"
                  rel="noreferrer"
                  style={contactWhatsappStyle}
                >
                  💬 WhatsApp’tan yazın
                </a>
              </div>

              <div style={securityBoxStyle}>
                <div style={securityTitleStyle}>Bilgi güvenliği notu</div>
                <div style={securityTextStyle}>
                  Paylaştığınız bilgiler yalnızca teklif süreciyle ilgili dönüş sağlamak amacıyla kullanılır.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <h2 style={sectionTitleStyle}>Neden bu kadar kısa bir form?</h2>
          <p style={sectionTextStyle}>
            Çünkü ilk aşamada sizden onlarca detay istemek dönüşümü düşürür. Önce temel
            bilgileri alırız, ardından ihtiyaç halinde eksik detaylar sizden hızlıca tamamlanır.
          </p>

          <div style={benefitsGridStyle}>
            <div style={benefitCardStyle}>
              <div style={benefitTitleStyle}>Daha hızlı başlangıç</div>
              <div style={benefitTextStyle}>
                Uzun formlar yerine sade bir başlangıç akışı sunar.
              </div>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitTitleStyle}>Daha net iletişim</div>
              <div style={benefitTextStyle}>
                Talebiniz alındıktan sonra doğrudan sizinle iletişim kurulur.
              </div>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitTitleStyle}>Daha az uğraş</div>
              <div style={benefitTextStyle}>
                İlk adımda yalnızca gerekli temel bilgiler istenir.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={faqSectionStyle}>
        <div style={sectionInnerStyle}>
          <h2 style={sectionTitleStyle}>Sık sorulan sorular</h2>

          <div style={faqListStyle}>
            <div style={faqItemStyle}>
              <div style={faqQuestionStyle}>Formu doldurduktan sonra ne oluyor?</div>
              <div style={faqAnswerStyle}>
                Başvurunuz alınıyor ve kısa süre içinde size dönüş sağlanıyor.
              </div>
            </div>

            <div style={faqItemStyle}>
              <div style={faqQuestionStyle}>Bu aşamada ödeme yapıyor muyum?</div>
              <div style={faqAnswerStyle}>
                Hayır. İlk başvuru ve ön değerlendirme aşaması ücretsizdir.
              </div>
            </div>

            <div style={faqItemStyle}>
              <div style={faqQuestionStyle}>Aramak yerine WhatsApp’tan yazabilir miyim?</div>
              <div style={faqAnswerStyle}>
                Evet. Sayfadaki WhatsApp bağlantısı üzerinden doğrudan yazabilirsiniz.
              </div>
            </div>

            <div style={faqItemStyle}>
              <div style={faqQuestionStyle}>Hangi bilgileri paylaşmam gerekiyor?</div>
              <div style={faqAnswerStyle}>
                Ad, telefon, araç marka/model ve şehir bilgisi başlangıç için yeterlidir.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={bottomCtaSectionStyle}>
        <div style={bottomCtaCardStyle}>
          <h2 style={bottomCtaTitleStyle}>Hazırsanız başlayalım</h2>
          <p style={bottomCtaTextStyle}>
            Formu doldurun veya doğrudan telefon / WhatsApp üzerinden iletişime geçin.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#top" style={primaryButtonStyle}>
              Form alanına dön
            </a>
            <a
              href="https://wa.me/905050727306"
              target="_blank"
              rel="noreferrer"
              style={whatsappButtonStyle}
            >
              WhatsApp’tan yaz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const appStyle = {
  fontFamily: "Inter, Arial, sans-serif",
  backgroundColor: "#f5f7fb",
  color: "#111827",
};

const pageWrapStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #f5f7fb 0%, #eef2f8 100%)",
  padding: "20px",
};

const centerCardStyle = {
  width: "100%",
  maxWidth: "620px",
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  padding: "44px 30px",
  textAlign: "center",
  boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
};

const successIconStyle = {
  width: "72px",
  height: "72px",
  borderRadius: "999px",
  backgroundColor: "#dcfce7",
  color: "#166534",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
  fontWeight: "bold",
  margin: "0 auto 20px auto",
};

const successTitleStyle = {
  fontSize: "40px",
  lineHeight: "1.1",
  margin: "0 0 14px 0",
};

const successTextStyle = {
  fontSize: "20px",
  color: "#1f2937",
  margin: "0 0 10px 0",
  lineHeight: "1.5",
};

const successSubTextStyle = {
  fontSize: "16px",
  color: "#6b7280",
  margin: 0,
  lineHeight: "1.5",
};

const loadingTitleStyle = {
  fontSize: "34px",
  margin: "12px 0 10px 0",
};

const loadingTextStyle = {
  fontSize: "18px",
  color: "#4b5563",
  margin: 0,
  lineHeight: "1.5",
};

const spinnerStyle = {
  width: "54px",
  height: "54px",
  borderRadius: "999px",
  border: "5px solid #e5e7eb",
  borderTop: "5px solid #111827",
  margin: "0 auto 10px auto",
};

const heroSectionStyle = {
  padding: "40px 20px 24px",
};

const heroContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "28px",
  alignItems: "stretch",
};

const heroLeftStyle = {
  background: "linear-gradient(135deg, #0f172a 0%, #111827 60%, #1f2937 100%)",
  color: "white",
  borderRadius: "28px",
  padding: "36px",
  boxShadow: "0 18px 50px rgba(15, 23, 42, 0.18)",
};

const heroRightStyle = {
  display: "flex",
};

const miniBadgeStyle = {
  display: "inline-block",
  backgroundColor: "rgba(255,255,255,0.12)",
  color: "#e5e7eb",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "0.7px",
  marginBottom: "18px",
};

const heroTitleStyle = {
  fontSize: "46px",
  lineHeight: "1.04",
  margin: "0 0 18px 0",
};

const heroTextStyle = {
  fontSize: "18px",
  lineHeight: "1.65",
  color: "#d1d5db",
  margin: "0 0 22px 0",
  maxWidth: "720px",
};

const heroPointsWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "28px",
};

const heroPointStyle = {
  backgroundColor: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#f9fafb",
  borderRadius: "999px",
  padding: "10px 14px",
  fontSize: "14px",
};

const trustGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "12px",
};

const trustCardStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "14px",
  backgroundColor: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "16px",
};

const trustCardNumberStyle = {
  minWidth: "34px",
  height: "34px",
  borderRadius: "999px",
  backgroundColor: "#ffffff",
  color: "#111827",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "15px",
};

const trustCardTitleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#ffffff",
  marginBottom: "4px",
};

const trustCardTextStyle = {
  fontSize: "14px",
  color: "#d1d5db",
  lineHeight: "1.5",
};

const formCardStyle = {
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "28px",
  padding: "30px",
  boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
  border: "1px solid #e5e7eb",
};

const formTitleStyle = {
  fontSize: "28px",
  lineHeight: "1.15",
  margin: "0 0 10px 0",
};

const formSubTitleStyle = {
  fontSize: "16px",
  color: "#6b7280",
  lineHeight: "1.6",
  margin: "0 0 22px 0",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  width: "100%",
  padding: "15px 16px",
  fontSize: "16px",
  border: "1px solid #d1d5db",
  borderRadius: "14px",
  outline: "none",
  boxSizing: "border-box",
  backgroundColor: "#fbfdff",
};

const submitButtonStyle = {
  marginTop: "6px",
  padding: "16px 18px",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "#111827",
  color: "#ffffff",
  border: "none",
  borderRadius: "14px",
  cursor: "pointer",
  boxShadow: "0 10px 24px rgba(17, 24, 39, 0.18)",
};

const contactLinksWrapStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "16px",
};

const contactLinkStyle = {
  display: "block",
  textAlign: "center",
  textDecoration: "none",
  padding: "13px 16px",
  borderRadius: "12px",
  backgroundColor: "#f3f4f6",
  color: "#111827",
  fontWeight: "bold",
};

const contactWhatsappStyle = {
  display: "block",
  textAlign: "center",
  textDecoration: "none",
  padding: "13px 16px",
  borderRadius: "12px",
  backgroundColor: "#ecfdf5",
  color: "#047857",
  fontWeight: "bold",
};

const securityBoxStyle = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "14px",
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
};

const securityTitleStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "6px",
  color: "#111827",
};

const securityTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "1.5",
};

const sectionStyle = {
  padding: "10px 20px 26px",
};

const sectionInnerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const sectionTitleStyle = {
  fontSize: "34px",
  lineHeight: "1.15",
  margin: "0 0 12px 0",
  textAlign: "center",
};

const sectionTextStyle = {
  maxWidth: "820px",
  margin: "0 auto 24px auto",
  fontSize: "17px",
  color: "#6b7280",
  lineHeight: "1.7",
  textAlign: "center",
};

const benefitsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const benefitCardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "22px",
  padding: "24px",
  boxShadow: "0 12px 34px rgba(15, 23, 42, 0.06)",
  border: "1px solid #e5e7eb",
};

const benefitTitleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const benefitTextStyle = {
  fontSize: "15px",
  color: "#6b7280",
  lineHeight: "1.6",
};

const faqSectionStyle = {
  padding: "4px 20px 26px",
};

const faqListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
};

const faqItemStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  padding: "22px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 12px 34px rgba(15, 23, 42, 0.05)",
};

const faqQuestionStyle = {
  fontSize: "17px",
  fontWeight: "bold",
  marginBottom: "8px",
  color: "#111827",
  lineHeight: "1.4",
};

const faqAnswerStyle = {
  fontSize: "15px",
  color: "#6b7280",
  lineHeight: "1.6",
};

const bottomCtaSectionStyle = {
  padding: "0 20px 46px",
};

const bottomCtaCardStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
  borderRadius: "28px",
  padding: "34px 24px",
  textAlign: "center",
  color: "white",
  boxShadow: "0 18px 50px rgba(15, 23, 42, 0.16)",
};

const bottomCtaTitleStyle = {
  fontSize: "34px",
  margin: "0 0 10px 0",
};

const bottomCtaTextStyle = {
  fontSize: "17px",
  color: "#d1d5db",
  margin: "0 0 22px 0",
  lineHeight: "1.6",
};

const primaryButtonStyle = {
  display: "inline-block",
  padding: "14px 20px",
  borderRadius: "14px",
  backgroundColor: "#111827",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "bold",
};

const whatsappButtonStyle = {
  display: "inline-block",
  padding: "14px 20px",
  borderRadius: "14px",
  backgroundColor: "#16a34a",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "bold",
};