// var removeZeroSumSublists = function(head) {
//     const reutnrrray = []
//     var slow = head
//     var fast = head
//     for (let i = 0; i < head.length; i++) {
//         slow = head.next
//         fast = head.next.next
//         if(slow/fast === 0 ||slow/fast < 0 ){
//             reutnrrray.push(slow)
//         }
//     }
//     return reutnrrray   
// };

// console.log(removeZeroSumSublists([1,2,-3,3,1]))
var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let sum = 0;
    let map = new Map();
    let current = dummy;

    while (current) {
        sum += current.val;

        if (map.has(sum)) {
            let temp = map.get(sum).next;
            let tempSum = sum + temp.val;

            while (temp !== current) {
                map.delete(tempSum);
                temp = temp.next;
                tempSum += temp.val;
            }

            map.get(sum).next = current.next;
        } else {
            map.set(sum, current);
        }

        current = current.next;
    }

    return dummy.next;
};
