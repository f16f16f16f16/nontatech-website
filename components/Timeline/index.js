import React from "react";
import { motion } from "framer-motion";
import StoryCard from "../StoryCard";
import WideStoryCard from "../WideStoryCard";
import image2020_1 from "../../assets/images/2020/1.JPG";
import image2020_2 from "../../assets/images/2020/2.JPEG";
import image2020_3 from "../../assets/images/2020/3.jpg";
import image2020_4 from "../../assets/images/2020/4.jpg";
import image2020_5 from "../../assets/images/2020/5.JPG";
import image2020_6 from "../../assets/images/2020/6.JPG";
import image2020_7 from "../../assets/images/2020/7.JPG";
import image2020_8 from "../../assets/images/2020/8.JPG";
import image2020_9 from "../../assets/images/2020/9.JPG";
import image2020_11 from "../../assets/images/2020/11.JPG";
import image2020_12 from "../../assets/images/2020/12.JPG";
import image2020_13 from "../../assets/images/2020/13.JPG";
import image2020_14 from "../../assets/images/2020/14.JPG";
import image2020_15 from "../../assets/images/2020/15.JPG";
import image2020_16 from "../../assets/images/2020/16.jpg";
import image2020_17 from "../../assets/images/2020/17.PNG";
import image2020_18 from "../../assets/images/2020/18.JPG";
import image2020_10 from "../../assets/images/2020/10.jpg";
import image2022_1 from "../../assets/images/2022/1.png";
import image2022_2 from "../../assets/images/2022/2.png";
import friend1 from "../../assets/images/friend/friend-1.png";
import friend2 from "../../assets/images/friend/friend-2.png";
import friend3 from "../../assets/images/friend/friend-3.png";
import learningWeb from "../../assets/images/topics/learning-web.jpg";
import swiftuiPractice from "../../assets/images/topics/swiftui-practice.jpg";
import firebaseTopic from "../../assets/images/topics/firebase.jpg";
import reactTopic from "../../assets/images/topics/react.jpg";
import swiftPlaygroundsTopic from "../../assets/images/topics/swift-playgrounds.jpg";
import backendFullstackTopic from "../../assets/images/topics/backend-fullstack.jpg";
import expandingStackTopic from "../../assets/images/topics/expanding-stack.jpg";
import goBackendTopic from "../../assets/images/topics/go-backend.jpg";
import typescriptBackendTopic from "../../assets/images/topics/typescript-backend.jpg";
import flutterFrontendTopic from "../../assets/images/topics/flutter-frontend.jpg";
import graffityDocs from "../../assets/images/graffity/docs.jpg";
import graffityBefore from "../../assets/images/graffity/website-before.jpg";
import graffityAfter from "../../assets/images/graffity/website-after.jpg";
import graffityViewer from "../../assets/images/graffity/viewer.jpg";
import graffityMappers from "../../assets/images/graffity/mappers.jpg";
import cosciThesisExhibition from "../../assets/images/cosci/thesis-exhibition.png";
import cartoonIos from "../../assets/images/cartoonApp/xcode.png";
import foodIos from "../../assets/images/foodApp/xcode.png";
import foodWeb1 from "../../assets/images/foodApp/web1.png";
import foodWeb2 from "../../assets/images/foodApp/web2.png";
import foodWeb3 from "../../assets/images/foodApp/web3.png";
import thesisSummary from "../../assets/images/thesis/summary.png";
import nontatechVer1 from "../../assets/images/version1.png";

