import React from 'react'
import  ReactDOM  from 'react-dom/client';
import logo from "./src/assets/logo.png"
import rescard from "./src/assets/rescard.jpg"
import "./index.css"

const Header=()=>{
  return(
    <div className='header'>
           <div className='logo-container'>
             <img className='logo' src={logo}></img>
           </div>
             <div className='nav-items'>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contanct Us</li>
                <li>Menu</li>
               </ul>
             </div>
    </div>
  )
}








const resList= [
  {"type": "restaurant",
        "info": {
                  "resId": 3400105,
                  "name": "Pizza Hut",
                  "cuisines": "Pizza, Burger, Fries",
                  "image": "https://b.zmtcdn.com/data/pictures/chains/5/3400105/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg",
                  "rating":"3.9",
                  "deliveryTime": "26 min",
                },
  },
  {"type": "restaurant",
  "info": {
            "resId": 3400425,
            "name": "Bikanervala",
            "cuisines": "Biryani, Pulao, Karahi",
            "image": "https://b.zmtcdn.com/data/pictures/chains/3/3400003/7e96a27c8c7070455f183addc6e1c895_o2_featured_v2.jpg",
            "rating":"4.0",
            "deliveryTime":  "36 min",
          },
},
{"type": "restaurant",
  "info": {
            "resId": 18889778,
            "name": "Shiv Bhojnalaya",
            "cuisines": "Chinese, Sphaghetti, Pasta",
            "image": "https://b.zmtcdn.com/data/pictures/8/18889778/6d65a69cf45057351f79ece293b2f379_o2_featured_v2.jpg",
            "rating":"4.0",
            "deliveryTime": "36 min",
          },
},
{"type": "restaurant",
  "info": {
            "resId": 19726862,
            "name": "Star Ultimate Pizza",
            "cuisines": "Chinese, Sphaghetti, Pasta",
            "image": "https://b.zmtcdn.com/data/pictures/chains/0/19553770/17cecac2d60d9bfcb87f8861037236ec_o2_featured_v2.jpg",
            "rating":"3.0",
            "deliveryTime": "16 min",
          },
},
{"type": "restaurant",
  "info": {
            "resId": 18899460,
            "name": "Kings Pizza And Burger",
            "cuisines": "Fries, Burger, Pasta",
            "image": "https://b.zmtcdn.com/data/pictures/0/18899460/481d81e2b0ac1efd99cd66ea0c422c01_o2_featured_v2.jpg",
            "rating":"3.0",
            "deliveryTime": "16 min",
          },
},
{"type": "restaurant",
"info": {
          "resId": 19257735,
          "name": "GMB - Gopika Sweets & Restaurant",
          "cuisines": "Fries, Burger, Pasta",
          "image": "https://b.zmtcdn.com/data/pictures/chains/0/3400010/071fc6c5c0480fb041b72ff6d75a67a2_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},     
{"type": "restaurant",
"info": {
          "resId": 3401492,
          "name": "Chimmanlal Puri Wale",
          "cuisines": "Halwa Puri, Naaan Chane, Payee",
          "image": "https://b.zmtcdn.com/data/pictures/chains/2/3401492/6f4c169db5ddeefab0384693f04c47f5_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},   
{"type": "restaurant",
"info": {
          "resId": 3401244,
          "name": "Campus Bakers",
          "cuisines": "Choclate Mousse,  Biscuits, Cake",
          "image": "https://b.zmtcdn.com/data/pictures/4/3401244/c2cc26f57f43f43d2a1f4417546225b0_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},   
{"type": "restaurant",
"info": {
          "resId": 19136275,
          "name": "Bapu Dhaba",
          "cuisines": "Halwa Puri,  Biryani Naan, Payee",
          "image": "https://b.zmtcdn.com/data/pictures/5/19136275/c07152265062c9600e3bd6d7bf03fdc6_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},  
{"type": "restaurant",
"info": {
          "resId": 3400005,
          "name": "Mama Chicken Mama Franky House",
          "cuisines": "Halwa Puri,  Biryani Naan, Payee",
          "image": "https://b.zmtcdn.com/data/pictures/5/3400005/485152a7f15ba63321d14c3911562916_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},    
{"type": "restaurant",
"info": {
          "resId": 3400130,
          "name": "Manoj Restaurant",
          "cuisines": "Halwa Puri,  Biryani Naan, Payee",
          "image": "https://b.zmtcdn.com/data/pictures/0/3400130/ab23ba5cdbaa14bda9d290f2d34c311a_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},          
{"type": "restaurant",
"info": {
          "resId": 3400238,
          "name": "Sardar Ji Da Dhaba",
          "cuisines": "Halwa Puri,  Biryani Naan, Payee",
          "image": "https://b.zmtcdn.com/data/pictures/chains/8/3400238/862f92a8b62d9e1c4c118dfee6e21857_o2_featured_v2.jpg",
          "rating":"3.0",
          "deliveryTime": "16 min",
        },
},          
 ]


const RestaurantCard =({resData})=>{ //Destructuring on the fly instead of writing props

  const { name, cuisines, rating, deliveryTime, image } = resData.info;
  return(
    <div className='res-card'>
      
      
      <img className='card-img' src={image}></img>
        <h3>{name}</h3>
         <h4>{cuisines}</h4>
        <h4>{rating}</h4>
        <h4>{deliveryTime}</h4>
       
    </div>
  )
}




const Body =()=>{
  return(
  
  <div className='body'>
    <div className='search'>Search</div>
    <div className='res-container'>
      {
        resList.map(restaurant=><RestaurantCard key={restaurant.info.resId} resData={restaurant}/>)
      }



    </div>

  </div>
  )
}

const App =() =>{
 return (
  <>
   <div className='app'>
       <Header/>
       <Body/>
   </div>

  </>
 )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);


