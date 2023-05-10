/**
 * @param {number} n
 * @return {number[][]}
 */

 /** Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

  */
 var generateMatrix = function(n) {
    var output = []
    for(let i=0;i<n;i++){
         output.push([])
    }

    var ct = 1

    for( let layer=0; layer < (n+1)/2;layer++){
        for(let i = layer; i< n-layer;i++){
            output[layer][i] = ct++
        }
        for(let i = layer + 1;i< n - layer;i++){
            output[i][n-layer -1] = ct++
        }
        for(let i= layer + 1;i < n-layer ;i++){
            output[n-layer-1][n-i-1] = ct++
        }
        for(let i = layer + 1;i<n -layer -1;i++){
            output[n-i-1][layer] = ct++
        }
    }
  
        
return output

    
};