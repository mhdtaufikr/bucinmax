const nama = 'Nidaaaa <3';

function mulaiMusik() {
    if (window.laguKitaSudahMulai) return;
    $.playSound('asset/audio/mine.mp3');
    window.laguKitaSudahMulai = true;
}

function pasangMacHeader(jendela) {
    if (jendela.querySelector('.mac-window__bar')) return;
    jendela.insertAdjacentHTML('afterbegin', `<div class="mac-window__bar" aria-hidden="true"><span class="mac-window__lights"><i></i><i></i><i></i></span><span class="mac-window__label">Pesan buat ${nama}</span></div>`);
}

const popup = Swal.mixin({
    customClass: { popup: 'love-popup', title: 'love-popup__title', htmlContainer: 'love-popup__content', confirmButton: 'love-popup__button love-popup__button--yes', cancelButton: 'love-popup__button love-popup__button--no' },
    buttonsStyling: false, willOpen: pasangMacHeader,
    showClass: { popup: 'animate__animated animate__fadeInUp animate__faster' },
    hideClass: { popup: 'animate__animated animate__fadeOutDown animate__faster' }
});

function bikinTombolNggakKabur(jendela) {
    const tombol = jendela.querySelector('.swal2-cancel');
    if (!tombol || tombol.dataset.kabur) return;
    const arah = [[-115, -45], [100, -50], [-92, 45], [110, 40], [-48, -65]];
    let giliran = 0;
    tombol.dataset.kabur = 'true';
    tombol.addEventListener('pointerenter', () => {
        const [x, y] = arah[giliran++ % arah.length];
        tombol.style.transform = `translate(${x}px, ${y}px)`;
        tombol.textContent = 'Eits, jangan 😝';
    });
}

function tanyaManis(title, text, confirmButtonText) {
    return popup.fire({ icon: 'question', title, text, showCancelButton: true, confirmButtonText, cancelButtonText: 'Nggak ah', didOpen: bikinTombolNggakKabur });
}

function sliderSayang() {
    return popup.fire({
        title: 'Sayang, seberapa sayang kamu ke aku?',
        html: '<div class="love-meter"><span id="love-value">100%</span><input id="love-range" type="range" min="10" max="100" step="10" value="100"><small id="love-warning">Nggak boleh kurang dari 100% yaa 😌</small></div>', confirmButtonText: '100% dong 💚',
        didOpen: () => {
            const range = document.getElementById('love-range');
            const warning = document.getElementById('love-warning');
            range.addEventListener('input', () => {
                range.value = 100;
                warning.textContent = 'Hehe nggak bisa turun, aku maunya kamu sayangin aku full 😌';
                warning.classList.add('love-meter__shake');
                setTimeout(() => warning.classList.remove('love-meter__shake'), 350);
            });
        }
    });
}

const kenanganKita = [
    {
        foto: 'WhatsApp%20Image%202026-09-23%20at%2010.35.13.jpeg',
        judul: 'Main bowling bareng 🎳',
        cerita: 'Ini waktu kita main bowling. Dan iya… aku yang menang dong 😌'
    },
    {
        foto: 'WhatsApp%20Image%202026-09-23%20at%2010.40.19.jpeg',
        judul: 'Bukti skor resmi!',
        cerita: 'Taufik 81, Nida 67. Jadi ingat yaa, kamu masih punya hutang taruhan sama aku 🤭'
    },
    {
        foto: 'WhatsApp%20Image%202026-09-23%20at%2010.35.15.jpeg',
        judul: 'Pertama kali ke rumah kamu 🏠',
        cerita: 'Ternyata BSD nggak sejauh itu yaa, sayanggg wkwk.'
    },
    {
        foto: 'WhatsApp%20Image%202026-09-23%20at%2010.35.13%20%281%29.jpeg',
        judul: 'Main ke PIM, yuhu! ✨',
        cerita: 'Jalan-jalan biasa aja, tapi kalau sama kamu jadinya selalu spesial, kayak martabak.'
    },
    {
        foto: 'WhatsApp%20Image%202026-09-23%20at%2010.35.15%20%281%29.jpeg',
        judul: 'Jogja bareng 🧳',
        cerita: 'Salah satu perjalanan yang pengin aku ulang lagi sama kamu. Next time aku pengen nyobain rahang tuna, sayangg :('
    },
    {
        foto: 'WhatsApp%20Image%202026-09-23%20at%2010.42.18.jpeg',
        judul: 'Second date kita 🌷',
        cerita: 'Hari paling deg-degan buat aku. Untung kamu nggak jadi cewek bingung yaa, sayangg. Alhamdulillah <3'
    }
];

async function lihatKenanganKita() {
    await popup.fire({
        title: 'Sebelum lanjut…',
        text: 'Aku mau ajak sayang lihat beberapa memori kita dulu.',
        confirmButtonText: 'Ayo nostalgia 💚'
    });

    for (const kenangan of kenanganKita) {
        await popup.fire({
            title: kenangan.judul,
            html: `<img class="memory-photo" src="asset/img/${kenangan.foto}" alt="${kenangan.judul}"><p class="memory-story">${kenangan.cerita}</p>`,
            confirmButtonText: 'Lanjut kenangan 💚'
        });
    }
}

async function mulaiPermainan() {
    await popup.fire({
        title: `Hai, ${nama}! 👋`,
        html: '<img class="couple-photo" src="asset/img/WhatsApp%20Image%202026-09-23%20at%2010.35.15.jpeg" alt="Foto kita"><p>Aku punya permainan kecil dan beberapa pertanyaan penting.</p><span class="love-popup__hint">Nggak boleh kabur yaa 😌</span>',
        confirmButtonText: 'Ayo mulai 💚'
    });
    await lihatKenanganKita();
    await tanyaManis('Sayang, sayang nggak sama aku?', 'Jawab dari hati yang paling jujur ya.', 'Sayang banget');
    await tanyaManis('Kalau aku lagi capek, sayang suka pengin nyemangatin aku nggak?', 'Pesan kecil dari kamu aja biasanya udah bikin mood aku balik.', 'Iya dong');
    await sliderSayang();
    await tanyaManis('Kamu suka kepikiran aku nggak?', 'Jujur aja, aku sering kepikiran kamu soalnya.', 'Sering lah');
    await tanyaManis('Kalau kita lagi jauh, sayang tetap inget aku kan?', 'Soalnya aku inget kamu terus…', 'Tetap dong 💚');
    await tanyaManis('Kalau kamu makan enak, kamu suka kepikiran makannya sama aku juga nggak?', 'Soalnya aku pasti kepikiran ngajak kamu kalau nemu makanan enak.', 'Iya juga 😋');
    await tanyaManis('Boleh nggak aku jadi tempat pulang favorit sayang?', 'Yang bisa dicari waktu senang maupun capek.', 'Boleh banget 🏡');
    await tanyaManis('Terakhir nih… sayang mau tetap jadi favorit aku?', 'Jawaban salah tidak tersedia di sistem ini 😝', 'Mau selalu 💚');
    await popup.fire({ icon: 'success', title: 'Pertanyaannya selesai!', text: 'Jawaban sayang sudah aku simpan baik-baik di hati 💚', confirmButtonText: 'Iya dong 💚' });
    tampilBahagia();
}

$(document).on('click', '#tombolPopup', (e) => { e.preventDefault(); mulaiMusik(); mulaiPermainan(); });
