import React from "react";
import Service from "./Service";

class Services extends React.Component{
    constructor() {
        super();
        this.state = {
          services: [
            {
              img:'https://t3.ftcdn.net/jpg/02/60/70/88/240_F_260708825_2pyc641MEb3xmX3Owmx0Sr94JPDfyPqr.jpg',
              Features : "Search doctor",
              About: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
              id:1
            },
            {
                img:'https://img-premium.flaticon.com/png/512/4446/premium/4446434.png?token=exp=1632373182~hmac=b0eaa3c229dba468b124bade4bc07c98',
                Features : "Online pharmacy",
                About: "Buy  your medicines with our mobile application with a simple delivery system",
                id:2
            },
            {
                img:'https://cdn-icons-png.flaticon.com/128/4228/4228730.png',
                Features : "Consultation",
                About: "Free consultation with our trusted doctors and get the best recomendations",
                id:3
            },
            {
                img:'https://t4.ftcdn.net/jpg/02/52/77/15/240_F_252771567_wwpPvHNyqi81tmmoQNCPOd2C4We5WZ8I.jpg',
                Features : "Details info",
                About: "Free consultation with our trusted doctors and get the best recomendations",
                id:4
            },
            {
              img:'https://img-premium.flaticon.com/png/128/1786/premium/1786554.png?token=exp=1632373430~hmac=90d23504c43ef35a5f08faa1034a4aab',
              Features : "Emergency care",
              About: "You can get 24/7 urgent care for yourself or your children and yourlovely family",
              id:5
          },
          {
            img:'https://t3.ftcdn.net/jpg/03/09/11/40/240_F_309114014_4R8HSPh1eRrwtQs65pNPkgz6ZNXCkyHf.jpg',
            Features : "Tracking",
            About: "Track and save your medical history and health data ",
            id:6
        },
          ]
        }
      }
      render(){
          const{services} = this.state;
        return (
            <div className="Services">
                {services.map((item) => {
                    return <Service
                        services={item}
                        // img={item.img}
                        // Features={item.Features}
                        // About={item.About}
                    />
                })}
            </div>
        )
      }
}
/* // function Services() {
//     return (
//       <div className="Services">
//         <Service/>
//         <Service/>
//         <Service/>
//       </div>
//     );
//   } */
  
  export default Services;