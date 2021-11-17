const taskOne = (passengers: number, shuffle: number) => {
  //complete your work here

  let passengerList: string[] = []
  let boarded = []
  let reservation = []
  let location: string[] = ['Abuja', 'Benue', 'Lagos', 'Katsina', 'Sambia']
  let count = 0
  let shuffled: number = shuffle

  let obj: {
    name: string
    location: string
  }

  let temporaryBoarded: {}[] = []

  for (let i = 0; i < passengers; i++) {
    let p = `passengers${i + 1}`
    passengerList.push(p)
  }
  console.log(passengerList)

  if (passengerList.length < 5) {
    for (let j = 0; j < passengerList.length; j++) {
      let obj = { name: passengerList[j], location: location[j] }
      reservation.push(obj) //forming 5
    }
  } else {
    for (let i = 0; i < passengerList.length; i++) {
      console.log(i)
      for (let j = 0; j < location.length; j++) {
        console.log(j)
        let obj = { name: passengerList[j], location: location[j] }
        temporaryBoarded.push(obj)
        console.log(temporaryBoarded)

        console.log(temporaryBoarded)
        console.log(temporaryBoarded.length)

        if (temporaryBoarded.length === 5) {
          boarded.push(...temporaryBoarded) // once its five push to boarded
          // count++
          // if (count > 1) shuffle--
          // console.log(boarded)
          temporaryBoarded = [] //empty temboarded
          passengerList.splice(0, 5)
          console.log(passengerList)

          //  if (passengerList.length < 5) {
          //     let remainder = passengers % 5
          //     let boardedNoOfPassengers = boarded.length
          //     for (let i=1; i<=remainder; i++) {
          //         let obj = {
          //             name: `passenger${boardedNoOfPassengers + 1}`,
          //             location: location[i-1]
          //         }
          //         reservation.push(obj)
          //         boardedNoOfPassengers++
          //     }
          //  }
        }
        console.log(passengerList)
        console.log(j)
      }
      console.log(passengerList)
      console.log(i)
    }
  }

  console.log(boarded)

  console.log(reservation)
}

//     return {
//         boarded:[],
//         reservation:[],
//         count:0
//     }
// }

taskOne(23, 1)
export default taskOne
