export default function ProductCard({ name, price, quantity, description, color, image }) {
    return (
        <div style={{
            backgroundColor: color,
            borderRadius: '16px',
            border: '1px solid #2d3748',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <img
                src={image}
                alt={name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h2 style={{ color: '#e87c2e', fontSize: '18px' }}>{name}</h2>
                <p style={{ color: '#7c8ea0', fontSize: '13px' }}>{description}</p>
                <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700' }}>{price}</p>
                <p style={{ color: '#7c8ea0', fontSize: '13px' }}>მარაგი: {quantity} ც.</p>
            </div>
        </div>
    )
}