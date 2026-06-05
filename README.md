# ExecOS

Your autonomous AI assistant for email and calendar management. ExecOS uses Claude AI to analyze incoming emails, draft replies, extract action items, and create calendar events all running on autopilot.

## Features

- **AI Email Analysis** — Processes unread emails using Claude Sonnet 4, extracting summaries, priorities, action items, and categories
- **Smart Draft Replies** — Automatically generates context-aware email drafts in Gmail
- **Calendar Integration** — Detects meeting requests and time references in emails, creates Google Calendar events automatically
- **Task Extraction** — Pulls action items from emails and creates prioritized tasks with due dates
- **Autonomous Agent** — Runs on a 15-minute cron schedule via Vercel, processing emails without manual intervention
- **Monitoring Dashboard** — View agent run history, email processing details, and performance metrics
- **Secure OAuth** — AES-256-GCM encrypted token storage for all Google integrations

## Tech Stack

| Layer        | Technology                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router)                                                                           |
| Auth         | [Clerk](https://go.clerk.com/rDCSPyr)                                                                                    |
| Database     | PostgreSQL + [Drizzle ORM](https://orm.drizzle.team/)                                                                    |
| Integrations | Gmail API, Google Calendar API                                                                                           |
| UI           | [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)                                         |
| Deployment   | [Vercel](https://vercel.com/)                                                                                            | 