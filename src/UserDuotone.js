function UserDuotone(){
    function MouseOver(event) {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
        event.target.style.transform = 'scale(1.03)';
      }
      function MouseOut(event){
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
        event.target.style.transform = 'scale(1)';
      }
    return(
        <div style={styles.container}>
            <p>Authenticate Yourself</p>
            <p style={styles.parag}>&#8902; User_duotone</p>
            <img src={'https://cdn-icons-png.flaticon.com/512/747/747376.png'} style={styles.image} alt="face"/>
            <br/>
            <div style={styles.btnCon}>
                    <button onMouseOver={MouseOver} onMouseOut={MouseOut}  style={styles.btn1} >Recapture</button>
                    <button onMouseOver={MouseOver} onMouseOut={MouseOut}  style={styles.btn2}>Proceed to Dashboard</button>
            </div>
        </div>
    )
}
const styles={
    btnCon:{
        display: "flex",
    },
    parag:{
        color:'blue',
        fontSize:16,
        marginRight:80
    },
    image:{
        height:150,
        width:150,
    },
    btn1:{
        width:100,
        paddingLeft: 20,
        paddingRight: 20,
        // paddingTop: 1,
        // paddingBottom: 1,
        borderRadius:20,
        border : '1px solid blue',
        cursor:"pointer",
        marginRight:5,
        backgroundColor:"blue",
        color:"white"
    },
    btn2:{
        width:160,
        padding:10,
        borderRadius:25,
        border : '1px solid blue',
        cursor:"pointer",
        marginLeft:5,
        backgroundColor:"blue",
        color:"white"
    },
    container:{
        height:430,
        width:300,
        display:"flex",
        textAlign:"left",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border : '1px solid black',
        margin:10,
        // paddingLeft:20,
        borderRadius:25,
    }
}
export default UserDuotone;