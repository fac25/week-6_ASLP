import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Product({ name, description, image_link, price }) {
    return (
        <div className="container">
            <div>
                <Image
                    priority
                    src={image_link}
                    className="product-image"
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
            <style jsx>{`
                .container {
                    display: flex;
                }
                h1 {
                    font-size: 1.25rem;
                }
            `}</style>
        </div>
    )
}
