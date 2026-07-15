// Scroll Animation 
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-animate').forEach(el => scrollObserver.observe(el));

function revealSocialLinks() {
  document.querySelector('.social-links').classList.add('in-view');
  window.removeEventListener('scroll', revealSocialLinks);
}

window.addEventListener('scroll', revealSocialLinks);

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

      weeks.forEach(week => {
        week.contributionDays.forEach((day, dayIndex) => {
          const td = document.createElement('td');
          const count = day.contributionCount;
          td.className = `color-${count === 0 ? 0 : count < 5 ? 1 : count < 10 ? 2 : count < 15 ? 3 : 4}`;
          rows[dayIndex].appendChild(td);
        });
      });

      rows.forEach(row => contributionTable.appendChild(row));
    })
    .catch(err => console.error('Error:', err));
});

// Header Animation 

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("scrolled");
    } 
    else {
        header.classList.remove("scrolled");
    }

});

// Hamburger Toggle 

const hamburger = document.getElementById("hamburger");
const overlay = document.querySelector(".hamburger-wrapper");
const menuLinks = document.querySelectorAll(".menu a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    overlay.classList.toggle("open");
});

menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        hamburger.classList.remove("open");
        overlay.classList.remove("open");

        setTimeout(() => {
            target?.scrollIntoView({
                behavior: "smooth"
            });
        }, 500);
    });
});