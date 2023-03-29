/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let i=0;
    let seconds = 0;
    let nextpoint = i+1;
    
    for(i=0;i<=points.length-2;i++) {
         let nextpoint = i+1;
        let first = points[i][0] - points[nextpoint][0]
        let second = points[i][1]- points[nextpoint][1]
        seconds += (Math.abs(first) > Math.abs(second)) ? Math.abs(first) : Math.abs(second) 
        console.log(seconds)
                    
    }
   return seconds
    
};