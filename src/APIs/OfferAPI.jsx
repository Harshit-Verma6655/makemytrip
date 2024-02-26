export async function OfferAPI(filter = { "type": "ALL" }) {
    let filterString = JSON.stringify(filter);


    let res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?limit=50&filter= 
    ${filterString}
    `, {
        headers: {
            "projectID": "8w8w2xf5s7mz",
        }
    });
    let result = await res.json();
    console.log(result, "results");
    return result;

}