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
