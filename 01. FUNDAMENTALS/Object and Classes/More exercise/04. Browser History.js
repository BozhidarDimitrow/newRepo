function solve(object, array) {

    class Browser {

       
        constructor(obj) {
            
            this.browserName = obj["Browser Name"]
            this.openTabs = obj["Open Tabs"]
            this.recentlyClosed = obj["Recently Closed"]
            this.browserLogs = obj["Browser Logs"]
        }

        open(site) {
            this.openTabs.push(site);
            this.browserLogs.push(`Open ${site}`);
        }
        close(site) {
            for (let i = 0; i < this.openTabs.length; i++) {
                if (this.openTabs[i] === site) {
                    this.openTabs.splice(this.openTabs[i], 1)
                    this.browserLogs.push(`Close ${site}`); 
                    this.recentlyClosed.push(site)
                }                              
            }            
        }
        clear() {
            this.openTabs = [];
            this.recentlyClosed = [];
            this.browserLogs = [];
        }

    }
    let current = new Browser(object);

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ")
        let command = tokens[0];
        let site = tokens[1]

        if (command === "Clear") {
            current.clear()
        } else if (command === "Open") {
            current.open(site)
        } else if (command === "Close") {
            current.close(site)
        }
    }




    console.log(current.browserName)
    console.log(`Open Tabs: ${current.openTabs.join(", ")}`)
    console.log(`Recently Closed: ${current.recentlyClosed.join(", ")}`)
    console.log(`Browser Logs: ${current.browserLogs.join(", ")}`)

}
solve({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)