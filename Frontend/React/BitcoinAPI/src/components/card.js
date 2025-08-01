import { useEffect, useState } from "react";

function Card() {

    const [crypto, setcrypto] = useState([]);

    async function cryptodetail() {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin,ripple,cardano,polkadot,stellar,chainlink,binancecoin,dogecoin,solana,monero,zcash,dash,eos,tezos,tron,neo,vechain,iota,cosmos,algorand,aave,compound,uniswap,sushiswap");
        const data = await response.json();
        setcrypto(data);
    }

    useEffect(() => {
        cryptodetail();
    }, [])

    return (
        
        <div className="card">
            {
                crypto.map((crypto) => {

                    return (
                        <div key={crypto.id} className="cards">
                            <img src={crypto.image}></img>
                            <div className="first">
                                <h1 className="name">{crypto.name}</h1>
                                <div>Market CAP Rank:{crypto.market_cap_rank}</div>
                                <div>High 24h:{crypto.high_24h}</div>
                                <div>Low 24h:{crypto.low_24h}</div>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Card;