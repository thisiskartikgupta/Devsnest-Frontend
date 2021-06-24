//! FILE FOR TESTING ONLY

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
    masterCardTypes = []

    numberOfCards = 10;
    tempAllocList = []
    
    for(let i = 0; i < numberOfCards/2; i++) 
        tempAllocList.push(2);
    
    console.log(tempAllocList);

    for(i = 0; i < numberOfCards; i++) {

        var genNumber = getRandomNumber(0, numberOfCards/2 - 1);
        
        if(tempAllocList[genNumber] > 0) {
            tempAllocList[genNumber]--;
            masterCardTypes.push(genNumber);
        }
        else {
            for(let i = 0; i < tempAllocList.length; i++)
                if(tempAllocList[i] !== 0) {
                    tempAllocList[i]--;
                    masterCardTypes.push(i);
                }
        }
    }

    console.log(masterCardTypes)
