import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Product({ id, image_link, name, price }) {
    return (
        <div className={utilStyles.card} key={id}>
            <Image
                priority
                src={image_link}
                className={utilStyles.cardImg}
                height={144}
                width={144}
                alt=""
            />
            <div className={utilStyles.cardDetails}>
                <h2>{name}</h2>
                <span>£{price}</span>
            </div>
        </div>
    )
}
