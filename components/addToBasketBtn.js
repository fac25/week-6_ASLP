import styles from './addToBasketBtn.module.css'

export default function AddToBasket({data}) {
    return (
        <button
            className={styles.addBtn}
            onClick={()=>handleBasket(data)}>
            Add to cart 
        </button>
    )
}


function handleBasket(data){
    let localBasket = JSON.parse(localStorage.getItem("basket") || "[]");
    if (localBasket.length === 0) {
        localBasket.push({
            name:data.name,
            quantities: 1,
            price:data.price
        })
}else {
    localBasket.push({
        name:data.name,
        quantities: 1,
        price:data.price
    })
}
    localStorage.setItem("basket", JSON.stringify(localBasket));
}