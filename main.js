const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Monthly sales target
rl.question('Enter Monthly sales target:', (monthlySalesTarget) => {
  // Get the start and end dates from the user
  rl.question('Enter the start date (YYYY-MM-DD):', (startDateInput) => {
    rl.question('Enter the end date (YYYY-MM-DD):', (endDateInput) => {
      const startDate = new Date(startDateInput);
      const endDate = new Date(endDateInput);

      if (endDate >= startDate) {
        // Calculate the exact date range
        const dateRange = ${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)};

        // Check if the number of days in the end month is valid
        const endMonth = endDate.getMonth();
        const endYear = endDate.getFullYear();
        const daysInEndMonth = new Date(endYear, endMonth + 1, 0).getDate();

        if (endDate.getDate() <= daysInEndMonth) {
          // Count the number of Fridays in the date range
          let fridaysCount = 0;
          let currentDate = new Date(startDate);

          while (currentDate <= endDate) {
            if (currentDate.getDay() === 5) {
              // Friday is represented by 5 (0: Sunday, 1: Monday, ..., 6: Saturday)
              fridaysCount++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
          }

          // Calculate the number of years worked
          const yearsWorked = endDate.getFullYear() - startDate.getFullYear() + 1;

          // Calculate the number of working days in the date range
          const daysInRange = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
          const workingDaysInRange = daysInRange - fridaysCount;

          // Number of working days in a week (Saturday-thursday)
          const workingDaysInWeek = 6;

          // Calculate the daily sales target
          const dailySalesTarget = monthlySalesTarget / (daysInRange / workingDaysInWeek);

          // Calculate the weekly sales target
          const weeklySalesTarget = dailySalesTarget * workingDaysInWeek;

          // Calculate the yearly sales target
          let yearlySalesTarget;
          if (startDate.getFullYear() === endDate.getFullYear()) {
            yearlySalesTarget = monthlySalesTarget * 12;
          } else {
            const startYear = startDate.getFullYear();
            const endYear = endDate.getFullYear();
            const totalYearsInRange = endYear - startYear;
            yearlySalesTarget = monthlySalesTarget * 12 * (totalYearsInRange + 1);
          }

          // Display the results
          console.log(Number of Fridays in the range: ${fridaysCount});
          console.log(Number of working days in the range: ${workingDaysInRange});
          console.log(Number of years worked: ${yearsWorked} Years!);
          console.log(Monthly Sales Target: $${monthlySalesTarget});
          console.log(Daily Sales Target: $${dailySalesTarget.toFixed(2)});
          console.log(Weekly Sales Target: $${weeklySalesTarget.toFixed(2)});
          console.log(Yearly Sales Target: $${yearlySalesTarget.toFixed(2)});

          rl.close();
        } else {
          console.log(Invalid number of days in the end month. The end month (${endMonth + 1}) has ${daysInEndMonth} days. Please enter valid dates.);
          rl.close();
        }
      } else {
        console.log("Invalid date range. Please enter valid dates.");
        rl.close();
      }
    });
  });
});
