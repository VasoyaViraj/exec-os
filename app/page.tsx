"use client";

import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="landing-wrapper">
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="logo-container">
            <Link href="/">
              <span className="logo-text">ExecOS</span>
            </Link>

            {isSignedIn ? (
              <div className="nav-actions">
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <UserButton />
              </div>
            ) : (
              <div className="nav-actions">
                <SignInButton mode="modal" />
                <SignUpButton mode="modal" />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-heading">
        <div className="text-center">
          <p>
            <span className="hero-subtitle">
              The AI that actually does things
            </span>
          </p>
          <h1>
            Your Autonomous Executive <br />
            Assistant
          </h1>

          <p className="hero-description">
            Clears your inbox, sends emails, manages your calendar, all from
            your favorite chat app.
          </p>
          <div className="hero-buttons">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg">
                Start for Free 
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-heading">
        <h2>Powerful Features</h2>
        <div className="features-grid">
          {[
            {
              key: "email-management",
              title: "Autonomous Email Management",
              description:
                "AI processes your emails every 15 minutes, categorizes them, and drafts intelligent replies",
            },
            {
              key: "task-extraction",
              title: "Smart Task Extraction",
              description:
                "Automatically creates tasks from your emails and calendar events. Never miss a to-do again",
            },
            {
              key: "calendar-intelligence",
              title: "Calendar Intelligence",
              description:
                "Suggests optimal meeting times, detects conflicts, and keeps your schedule organized",
            },
          ].map((feature) => (
            <Card key={feature.key} className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-white">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}