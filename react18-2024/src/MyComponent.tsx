import { useId } from 'react';
const MyComponent = () => {
    const id = useId();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>2024-01-01</h1>
            <p>唯一Id: {id}</p>
        </div>
    )
}
export default MyComponent;