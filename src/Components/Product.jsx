import { useContext } from 'react';
import { Image } from 'react-bootstrap-icons';
import { CustomContext } from "../hooks/ShopContext";

export function Product(props) {
    const { 
        id, 
        full_background, 
        name, 
        description, 
        rarity, 
        price, 
        priceNoDiscount,
        btnText
    } = props;
    const { 
        addProduct = Function.prototype,
    } = useContext(CustomContext);

    return (
        <div className="card">
            {rarity && <div className="card-header text-capitalize text-center small">{rarity}</div>}
            <div className="card-img">
                {full_background ? <img src={full_background} className="card-img-top" alt={name} /> : <Image />}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    {description}
                </p>
            </div>
            <div className="card-footer d-flex flex-row align-items-center">
                <strong className='me-2'>{price} V</strong>
                {
                priceNoDiscount !== price ? (
                    <span className='me-2 text-muted text-crossed'>{priceNoDiscount} V</span>
                ) : ''
                }
                <button 
                    className="btn btn-primary ms-auto"
                    onClick={
                        () => {
                            addProduct({id, name, price, count: 1});
                        }
                    }
                >{btnText}</button>
            </div>
        </div>
    )
}