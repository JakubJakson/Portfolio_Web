const awardsLink = document.querySelector(".awards-link");
const awardsSection = document.getElementById("awards");
const logo = document.querySelector(".logo");
const introText = document.querySelector(".intro-text");
const navContainer = document.querySelector(".nav-container");
const workItems = document.querySelectorAll(".work-item");
const labels = document.querySelectorAll(".label");
const pageCont = document.querySelector(".page-container");

const workSection = document.getElementById("work");

const links = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

links.forEach((link, i) => {
  link.addEventListener("click", function () {
    removeDesc();
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    sections[i].classList.add("active");
    // document.body.style.overflowY = "auto";
    introText.classList.add("logo-hide");
  });
});

logo.addEventListener("click", function () {
  sections.forEach((section) => section.classList.remove("active"));
  // document.body.style.overflow = "hidden";
  introText.classList.remove("logo-hide");
});

// NavbarSticky

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
});

workItems.forEach((work, i) => {
  work.addEventListener("mouseenter", function () {
    labels[i].style.width = "50%";
  });
  work.addEventListener("mouseleave", function () {
    labels[i].style.width = "0%";
  });
});

// Function to update the overflow property for each section
function updateOverflow() {
  sections.forEach((section) => {
    // Calculate the content height
    const contentHeight = section.scrollHeight;

    // Get the viewport height
    const viewportHeight = window.innerHeight;

    // Compare content height with viewport height
    if (contentHeight > viewportHeight) {
      section.style.overflow = "auto"; // Enable scrolling
    } else {
      section.style.overflow = "hidden"; // Disable scrolling
    }
  });
}

// // Initial call to updateOverflow
// updateOverflow();

// // Update the overflow property when the window is resized
// window.addEventListener("resize", updateOverflow);

const credits = {
  0: {
    yt: "https://www.youtube.com/embed/vOgPhfV00kU",
    cd: "Michal Pastier, Kristína Karabinošová",
    copy: "Roman Krmášek, Judita Ružičková",
    art: "Jaroslav Novotný",
    stratD: "Roman Biath",
    strat: "David Červený",
  },
  1: {
    yt: "https://www.youtube.com/embed/GH12jW464rI",
    cd: "Michal Pastier",
    copy: "Martin Krafčík, Barbora Šimoniková",
    art: "Tereza Talichová, Václav Kudělka",
    stratD: "Roman Biath",
    strat: "David Červený",
  },
  2: {
    cd: "Roman Biath",
    copy: "Judita Ružičková, Dajana Szekelyová",
    art: "Tereza Talichová, Václav Kudělka, Ondřej Kroupa, Filip Košatka",
    stratD: "Roman Biath",
    strat: "David Červený, Lucia Urbaníková",
  },
  3: {
    cd: "Roman Biath",
    copy: "Judita Ružičková",
    art: "Ondřej Kroupa",
    stratD: "Roman Biath",
    strat: "",
  },
  4: {
    cd: "Tomáš Belko",
    copy: "Tomáš Belko",
    art: "Lucie Ždánská",
    stratD: "Jakub Hodboď",
    strat: "David Červený",
  },
  5: {
    cd: "Leonard Savage",
    copy: "Judita Ružičková",
    art: "Yigit Keskin",
    stratD: "Eduard Piňos & Roman Biath",
    strat: "",
  },
  6: {
    cd: "Kristina Karabinošová",
    copy: "Judita Ružičková",
    art: "Tereza Talichová",
    stratD: "Palo Minár",
    strat: "David Červený",
  },
  7: {
    cd: "Roman Biath",
    copy: "Judita Ružičková, Dajana Szekelyová",
    art: "Ondřej Kroupa, Filip Košatka",
    stratD: "Roman Biath",
    strat: "David Červený",
  },
  8: {
    cd: "Kateřina Huňová",
    copy: "Kateřina Huňová",
    art: "Ondřej Kroupa, Marian Vaňo",
    stratD: "",
    strat: "David Červený",
  },
  9: {
    cd: "Kateřina Huňová",
    copy: "Michal Krhut",
    art: "Marian Vaňo",
    stratD: "",
    strat: "David Červený",
  },
  10: {
    cd: "Michal Pastier",
    copy: "Martin Krafčík, Barbora Šimoniková",
    art: "Tereza Talichová, Václav Kudělka",
    stratD: "Roman Biath",
    strat: "David Červený",
  },
  11: {
    cd: "Michal Pastier",
    copy: "Martin Krafčík, Barbora Šimoniková",
    art: "Tereza Talichová, Václav Kudělka",
    stratD: "Roman Biath",
    strat: "David Červený",
  },
  12: {
    cd: "Michal Pastier",
    copy: "Martin Krafčík, Barbora Šimoniková",
    art: "Tereza Talichová, Václav Kudělka",
    stratD: "Roman Biath",
    strat: "David Červený",
  },
};

// Dynamically Generate New Work Desc Element in HTML
workItems.forEach((item, i) => {
  item.addEventListener("click", function () {
    removeDesc();

    const newSection = document.createElement("div");
    const videoContainer = document.createElement("div");
    const workDescText = document.createElement("h3");
    const creditsElement = document.createElement("p");

    const videoLink = credits[i].yt;

    const video = document.createElement("iframe");
    video.setAttribute("src", videoLink);
    video.setAttribute("width", "560");
    video.setAttribute("height", "315");
    video.setAttribute("allowfullscreen", "true");

    workDescText.innerHTML =
      "Lorem ipsum asdasdasdasd dasdsadsa dasdasd asdsa dasd asdas dasd as dasdas dasdasdasdasdas dasdas dasdasdaasdasdas dasd asdas dasdasd asdas dasd asdasd as.";

    const creditsText = `Creative Director: ${credits[i].cd}<br>
    Copywriters: ${credits[i].copy}<br>
    Art Directors: ${credits[i].art}<br>
    Stretegic Director: ${credits[i].stratD}<br> 
    Strategic Planner: ${credits[i].strat}
    `;

    creditsElement.innerHTML = creditsText;

    creditsElement.classList.add("credits");
    workDescText.classList.add("work-desc");
    videoContainer.classList.add("video-container");

    videoContainer.appendChild(workDescText);
    videoContainer.appendChild(video);

    newSection.appendChild(videoContainer);
    newSection.appendChild(creditsElement);

    newSection.classList.add("section");
    newSection.classList.add("work-desc");
    newSection.classList.add("active");

    pageCont.appendChild(newSection);

    work.classList.remove("active");
  });
});

// Remove Existing Work Desc from HTML
const removeDesc = function () {
  const existingDesc = document.querySelector(".work-desc");
  if (existingDesc) {
    existingDesc.remove();
  }
};
