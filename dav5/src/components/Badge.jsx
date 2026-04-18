export default function Badge({ text }) {
    return (
        <span style={{
            backgroundColor: '#2d3748',
            color: '#e87c2e',
            padding: '6px 14px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: '600'
        }}>
            {text}
        </span>
    )
}