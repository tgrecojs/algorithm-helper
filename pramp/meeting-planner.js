/** 
  *
              Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration                   dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that               satisfies the duration requirement, return null.
              (slotsA, slotsB, duration)

*/
let one = [[10, 50], [60, 120], [140, 210]];
let two = [[40, 50], [20, 40], [100, 140]]

const meetingPlanner(slotsA, slotsB, dur) => {
  let index = 0, secIdx=0;
  while(index  < slotsA.length && secIdx < slotsB.length) {
        let start = Math.max(slotsA[index][0], slotsB[secIdx][0]);
        let end   = Math.min(slotsA[index][1], slotsB[secIdx][1]);
   
        if(start + dur <= end){
            return [start, start+dur];
        }
        // slots[0][1] = 0 < 50
        if(slotsA[index][1] < slotsB[secIdx][1]){
            index++;
        }else{
            secIdx++;
        }
    }
  
    return []
}

meetingPlanner(one, two, 9)
