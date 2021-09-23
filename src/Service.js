const Service=(props)=> {
    const{img, Features, About} = props.services;
    return (
          <div className="Service">
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
    }
}
  export default Service;