const stories = [
  {
    id: 1,
    year: "2020",
    category: "The Beginning",
    title: "Where It All Started",
    description: "The beginning. I got accepted into university, and that's where this whole journey started.",
    image: image2020_5.src,
    // highlights: ["Achievement", "Recognition", "New Horizons"],
    isWide: true,
    // link: "https://example.com",
    // linkLabel: "View Case Study",
  },
  {
    id: 2,
    year: "2020",
    month: "1-8",
    category: "School Days",
    title: "Before University",
    description:
      "The last stretch of school life at Assumption College Sriracha before university — the moments I spent with friends and classmates before everything changed.",
    images: [
      image2020_4.src,
      image2020_3.src,
      image2020_7.src,
      image2020_6.src,
      image2020_8.src,
      image2020_9.src,
      image2020_2.src,
      image2020_11.src,
      image2020_12.src,
      image2020_13.src,
    ],
    // highlights: ["First Project", "Learning", "Discovery"],
  },
  {
    id: 3,
    year: "2020",
    month: "8-12",
    category: "First Steps",
    title: "University, Finally — During COVID",
    description:
      "Finally in university for real — Srinakharinwirot University, Computer for Communications — except it was all during COVID. Online classes, empty campus, and figuring out student life through a screen.",
    images: [image2020_15.src, image2020_17.src, image2020_14.src, image2020_18.src],
    // highlights: ["Foundations", "Growth Mindset", "Dedication"],
  },
  {
    id: 4,
    year: "2021",
    month: "09",
    category: "Self-Taught",
    title: "Learning the Web",
    description:
      "Started teaching myself HTML and CSS3 from scratch, laying the foundation that everything else would be built on.",
    image: learningWeb.src,
    highlights: ["HTML", "CSS3", "Self-Taught"],
  },
  {
    id: 5,
    year: "2021",
    month: "10",
    category: "iOS Development",
    title: "First Steps in SwiftUI",
    description:
      "Worked through SwiftUI examples — alerts, buttons, text fields, contact cards — while getting comfortable with Apple's declarative UI framework.",
    image: swiftuiPractice.src,
    highlights: ["Swift", "SwiftUI", "iOS"],
  },
  {
    id: 6,
    year: "2021",
    month: "11",
    category: "iOS Development",
    title: "Final Year 2 Project: Cartoon App",
    description:
      "Built a Swift iOS app for my Year 2 final project, an app centered around browsing and viewing cartoons.",
    image: cartoonIos.src,
    highlights: ["Swift", "iOS", "Final Project"],
    link: "https://github.com/f16f16f16f16/Final_Year2_CartoonApp_2021",
    linkLabel: "View on GitHub",
  },
  {
    id: 7,
    year: "2021",
    month: "12",
    category: "Backend",
    title: "Exploring Firebase",
    description:
      "Experimented with Firebase as a backend for early app prototypes — auth, database, and hosting all in one place.",
    image: firebaseTopic.src,
    highlights: ["Firebase", "Backend"],
  },
  {
    id: 8,
    year: "2022",
    month: "08",
    category: "Self-Taught",
    title: "JavaScript & React",
    description: "Picked up JavaScript fundamentals and built my first components in React.",
    image: reactTopic.src,
    highlights: ["JavaScript", "React"],
    link: "https://github.com/f16f16f16f16/my-react-project",
    linkLabel: "View on GitHub",
  },
  {
    id: 9,
    year: "2022",
    month: "10",
    category: "iOS Development",
    title: "Swift Playgrounds",
    description:
      "Built interactive playgrounds — Puzzle World, Shapes, Sonic Create — to sharpen my Swift fundamentals.",
    image: swiftPlaygroundsTopic.src,
    highlights: ["Swift", "Playgrounds"],
  },
  {
    id: 10,
    year: "2022",
    month: "11",
    category: "Self-Taught",
    title: "Backend & Full-Stack Experiments",
    description:
      "Rounded out the year with backend practice — a Node.js + EJS midterm project, password hashing with bcrypt, and a first Next.js blog.",
    image: backendFullstackTopic.src,
    highlights: ["Node.js", "Next.js", "EJS"],
    links: [
      { url: "https://github.com/f16f16f16f16/midterm_2022", label: "Midterm Project" },
      { url: "https://github.com/f16f16f16f16/nodeBCryptSalt", label: "Node BCrypt Auth" },
      { url: "https://github.com/f16f16f16f16/nextjs-blog", label: "Next.js Blog" },
    ],
  },
  {
    id: 11,
    year: "2022",
    month: "12",
    category: "Milestone",
    title: "Building FRIEND",
    description:
      "Designed and built FRIEND, a room-based social iOS app, and submitted it to the WWDC22 Swift Student Challenge. The project went through four iterations and was later carried through as my final iOS course project.",
    images: [image2022_2.src, image2022_1.src],
    highlights: ["WWDC22", "Swift Student Challenge", "iOS"],
    isWide: true,
    link: "https://github.com/f16f16f16f16/WWDC2022",
    linkLabel: "View on GitHub",
  },
  {
    id: 12,
    year: "2023",
    month: "04",
    category: "iOS Development",
    title: "Final Year 3 Project: FoodApp",
    description:
      "Completed my Year 3, Term 2 final iOS project, FoodApp, applying everything learned across SwiftUI and Swift Playgrounds.",
    image: foodIos.src,
    highlights: ["Swift", "iOS", "Final Project"],
    link: "https://github.com/f16f16f16f16/Final_Year3_FoodApp_2023",
    linkLabel: "View on GitHub",
  },
  {
    id: 13,
    year: "2023",
    month: "04",
    category: "Self-Taught",
    title: "FoodApp, the Web Version",
    description: "Rebuilt FoodApp for the web in React as a companion to the iOS final project.",
    images: [foodWeb1.src, foodWeb2.src, foodWeb3.src],
    highlights: ["React", "JavaScript"],
    link: "https://github.com/f16f16f16f16/Final_Year3_ReactWebFood_2023",
    linkLabel: "View on GitHub",
  },
  {
    id: 14,
    year: "2023",
    month: "06",
    category: "Self-Taught",
    title: "Expanding the Stack",
    description: "Went deeper into Node.js, TypeScript, Dart, Flutter basics, and component libraries like Chakra UI.",
    image: expandingStackTopic.src,
    highlights: ["Node.js", "TypeScript", "Flutter"],
    link: "https://github.com/f16f16f16f16/react-custom-hook_Test",
    linkLabel: "View on GitHub",
  },
  {
    id: 15,
    year: "2023",
    month: "06-07",
    category: "Work",
    title: "Software Engineer Intern @ Graffity",
    description:
      "Interned at Graffity Technologies. Built websites in React and TypeScript with Mapbox-GL-JS and ThreeJS for mapping and 3D visualization, designed an internal employee website, supported backend work in Golang and MongoDB, and contributed to a Flutter mobile app.",
    image: graffityDocs.src,
    highlights: ["React", "TypeScript", "Mapbox-GL-JS", "ThreeJS", "Golang"],
    link: "https://developers.graffity.tech/",
    linkLabel: "View Dev Docs",
  },
  {
    id: 16,
    year: "2023",
    month: "08-12",
    category: "Work",
    title: "Redesigning Graffity's Website",
    description:
      "Kept on part-time and led the redesign of Graffity's main company website with React, TypeScript, Mapbox-GL-JS, and ThreeJS, wrote product documentation with Nextra, and kept contributing to backend (Golang, MongoDB) and the Flutter app.",
    images: [graffityBefore.src, graffityAfter.src],
    highlights: ["React", "TypeScript", "Nextra", "Golang", "MongoDB"],
    isWide: true,
    link: "https://graffity.tech/",
    linkLabel: "Visit Website",
  },
  {
    id: 17,
    year: "2023",
    month: "10",
    category: "Work",
    title: "Graffity Viewer & Mappers",
    description:
      "Contributed to Graffity Viewer and Graffity Mappers, two published iOS apps for previewing and capturing AR content for Graffity's AR cloud platform.",
    images: [graffityViewer.src, graffityMappers.src],
    highlights: ["iOS", "AR", "App Store"],
    links: [
      { url: "https://apps.apple.com/th/app/graffity-viewer/id6451207164", label: "Graffity Viewer" },
      { url: "https://apps.apple.com/th/app/graffity-mappers/id1613154469", label: "Graffity Mappers" },
    ],
  },
  {
    id: 18,
    year: "2024",
    month: "03",
    category: "Milestone",
    title: "Climate Chronicles",
    description:
      "Completed my senior thesis, Climate Chronicles, from proposal through storyboard to final presentation.",
    image: thesisSummary.src,
    highlights: ["Thesis", "COSCI"],
    isWide: true,
    link: "https://github.com/f16f16f16f16/climate_chronicles-website",
    linkLabel: "View Website Repo",
  },
  {
    id: 19,
    year: "2024",
    month: "05",
    category: "University",
    title: "COSCI Thesis Exhibition Website",
    description:
      'Built the website for my department\'s annual thesis exhibition, "Keep Rolling Thesis: Way Down to Cinema Town," including the digital ticket and event pages.',
    image: cosciThesisExhibition.src,
    highlights: ["Next.js", "Event Website"],
    link: "http://cosciinnovationthesis.swu.ac.th/",
    linkLabel: "Visit Site",
  },
  {
    id: 20,
    year: "2024",
    month: "08",
    category: "Self-Taught",
    title: "Building This Portfolio",
    description: "Started building this very portfolio site with Next.js and Tailwind CSS.",
    image: nontatechVer1.src,
    highlights: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/f16f16f16f16/nontatech-website",
    linkLabel: "View on GitHub",
  },
  {
    id: 21,
    year: "2025",
    month: "01",
    category: "Self-Taught",
    title: "Go & Backend Development",
    description:
      "Picked up Go from the ground up — goroutines, REST APIs, and building small backend services — as a lower-level counterpart to the Node/TypeScript backends I'd already been writing.",
    image: goBackendTopic.src,
    highlights: ["Go", "Backend"],
  },
  {
    id: 22,
    year: "2025",
    month: "03",
    category: "Self-Taught",
    title: "Backend with TypeScript",
    description:
      "Rebuilt an earlier backend service in TypeScript, adding proper typing across routes and data models instead of writing everything in plain JavaScript.",
    image: typescriptBackendTopic.src,
    highlights: ["TypeScript", "Backend"],
  },
  {
    id: 23,
    year: "2025",
    month: "05",
    category: "Self-Taught",
    title: "Flutter Frontend",
    description:
      "Picked Flutter back up to build out a mobile frontend, working through widgets, state management, and navigation beyond what I'd touched during the Graffity internship.",
    image: flutterFrontendTopic.src,
    highlights: ["Flutter", "Frontend"],
  },
];

export default function TimelineSection({ onYearChange }) {
  return (
    <section className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-300 to-transparent hidden md:block" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <h2 className="text-xs tracking-[0.4em] text-sky-500 uppercase mb-4">Timeline</h2>
        <p className="text-slate-500 max-w-md mx-auto">A visual journey through the years that shaped my path</p>
      </motion.div>

      {/* Stories */}
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          id={`story-${index}`}
          onViewportEnter={() => onYearChange(story.year)}
          viewport={{ margin: "-40% 0px -40% 0px" }}
        >
          {story.isWide ? <WideStoryCard story={story} /> : <StoryCard story={story} index={index} />}
        </motion.div>
      ))}
    </section>
  );
}

export { stories };
