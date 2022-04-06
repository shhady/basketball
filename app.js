
    let johnAvg =() => {return (89 + 120 + 103)/3};
    let mikeAvg =() => {return (116 + 94 + 123)/3};
    
        if(mikeAvg > johnAvg ){
            console.log(`Mike's team won with an average points of ${mikeAvg()}`);
        }
        else if (johnAvg > mikeAvg){
            console.log(`john's team won with an average points of ${johnAvg()}`)
        }
        else {
            console.log('Its a draw')
        }


        let johnAvg1 =() => {return (89 + 120 + 103)/3};
        let mikeAvg1 =() => {return (116 + 94 + 123)/3};
        console.log(mikeAvg1());
            // console.log(johnAvg());
            if(mikeAvg > johnAvg ){
                console.log(`Mike's team won with an average points of ${mikeAvg()}`);
            }
            else if (johnAvg > mikeAvg){
                console.log(`john's team won with an average points of ${johnAvg()}`)
            }
            else {
                console.log('Its a draw')
            }
    

    


   
const averagePoints = (a, b, c) => (a + b + c) / 3;

// 2nd team win situation
let johnTeam = averagePoints(89, 120, 103),
  mikeTeam = averagePoints(116, 94, 123);

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}\n`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}\n`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}\n`);
}