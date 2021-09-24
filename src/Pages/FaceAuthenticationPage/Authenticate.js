import {Navbar} from "../../Navbar/Navbar";

function Authenticate() {
    function MouseOver(event) {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
        event.target.style.transform = 'scale(1.03)';
    }

    function MouseOut(event) {
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
        event.target.style.transform = 'scale(1)';
    }

    return (
        <div className='main'>
            <Navbar/>
            <div style={styles.container}>
                <p>Authenticate Yourself</p>
                {/*<p style={styles.parag}>&#8902; Scan</p>*/}
                <img
                    src={'https://img-premium.flaticon.com/png/512/2383/premium/2383542.png?token=exp=1632366082~hmac=c615e06b2c04cc5cffd56a5020835f5e'}
                    style={styles.image} alt="face"/>
                <br/>
                <button onMouseOver={MouseOver} onMouseOut={MouseOut} style={styles.btn}>Authenticate</button>
            </div>
        </div>
    )
}

const styles = {
    parag: {
        color: 'blue',
        fontSize: 16,
        marginRight: 140
    },
    image: {
        height: 200,
        width: 200,
    },
    btn: {
        width: 150,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        border: '1px solid blue',
        cursor: "pointer",
        fontSize: 16,
        backgroundColor: "blue",
        color: "white"
    },
    container: {
        height: 400,
        width: 280,
        display: "flex",
        textAlign: "left",
        flexDirection: "column",
        border: '1px solid black',
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        // paddingLeft:50,
        borderRadius: 25,
    }
}
export default Authenticate;