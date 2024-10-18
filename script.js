document.addEventListener('DOMContentLoaded', () => {
    // ... (keep existing setup code)

    const problemCategories = {
        stress: {
            keywords: ["stress", "anxiety", "overwhelm", "pressure", "tension", "burnout"],
            responses: [
                "It sounds like you're dealing with significant stress. Let's explore some strategies specifically designed to help you manage and reduce it:",
                "I'm sorry to hear you're feeling stressed. Stress can be overwhelming, but there are effective ways to address it. Here are some tailored suggestions to help you cope:",
                "I understand that stress is affecting you. Consider these evidence-based approaches specifically aimed at reducing stress and improving your well-being:"
            ],
            advice: [
                "Practice the 5-4-3-2-1 grounding technique: Identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
                "Try box breathing: Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat for 5 minutes.",
                "Schedule short 'worry sessions': Set aside 10-15 minutes daily to focus on your stressors, then let them go.",
                "Create a 'stress-free zone' in your home where you can relax without any reminders of your stressors.",
                "Practice progressive muscle relaxation: Tense and then relax each muscle group in your body.",
                "Use positive self-talk: Replace negative thoughts with encouraging, realistic statements.",
                "Try aromatherapy with lavender or chamomile to promote relaxation.",
                "Engage in a creative activity like coloring, painting, or crafting to shift your focus.",
                "Listen to calming music or nature sounds to help you relax.",
                "Write down three things you're grateful for each day to shift your perspective."
            ]
        },
        // ... (keep other categories)
    };

    function analyzeAndRespond(problem) {
        let bestMatch = null;
        let highestSimilarity = 0;

        for (const [category, data] of Object.entries(problemCategories)) {
            const similarity = Math.max(...data.keywords.map(keyword => calculateSimilarity(problem, keyword)));
            if (similarity > highestSimilarity) {
                highestSimilarity = similarity;
                bestMatch = { category, data };
            }
        }

        let response = '';

        if (bestMatch && highestSimilarity > 0.1) {
            const { category, data } = bestMatch;
            const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
            response += `<p>${randomResponse}</p>`;

            const shuffledAdvice = [...data.advice].sort(() => 0.5 - Math.random());
            response += '<ul>' + shuffledAdvice.slice(0, 5).map(advice => `<li>${advice}</li>`).join('') + '</ul>';

            // Add category-specific additional content
            if (category === 'stress') {
                response += `
                    <p>Remember, it's okay to feel stressed sometimes. These techniques can help, but if you're feeling overwhelmed, don't hesitate to reach out to a mental health professional for additional support.</p>
                    <p>Consider trying a quick relaxation exercise right now:</p>
                    <ol>
                        <li>Close your eyes and take a deep breath in through your nose for 4 seconds.</li>
                        <li>Hold that breath for 4 seconds.</li>
                        <li>Exhale slowly through your mouth for 6 seconds.</li>
                        <li>Repeat this cycle 3-5 times.</li>
                    </ol>
                `;
            }
        } else {
            // ... (keep the general advice for unmatched problems)
        }

        return `
            <h3>AI-Generated Advice:</h3>
            ${response}
            <p>Remember, you're not alone in facing this challenge. If you need more specific help, don't hesitate to reach out to a professional or trusted individual who can provide personalized guidance.</p>
        `;
    }

    // ... (keep the rest of the code)
});
