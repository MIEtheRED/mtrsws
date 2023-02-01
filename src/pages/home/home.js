// eslint-disable-next-line no-unused-vars
import styles from "./home.module.css";
import Timer from "../../components/timer/Timer";

const Home = () => {
    const education = [
        {
            "title": "AAS Software Development",
            "subtext": "College of Western Idaho",
            "year": "2021",
            "link": "https://cwi.edu/program/software-development"
        },
        {
            "title": "CompTIA Project+ Certification",
            "subtext": "CompTIA",
            "year": "2022",
            "link": "https://www.credly.com/badges/c669a2fd-be57-415d-8a51-1b42587d4c00/public_url"
        },
        {
            "title": "MTA: Software Development Fundamentals",
            "subtext": "Microsoft",
            "year": "2021",
            "link": "https://www.credly.com/badges/1fa0e33a-92f4-4017-a09e-d7b1a9ece4f0/public_url"
        },
        {
            "title": "MTA: Database Fundamentals",
            "subtext": "Microsoft",
            "year": "2021",
            "link": "https://www.credly.com/badges/a3d59d7f-927f-4d26-b926-d9950cececb7/public_url"
        },
        {
            "title": "MTA: HTML5 Application Development Fundamentals",
            "subtext": "Microsoft",
            "year": "2020",
            "link": "https://www.credly.com/badges/322526db-899a-4bf9-a109-a3fb13966283/public_url"
        }
    ];

    const skills = [
        {
            "title": "HTML",
            "percent": 90
        },
        {
            "title": "CSS",
            "percent": 85
        },
        {
            "title": "SCSS",
            "percent": 75
        },
        {
            "title": "JS",
            "percent": 85
        },
        {
            "title": "SQL",
            "percent": 90
        },
        {
            "title": "NOSQL",
            "percent": 80
        },
        {
            "title": "C#",
            "percent": 55
        },
    ];

    const technologies = [
        {
            "title": "React",
            "percent": 85
        },
        {
            "title": "Next",
            "percent": 85
        },
        {
            "title": "Vue",
            "percent": 65
        },
        {
            "title": "Express",
            "percent": 80
        },
        {
            "title": "Bootstrap",
            "percent": 90
        },
        {
            "title": "SQL Server / Workbench",
            "percent": 85
        },
        {
            "title": "MongoDB",
            "percent": 85
        },
        {
            "title": "Contentful",
            "percent": 85
        },
        {
            "title": "Klaviyo",
            "percent": 70
        },
        {
            "title": "Shopify",
            "percent": 85
        },
        {
            "title": "Heroku",
            "percent": 80
        },
        {
            "title": "Github",
            "percent": 90
        }

    ];


    return (
        <div className="wrapper">
            <h1 className={styles.heading}>open for business!</h1>
            <div className={styles.card}>
                <p>You&apos;ve come to the right place: MIEtheRED Software & Web Solutions LLC. I specialize in building custom
                    web pages and applications for business and personal use. I have the customer-first mentality and really try to understand my client's
                    vision in order to create something true to your expectations.</p>
            </div>

            <h1 className={styles.heading}>skills / education</h1>
            <div className={styles.card}>
                <div className={styles.education}>
                    <h2>Languages</h2>
                    {skills.map(skill => (
                        <div key={skill.title}>
                            <p>{skill.title}</p>
                            <div className={styles.percentBar} style={{ width: `${skill.percent}%`, height: '1em', background: 'rgb(138, 17, 10)', borderRadius: '8px' }}></div>
                        </div>
                    ))}
                </div>
                <div className={styles.education}>
                    <h2>Technologies</h2>
                    {technologies.map(tech => (
                        <div key={tech.title}>
                            <p>{tech.title}</p>
                            <div className={styles.percentBar} style={{ width: `${tech.percent}%`, height: '1em', background: 'rgb(138, 17, 10)', borderRadius: '8px' }}></div>
                        </div>
                    ))}
                </div>
                <div className={styles.education}>
                    <h2>Education</h2>
                    {education.map(ed => (
                        <div key={ed.title} className={styles.educationItem}>
                            <a href={ed.link} target="_blank" className={styles.educationLink} rel="noreferrer">
                                <p>{ed.title}</p>
                                <p>{ed.subtext}</p>
                                <p>{ed.year}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className={styles.heading}>about me</h1>
            <div className={styles.card}>
                <p>I am a husband and father to 6 wonderful kiddos and live in the Boise, ID area. I have always been more into creative and hands on
                    activities, but until 2019 I had never considered working in this field! I have a degree in Software &amp; Web Development
                    as well as technical certifications from various organizations.</p>
            </div>
            <Timer />
        </div>
    )
};

export default Home;