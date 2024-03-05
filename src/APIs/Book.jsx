


async function Book() {

    let userdetail = JSON.parse(localStorage.getItem('user'));
    let flight = JSON.parse(localStorage.getItem('flight'));
    let res = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userdetail.token}`,
            "projectID": "8w8w2xf5s7mz",
        },
        body: JSON.stringify({
            "bookingType": "flight",
            "bookingDetails": {
                "flighId": `${flight._id}`,
                "startDate": `${flight.day}`,
            }
        }
        )
    });
    let result = await res.json();
    console.log("book", result);
    return result;

}
export default Book;