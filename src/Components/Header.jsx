import { Cart } from "./Cart";

export function Header() {
    return (
        <header className="fixed-top">
            <nav className='navbar navbar-expand-lg bg-warning bg-gradient'>
                <div className='container'>
                    <span className='navbar-brand m-0'>React shop</span>
                    <Cart />
                </div>
            </nav>
        </header>
    )
}