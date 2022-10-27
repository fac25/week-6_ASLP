import styles from './addToBasketBtn.module.css'

export default function AddToBasket({data}) {
    return (
        <button
            className={styles.addBtn}
            onClick={()=>{localStorage.setItem(data.id, data.name)}}>
            Add to cart 
        </button>
    )
}
