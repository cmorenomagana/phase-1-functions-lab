function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42) {
        return  pickup - 42
    }
    else {
      return  42 - pickup
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264

    
}

function distanceTravelledInFeet(start, destination) {
    if  (destination > start) {
        return (destination - start) * 264
    }
    else {
        return (start - destination) * 264
    }
    

}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}
