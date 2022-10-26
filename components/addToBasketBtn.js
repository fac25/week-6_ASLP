import styles from './addToBasketBtn.module.css'

export default function AddToBasket(props) {
    return (
        <button
            className={styles.addBtn}
            // onClick={console.log(props.itemCount)}
        >
            Add to cart 
        </button>
    )
}
