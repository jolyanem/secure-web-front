// import {fail} from "@sveltejs/kit";
// import Cookies from 'js-cookie'
// import sessionStorage from "./sessionStorage.js";
//
// /** @type {import('./$types').PageServerLoad} */
// export async function load({params}) {
//     let baseUrl = "http://localhost:3000"
//     console.log(baseUrl)
//     //const token = sessionStorage.getItem("token");
//     //console.log(token)
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzk4YTA3NzlhYjcxMzY4MWM2NTExOGIiLCJpYXQiOjE2NzA5NDcwMTN9.4XVGQLIhjdsiTydlKe-zhxBWuhV0_MKZCZRBcMyHyU0"
//     const body = await fetch(`${baseUrl}/locations/${params.id}`,{
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         }
//     });
//     console.log("body", body)
//     const json = await body.json();
//     const location = json.result
//     console.log("json :", json)
//
//     if (!json) {
//         return fail(401, { missing:true, error: 'Location not gotten' });
//     }
//     else {
//         return {...location};
//     }
// }
//
