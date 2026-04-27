import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { FaBook, FaDownload, FaCode, FaGithub, FaTools, FaQuestionCircle, FaBug, FaExclamationTriangle } from "react-icons/fa";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function DocsPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1
            className={`${instrumentSerif.className} text-5xl font-[900] tracking-tight text-primary italic mb-4 sm:text-6xl`}
            style={{ fontWeight: 900 }}
          >
            Documentation
          </h1>
          <p className={`${instrumentSerif.className} mb-12 text-xl text-muted-foreground`}>
            Everything you need to know about AsterIDE.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-foreground">Getting Started</h2>
              <div className="space-y-4">
                <Link
                  href="/installation"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaDownload className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Installation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download and install AsterIDE for your platform
                  </p>
                </Link>

                <Link
                  href="/usage"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaBook className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Basic Usage</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Learn the fundamentals of using AsterIDE
                  </p>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-foreground">User Guide</h2>
              <div className="space-y-4">
                <Link
                  href="/usage"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaBook className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Basic Usage</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn the fundamentals of using AsterIDE
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• File operations and navigation</li>
                    <li>• Text editing and selection</li>
                    <li>• Search and replace</li>
                    <li>• Keyboard shortcuts</li>
                  </ul>
                </Link>

                <Link
                  href="/configuration"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaTools className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Configuration</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Customize AsterIDE to fit your workflow
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Settings and preferences</li>
                    <li>• Theme customization</li>
                    <li>• Key bindings</li>
                    <li>• Plugin management</li>
                  </ul>
                </Link>

                <Link
                  href="/troubleshooting"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaExclamationTriangle className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Troubleshooting</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Solutions to common issues and problems
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Installation issues</li>
                    <li>• Performance problems</li>
                    <li>• Settings and configuration</li>
                    <li>• File and project issues</li>
                  </ul>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-foreground">Developer Resources</h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/Aster-IDE/AsterIDE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaGithub className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Source Code</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Explore the codebase and contribute
                  </p>
                </a>

                <a
                  href="https://github.com/Aster-IDE/AsterIDE/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaCode className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Contributing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Learn how to contribute to AsterIDE
                  </p>
                </a>

                <a
                  href="https://github.com/Aster-IDE/AsterIDE/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaBug className="text-primary" size={20} />
                    <span className="font-medium text-foreground">Report Issues</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Found a bug? Let us know!
                  </p>
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Quick Reference</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-medium mb-3">System Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Windows 10+ / macOS 10.15+</li>
                    <li>• 2GB RAM minimum (4GB recommended)</li>
                    <li>• 100MB disk space</li>
                    <li>• Modern web browser for web features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Essential Shortcuts</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd className="bg-muted px-1 rounded text-xs">Cmd + O</kbd> Open file</li>
                    <li>• <kbd className="bg-muted px-1 rounded text-xs">Cmd + Shift + O</kbd> Open folder</li>
                    <li>• <kbd className="bg-muted px-1 rounded text-xs">Cmd + Z</kbd> Undo</li>
                    <li>• <kbd className="bg-muted px-1 rounded text-xs">Cmd + Shift + Z</kbd> Redo</li>
                    <li>• <kbd className="bg-muted px-1 rounded text-xs">Cmd + Shift + F</kbd> Search</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-border text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaQuestionCircle className="text-primary" size={20} />
              <h3 className="text-lg font-semibold">Need Help?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? Check out our GitHub discussions or open an issue.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/Aster-IDE/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ide px-4 py-2 text-sm"
              >
                GitHub Discussions
              </a>
              <a
                href="https://github.com/Aster-IDE/AsterIDE/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ide px-4 py-2 text-sm"
              >
                Report an Issue
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
