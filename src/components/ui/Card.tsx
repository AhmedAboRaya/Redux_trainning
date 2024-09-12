interface IProps {
    title: string,
    price:number,
    image: string,
    alt: string,
    // onClick: () => void,
    // inCart: boolean,
    // count: number,
}

const Card = ({title, image, price, alt}: IProps) => {
    return (
        <div className="flex flex-col space-y-2">
            <img src={image} alt={alt} className="cover h-full" />
            <h3>{title}</h3>
            <p>{price}$</p>
            <button className="hover:bg-gray-700">Add to cart</button>
        </div>
    )
}

export default Card ;