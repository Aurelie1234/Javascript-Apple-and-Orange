function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    
let apple_count = 0;
let orange_count = 0;
let apple_distance = 0;
let orange_distance = 0;


for (let i = 0; i < apples.length; i++ ) {
    apples[i] = apples[i] + a;
    apple_distance = apples
}


for (let i = 0; i < apple_distance.length; i++){
        if (apple_distance[i] >= s && apple_distance[i] <= t)
        apple_count++
    }
    
for (let i = 0; i < oranges.length; i++){
    oranges[i] = oranges[i] + b;
    orange_distance = oranges     
}


for (let i = 0; i < orange_distance.length; i++){
    if (orange_distance[i] >= s && orange_distance[i] <= t)
    orange_count++
}
    
console.log(apple_count)
console.log(orange_count)


}
