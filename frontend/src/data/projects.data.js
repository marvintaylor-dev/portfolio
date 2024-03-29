const Projects = [
    {
        id: 1,
        title: 'Apprentice',
        subtitle: 'Mentoring Platform',
        siteUrl: 'http://apprenticeapp.live',
        codeUrl: 'https://github.com/marvintaylor-dev/apprentice',
        heroImg: 'LaptopViewApprentice.png',
        image1: "cluster1.png",
        image2: "Cluster2.png",
        image3: "DashboardImg.png",
        image4: "LaptopPhoneViewApprentice.png",
        role: {
            title: "My Role",
            info: "This is a solo-developed project. The idea was entirely conceptualized and designed by me, with a code base expanded upon from course material."
        },
        why: {
            title: "Why Create This?",
            info: "The idea was inspired by my desire to optimize the career selection process."
        },
        problem: {
            title: "The Problem",
            info: "Often students have no real-world connection to careers outside of their sphere of influence. We essentially have a world in which information is easily accessible, but we are heavily influenced by who we interact with."
        },
        solution: {
            title: "My Proposed Solution",
            info: "Mobilize people from every profession to become a remote or in-person mentor. A social platform, specifically designed for discovering career possibilities will expose the existence of some professions and demystify others."
        },
        struggles: {
            title: "Struggles",
            info: "The shear size and scope of the project. Many moving parts that all needed to fit together from user modeling, persistency of data, user to user communication with lots of UI work.\n\nManaging feature creep was huge. There was always a new idea for potential functionality popping up. Eventually, it was necessary to add restraints in order to try and maintain a working MVP."
        },
        perseverance: {
            title: "How I Worked Through",
            info: "I tried to break the project down into smaller parts to make it manageable. It became increasingly important to focus on one component at a time. My biggest lesson was to focus on functionality and reusablity. Get it working, then move on to the next thing."
        },
        changes: {
            title: "If I Could Start Over Again...",
            info: "The Lean Startup encourages always having an MVP ready. I would have maintained a shippable product throughout the development process.\n\nI would incorporate a modular way of thinking; make code reusability a priority.\n\nI may have jumped too quickly into design decisions. Eliminate 'cool to haves' and replace with 'must haves'\n\nI would niche down the project instead of having such a broad scope. Focus on doing one or two Features really well.\n\nI would rework the idea. I probably overestimated the number of people prepared to be a mentor. My concerns would be poor user experience as the average person may not be ready for a mentorship role. A heavily guided path for mentors would be necessary."
        },
        wishlist: {
            title: "Wishlist for the Project",
            info: "Web scraping to acquire real time job titles and information so that this could truly be a dynamic library of professions.\n\nOn demand video from mentors for engagement.\n\nSeparate login portals for mentees and mentors.\n\nPersistency of group and private messages. Subscription options for mentees."
        },
        technology: {
            title: "Tecnology Used",
            info: "Javascript / Embedded Javascript\nSCSS / CSS\nNode.Js / Express.Js\nMongoose.Js\nMongoDB\nMongoAtlas\nHeroku"
        }
    },
    {
        id: 2,
        title: 'Visualizer',
        subtitle: 'Sorting Alogrithm Visualizer',
        siteUrl: 'https://marvintaylor-dev.github.io/sorting-visualizer/',
        codeUrl: 'https://github.com/marvintaylor-dev/sorting-visualizer',
        heroImg: 'LaptopViewVisualizer.png',
        image1: "ColorCodedAlgorithms.png",
        image2: "CustomBars.png",
        image3: "DarkVsLight.png",
        role: {
            title: "My Role",
            info: "This is a solo-developed project."
        },
        why: {
            title: "Why Create This?",
            info: "I wanted to work on an application that involved both algorigms and DOM manipulation which involved some sort of interaction with the software."
        },
        problem: {
            title: "The Problem",
            info: "How can I display algorithms in a visually interesting, accurate, and responsive way"
        },
        solution: {
            title: "Features",
            info: "Responsive design from mobile to web, color theme toggle with a custom made icon, customizable algorithm speed and number of bars, an 'assortment of sorting algorithms', and user friendly interface"
        },
        struggles: {
            title: "Struggles",
            info: "Getting the bars to animate properly with asynchronous calls in Merge Sort and Quick Sort."
        },
        perseverance: {
            title: "How I Worked Through",
            info: "I dove into asynchronous javascript to understand why it seemed bars were being skipped or why solutions showed no progress but would then show a completed solution.\n\nI used color as a visual reference for how the algorithm was progressing to understand where bugs occurred.\n\nI found other examples of sorting algorithms and how they implemented color. "
        },
        additions: {
            title: "Things I Would Like to Add",
            info: "I would find a less commonly used method of displaying the information.\n\nI would use realtime data to make the app more meaningful and useful for people outside of software engineering."
        },
        technology: {
            title: "Technology Used",
            info: "Vanilla Javascript\nCSS\nHTML"
        }
    },
    {
        id: 3,
        title: 'Tasky',
        subtitle: 'Agile Project Management Software',
        siteUrl: '',
        codeUrl: 'https://github.com/marvintaylor-dev/Tasky',
        heroImg: 'LaptopViewTasky.png',
        image1: "TaskyImageGroup1.png",
        image2: "TaskyImageGroup2.png",
        image3: "TaskySprints.png",
        image4: "blazor.png",
        role: {
            title: "My Role",
            info: "This is a solo-developed project."
        },
        why: {
            title: "Why Create This?",
            info: "In fulfilling my role as a Scrum Master I wanted to learn all there was to know about how to deliver a project using Agile methodologies. I also happen to have a love for creating and wanted to keep my coding skills sharp. Therefore I created this tool to manage projects."
        },
        problem: {
            title: "The Problem",
            info: "How can I address problems in a way that users would find usable and even preferable to how they currently operate? Are there areas that are not ideally addressed in current applications?"
        },
        solution: {
            title: "Features",
            info: "Various views including the Backlog, Assignee, Table, and Kanban. Custom components to add tags, acceptance criteria, move or add subtasks, drag and drop work into sprints, team/status configuration and more."
        },
        struggles: {
            title: "Struggles",
            info: "Working with a third party library to create the kanban board was a struggle. Understanding how to get the information to display as expected provided a challenge.\n\nThere were a great many struggles throughout the process. Probably too many to name here."
        },
        perseverance: {
            title: "How I Worked Through",
            info: "I dedicated myself to figuring out the solution via trial and error and did not let myself leave the issue alone until I found a solution.\n\nThe entire project followed a similar pattern. An idea, followed by an attempt at implementation, followed by heartache and struggle, most of time follwed by an acceptable and often times satisfying solution.\n\n"
        },
        additions: {
            title: "Things I Would Like to Add",
            info: "I will hopefully continue to add on to this project including dashboards, calendars, a more robust way of collaborating, and several more ideas.\n\n"
        },
        technology: {
            title: "Technology Used",
            info: ".NET 6\nC#\nBlazor\nCSS\nSQL"
        }
    }
]

export default Projects;