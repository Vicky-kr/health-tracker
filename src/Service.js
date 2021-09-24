const Service=(props)=> {
    const{img, Features, About} = props.services;
    return (
          <div style={styles.Service}>
              <img  style={styles.image} src={img}/>
              <h2>{Features}</h2>
              <p vstyle={styles.para}>{About}</p>
          </div>
    );
  }
  const styles={
    image:{
        height:40,
        width:40,
        borderRadius:1,
    },
    para:{
      fontSize:26
    },
    Service:{
      /* position:absolute; */
      /* z-index:100; */
      border : '1 solid black',
      height: 200,
      width: 250,
      margin: 10,
      textAlign: "left",
      padding: 15,
      borderRadius: 5,
      backgroundColor:" white",
    },
}
  export default Service;