var sortTheStudents = function (score, k) {
    score.sort((a,b) => b[k] - a[k]) // Sorting array from Highest to Lowest
    return score; //Returning that sorted array 
};
