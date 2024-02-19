export default function DonateButton(){
    const buttonStyles = {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#f77f00',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
    }

    const animateButton = (e) => {
        e.target.style.transform = 'scale(1.1)'
    }

    const resetButton = (e) => {
        e.target.style.transform = 'scale(1)'
    }

    return(
        <button
            style={buttonStyles}
            onMouseEnter={animateButton}
            onMouseLeave={resetButton}
            onFocus={animateButton}
            onBlur={resetButton}
            onClick={() => alert("Thank you for your willingness to donate!")}
        >
            Donate Now
        </button>
    )
}