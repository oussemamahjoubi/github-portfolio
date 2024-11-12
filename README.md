<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oussema Mahjoubi - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* Basic Reset and Font */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #1b1b2f;
            color: #eaeaea;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            margin: 0;
        }
        .container {
            width: 100%;
            max-width: 1200px;
        }

        /* Header Section */
        header {
            text-align: center;
            margin-top: 40px;
            animation: fadeInDown 1s ease-in-out;
        }
        header h1 {
            font-size: 3rem;
            color: #e94560;
            margin-bottom: 10px;
            font-weight: 600;
        }
        header p {
            font-size: 1.2rem;
            color: #a8a8b3;
        }

        /* Keyframes for Animation */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* About Section */
        .about {
            margin-top: 60px;
            text-align: center;
            padding: 40px;
            max-width: 800px;
            background: linear-gradient(135deg, #162447, #1b1b2f);
            border-radius: 15px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;
        }
        .about:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 40px rgba(233, 69, 96, 0.6);
        }
        .about h2 {
            color: #e94560;
            margin-bottom: 20px;
            font-size: 2.5rem;
        }
        .about p {
            color: #a8a8b3;
            font-size: 1.2rem;
            line-height: 1.7;
        }

        /* Skills Section */
        .skills {
            margin-top: 60px;
            max-width: 800px;
            background: linear-gradient(135deg, #162447, #1b1b2f);
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;
        }
        .skills:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 40px rgba(233, 69, 96, 0.6);
        }
        .skills h2 {
            color: #e94560;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        .skills-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #a8a8b3;
            font-size: 1.1rem;
        }
        .skills-list p {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* Work Experience Section */
        .work-experience {
            margin-top: 60px;
            max-width: 1200px;
        }
        .work-experience h2 {
            font-size: 2.5rem;
            color: #e94560;
            text-align: center;
            margin-bottom: 30px;
        }
        .experience-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            justify-content: center;
        }
        .experience-card {
            background: #162447;
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            color: #eaeaea;
        }
        .experience-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 30px rgba(233, 69, 96, 0.4);
        }
        .experience-card h3 {
            color: #e94560;
            margin-bottom: 10px;
            font-size: 1.5rem;
        }
        .experience-card p {
            color: #a8a8b3;
            font-size: 1rem;
            margin-bottom: 15px;
        }
        .experience-card ul {
            list-style: none;
            padding: 0;
            color: #eaeaea;
            text-align: left;
            margin-top: 10px;
        }
        .experience-card ul li {
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* Footer Section */
        footer {
            margin-top: 50px;
            text-align: center;
            font-size: 0.9rem;
            color: #a8a8b3;
            padding: 20px;
            background: #0f0f1a;
            width: 100%;
            border-radius: 10px;
            max-width: 1200px;
        }
        footer a {
            color: #e94560;
            text-decoration: none;
            transition: color 0.3s;
        }
        footer a:hover {
            color: #f77f99;
        }

    </style>
</head>
<body>

    <div class="container">
        <!-- Header Section -->
        <header>
            <h1>Oussema Mahjoubi</h1>
            <p>Software Engineer | DevOps & AI Enthusiast</p>
        </header>

        <!-- About Section -->
        <section class="about">
            <h2>About Me</h2>
            <p>I am a dedicated Software Engineering student with expertise in DevOps and artificial intelligence. Skilled in programming, building CI/CD pipelines, and developing scalable applications, I am eager to contribute to forward-thinking organizations focused on AI-driven solutions.</p>
        </section>

        <!-- Skills Section -->
        <section class="skills">
            <h2>Skills</h2>
            <div class="skills-list">
                <p><strong>Programming Languages:</strong> <span>Python, Java, C++, C, SQL, PHP</span></p>
                <p><strong>Web & Mobile Development:</strong> <span>HTML, CSS, Angular, .NET, Spring Boot, Symfony, Qt, Kotlin, XML</span></p>
                <p><strong>Data Management:</strong> <span>ETL, Data Integration, Data Analysis</span></p>
                <p><strong>Business Intelligence:</strong> <span>PowerBI, EazyBI</span></p>
                <p><strong>Project Management:</strong> <span>JIRA, Trello</span></p>
                <p><strong>DevOps:</strong> <span>Jenkins, Docker, SonarQube, Nexus</span></p>
                <p><strong>Tools:</strong> <span>GitHub, BigPicture, Xray</span></p>
            </div>
        </section>

        <!-- Work Experience Section -->
        <section class="work-experience">
            <h2>Work Experience</h2>
            <div class="experience-grid">
                <!-- Internship - Microsoft PowerBI and JIRA -->
                <div class="experience-card">
                    <h3>Intern - Microsoft PowerBI and JIRA</h3>
                    <p>Spectrum Group, Tunisia (June 2022)</p>
                    <ul>
                        <li>Acquired skills in project management and data analysis through PowerBI and JIRA.</li>
                    </ul>
                </div>

                <!-- Internship - Project Management -->
                <div class="experience-card">
                    <h3>Project Management Internship</h3>
                    <p>Spectrum Group, Tunisia (July 2023)</p>
                    <ul>
                        <li>Utilized JIRA for project management, optimizing workflows and team coordination.</li>
                    </ul>
                </div>

                <!-- Internship - Vermeg Software Engineering -->
                <div class="experience-card">
                    <h3>Software Engineering Internship</h3>
                    <p>Vermeg, Tunisia (June 2024)</p>
                    <ul>
                        <li>Automated data processing with Python, reducing handling time significantly.</li>
                        <li>Developed PowerBI dashboards for insightful data visualization.</li>
                    </ul>
                </div>

                <!-- DevOps Project - Kaddem -->
                <div class="experience-card">
                    <h3>DevOps Project - Kaddem</h3>
                    <p>Esprit, Tunisia (2024)</p>
                    <ul>
                        <li>Implemented a comprehensive DevOps pipeline for the Kaddem project, integrating Jenkins, Docker, SonarQube, and Nexus for continuous integration and deployment.</li>
                        <li>Set up Prometheus and Grafana for monitoring and reporting, optimizing application performance and resource usage.</li>
                        <li>Utilized GitHub Actions for automating deployment tasks and creating a robust CI/CD pipeline.</li>
                    </ul>
                </div>

                <!-- Academic Projects -->
                <div class="experience-card">
                    <h3>Java Mobile Application Project</h3>
                    <p>Esprit, Tunisia (2024)</p>
                    <ul>
                        <li>Developed a multi-client application with Java, utilizing XML for UI design and database integration for dynamic data display.</li>
                    </ul>
                </div>

                <div class="experience-card">
                    <h3>C++ Desktop Application Project</h3>
                    <p>Esprit, Tunisia (2023)</p>
                    <ul>
                        <li>Built a desktop application using C++, applying object-oriented principles for user-friendly interfaces.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Footer Section -->
        <footer>
            <p>Connect with me on <a href="https://linkedin.com/in/oussema-mahjoubi-76b529218" target="_blank">LinkedIn</a> | <a href="https://github.com/oussemamahjoubi" target="_blank">GitHub</a></p>
            <p>&copy; 2024 Oussema Mahjoubi. All rights reserved.</p>
        </footer>
    </div>

</body>
</html>  je veux que les sections about me et skills soit au milieu de la apge pas a gauche