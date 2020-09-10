function solve(array) {

    let numSongs = Number(array[0])

    array.shift()
    let typeSong = array.pop();

    let songs = []
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }



    for (let i = 0; i < array.length; i++) {
        let songData = array[i].split("_");
        let typeList, name, time;
        [typeList, name, time] = [songData[0], songData[1], songData[2]];
        songs.push(new Songs(typeList, name, time));
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }

}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])