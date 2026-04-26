blogs = [
  {
    "id": 1,
    "title": "Getting Started with JSON",
    "author": "starain31",
    "date": "2026-04-26",
    "category": "tutorial",
    "tags": ["json", "web development", "beginners"],
    "excerpt": "Learn the basics of JSON and how to structure data.",
    "content": "JSON (JavaScript Object Notation) is a lightweight data interchange format...",
    "likes": 42
  },
  {
    "id": 2,
    "title": "Best Practices for API Design",
    "author": "starain31",
    "date": "2026-04-25",
    "category": "guide",
    "tags": ["api", "backend", "design patterns"],
    "excerpt": "Essential tips for designing robust and scalable APIs.",
    "content": "When designing an API, consider these key principles...",
    "likes": 28
  }
]
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(blogs)
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ received: body })
}
