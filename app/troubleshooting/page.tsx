import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { FaWindows, FaApple, FaExclamationTriangle, FaWrench, FaQuestionCircle } from "react-icons/fa";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function TroubleshootingPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="max-w-[980px] mx-auto px-6 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Docs
          </Link>
        </div>

        <h1
          className={`${instrumentSerif.className} text-5xl font-[900] tracking-tight text-primary italic mb-4 sm:text-6xl`}
          style={{ fontWeight: 900 }}
        >
          Troubleshooting
        </h1>
        <p className={`${instrumentSerif.className} mb-12 text-xl text-muted-foreground`}>
          Solutions to common issues and problems.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Installation Issues</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaWindows className="text-primary" size={20} />
                <h3 className="font-medium">Windows Defender Blocks AsterIDE</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-foreground font-medium mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    When launching AsterIDE, Windows Defender shows &quot;Windows protected your PC&quot; and prevents the app from running.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Solution</p>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Click &quot;More info&quot; on the Windows Defender dialog</li>
                    <li>Click &quot;Run anyway&quot; to proceed with launching AsterIDE</li>
                    <li>This happens because AsterIDE is yet signed with a Windows certificate, signing would cost $70 for just an OSS Signature, and I do not havr that kind of money.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaApple className="text-primary" size={20} />
                <h3 className="font-medium">macOS Gatekeeper Blocks AsterIDE</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-foreground font-medium mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    When opening AsterIDE on macOS, you see &quot;AsterIDE.app cannot be opened because Apple cannot check it for malicious software.&quot;
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Solution</p>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Click &quot;Cancel&quot; on the Gatekeeper dialog</li>
                    <li>Open System Settings → Privacy &amp; Security</li>
                    <li>Scroll down to the &quot;AsterIDE.app was blocked&quot; section</li>
                    <li>Click &quot;Allow Anyway&quot;</li>
                    <li>Try opening AsterIDE again and click &quot;Open&quot; when prompted</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-primary" size={20} />
                <h3 className="font-medium">App Won&apos;t Launch / Crashes on Startup</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Try These Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Check system requirements:</strong> Ensure your system meets minimum requirements</li>
                    <li>• <strong>Re-download:</strong> Download a fresh copy from the website</li>
                    <li>• <strong>Check permissions:</strong> Ensure the app has permission to run</li>
                    <li>• <strong>Run as administrator:</strong> On Windows, try right-clicking and &quot;Run as administrator&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Performance Issues</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaWrench className="text-primary" size={20} />
                <h3 className="font-medium">Slow Performance or Lag</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Close large files:</strong> Working with very large files can slow down performance</li>
                    <li>• <strong>Reduce search scope:</strong> Configure ignored directories in search settings</li>
                    <li>• <strong>Check memory usage:</strong> Ensure you have sufficient free RAM</li>
                    <li>• <strong>Disable minimap:</strong> If enabled, disable it in settings for better performance</li>
                    <li>• <strong>Restart AsterIDE:</strong> Sometimes a fresh start resolves performance issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaWrench className="text-primary" size={20} />
                <h3 className="font-medium">High CPU or Memory Usage</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Limit recent files:</strong> Reduce <code className="bg-muted px-1 rounded">recent_files_limit</code> in settings</li>
                    <li>• <strong>Close unused tabs:</strong> Keep only the files you&apos;re actively working on open</li>
                    <li>• <strong>Check for large directories:</strong> Avoid opening directories with thousands of files</li>
                    <li>• <strong>Update to latest version:</strong> Newer versions often include performance improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Settings and Configuration</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaWrench className="text-primary" size={20} />
                <h3 className="font-medium">Settings Not Saving</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Check file permissions:</strong> Ensure AsterIDE can write to <code className="bg-muted px-1 rounded">~/.asteride/</code> directory</li>
                    <li>• <strong>Verify settings.json:</strong> Check if the file exists and is valid JSON</li>
                    <li>• <strong>Reset settings:</strong> Delete <code className="bg-muted px-1 rounded">~/.asteride/settings.json</code> to reset to defaults</li>
                    <li>• <strong>Manual edit:</strong> You can manually edit the settings file if the UI isn&apos;t working</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaWrench className="text-primary" size={20} />
                <h3 className="font-medium">Theme Not Applying</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Check theme name:</strong> Ensure you&apos;re using the exact theme name (case-sensitive)</li>
                    <li>• <strong>Valid theme family:</strong> Use &quot;CherryBlossom&quot; or &quot;Rosé Pine&quot;</li>
                    <li>• <strong>Valid variant:</strong> Use exact variant names like &quot;CherryBlossomDark&quot; or &quot;Rosé Pine Moon&quot;</li>
                    <li>• <strong>Restart AsterIDE:</strong> Some theme changes require a restart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">File and Project Issues</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-primary" size={20} />
                <h3 className="font-medium">Search Not Finding Files</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Check ignored directories:</strong> Files in <code className="bg-muted px-1 rounded">.git</code>, <code className="bg-muted px-1 rounded">node_modules</code>, etc. are excluded by default</li>
                    <li>• <strong>Minimum characters:</strong> Search requires at least 2 characters by default</li>
                    <li>• <strong>Re-index:</strong> Try closing and reopening the project</li>
                    <li>• <strong>Check file permissions:</strong> Ensure AsterIDE can read the files</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-primary" size={20} />
                <h3 className="font-medium">Search Causes App to Lag or Freeze</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-foreground font-medium mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    When searching in extremely large directories (like the Linux kernel source code), AsterIDE may lag or freeze due to the massive number of files being indexed.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Ignore more directories:</strong> Add large subdirectories to <code className="bg-muted px-1 rounded">search_ignored_dirs</code> (e.g., <code className="bg-muted px-1 rounded">arch, drivers, fs</code> for kernel source)</li>
                    <li>• <strong>Search in smaller scope:</strong> Open only the specific subdirectory you need instead of the entire project</li>
                    <li>• <strong>Use external search:</strong> For extremely large projects, consider using external tools like <code className="bg-muted px-1 rounded">ripgrep</code> or <code className="bg-muted px-1 rounded">ag</code> in the terminal</li>
                    <li>• <strong>Increase min chars:</strong> Raise <code className="bg-muted px-1 rounded">search_min_chars</code> to 4-5 to reduce search frequency</li>
                    <li>• <strong>Wait for indexing:</strong> Initial indexing of large projects may take time; let it complete before searching</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-primary" size={20} />
                <h3 className="font-medium">Recent Files/Projects Not Showing</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Solutions</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Check limits:</strong> Verify <code className="bg-muted px-1 rounded">recent_files_limit</code> and <code className="bg-muted px-1 rounded">recent_projects_limit</code> settings</li>
                    <li>• <strong>File accessibility:</strong> Ensure recent files still exist and are accessible</li>
                    <li>• <strong>Clear recent:</strong> Delete <code className="bg-muted px-1 rounded">~/.asteride/</code> directory to reset recent items</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t border-border text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaQuestionCircle className="text-primary" size={20} />
            <h3 className="text-lg font-semibold">Still Need Help?</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find your issue here? Get help from the community or report a bug.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Aster-IDE/AsterIDE/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ide px-4 py-2 text-sm"
            >
              Report an Issue
            </a>
            <a
              href="https://github.com/Aster-IDE/AsterIDE/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm self-center"
            >
              Contributing Guide →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
