"use client";

import { useContext } from "react";
import { CallContext } from "../context/Callcontext";

const Page = () => {
  const { call, setCall } = useContext(CallContext);
console.log(call,setCall);
};

export default Page;


// // "use client";

// // import { useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";

// // const Page = () => {
// //   const searchParams = useSearchParams();
// //   const id = searchParams.get("id");
// //   const type = searchParams.get("type");

// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     if (!id) return;

// //     fetch("/app.json")
// //       .then((res) => res.json())
// //       .then((resData) => {
// //         const found = resData.find((item) => String(item.id) === String(id));
// //         setData(found);
// //       });
// //   }, [id]);

// //   if (!data) return <p>Loading...</p>;

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-xl font-bold mb-4">Timeline</h1>

// //       <div className="bg-white p-5 shadow rounded">
// //         <h2 className="text-lg font-semibold">{data.name}</h2>

// //         <p className="text-sm text-gray-500">
// //           Action Type: <span className="font-bold">{type}</span>
// //         </p>

// //         <p className="mt-2">Email: {data.email}</p>
// //         <p>Days Since Contact: {data.days_since_contact}</p>

// //         <p className="mt-4 text-sm italic">
// //           “Here you can track call/text/video history”
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Page;

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const Page = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const type = searchParams.get("type");

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     fetch("/app.json")
//       .then((res) => res.json())
//       .then((resData) => {
//         const found = resData.find((item) => String(item.id) === String(id));
//         setData(found);
//       });
//   }, [id]);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Timeline</h1>

//       <div className="bg-white p-5 shadow rounded">
//         <h2 className="text-lg font-semibold">{data.name}</h2>

//         <p className="text-sm text-gray-500">
//           Action Type: <span className="font-bold">{type}</span>
//         </p>

//         <p className="mt-2">Email: {data.email}</p>
//         <p>Days Since Contact: {data.days_since_contact}</p>

//         <p className="mt-4 text-sm italic">
//           “Here you can track call/text/video history”
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Page;