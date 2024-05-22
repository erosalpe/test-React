import confetti from "https://esm.run/canvas-confetti@1";
import './ConfettiButton.css';
function ConfettiButton() {

    const buttonClick = () => {
        const buttonRect = event.target.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        confetti({
            particleCount: 150,
            spread: 60,
            origin: {
                x: buttonX / windowWidth,
                y: buttonY / windowHeight
            }
        });
    };

    return(
        <button className="btn btn-primary" onClick={() => buttonClick()}>Confetti</button>
    );
}

export default ConfettiButton