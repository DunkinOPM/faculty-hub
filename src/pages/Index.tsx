import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Users, FileText, Search, BarChart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Upload,
      title: "Automated Extraction",
      description: "Upload faculty documents and let AI extract structured information automatically",
    },
    {
      icon: Users,
      title: "Faculty Profiles",
      description: "Comprehensive profiles with qualifications, publications, and courses taught",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure storage and organization of CVs, certificates, and academic documents",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Fast, powerful search and filtering by department, expertise, publications",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Insights into faculty distribution, publications, and departmental metrics",
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Secure access control for admins, department staff, and research assistants",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
              Modern Faculty Management
            </div>
            
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Faculty Information
              <span className="text-gradient block">Extraction & Management</span>
            </h1>
            
            <p className="mb-10 text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Automate faculty data extraction, organize profiles department-wise, and manage academic information with AI-powered intelligence.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button size="lg" className="btn-shine text-base shadow-lg" asChild>
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage faculty information efficiently
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="card-hover group border-border/50 bg-card/50 p-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 font-display text-4xl font-bold text-primary">70%</div>
              <div className="text-muted-foreground">Faster Onboarding</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-display text-4xl font-bold text-primary">90%</div>
              <div className="text-muted-foreground">Extraction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-display text-4xl font-bold text-primary">&lt;1s</div>
              <div className="text-muted-foreground">Search Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 text-center text-primary-foreground shadow-2xl">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Ready to modernize your faculty management?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join institutions transforming their administrative workflows with FEIMS
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl" asChild>
              <Link to="/auth">Start Free Trial</Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          © 2024 FEIMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
