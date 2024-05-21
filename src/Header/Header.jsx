import './header.css';
function Header(){
    return(
        <header>
            <nav class="d-flex justify-content-between align-items-center p-3">
                <div>
                    <h3>
                        Logo
                    </h3>
                </div>
                <div>
                    <ul class="d-flex list-unstyled gap-3">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header