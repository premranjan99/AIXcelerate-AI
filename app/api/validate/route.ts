import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { idea } = await req.json();

    if (!idea) {
      return NextResponse.json(
        { error: "Please enter a startup idea." },
        { status: 400 }
      );
    }

    const score = Math.floor(Math.random() * 3) + 8;

    return NextResponse.json({
      result: `
🚀 Startup Score: ${score}/10

✅ Strengths
• Solves a real-world problem.
• AI can automate repetitive tasks.
• Scalable SaaS business model.

❌ Weaknesses
• Requires customer validation.
• Competition already exists.
• Needs strong marketing strategy.

📈 Market Opportunity
The AI market is growing rapidly, especially for startups and SMEs looking to automate workflows.

💰 Business Model
• Monthly Subscription
• Enterprise Plan
• AI Consulting
• Custom Integrations

🤖 AI Suggestions
• Build an MVP first.
• Talk to 20 potential customers.
• Focus on one niche before expanding.
• Add analytics and automation features.

🏆 Final Verdict
This startup idea has strong potential. Focus on solving one core problem exceptionally well before scaling.
`,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}