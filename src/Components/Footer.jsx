export function Footer() {
    return (
        <footer className="bg-light bg-gradient py-3">
            <div className="container small">
                <div className="row">
                    <div className="col">
                        2022 - {new Date().getFullYear()} react practice
                    </div>
                </div>
            </div>
        </footer>
    )
}