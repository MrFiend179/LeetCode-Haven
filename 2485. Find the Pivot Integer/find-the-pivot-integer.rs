impl Solution {
    pub fn pivot_integer(n: i32) -> i32 {
        let mut leftsum : i32 = 0;
        let mut rightsum : i32 = 0;

        for i in 0..=n {
            leftsum = (i * (i + 1)) / 2;
            rightsum = (n * (n + 1)) / 2 - (i * (i - 1)) / 2;

            if(leftsum == rightsum){
                return i;
            };
        };
        return -1;
    }
}