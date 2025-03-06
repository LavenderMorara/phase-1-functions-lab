function distanceFromHqInBlocks(blocks){
    if(blocks <42){
        return 42-blocks
    }
    else if(blocks>42){
        return blocks-42
    }
}


function distanceFromHqInFeet(blocks){
    let distance=distanceFromHqInBlocks(blocks);
    return distance*264
}

function distanceTravelledInFeet(start,destination){
   let distance=Math.abs(destination-start);
   return distance*264
    
}

function calculatesFarePrice(start,destination){
    let distance=distanceTravelledInFeet(start,destination);
    if(distance<=400){
        return 0
    }
    else if(distance>400 && distance<=2000){
        return (distance - 400)*0.02
    }
    else if(distance>2000 && distance<2500){
        return 25
    }
    else{return 'cannot travel that far'}
}