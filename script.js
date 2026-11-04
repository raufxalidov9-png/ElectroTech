// ElectroTech – WhatsApp sifariş göndərmə
// Sifariş izləmə funksiyaları çıxarılıb.

const WHATSAPP_NUMBER = "994705913887";

function submitForm(e) {
    e.preventDefault();

    const btn = document.getElementById("submitBtn");
    const msg = document.getElementById("formMsg");

    const name = document.getElementById("nameInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const service = document.getElementById("serviceInput").value;
    const description = document.getElementById("descInput").value.trim();

    if (!name || !phone || !service || !description) {
        msg.textContent = "❌ Zəhmət olmasa, bütün məcburi xanaları doldurun.";
        msg.style.color = "#ef4444";
        msg.style.display = "block";
        return;
    }

    const message = [
        "⚡ *Yeni ElectroTech sifarişi*",
        "",
        `👤 *Ad və soyad:* ${name}`,
        `📞 *Telefon:* ${phone}`,
        `📧 *Email:* ${email || "Qeyd edilməyib"}`,
        `🔧 *Xidmət:* ${service}`,
        "",
        "📝 *Problem / layihə haqqında:*",
        description
    ].join("\n");

    const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    msg.textContent =
        "✅ WhatsApp açıldı. Sifarişi göndərmək üçün mesajı WhatsApp-da təsdiqləyin.";
    msg.style.color = "#22c55e";
    msg.style.display = "block";

    btn.disabled = false;
    btn.textContent = "⚡ Sifarişi Göndər";
}