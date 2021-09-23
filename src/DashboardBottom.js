import Services from "./Services";
function DashboardBottom() {
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
        <div style={styles.container}>
            <h1>Dashboard</h1>
            <p className="Width70">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <br/>
            <Services />
            <br/>
            <button onMouseOver={MouseOver} onMouseOut={MouseOut} style={styles.btn}>Learn More</button>
        </div>
    );
}
const styles = {
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
        color: "white",
        marginBottom:6
    },
    container: {
        display: "flex",
        textAlign: "left",
        flexDirection: "column",
        border: '1px solid black',
        alignItems: "center",
        justifyContent: "center",
        margin : 1
    }
}
export default DashboardBottom;