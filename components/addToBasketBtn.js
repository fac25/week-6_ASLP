import styles from './addToBasketBtn.module.css'

export default function AddToBasket({data}) {
    console.log(data)
    return (
        <button
            className={styles.addBtn}
            onClick={localStorage.setItem("sets", data)}
        >
            Add to cart 
        </button>
    )
}
