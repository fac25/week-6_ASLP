import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Product({ name, description, image_link, price }) {
    return (
        <div>
            <div>
                <Image
                    priority
                    src={image_link}
                    className={utilStyles.borderCircle}
                    height={500}
                    width={500}
                    alt={name}
                />
            </div>
            <div>
                <header>
                    <h1>{name}</h1>
                    <span>£{price}</span>
                    <p>{description}</p>
                    <button>Add to cart</button>
                </header>
            </div>
        </div>
    )
}
