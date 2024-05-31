
import Image from "next/image"
import 작명 from '/public/토마토.jpg'

export default function List(){
  let 상품 = ['Tomatoes', 'pasta', 'Coconut']
  return (
     <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((a, i)=>{
          return(
            <div className="food" key={i}>
              <img src="/토마토.jpg" className="food-img"/>
            <h4>{상품[i]} $40</h4>
          </div> 
          )
        })
      }
     </div>
  );
}
