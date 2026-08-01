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
import { 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Bot,
  MessageSquare,
  BarChart3
} from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="landing-wrapper">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="logo-container">
            <Link href="/" className="flex items-center gap-2">
              <span className="logo-text">ExecOS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="nav-link">Features</Link>
              <Link href="#how-it-works" className="nav-link">How it Works</Link>
              <Link href="#pricing" className="nav-link">Pricing</Link>
            </nav>

            {isSignedIn ? (
              <div className="nav-actions">
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <UserButton />
              </div>
            ) : (
              <div className="nav-actions">
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Get Started</Button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-heading">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Productivity</span>
            </div>
            
            <h1 className="hero-title">
              Your Autonomous <br />
              <span className="hero-title-gradient">Executive Assistant</span>
            </h1>

            <p className="hero-description">
              ExecOS clears your inbox, sends emails, and manages your calendar—all automatically. 
              Reclaim hours every week with AI that actually gets things done.
            </p>

            <div className="hero-buttons">
              {!isSignedIn ? (
                <>
                  <Link href="/sign-up">
                    <Button size="lg" className="cta-button">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="secondary-button">
                    Watch Demo
                  </Button>
                </>
              ) : (
                <Link href="/dashboard">
                  <Button size="lg" className="cta-button">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-heading">
          <div className="stats-grid">
            {[
              { label: "Hours Saved/Week", value: "10+", icon: Clock },
              { label: "Email Processing", value: "15min", icon: Zap },
              { label: "Accuracy Rate", value: "99%", icon: CheckCircle2 },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <stat.icon className="h-8 w-8 text-primary mb-2" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-heading">
          <div className="section-header">
            <h2 className="section-title">Everything you need to stay organized</h2>
            <p className="section-subtitle">
              Powered by advanced AI, ExecOS handles your busywork so you can focus on what matters.
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                key: "email-management",
                icon: Mail,
                title: "Autonomous Email Management",
                description:
                  "AI processes your emails every 15 minutes, categorizes them by priority, and drafts intelligent replies based on context and your writing style.",
              },
              {
                key: "task-extraction",
                icon: CheckCircle2,
                title: "Smart Task Extraction",
                description:
                  "Automatically creates actionable tasks from your emails and calendar events. Never miss a deadline or forget a to-do again.",
              },
              {
                key: "calendar-intelligence",
                icon: Calendar,
                title: "Calendar Intelligence",
                description:
                  "Suggests optimal meeting times, detects scheduling conflicts, and keeps your calendar organized without manual effort.",
              },
              {
                key: "chat-interface",
                icon: MessageSquare,
                title: "Chat from Anywhere",
                description:
                  "Control everything through your favorite messaging app. Ask questions, give commands, and get updates on the go.",
              },
              {
                key: "security",
                icon: Shield,
                title: "Enterprise-Grade Security",
                description:
                  "Your data is encrypted end-to-end. We never train our AI on your private information and follow SOC 2 compliance.",
              },
              {
                key: "analytics",
                icon: BarChart3,
                title: "Productivity Analytics",
                description:
                  "Track your productivity trends, email patterns, and time saved. Get insights to optimize your workflow even further.",
              },
            ].map((feature) => (
              <Card key={feature.key} className="feature-card">
                <CardHeader>
                  <div className="feature-icon-wrapper">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground mt-4">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-heading">
          <div className="section-header">
            <h2 className="section-title">How ExecOS Works</h2>
            <p className="section-subtitle">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="steps-grid">
            {[
              {
                step: "01",
                title: "Connect Your Accounts",
                description: "Securely link your Gmail and Google Calendar with one click.",
              },
              {
                step: "02",
                title: "AI Learns Your Style",
                description: "Our AI analyzes your communication patterns and preferences.",
              },
              {
                step: "03",
                title: "Autopilot Engaged",
                description: "Sit back as ExecOS manages emails, tasks, and scheduling for you.",
              },
            ].map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-heading">
          <div className="cta-card">
            <h2 className="cta-title">Ready to reclaim your time?</h2>
            <p className="cta-description">
              Join hundreds of professionals who've automated their busywork with ExecOS.
            </p>
            <div className="cta-buttons">
              {!isSignedIn ? (
                <Link href="/sign-up">
                  <Button size="lg" className="cta-button-large">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Link href="/dashboard">
                  <Button size="lg" className="cta-button-large">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bottom">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ExecOS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}