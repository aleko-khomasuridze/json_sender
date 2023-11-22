// main.js
function sendObjectToPython() {
    const jsObject = [
        {
            lat: 45.536,
            lng: 54.564,
            alt: 454,
            ntimes: {
                n: 5,
                r: 200
            }
        },
        {
            lat: 45.536,
            lng: 54.564,
            alt: 454,
            time: {
                m: 2,
                s: 5,
                r: 200
            }
        },
        {
            lat: 45.536,
            lng: 54.564,
            alt: 454,
            infinity: {
                r: 200
            }
        }
    ]

    const jsonStr = JSON.stringify(jsObject); // Serialize the JavaScript object to JSON
    eel.receive_object_from_js(jsonStr); // Send the JSON string to Python
}
