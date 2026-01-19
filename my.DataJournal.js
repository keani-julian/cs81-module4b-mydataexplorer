// Assignment 4B: My Personal Data Objects
// GitHub URL: https://github.com/keani-julian/cs81-module4b-mydataexplorer

const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 6, mood: "productive", caffeineIntake: 2, focusLevel: 8 },
  { day: "Tuesday", sleepHours: 6.5, screenTime: 5, mood: "tired", caffeineIntake: 3, focusLevel: 7 },
  { day: "Wednesday", sleepHours: 6, screenTime: 8, mood: "productive", caffeineIntake: 1, focusLevel: 9 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 4, mood: "happy", caffeineIntake: 2, focusLevel: 8 },
  { day: "Friday", sleepHours: 6.5, screenTime: 7, mood: "stressed", caffeineIntake: 2, focusLevel: 6 },
  { day: "Saturday", sleepHours: 8, screenTime: 3, mood: "relaxed", caffeineIntake: 1, focusLevel: 7 },
  { day: "Sunday", sleepHours: 7, screenTime: 2, mood: "happy", caffeineIntake: 0, focusLevel: 8 }
];
// Predictions:
// 1. More sleep hours will correlate with higher focus levels.
// 2. Higher screen time will correlate with lower mood ratings.
// 3. Increased caffeine intake will correlate with higher focus levels and perhaps lower mood ratings.

// Function summary: This function finds the day with the highest screen time during the week.
// It loops through each day’s data and compares screenTime values.
// The function returns the name of the day with the most screen usage.
function findHighestScreenTime(data) {
  let maxTime = 0;
  let maxDay = "";
  for (let entry of data) {
    if (entry.screenTime > maxTime) {
      maxTime = entry.screenTime;
      maxDay = entry.day;
    }
  }
  return maxDay;
}

// Function summary: This function calculates the average number of sleep hours across the week.
// It adds together all sleepHours values and divides by the number of days.
// The function returns a single number representing average sleep.
function averageSleep(data) {
  let totalSleep = 0;
  for (let entry of data) {
    totalSleep += entry.sleepHours;
  }
  return totalSleep / data.length;
}

// Function summary: This function determines the most common mood recorded during the week.
// It uses an object to count how often each mood appears.
// The function returns the mood with the highest frequency.
function mostFrequentMood(data) {
  const moodCounts = {};
  for (let entry of data) {
    if (!moodCounts[entry.mood]) {
      moodCounts[entry.mood] = 1;
    } else {
      moodCounts[entry.mood]++;
    }
  }
  let maxMood = "";
  let maxCount = 0;
  for (let mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      maxMood = mood;
      maxCount = moodCounts[mood];
    }
  }
  return maxMood;
}

// Function summary: This function explores whether higher caffeine intake relates to higher focus levels.
// It calculates average caffeine intake and average focus across the week.
// The function returns a string describing whether caffeine appears helpful or not.
function correlateCaffeineToFocus(data) {
  let totalCaffeine = 0;
  let totalFocus = 0;
  for (let entry of data) {
    totalCaffeine += entry.caffeineIntake;
    totalFocus += entry.focusLevel;
  }
  const avgCaffeine = totalCaffeine / data.length;
  const avgFocus = totalFocus / data.length;
  if (avgFocus > avgCaffeine) {
    return "No clear positive correlation between caffeine and focus.";
  }
  return "Caffeine may be helping focus slightly.";
}
console.log("Most screen time:", findHighestScreenTime(weekData));
console.log("Average sleep:", averageSleep(weekData));
console.log("Most frequent mood:", mostFrequentMood(weekData));
console.log("Caffeine vs focus:", correlateCaffeineToFocus(weekData));
