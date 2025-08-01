import { buttons } from '../utils/dummy';

function Button() {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {
                buttons.map((value, index) => <button key={index} style={{ backgroundColor: "white", color: "black", border: "none", fontWeight: "bolder" }}>{value}</button>)
            }
        </div>

    )
}

export default Button;