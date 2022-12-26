import { useEffect } from "react";

export function Toast(props) {
    const { 
        name = '',
        closeToast = Function.prototype
    } = props;

    useEffect(() => {
        const timerId = setTimeout(closeToast, 1500);
        return () => { clearTimeout(timerId) }
        // eslint-disable-next-line
    }, [name]);

    return (
        <div className="toast align-items-center show bg-warning border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    <b>{name}</b> added to cart!
                </div>
                <button 
                    type="button" 
                    onClick={closeToast}
                    className="btn-close me-2 m-auto" 
                    aria-label="Close"></button>
            </div>
        </div>
    )
}