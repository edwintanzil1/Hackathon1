let shoes = [
    {
        nama: 'Stan Smith',
        merk: 'Adidas',
        gambar: 'https://wwd.com/wp-content/uploads/2018/12/stan-smith-forever-pair.jpg?w=640&h=415&crop=1',
        kategori: 'casual',
        harga: 1200000
    },
    
    {
        nama: 'Ultraboost',
        merk: 'Adidas',
        gambar: 'https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-20-ef10431.jpg',
        kategori: 'sport',
        harga: 2100000
    },
    {
        nama: 'Old Skool',
        merk: 'Vans',
        gambar: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-2479493/vans_vans-old-skool-japan-market-sneaker-pria---black-white_full05.jpg',
        kategori: 'casual',
        harga: 1500000
    },
    {
        nama: 'Sk8 Hi',
        merk: 'Vans',
        gambar: 'https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000197850167-vans-sk8-hi_d5ib8c_black_black_white-ap-001.jpg',
        kategori: 'sport',
        harga: 1600000
    },
    {
        nama: "Washed Flowe",
        merk:"Converse",
        gambar: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw4d2a8f97/images/a_107/170903C_A_107X1.jpg?sw=964', 
        kategori:"casual",
        harga: 1500000
    },
    {
        nama: "G4",
        merk:"Converse",
        gambar:'https://www.mainbasket.com/thumbs/extra-large/uploads/post/2020/05/08/g4.jpg', 
        kategori:"sport",
        harga: 1800000
    },
    {
        nama: "Air Jordan 4",
        merk:"Nike",
        gambar:`https://static.nike.com/a/images/t_prod_ls/w_1920,c_limit,f_auto/aca6ad11-833c-4932-9a17-88b4b3b1131a/air-jordan-4-university-blue-release-date.jpg`, 
        kategori:"casual",
        harga: 2700000
    },
    {
        nama: "Air Zoom Pegasus",
        merk:"Nike",
        gambar:`https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2ff01fa-7e97-4536-b4f8-a9f21992cba3/air-zoom-pegasus-38-running-shoe-Hmsj6Q.png`, 
        kategori:"sport",
        harga: 2500000
    }
];

const kontainer = document.getElementById('container');

generateShoes(shoes);

function generateShoes(data) {
    for (let i = 0; i < data.length; i++) {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.style.width = "18rem";
        divCard.style.display = "inline-block"
        divCard.style.height = "15 rem" 
        divCard.style.margin = "3rem"
        // console.log(divCard);
    
        let imageCard = document.createElement('img');
        imageCard.src = data[i].gambar;
        imageCard.classList.add('card-img-top');
        imageCard.alt = `Shoe Picture ${data[i].nama}`;
        
    
        divCard.appendChild(imageCard);
    
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-img-top');
    
        let namaShoe = document.createElement('h5');
        namaShoe.innerHTML = data[i].nama;
        namaShoe.classList.add('text-card');

        let merkShoe = document.createElement('h5');
        merkShoe.innerHTML = data[i].merk;
        merkShoe.classList.add('text-card');

        let hargaShoe = document.createElement('p');
        hargaShoe.innerHTML = `Rp.${data[i].harga}`;
        hargaShoe.classList.add('text-card');
    
        let linkBtn = document.createElement('a');
        linkBtn.classList.add('btn', 'btn-primary');
        linkBtn.addEventListener('click', addToCart);

        linkBtn.setAttribute('href', '#');
        linkBtn.innerHTML = 'Add To Cart';
    
        divCardBody.appendChild(namaShoe);
        divCardBody.appendChild(merkShoe);
        divCardBody.appendChild(hargaShoe);
        divCardBody.appendChild(linkBtn);
    
        divCard.appendChild(divCardBody);
    
        kontainer.appendChild(divCard);
    }
}

const tBodyEl = document.getElementById('table-body');


