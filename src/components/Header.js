import {Link} from "./Link";


export function Header() {
    return (
        <header className='header'>
            <ul>
                <li><Link to="/"><span>Главная</span></Link></li>
                <li><Link to="/contact"><span>Контакты</span></Link></li>
            </ul>
        </header>
    )
}