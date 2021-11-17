function taskOne(passengers, shuffle) {
    const locations = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"]
    let result = {}
    // let noOfReservations = passengers % 5
    let noOfBoarded = Math.floor(passengers / 5)
    let num = noOfBoarded * 5
    let reserve = [], boarded = [], j = 0, board;
    for (let i = 1; i <= passengers; i++) {
        let curPassenger = `passenger${i}`;
        if (j > locations.length - 1) j = 0
        let location = locations[j]
        j++
        board = { "name": curPassenger, "location": location };
        if (boarded.length >= num) {
            result["boarded"] = boarded
            reserve.push(board)
            result["reservations"] = reserve;
        } else {
            boarded.push(board);
            result["boarded"] = boarded
            result["reservations"] = reserve
        }
    }
    let upNum = result["boarded"].length;
    if(upNum){
        result["count"] = Math.ceil(upNum/50) 
    } else {
        result["count"] = 0
    }
    if (result["boarded"].length > 50) {
        result["boarded"] = result["boarded"].slice(-50, )
    }
    // console.log(result)
    // console.log(noOfReservations, "-----", noOfBoarded, '------', num, '-----', passengers, upNum)
    return result
}
console.log(taskOne(203, 0))