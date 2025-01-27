function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return (sum / scores.length).toFixed(1); // Ensure the average is rounded to one decimal place
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores); // Calculate the class average
    const grade = getGrade(studentScore); // Determine the student's grade
    const passed = hasPassingGrade(studentScore); // Check if the student passed
  
    // Construct the message based on whether the student passed or failed
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". " +
      (passed ? "You passed the course." : "You failed the course.")
    );
  }
  
  // Test case 1
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  // Expected: "Class average: 71.7. Your grade: F. You failed the course."
  
  // Test case 2
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
  // Expected: "Class average: 50.8. Your grade: A++. You passed the course."
  