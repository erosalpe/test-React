import './footer.css';

function Footer(){
    return(
        <footer>
            <p className="m-0">&copy; {new Date().getFullYear()} First Time Testing React</p>
        </footer>
    );
}

export default Footer