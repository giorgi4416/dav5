export default function Button({ text, backgroundColor, width, height, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor,
                width: width,
                height: height,
                border: 'none',
                borderRadius: '30px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                letterSpacing: '0.5px'
            }}
        >
            {text}
        </button>
    )
}