function addToCart (event){
    let target = event.target;
    let cardBody = target.parentNode;
    let card = cardBody.parentNode;

    const trEl = document.createElement('tr');
    let tdGambar = document.createElement('td');
    tdGambar.setAttribute('width', '80');
    tdGambar.innerHTML = `<img src=${card.firstChild.src} height="60" alt="${cardBody.childNodes[0].innerHTML}" />`;

    // Nama
    let tdNama = document.createElement('td');
    tdNama.style.verticalAlign = 'middle';
    tdNama.style.color = 'black';
    tdNama.innerHTML = `${cardBody.childNodes[0].innerHTML}`;

    // Merk
    let tdMerk = document.createElement('td');
    tdMerk.style.verticalAlign = 'middle';
    tdMerk.style.color = 'black';
    tdMerk.innerHTML = `${cardBody.childNodes[1].innerHTML}`;

    // Harga
    let tdHarga = document.createElement('td');
    tdHarga.style.verticalAlign = 'middle';
    tdHarga.style.color = 'black';
    tdHarga.innerHTML = `${cardBody.childNodes[2].innerHTML}`;
    // `
    // <input type="text" id="harga" name="harga" value="${cardBody.childNodes[2].innerHTML}" readonly>
    // `;

    // Ukuran
    let tdUkuran = document.createElement('td');
    tdUkuran.style.verticalAlign = 'middle';
    tdUkuran.style.color = 'black';
    tdUkuran.innerHTML = `
    <input type="number" id="ukuran" name="ukuran" min="35" max="46" size="5" value="42">
    `;

    // Jumlah
    let tdJumlah = document.createElement('td');
    tdJumlah.style.verticalAlign = 'middle';
    tdJumlah.style.color = 'black';
    tdJumlah.innerHTML = `
    <input type="number" id="jumlah" name="jumlah" min="1" size="5" value="0" onchange="hitungTotal(this)">
    `;

    // Total
    let tdTotal = document.createElement('td');
    tdTotal.style.verticalAlign = 'middle';
    tdTotal.style.color = 'black'
    tdTotal.innerHTML = `
    <input type="text" id="total" name="total" value="0" readonly>
    `;

    // Remove
    let tdRemove = document.createElement('td');
    tdTotal.style.verticalAlign = 'middle';
    tdRemove.innerHTML = `
    <a href="#"><img src= "https://icons-for-free.com/iconfiles/png/512/cercle+close+delete+dismiss+remove+icon-1320196712448219692.png" width=30px class="imgRemove"></a>
    `;
    tdRemove.addEventListener('click', removeList);
    

    trEl.appendChild(tdGambar);
    trEl.appendChild(tdNama);
    trEl.appendChild(tdMerk);
    trEl.appendChild(tdHarga);
    trEl.appendChild(tdUkuran);
    trEl.appendChild(tdJumlah);
    trEl.appendChild(tdTotal);
    trEl.appendChild(tdRemove);



    tBodyEl.appendChild(trEl);
}



function hitungTotal (jumlah) {
    let parentJumlah = jumlah.parentNode;
    let parentTd = parentJumlah.parentNode;
    let inputHarga = parentTd.childNodes[3].innerHTML;

    let inputTotal = parentTd.childNodes[6].childNodes[1];
    // console.log(inputTotal.childNodes[1]);
    inputTotal.value = Number(inputHarga.slice(3)) * Number(jumlah.value);
}



function removeList(event) {
    // console.log(event.target);
    let currentList = event.target.parentNode.parentNode.parentNode;
    // console.log(event.target.parentNode.parentNode.parentNode);
    currentList.parentNode.removeChild(currentList);
}

// const myForm = document.getElementById('tombol')
// myForm.a

function form(){
    let isi = document.getElementById('tombol')
    let nama = document.getElementById('nama')
    let alamat = document.getElementById('alamat')
    let cash = document.getElementById('cash')
    let debit = document.getElementById('debit')
    let credit = document.getElementById('credit')
}
