/* File terpisah supaya browser tidak bisa memakai handler selebrasi versi cache. */
function tampilBahagia() {
    document.body.innerHTML = `
        <main style="position:fixed;inset:0;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at top,#f2f3df 0%,#c9d9a8 48%,#4f6f52 100%);font-family:Arial,sans-serif;">
            <section style="position:relative;z-index:1000000;text-align:center;color:#fff;padding:32px;">
                <img src="asset/img/WhatsApp%20Image%202026-09-23%20at%2010.42.18.jpeg" alt="Foto second date kita" style="width:min(58vw,270px);aspect-ratio:1/1;object-fit:cover;object-position:center;border:7px solid rgba(255,255,255,.92);border-radius:22px;box-shadow:0 18px 34px rgba(47,70,52,.42);transform:rotate(-3deg);">
                <div style="margin-top:-28px;color:#8b5a2b;font-size:clamp(62px,12vw,130px);line-height:1;filter:drop-shadow(0 14px 20px rgba(47,70,52,.45));">♥</div>
                <h1 style="margin:18px 0 8px;font-size:clamp(28px,5vw,48px);">I love you, Nida!</h1>
                <p style="margin:0;font-size:clamp(16px,2vw,22px);opacity:.92;">100% sayang, no debat 💖</p>
            </section>
        </main>`;

    if (!window.laguKitaSudahMulai) $.playSound('asset/audio/mine.mp3');
    confetti.start();
}
