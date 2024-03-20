const section2 = document.querySelector("#jualan");

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
                <button>Tambah ke kranjang</button>
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
                <button>Tambah ke kranjang</button>
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

