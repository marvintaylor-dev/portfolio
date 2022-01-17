const Projects = [
    {
        id: 1,
        title: 'Apprentice',
        subtitle: 'Mentoring Platform',
        siteUrl: 'https://polite-crown-37314.herokuapp.com/',
        codeUrl: 'https://github.com/marvintaylor-dev/apprentice',
        heroImg: 'LaptopViewApprentice.png',
        image1: "cluster1.png",
        image2: "Cluster2.png",
        image3: "DashboardImg.png",
        image4: "LaptopPhoneViewApprentice.png",
        role: {
            title: "My Role",
            info: "This is a solo-developed project conceptualized, designed, and coded by me."
        },
        why: {
            title: "Why Create This?",
            info: "The idea was inspired by my desire to optimize the career selection process."
        },
        problem: {
            title: "The Problem",
            info: "Often students have no real-world connection to careers outside of their sphere of influence. We essentially have a world in which information is easily accessible, but we are heavily influenced by the people around us."
        },
        solution: {
            title: "My Proposed Solution",
            info: "Mobilize people from every profession to become a remote or in-person mentor. A social platform, specifically designed for discovering careers will expose not only the existence of certain professions but will demystify them as well."
        },
        struggles: {
            title: "Struggles",
            info: "The shear size and scope of the project. Many moving parts that all needed to fit together from user modeling, persistency of data, user to user communication with lots of UI work.\n\nManaging feature creep was huge. There was always a new idea of what the web app could potentially do that it was necessary to add restraints in order to try and maintain a working MVP."
        },
        perseverance: {
            title: "How I Worked Through",
            info: "I tried to break the project down into smaller parts to make it manageable. Getting one thing to work at a time made me slow down and think about what was realistically possible."
        },
        changes: {
            title: "If I Could Start Over Again...",
            info: "The Lean Startup encourages always having an MVP ready. I would have maintained a shippable product throughout the development process.\n\nI would incorporate a modular way of thinking making code reusability a priority.\n\nI would save much of the design work until after the Functionality has been achieved.\n\nI would niche down the project instead of having such a broad scope. Focus on doing one or two Features really well.\n\nI would rework the idea. I probably overestimated the number of people prepared to be a mentor. My concerns would be poor user experience or training the average person to become a competent mentor."
        },
        wishlist: {
            title: "Wishlist for the Project",
            info: "Web scraping to acquire real time job titles and information so that this could truly be a dynamic library of professions.\n\nOn demand video from mentors for engagement.\n\nSeparate login portals for mentees and mentors.\n\nPersistency of group and private messages. Subscription options for mentees."
        },
        technology: {
            title: "Tecnology Used",
            info: "Javascript\nEmbedded Javascript\nSCSS\nCSS\nNode.Js\nExpress.Js\nMongoose.Js\nMongoDB\nMongoAtlas\nHeroku"
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
            info: "This is a solo-developed project conceptualized, designed, and coded by me."
        },
        why: {
            title: "Why Create This?",
            info: "I wanted to work on an application with a specific scope and purpose which allowed me to work on both algorithms and UI alike."
        },
        problem: {
            title: "The Problem",
            info: "How can I display algorithms in a visually interesting way, accurate, and responsive way"
        },
        solution: {
            title: "Features",
            info: "Responsive design for mobile or web, Custom light / dark icon animation, Customizable algorithm speed and number of bars, User friendly interface"
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
    }
]

export default Projects;