// import { useEffect, useState } from "react";

// export default function QuizLayout() {
//   const [queList, setQueList] = useState([]);

//   const [list, setList] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
      
//         fetch("http://localhost:1337/api/html-questions/")
//         .then((res) => 
//            res.json()
//     )
//         .then((data) => {
//             console.log("***@@@@@",data.data);
//              setList(data.data);
          
//         });
    
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <p>Api response:</p>
//       {list &&
//         list.map((que) => {
//           return <a key={que.id}>{que.attributes.question}</a>;
//         })}
//     </>
//   );
// }
