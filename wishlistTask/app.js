const boxs = document.getElementById('boxs')
const qutu1 = document.getElementById('qutu1')
const qutu = document.getElementById('qutu')

const wishlist = []

function drop(m) {
    qutu.style.display =m
}

function show() {
    products.map((item, index) => {
        boxs.innerHTML += `
          <div class="boxx">
                <img src="${item.img}" alt=""/>
                <div class="cartText">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                    <span>${item.price}$<span>
                    <button  onclick="Add(${index})">Add</button>
                </div>
            </div>
        `
    })
}

show()

function Add(i) {
    let element = products[i]
    let a = wishlist.find(item => item == element)
    if (!a) {
        wishlist.push(element)
    }
    WishlistShow()
}

function WishlistShow() {
    qutu1.innerHTML = ''
    wishlist.map((item,index) => {
        qutu1.innerHTML += `
    <div style="background-color:transparent;" class="items">
        <div class="box box1"><img style="width: 50px;" src="${item.img}" alt=""></div>
        <div class="box box2">${item.name}</div>
        <div>${item.desc}</div>
        <div class="box box3">${item.price}$</div>
        <div onclick="del(${index})" class="box box4"><i class="fa-solid fa-trash-can"></i></div>
    </div>
`
    })
}
function del(i) {
    wishlist.splice(i,1)
    WishlistShow()
}