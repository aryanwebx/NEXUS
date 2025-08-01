export default function Card(props) {
    return (
        <div className="cards">
            <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" height="200px" width="200px" />
            <div style={{ textAlign: "center", color: "white" }}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}