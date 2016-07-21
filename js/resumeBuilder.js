var bio = {
    "name": "Abdullah Alam",
    "role": "Front End Engineer",
    "contacts": {
        "mobile": "(714) 267-5079",
        "email": "abdullah.alam.omi@gmail.com",
        "github": "abdullahaalam",
        "linkedin": "abdullahaalam",
        "twitter": "@abdullah_a_alam",
        "location": "Buena Park"
    },
    "welcomeMessage": "I am now pursuing my lifelong dream of becoming a Front End Engineer. I am working on various projects to demonstrate my ability and interest in the field. My past experiences taught me the skills to tackle complex interactions with depth and breadth, which I intend to deploy in my new career.",
    "skills": [
        "JavaScript", "jQuery", "Bootstrap", "AngularJS", "HTML5", "CSS3"
    ],
    "biopic": "images/abdullah.jpg"
};

var work = {
    "jobs": [{
        "employer": "Rochester Institute of Technology",
        "title": " Graduate Research Assistant for the Visual Attention for Captioning and Real-Time Transcription ",
        "location": "Rochester, NY",
        "dates": "November 2014 - June 2016",
        "description": "Supported deaf and hard of hearing students’ learning through the use of PowerPoint lectures and lecture videos in the classroom."
    }, {
       "employer": "Rochester Institute of Technology",
        "title": "Graduate Research Assistant for the Group Collaboration",
        "location": "Rochester, NY",
        "dates": "November 2014 - December 2015",
        "description": "Developed collaboration strategies (including use of computer technology) to help deaf and hard of hearing students work together equally and effectively when part of a team in a class at RIT or in a class in public schools."
    }, {
       "employer": "Rochester Institute of Technology",
        "title": "Front End Web Developer",
        "location": "Rochester, NY",
        "dates": "June 2015 – August 2015",
        "description": "Utilized HTML, CSS, Ajax, JavaScript, PHP to support RIT lab system and Kelvin IST website. Current display system can be seen outside RIT Labs."
    }]
};

var projects = {
    "projects": [{
        "title": "Mockup to Article",
        "dates": "2016",
        "description": "Practice HTML syntax by converting a mockup of a blog article into a real website! The guidelines consisted of text format, images, and layout. Some HTML elements I used are head, body, paragraph, bold, italic, image, ordered/unordered list, horizontal rule, and superscript.",
        "images": ["images/Mockup-to-Article.png"],
        "url": "https://abdullahaalam.github.io/Mockup-to-Article/mockup-to-article/"
    }, {
        "title": "Animal Trading Cards",
        "dates": "2016",
        "description": "Use what I've learned about CSS to convert a design prototype into a functional webpage! For this project, I applied border style, measurements for width, height, margin, padding, background color, font weight, page wrap, and container.",
        "images": ["images/Animal-Trading-Cards.png"],
        "url": "https://abdullahaalam.github.io/Animal-Trading-Cards/fend-animal-trading-cards-master/card.html"
    }, {
        "title": "Build a Portfolio Site",
        "dates": "2016",
        "description": "I will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. I will develop a responsive website that will display images, descriptions and links to each of the portfolio projects I will complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images": ["images/Build-a-Portfolio-Site.png"],
        "url": "https://abdullahaalam.github.io/Build-a-Portfolio-Site/Build-a-Portfolio-Site/index.html"
    }, {
        "title": "Online Resume",
        "dates": "2016",
        "description": "Once I've mastered the skills of a front end web developer I'll want to make a great first impression. I need a resume that stands out. The resume I build will not only help me build important skills, but will also make it easy to show employers why I am perfect for the job. As I progress through this Nanodegree program I can update this resume with my new skills and projects.",
        "images": ["images/Online-Resume.png"],
        "url": "https://github.com/abdullahaalam/frontend-nanodegree-resume"
    }]
};

var education = {
    "schools": [{
        "name": "Rochester Institute of Technology",
        "location": "Rochester, NY",
        "degree": "M.S.",
        "majors": ["Human Computer Interaction"],
        "dates": "2016",
        "url": "http://www.rit.edu/"
    }, {
        "name": "University of California, Riverside",
        "location": " Riverside, CA",
        "degree": "B.A.",
        "majors": ["Economics/Administration Studies"],
        "dates": "2013",
        "url": "http://www.ucr.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
    }]
};

var data = '%data%';

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
    $("#header").prepend(HTMLheaderName.replace(data, bio.name));
    $("#header").append(HTMLbioPic.replace(data, bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
    $("#topContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace(data, bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace(data, bio.contacts.github));
    $("#topContacts").append(HTMLlinkedin.replace(data, bio.contacts.linkedin));
    $("#topContacts").append(HTMLtwitter.replace(data, bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace(data, bio.contacts.location));
    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = '';
        var $skillList = $("#skills");
        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace(data, skill);
            $skillList.append(formattedSkill);
        });
    }
    $("#footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace(data, bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace(data, bio.contacts.github));
    $("#footerContacts").append(HTMLlinkedin.replace(data, bio.contacts.linkedin));
    $("#footerContacts").append(HTMLtwitter.replace(data, bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));
};

bio.display();

work.display = function() {
    for(var job = 0; job < work.jobs.length; job++) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

projects.display = function() {
    if(projects.projects.length > 0) {
        for(var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name).replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(var school = 0; school < education.onlineCourses.length; school++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[school].title).replace("#", education.onlineCourses[school].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[school].school);
                var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[school].dates);
                var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[school].url).replace("#", education.onlineCourses[school].url);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

education.display();

function displaymap() {
    $('#mapDiv').append(googleMap);
}
displaymap();