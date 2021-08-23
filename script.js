
const memory1 = document.getElementById('memory1')
const memory2 = document.getElementById('memory2')

const storage1 = document.getElementById('storage1')
const storage2 = document.getElementById('storage2')
const storage3 = document.getElementById('storage3')

const delivery1 = document.getElementById('delivery1')
const delivery2 = document.getElementById('delivery2')

const priceFixed = document.getElementById('price-fixed')
const priceMemory = document.getElementById('price-memory')
const priceStorage = document.getElementById('price-storage')
const priceDelivery = document.getElementById('price-delivery')
const priceTotal = document.getElementById('price-total')
const priceFinal = document.getElementById('price-final')

const promoCode = document.getElementById('promo-code')
const promoSubmit = document.getElementById('promo-submit')

function calculation() {
    const priceFixedFloat = parseFloat(priceFixed.innerHTML)
    const priceMemoryFloat = parseFloat(priceMemory.innerHTML)
    const priceStorageFloat = parseFloat(priceStorage.innerHTML)
    const priceDeliveryFloat = parseFloat(priceDelivery.innerHTML)
    let priceTotalFloat = priceFixedFloat+priceMemoryFloat+priceStorageFloat+priceDeliveryFloat
    return priceTotalFloat
}

function updateTotalPrice() {
    priceTotalFloat = calculation()
    priceTotal.innerText = `${priceTotalFloat}`
}

function updateFinalPrice(promo) {
    priceTotalFloat = calculation()
    if (promo) {
        priceTotalFloat = priceTotalFloat * 0.80;
        priceFinal.innerText = `${priceTotalFloat}`
    } else {
        priceFinal.innerText = `${priceTotalFloat}`
    }
}

memory1.addEventListener('click', function() {
    memory1.classList.add('bg-gray-200')
    memory2.classList.remove('bg-gray-200')
    priceMemory.innerHTML = '0'
    updateTotalPrice()
    updateFinalPrice(false)
})

memory2.addEventListener('click', function() {
    memory1.classList.remove('bg-gray-200')
    memory2.classList.add('bg-gray-200')
    priceMemory.innerHTML = '180'
    updateTotalPrice()
    updateFinalPrice(false)
})

storage1.addEventListener('click', function() {
    storage1.classList.add('bg-gray-200')
    storage2.classList.remove('bg-gray-200')
    storage3.classList.remove('bg-gray-200')
    priceStorage.innerHTML = '0'
    updateTotalPrice()
    updateFinalPrice(false)
})

storage2.addEventListener('click', function() {
    storage1.classList.remove('bg-gray-200')
    storage2.classList.add('bg-gray-200')
    storage3.classList.remove('bg-gray-200')
    priceStorage.innerHTML = '100'
    updateTotalPrice()
    updateFinalPrice(false)
})

storage3.addEventListener('click', function() {
    storage1.classList.remove('bg-gray-200')
    storage2.classList.remove('bg-gray-200')
    storage3.classList.add('bg-gray-200')
    priceStorage.innerHTML = '180'
    updateTotalPrice()
    updateFinalPrice(false)
})

delivery1.addEventListener('click', function() {
    delivery1.classList.add('bg-gray-200')
    delivery2.classList.remove('bg-gray-200')
    priceDelivery.innerHTML = '0'
    updateTotalPrice()
    updateFinalPrice(false)
})

delivery2.addEventListener('click', function() {
    delivery1.classList.remove('bg-gray-200')
    delivery2.classList.add('bg-gray-200')
    priceDelivery.innerHTML = '20'
    updateTotalPrice()
    updateFinalPrice(false)
})

function promoVerify() {
    varify = promoCode.value
    if (varify == 'stevekaku') {
        updateFinalPrice(true)
    }
    promoCode.value = ''
}

promoSubmit.addEventListener('click', function() {
    promoVerify()
})

promoCode.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        promoVerify()
    }
})