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
            keywords: ["stress", "anxiety", "Anxious", "Worried", "Tired", "Fatigued", "overwhelm", "pressure", "tension", "sad", "burnout"],
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
            keywords: ["relationship", "partner", "family", "friend", "communication", "Arguments", "lonely", "conflict"],
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
            keywords: ["career", "job", "work", "profession", "Underappreciated", "Job insecurity", "Work-life balance", "employment", "Conflict with coworkers", "business"],
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
            keywords: ["growth", "Lack of motivation", "improve", "development", "self-improvement", "learning", "goals"],
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
        decision_making: {
            keywords: ["decision", "choice", "uncertain", "dilemma", "options", "crossroads"],
            responses: [
                "Making decisions can be challenging. Given your situation, here are some frameworks that might help you evaluate your options:",
                "Your decision-making dilemma is understandable. Let's break it down with these analytical approaches to help you gain clarity:",
                "To help with your decision, consider these structured methods of evaluation to weigh your options effectively:"
            ],
            advice: [
                "Use a decision matrix to weigh the pros and cons of each option against your most important criteria.",
                "Apply the 10/10/10 rule: How will you feel about this decision 10 minutes, 10 months, and 10 years from now?",
                "Consult with trusted friends or mentors for different perspectives, but remember the final decision is yours.",
                "Try the 'fear-setting' exercise: identify and evaluate the worst-case scenarios for each option.",
                "Use the 'Eisenhower Matrix' to prioritize decisions based on their importance and urgency.",
                "Practice visualization: imagine yourself having made each choice and pay attention to your emotional response.",
                "Set a specific deadline for making the decision to avoid analysis paralysis.",
                "For complex decisions, break them down into smaller, more manageable choices.",
                "Consider the opportunity cost of each option – what will you be giving up by choosing one path over another?",
                "After making a decision, commit to it fully and avoid second-guessing yourself."
            ]
        },
        health: {
            keywords: ["health", "wellness", "fitness", "diet", "exercise", "medical"],
            responses: [
                "Your health is a crucial aspect of overall well-being. Based on your concerns, here are some strategies to improve your health:",
                "Taking care of your health is important. Consider these evidence-based approaches to address your health-related issues:",
                "I understand you're focusing on your health. Here are some tailored suggestions to help you achieve your wellness goals:"
            ],
            advice: [
                "Establish a consistent sleep schedule, aiming for 7-9 hours of quality sleep each night.",
                "Incorporate regular physical activity into your routine, aiming for at least 150 minutes of moderate exercise per week.",
                "Adopt a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.",
                "Stay hydrated by drinking adequate water throughout the day (about 8 glasses or 2 liters).",
                "Practice stress-reduction techniques like meditation, deep breathing, or yoga.",
                "Schedule regular check-ups with your healthcare provider for preventive care.",
                "Limit processed foods, sugary drinks, and excessive alcohol consumption.",
                "Take breaks from prolonged sitting and incorporate movement into your daily routine.",
                "Consider mindful eating practices to improve your relationship with food and nutrition.",
                "Prioritize mental health by seeking support when needed and engaging in activities that bring you joy."
            ]
        },
        finance: {
            keywords: ["money", "Job loss", "finance", "budget", "savings", "debt", "investment"],
            responses: [
                "Financial matters can be complex. Based on your situation, here are some strategies to improve your financial health:",
                "Managing finances effectively is crucial for long-term stability. Consider these approaches to address your financial concerns:",
                "I understand you're focusing on your financial situation. Here are some tailored suggestions to help you achieve your financial goals:"
            ],
            advice: [
                "Create a detailed budget to track your income and expenses, identifying areas for potential savings.",
                "Set up an emergency fund aiming for 3-6 months of living expenses.",
                "Prioritize paying off high-interest debt, such as credit card balances.",
                "Automate your savings and bill payments to ensure consistency and avoid late fees.",
                "Educate yourself on basic investing principles and consider low-cost index funds for long-term growth.",
                "Review and optimize your tax strategy, taking advantage of available deductions and credits.",
                "Shop around for better rates on insurance, utilities, and other regular expenses.",
                "Consider additional income streams or side hustles to boost your earnings.",
                "Set specific, measurable financial goals with realistic timelines.",
                "Regularly review and adjust your financial plan as your circumstances change."
            ]
        }
    };

    function getMatchingQuotes(problem, n) {
        const problemWords = problem.toLowerCase().split(/\s+/);
        const scoredQuotes = philosophicalQuotes.map(quote => ({
            ...quote,
            score: quote.keywords.reduce((sum, keyword) => 
                sum + (problemWords.includes(keyword) ? 1 : 0), 0)
        }));
        
        return scoredQuotes
            .sort((a, b) => b.score - a.score)
            .slice(0, n);
    }

    function calculateSimilarity(str1, str2) {
        const set1 = new Set(str1.toLowerCase().split(/\s+/));
        const set2 = new Set(str2.toLowerCase().split(/\s+/));
        const intersection = new Set([...set1].filter(x => set2.has(x)));
        const union = new Set([...set1, ...set2]);
        return intersection.size / union.size;
    }

    function analyzeAndRespond(problem) {
        let bestMatches = [];
        const similarityThreshold = 0.1;

        for (const [category, data] of Object.entries(problemCategories)) {
            const similarity = Math.max(...data.keywords.map(keyword => calculateSimilarity(problem, keyword)));
            if (similarity > similarityThreshold) {
                bestMatches.push({ category, data, similarity });
            }
        }

        bestMatches.sort((a, b) => b.similarity - a.similarity);

        let response = '';

        if (bestMatches.length > 0) {
            const topMatch = bestMatches[0];
            const { category, data } = topMatch;
            const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
            response += `<p>${randomResponse}</p>`;

            const shuffledAdvice = [...data.advice].sort(() => 0.5 - Math.random());
            response += '<ul>' + shuffledAdvice.slice(0, 5).map(advice => `<li>${advice}</li>`).join('') + '</ul>';

            if (bestMatches.length > 1) {
                response += `<p>Your situation seems to touch on multiple areas. Here are a couple more suggestions that might be relevant:</p>`;
                for (let i = 1; i < Math.min(3, bestMatches.length); i++) {
                    const { data } = bestMatches[i];
                    const additionalAdvice = data.advice[Math.floor(Math.random() * data.advice.length)];
                    response += `<p>- ${additionalAdvice}</p>`;
                }
            }
        } else {
            response = `<p>I understand you're facing a challenge. While I don't have specific advice for your unique situation, here are some general strategies that often help:</p>
                <ul>
                    <li>Break down your problem into smaller, manageable parts.</li>
                    <li>Consider talking to a trusted friend or professional about your concerns.</li>
                    <li>Remember that many problems are temporary, even if they feel overwhelming now.</li>
                    <li>Take care of your physical and mental health with regular exercise, good nutrition, and adequate rest.</li>
                    <li>Practice self-compassion and don't hesitate to seek help when you need it.</li>
                </ul>`;
        }

        return `
            <h3>AI-Generated Advice:</h3>
            ${response}
            <p>Remember, you're not alone in facing this challenge. If you need more specific help, don't hesitate to reach out to a professional or trusted individual who can provide personalized guidance.</p>
        `;
    }

    function displayQuotes(quotes) {
        quotesContainer.innerHTML = "<h3>Philosophical Insights:</h3>" + 
            quotes.map(quote => `
                <div class="quote">
                    <p>${quote.text}</p>
                    <p class="quote-author">- ${quote.author}</p>
                </div>
            `).join('');
    }

    function handleSubmit() {
        const problem = problemText.value.trim();
        if (problem) {
            try {
                const advice = analyzeAndRespond(problem);
                adviceText.innerHTML = `<p><strong>Your concern:</strong> ${escapeHTML(problem)}</p>${advice}`;
                const matchedQuotes = getMatchingQuotes(problem, 3);
                displayQuotes(matchedQuotes);
                problemText.value = '';
            } catch (error) {
                console.error('Error processing problem:', error);
                adviceText.innerHTML = '<p>An error occurred while processing your input. Please try again.</p>';
            }
        } else {
            adviceText.innerHTML = '<p>Please describe your concern before submitting.</p>';
            quotesContainer.innerHTML = '';
        }
    }

    function escapeHTML(str) {
        const htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return str.replace(/[&<>"']/g, char => htmlEntities[char] || char);
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', handleSubmit);

    // Add event listener for 'Enter' key press in the textarea
    problemText.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent default to avoid newline in textarea
            handleSubmit();
        }
    });
});
