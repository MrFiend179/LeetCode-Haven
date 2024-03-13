impl Solution {
    pub fn bulb_switch(n: i32) -> i32 {
        (n as f64).sqrt() as i32   // Converting n from i32 to f64, then taking its squareroot then again converting it to i32 
    }
}

// {P.S} .sqrt() can only be applied on f64 integers instead of i32 