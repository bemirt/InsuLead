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
      }, 1800);
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      setLoading(false);
    }
  };

  if (path === "/tesekkur") {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px 32px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            maxWidth: "560px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginTop: 0,
              marginBottom: "18px",
              lineHeight: "1.2",
            }}
          >
            Talebiniz alındı ✅
          </h1>

          <p
            style={{
              fontSize: "21px",
              marginBottom: "12px",
              color: "#222",
            }}
          >
            Size en kısa sürede dönüş yapacağız.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              marginBottom: "24px",
            }}
          >
            Telefonunuz açık olsun 🙂
          </p>

          <a href="/" style={secondaryButtonStyle}>
            Ana sayfaya dön
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px 32px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            maxWidth: "560px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              marginTop: 0,
              marginBottom: "14px",
              lineHeight: "1.2",
            }}
          >
            Teklifler hazırlanıyor...
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#333",
              marginBottom: "12px",
            }}
          >
            Bilgileriniz alındı, size uygun seçenekler kontrol ediliyor.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              marginBottom: 0,
            }}
          >
            Lütfen bekleyin ⏳
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "580px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: "bold",
            letterSpacing: "0.6px",
          }}
        >
          INSULEAD
        </p>

        <h1
          style={{
            fontSize: "38px",
            lineHeight: "1.1",
            marginTop: "14px",
            marginBottom: "12px",
          }}
        >
          En uygun sigorta teklifine hızlıca ulaşın
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.5",
            marginBottom: "24px",
          }}
        >
          Bilgilerinizi bırakın, size uygun sigorta seçenekleri için kısa süre
          içinde dönüş sağlayalım.
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >
          <span style={badgeStyle}>Ücretsiz ön değerlendirme</span>
          <span style={badgeStyle}>Hızlı geri dönüş</span>
          <span style={badgeStyle}>Telefonda destek</span>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
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

          <button style={buttonStyle} type="submit">
            Teklif için bilgi bırak
          </button>
        </form>

        <a href="tel:05050727306" style={phoneLinkStyle}>
          📞 Hemen arayın
        </a>

        <a
          href="https://wa.me/905050727306"
          target="_blank"
          rel="noreferrer"
          style={whatsappLinkStyle}
        >
          💬 WhatsApp’tan yazın
        </a>

        <p
          style={{
            fontSize: "13px",
            color: "#666",
            lineHeight: "1.5",
            marginTop: "18px",
            marginBottom: 0,
          }}
        >
          Formu göndererek tarafınıza teklif süreciyle ilgili dönüş yapılmasını
          kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  );
}

const badgeStyle = {
  backgroundColor: "#f1f1f1",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "13px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontSize: "16px",
  border: "1px solid #dcdcdc",
  borderRadius: "10px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  marginTop: "8px",
  padding: "15px 18px",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const phoneLinkStyle = {
  display: "block",
  marginTop: "16px",
  textAlign: "center",
  color: "#111",
  fontWeight: "bold",
  textDecoration: "none",
};

const whatsappLinkStyle = {
  display: "block",
  marginTop: "10px",
  textAlign: "center",
  color: "#128c7e",
  fontWeight: "bold",
  textDecoration: "none",
};

const secondaryButtonStyle = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "10px",
  backgroundColor: "black",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};