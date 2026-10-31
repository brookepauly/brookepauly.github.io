// Rendering Commits from GitHub API 

document.addEventListener('DOMContentLoaded', () => {
  fetch('commits.json')
    .then(res => res.json())
    .then(data => {
      const contributions = data.data.viewer.contributionsCollection.contributionCalendar;
      const weeks = contributions.weeks;
      const contributionTable = document.getElementById('contribution-table');

      document.getElementById('commit_count').innerHTML =
        `<p style="color: white;">${contributions.totalContributions} Github commits in the past year</p>`;

      const rows = Array.from({ length: 7 }, () => document.createElement('tr'));

      const monthLabels = document.getElementById("month-labels");
      let lastMonth = "";
      let lastLabelCol = -10;

      weeks.forEach((week, weekIndex) => {

        // Create month labels
        const date = new Date(week.contributionDays[0].date + "T12:00:00");
        const month = date.toLocaleString("default", { month: "short" });

        if (month !== lastMonth) {
          if (weekIndex - lastLabelCol >= 3) {
            const span = document.createElement("span");
            span.className = "month";
            span.textContent = month;
            span.style.gridColumn = weekIndex + 1;

            monthLabels.appendChild(span);
            lastLabelCol = weekIndex;
          }

          lastMonth = month;
        }

        // Create contribution squares
        week.contributionDays.forEach((day, dayIndex) => {
          const td = document.createElement('td');
          const count = day.contributionCount;

          td.className =