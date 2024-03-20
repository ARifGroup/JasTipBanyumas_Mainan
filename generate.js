const section2 = document.querySelector("#jualan");

const numbWA = "6289531427766";


function generate(data) {
    data.forEach((data) => {
        section2.innerHTML += '';

        if (!data.diskon) {

        section2.innerHTML += `
        <div class="card">
            <div class="img">
                <img src=${data.fotoProduk} alt="Photo">
            </div>
            <div class="text">
                <h2>${data.namaProduk}</h2>
                <h3><span class="ada-discount">Rp ${data.hargaAsli}</span></h3>
                <div class="star">
                    <img src="#" alt="Star">
                </div>
                <a href="https://wa.me/${numbWA}?text=Hai%20admin%2C%0ASaya%20ingin%20membeli%20${data.namaProduk}%20dengan%20harga%20Rp%20${data.hargaAsli}.%0AApakah%20barangnya%20masih%20ada%3F" target="_blank">
                    <button>Tambah ke kranjang</button>
                </a>
            </div>
        </div>
        `
        } else {
        section2.innerHTML += `
        <div class="card">
            <div class="img">
                <img src=${data.fotoProduk} alt="Photo">
            </div>
            <div class="text">
                <h2>${data.namaProduk}</h2>
                <h3>Rp ${data.hargaAsli}<br/><span class="ada-discount">Rp ${data.hargaDiskon}</span></h3>
                <div class="star">
                    <img src="#" alt="Star">
                </div>
                <a href="https://wa.me/${numbWA}?text=Hai%20admin%2C%0ASaya%20ingin%20membeli%20${data.namaProduk}%20dengan%20harga%20Rp%20${data.hargaDiskon}.%0AApakah%20barangnya%20masih%20ada%3F" target="_blank">
                    <button>Tambah ke kranjang</button>
                </a>
            </div>
        </div>
        `
    }  
    });
}

const data = fetch("mainan.json")
    .then(response => response.json())
    .then(data => generate(data))
    .catch(error => console.log(error));

// generate();

