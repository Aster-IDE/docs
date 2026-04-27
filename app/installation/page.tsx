import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { FaWindows, FaApple, FaLinux, FaGithub } from "react-icons/fa";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  tarball_url: string;
  assets: GitHubReleaseAsset[];
};

type DownloadReleaseInfo = {
  version: string;
  macosUrl: string | null;
  windowsUrl: string | null;
  linuxUrl: string | null;
  sourceTarballUrl: string | null;
};

function pickAssetUrl(assets: GitHubReleaseAsset[], patterns: RegExp[]) {
  const asset = assets.find((candidate) =>
    patterns.some((pattern) => pattern.test(candidate.name))
  );

  return asset?.browser_download_url ?? null;
}

function mapRelease(release: GitHubRelease): DownloadReleaseInfo {
  return {
    version: release.tag_name,
    macosUrl: pickAssetUrl(release.assets, [/\.dmg$/i]),
    windowsUrl: pickAssetUrl(release.assets, [/\.exe$/i]),
    linuxUrl: pickAssetUrl(release.assets, [/\.AppImage$/i]),
    sourceTarballUrl: release.tarball_url || null,
  };
}

async function getLatestStableRelease(): Promise<DownloadReleaseInfo | null> {
  try {
    const response = await fetch("https://api.github.com/repos/Aster-IDE/AsterIDE/releases/latest", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const latestStableRelease = (await response.json()) as GitHubRelease;
    return mapRelease(latestStableRelease);
  } catch {
    return null;
  }
}

export default async function InstallationPage() {
  const latestRelease = await getLatestStableRelease();
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Docs
            </Link>
          </div>

          <h1
            className={`${instrumentSerif.className} text-5xl font-[900] tracking-tight text-primary italic mb-4 sm:text-6xl`}
            style={{ fontWeight: 900 }}
          >
            Installation
          </h1>
          <p className={`${instrumentSerif.className} mb-12 text-xl text-muted-foreground`}>
            Get AsterIDE up and running on your system.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">System Requirements</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-medium mb-3">Minimum Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Windows 10 (64-bit) or later</li>
                    <li>• macOS 10.15 (Catalina) or later</li>
                    <li>• 2GB RAM</li>
                    <li>• 100MB free disk space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Recommended</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 4GB RAM or more</li>
                    <li>• SSD for better performance</li>
                    <li>• Modern web browser (for web features)</li>
                    <li>• Git (for development)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Download Options</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaWindows className="text-primary" size={24} />
                  <h3 className="font-lg font-semibold">Windows</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the standalone application for Windows 10 and 11.
                </p>
                {latestRelease?.windowsUrl ? (
                  <a
                    href={latestRelease.windowsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ide px-4 py-2 text-sm w-full text-center"
                  >
                    Download .exe
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-ide px-4 py-2 text-sm w-full text-center opacity-50 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
                {latestRelease?.windowsUrl && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {latestRelease.version}
                  </p>
                )}
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaApple className="text-primary" size={24} />
                  <h3 className="font-lg font-semibold">macOS</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the app for macOS Intel and Apple Silicon.
                </p>
                {latestRelease?.macosUrl ? (
                  <a
                    href={latestRelease.macosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ide px-4 py-2 text-sm w-full text-center"
                  >
                    Download .dmg
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-ide px-4 py-2 text-sm w-full text-center opacity-50 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
                {latestRelease?.macosUrl && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {latestRelease.version}
                  </p>
                )}
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaLinux className="text-primary" size={24} />
                  <h3 className="font-lg font-semibold">Linux</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose from AppImage, .deb, or .rpm packages.
                </p>
                {latestRelease?.linuxUrl ? (
                  <a
                    href={latestRelease.linuxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ide px-4 py-2 text-sm w-full text-center"
                  >
                    Download .AppImage
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-ide px-4 py-2 text-sm w-full text-center opacity-50 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
                {latestRelease?.linuxUrl && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {latestRelease.version}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Installation Steps</h2>
            <div className="space-y-8">
              {latestRelease?.windowsUrl && (
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <FaWindows className="text-primary" size={20} />
                    Windows
                  </h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Download the AsterIDE application (.exe)</li>
                    <li>Save the file to your preferred location</li>
                    <li>Double-click the .exe file to launch AsterIDE</li>
                    <li>If Windows Defender shows &quot;Windows protected your PC&quot;, click &quot;More info&quot; then &quot;Run anyway&quot;</li>
                    <li>(Optional) Create a desktop shortcut for easy access</li>
                    <li>(Optional) Add to Start Menu for quick launching</li>
                  </ol>
                </div>
              )}

              {latestRelease?.macosUrl && (
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <FaApple className="text-primary" size={20} />
                    macOS
                  </h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Download the AsterIDE disk image (.dmg)</li>
                    <li>Double-click the .dmg file to mount it</li>
                    <li>Drag AsterIDE.app to your Applications folder</li>
                    <li>Eject the disk image (drag to Trash or click eject button)</li>
                    <li>Launch AsterIDE from Applications folder</li>
                    <li>If Gatekeeper shows &quot;AsterIDE.app cannot be opened because Apple cannot check it for malicious software&quot;, click &quot;Cancel&quot;</li>
                    <li>Go to System Settings → Privacy & Security</li>
                    <li>Scroll down to &quot;AsterIDE.app was blocked&quot; section and click &quot;Allow Anyway&quot;</li>
                    <li>Try launching AsterIDE again and click &quot;Open&quot; when prompted</li>
                  </ol>
                </div>
              )}

              {latestRelease?.linuxUrl && (
                <div className="rounded-lg border border-border bg-card/50 p-6">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <FaLinux className="text-primary" size={20} />
                    Linux
                  </h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Download the AsterIDE AppImage</li>
                    <li>Make the AppImage executable: <code className="bg-muted px-2 py-1 rounded">chmod +x AsterIDE.AppImage</code></li>
                    <li>Run the AppImage directly or move to Applications</li>
                    <li>Launch from your application menu</li>
                  </ol>
                </div>
              )}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Build from Source</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaGithub className="text-primary" size={20} />
                <h3 className="font-medium">For Developers</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                If you want to contribute or build AsterIDE from source, you&apos;ll need Rust and Node.js installed.
              </p>
              <div className="bg-muted rounded-lg p-4 mb-4">
                <pre className="text-sm">
{`# Clone the repository
git clone https://github.com/Aster-IDE/AsterIDE.git
cd AsterIDE

# Build the application
cargo build --release

# Run the application
cargo run`}
                </pre>
              </div>
              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/Aster-IDE/AsterIDE/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View full contributing guide →
                </a>
                {latestRelease?.sourceTarballUrl && (
                  <a
                    href={latestRelease.sourceTarballUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ide px-4 py-2 text-sm"
                  >
                    Download Source
                  </a>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Verify Installation</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground mb-4">
                After installation, verify AsterIDE is working correctly:
              </p>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Launch AsterIDE</li>
                <li>Check the version in Help → About</li>
                <li>Create a new file to test basic functionality</li>
                <li>Try opening an existing file</li>
                <li>Test text editing and basic shortcuts</li>
              </ol>
              <div className="mt-4 p-4 bg-accent/30 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Having trouble?</strong> Check our <a href="/troubleshooting" className="text-primary hover:underline">troubleshooting guide</a> or <a href="https://github.com/Aster-IDE/AsterIDE/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">open an issue</a>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
