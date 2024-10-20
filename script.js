document.addEventListener('DOMContentLoaded', () => {
    const problemText = document.getElementById('problem-text');
    const submitButton = document.getElementById('submit-problem');
    const adviceText = document.getElementById('advice-text');
    const quotesContainer = document.getElementById('quotes-container');

    const philosophicalQuotes = [
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", keywords: ["failure", "perseverance", "strength"] },
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", keywords: ["purpose", "motivation", "resilience"] },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", keywords: ["passion", "work", "fulfillment"] },
        { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama", keywords: ["happiness", "action", "self-improvement"] },
        { text: "The unexamined life is not worth living.", author: "Socrates", keywords: ["self-reflection", "purpose", "wisdom"] },
        { text: "Know thyself.", author: "Ancient Greek aphorism", keywords: ["self-awareness", "introspection", "wisdom"] },
        { text: "This too shall pass.", author: "Ancient Persian adage", keywords: ["impermanence", "perspective", "resilience"] },
        { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", keywords: ["beginnings", "progress", "perseverance"] },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", keywords: ["authenticity", "self-esteem", "individuality"] },
        { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", keywords: ["humility", "learning", "wisdom"] }
    ];

    const problemCategories = {
        stress: {
            keywords: ["stress", "anxiety", "overwhelm", "pressure", "tension", "burnout"],
            responses: [
                "It sounds like you're dealing with significant stress. Let's explore some strategies to help you manage and reduce it:",
                "Stress can be overwhelming, but there are effective ways to address it. Here are some tailored suggestions to help you cope:",
                "I understand that stress is affecting you. Consider these evidence-based approaches to reduce its impact and improve your well-being:"
            ],
            advice: [
                "Practice mindfulness or meditation for 10-15 minutes daily to calm your mind and reduce stress.",
                "Establish a regular exercise routine to help reduce stress hormones and improve your mood.",
                "Try the 4-7-8 breathing technique: inhale for 4 seconds, hold for 7, exhale for 8. Repeat several times when feeling stressed.",
                "Create a stress diary to identify your stress triggers and patterns, then work on addressing them.",
                "Set boundaries in your personal and professional life to prevent overcommitment and burnout.",
                "Practice progressive muscle relaxation to release physical tension associated with stress.",
                "Engage in hobbies or activities you enjoy to take your mind off stressors and promote relaxation.",
                "Consider talking to a therapist or counselor for professional support in managing stress.",
                "Limit caffeine and alcohol intake, as they can exacerbate stress and anxiety.",
                "Ensure you're getting enough sleep (7-9 hours) to help your body and mind recover from daily stressors."
            ]
        },
        relationship: {
            keywords: ["relationship", "partner", "family", "friend", "communication", "conflict"],
            responses: [
                "Relationship challenges can be complex. Based on what you've shared, here are some potential steps to improve your situation:",
                "Navigating relationships requires patience and understanding. Consider these insights to help address your concerns:",
                "Your relationship concerns are valid. Here are some strategies that might help improve your communication and connection:"
            ],
            advice: [
                "Practice active listening: focus on understanding your partner's perspective without immediately responding or judging.",
                "Schedule regular 'check-ins' to discuss feelings and concerns openly, promoting ongoing communication.",
                "Show appreciation daily for small things your partner or family member does to foster positivity.",
                "Use 'I' statements when expressing feelings to avoid blame and encourage productive dialogue.",
                "Practice empathy by trying to see situations from the other person's point of view.",
                "Set and respect boundaries to maintain a healthy balance in your relationship.",
                "Plan quality time together, free from distractions, to strengthen your bond.",
                "Learn and use each other's love languages to express affection in meaningful ways.",
                "When conflicts arise, take a short break if needed, then address the issue calmly and constructively.",
                "Consider relationship counseling for unbiased guidance and to develop better communication tools."
            ]
        },
        career: {
            keywords: ["career", "job", "work", "profession", "employment", "business"],
            responses: [
                "Career decisions can be pivotal. Given your current situation, here are some thoughts to guide your professional journey:",
                "Your career concerns are important. Let's look at some strategies that might help you move forward and achieve your goals:",
                "Based on what you've shared about your career, here are some tailored suggestions to help you navigate your professional path:"
            ],
            advice: [
                "Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) of your current career situation.",
                "Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for your career path.",
                "Network actively: attend industry events, join professional online communities, or reach out to colleagues.",
                "Update your resume and LinkedIn profile to reflect your current skills and achievements.",
                "Seek out opportunities for professional development, such as workshops, courses, or certifications.",
                "Consider informational interviews with professionals in fields you're interested in to gain insights.",
                "Develop a personal brand that highlights your unique skills and experiences.",
                "Practice self-reflection to ensure your career aligns with your values and long-term goals.",
                "Explore lateral moves or cross-functional projects to broaden your skill set.",
                "Consider seeking a mentor in your field for guidance, insights, and potential opportunities."
            ]
        },
        personal_growth: {
            keywords: ["growth", "improve", "development", "self-improvement", "learning", "goals"],
            responses: [
                "Personal growth is a journey. From what you've described, here are some areas you might want to focus on for self-improvement:",
                "Your desire for personal development is commendable. Consider these strategies to support your growth and achieve your goals:",
                "Based on your goals for personal growth, here are some evidence-based approaches you might find helpful in your journey:"
            ],
            advice: [
                "Start a daily journal to reflect on your thoughts, feelings, and progress towards your goals.",
                "Set aside time each week for learning a new skill related to your personal or professional goals.",
                "Practice self-compassion: treat yourself with the kindness and understanding you'd offer a good friend.",
                "Develop a growth mindset by viewing challenges as opportunities for learning and improvement.",
                "Create a vision board or written description of your ideal future to clarify your goals and motivations.",
                "Seek out diverse perspectives and experiences to broaden your worldview and challenge your assumptions.",
                "Practice mindfulness to increase self-awareness and improve your ability to respond thoughtfully to situations.",
                "Set small, achievable goals and celebrate your progress to build momentum and confidence.",
                "Identify and work on overcoming limiting beliefs that may be holding you back from reaching your potential.",
                "Regularly step out of your comfort zone in small ways to build resilience and adaptability."
            ]
        },
... (184lignes restantes)
Réduire
message.txt
20 Ko
lf9ih — Aujourd’hui à 21:32
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wisdom & Advice - Share Your Problems</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Wisdom & Advice</h1>
        <p>Share your problems, get tailored advice and philosophical insights</p>
    </header>
    <main>
        <section id="problem-input">
            <h2>Describe Your Problem</h2>
            <textarea id="problem-text" rows="6" placeholder="Please describe your problem in detail..."></textarea>
            <button id="submit-problem">Get Advice</button>
        </section>
        <section id="ai-response">
            <h2>Tailored Advice and Wisdom</h2>
            <div id="advice-text"></div>
            <div id="quotes-container"></div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Wisdom & Advice. Remember, for serious issues, always consult a professional.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
