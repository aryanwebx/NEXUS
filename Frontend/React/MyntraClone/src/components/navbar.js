import Button from "./button";

function Navbar() {
    return (

        <div className="Navbar">
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" height="20px" widht="20px" alt="logo" />
            <Button />
            <input type="text" placeholder="Search for products, brands and more" style={{ backgroundColor: "#fff", height: "30px", width: "400px" }} />
            <div style={{ display: "flex", gap: "2rem" }}>
                <img src="https://www.svgrepo.com/show/198180/user-profile.svg" height="20px" widht="20px" alt="logo" />
                <img src="https://icon-library.com/images/wishlist-icon/wishlist-icon-0.jpg" height="20px" widht="20px" alt="logo" />
                <img src="https://th.bing.com/th/id/R.f449e5b2eaed9cf43c7697bceb7674b8?rik=QceMFLO6IjguOQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdTr%2f6a7%2fdTr6a7K8c.png&ehk=bnZDAxhtSRZMi9Tj56wsz%2fmW7DBXJzAam9PgMT0fw5o%3d&risl=&pid=ImgRaw&r=0" height="20px" widht="20px" alt="logo" />
            </div>

        </div>
    )
}

export default Navbar;