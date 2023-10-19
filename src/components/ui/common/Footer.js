import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer text-center">
            <p className="footer-text">
                Здесь может быть любой текст.
            </p>
            <p className="footer-link">
                Здесь может быть <a className="footer-link-style" href="#">ссылка</a>:)
            </p>
        </div>
    )
}