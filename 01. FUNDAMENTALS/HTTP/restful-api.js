const http = require("http");

let courses = [
    { id: 1, name: "JS Basics", months: 2, module: null },
    { id: 2, name: "JS Fundamentals", months: 4, module: null },
    { id: 3, name: "JS Advanced", months: 2, module: "JS Advanced" },
    { id: 4, name: "JS Applications", months: 2, module: "JS Advanced" },
    { id: 5, name: "JS Back-End", months: 2, module: "JS Web" },
    { id: 6, name: "ReactJS", months: 2, module: "JS Web" },
    { id: 7, name: "HTML & CSS", months: 1, module: "Front-End" },
    { id: 8, name: "Front-End Framework", months: 3, module: "Front-End" },
]
let count = 8
let pattern = /api\/courses\/(?<id>[0-9]+)/;
let current


const server = http.createServer((req, res) => {
    if (req.url === "/api/courses") {
        if (req.method === "GET") {
            res.write(JSON.stringify(courses))
        } else if (req.method === "POST") {
            let data = []
            req.on('data', chunk => {
                data.push(chunk)
            })
            req.on('end', () => {
                let decodedData = decodeURIComponent(data[0].toString());
                let token = decodedData.split("&")
                let name = token[0].split("=")[1];
                let months = token[1].split("=")[1]
                let module = token[2].split("=")[1]
                count++
                let newId = count;
                courses.push({ id: newId, name: name, months: months, module: module })
                //TODO
            })
        } else {
            res.statusCode = 400;
            res.end();

            return;
        }
    } else if ((current = req.url.match(pattern)) !== null) {
        let requestedId = Number(current.groups["id"])
        let searchedCourse = courses.filter((x) => x.id === requestedId)
        if (searchedCourse.length > 0) {
            if (req.method === "GET") {
                res.write(JSON.stringify(searchedCourse))
            } else if (req.method === "PUT") {
                let data = []
                req.on('data', chunk => {
                    data.push(chunk)
                })
                req.on('end', () => {
                    let decodedData = decodeURIComponent(data[0].toString());
                    let token = decodedData.split("&")
                    for (let i = 0; i < token.length; i++) {
                        let kvp = token[i].split("=");
                        searchedCourse[0][kvp[0]] = kvp[1]
                    }
                })
            } else if (req.method === "DELETE"){
                courses = courses.filter((x) => x.id !== requestedId)
            }
        } else {
            res.statusCode = 404;
        }

    } else {
        res.statusCode = 404;
    }




    res.end();
});

server.listen(3000);
console.log("Listening on port 3000......");



