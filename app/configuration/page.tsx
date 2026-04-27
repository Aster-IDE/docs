import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { FaTools, FaCog, FaPalette, FaKeyboard, FaCode, FaPlug, FaSearch } from "react-icons/fa";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function ConfigurationPage() {
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
            Configuration
          </h1>
          <p className={`${instrumentSerif.className} mb-12 text-xl text-muted-foreground`}>
            Customize AsterIDE to fit your workflow perfectly.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Settings Overview</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground mb-4">
                AsterIDE offers extensive customization options through the settings panel. Access settings via:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Menu: <kbd className="bg-muted px-2 py-1 rounded">Settings</kbd></li>
                <li>• Keyboard: <kbd className="bg-muted px-2 py-1 rounded">Ctrl + ,</kbd> (Windows/Linux) or <kbd className="bg-muted px-2 py-1 rounded">Cmd + ,</kbd> (macOS)</li>
                <li>• Command Palette: <kbd className="bg-muted px-2 py-1 rounded">Ctrl + Shift + P</kbd> then type &quot;settings&quot;</li>
              </ul>
              <div className="bg-accent/30 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Tip:</strong> Settings can be saved and will persist between sessions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaPalette className="text-primary" size={20} />
                  <h3 className="font-medium">Themes</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose from built-in themes or create your own custom themes. (Custom themes coming soon.)
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded">
                    <span className="text-sm">Cherry Blossom Light</span>
                    <span className="text-xs text-muted-foreground">Clean, bright interface</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded">
                    <span className="text-sm">Cherry Blossom Dark</span>
                    <span className="text-xs text-muted-foreground">Easy on the eyes</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded">
                    <span className="text-sm">Rosé Pine</span>
                    <span className="text-xs text-muted-foreground">Elegant purple tones</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded">
                    <span className="text-sm">Rosé Pine Moon</span>
                    <span className="text-xs text-muted-foreground">Dark purple theme</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded">
                    <span className="text-sm">Rosé Pine Dawn</span>
                    <span className="text-xs text-muted-foreground">Light purple theme</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Editor</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-primary" size={20} />
                  <h3 className="font-medium">Code Editor</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>show_line_numbers:</strong> Display line numbers in the editor (default: true)</li>
                  <li>• <strong>word_wrap:</strong> Wrap long lines at window edge (default: true)</li>
                  <li>• <strong>font_size:</strong> Editor text size in pixels (default: 14.0)</li>
                  <li>• <strong>tab_size:</strong> Number of spaces per tab (default: 4)</li>
                  <li>• <strong>use_spaces:</strong> Use spaces instead of tabs (default: true)</li>
                  <li>• <strong>show_whitespace:</strong> Display whitespace characters (default: false)</li>
                  <li>• <strong>vim_mode:</strong> Enable Vim keybindings (default: false)</li>
                  <li>• <strong>highlight_current_line:</strong> Highlight the active line (default: true)</li>
                  <li>• <strong>auto_indent:</strong> Automatically indent new lines (default: true)</li>
                  <li>• <strong>scroll_beyond_last_line:</strong> Allow scrolling past document end (default: true)</li>
                  <li>• <strong>minimap:</strong> Show code overview on right side (default: false)</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaTools className="text-primary" size={20} />
                  <h3 className="font-medium">File Management</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>auto_save:</strong> Automatically save files (default: false)</li>
                  <li>• <strong>auto_save_interval:</strong> Auto-save interval in seconds (default: 30)</li>
                  <li>• <strong>recent_files_limit:</strong> Maximum recent files to track (default: 5)</li>
                  <li>• <strong>recent_projects_limit:</strong> Maximum recent projects to track (default: 5)</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaTools className="text-primary" size={20} />
                  <h3 className="font-medium">Interface</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>sidebar_visible:</strong> Show/hide the file sidebar (default: true)</li>
                  <li>• <strong>status_bar_visible:</strong> Show/hide the status bar (default: true)</li>
                  <li>• <strong>corner_roundness:</strong> UI corner radius in pixels (default: 6.0)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Search</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaSearch className="text-primary" size={20} />
                <h3 className="font-medium">Search Configuration</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>search_ignore_dirs_enabled:</strong> Enable directory exclusion (default: true)</li>
                <li>• <strong>search_ignored_dirs:</strong> Directories to ignore during search</li>
                <li>• <strong>search_min_chars:</strong> Minimum characters for search (default: 2)</li>
              </ul>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">Default Ignored Directories:</p>
                <code className="text-xs bg-accent/30 px-2 py-1 rounded">.git, node_modules, venv, .venv, target, dist, build, .next, .cache, __pycache__, .idea, .vscode</code>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Themes</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaPalette className="text-primary" size={20} />
                <h3 className="font-medium">Theme Configuration</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>theme_family:</strong> Theme family name (default: &quot;CherryBlossom&quot;)</li>
                <li>• <strong>theme_variant:</strong> Specific theme variant (default: &quot;CherryBlossomDark&quot;)</li>
              </ul>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">Available Themes:</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-medium">CherryBlossom:</p>
                    <ul className="text-xs space-y-1 ml-2">
                      <li>• CherryBlossomLight</li>
                      <li>• CherryBlossomDark</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Rosé Pine:</p>
                    <ul className="text-xs space-y-1 ml-2">
                      <li>• Rosé Pine</li>
                      <li>• Rosé Pine Moon</li>
                      <li>• Rosé Pine Dawn</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-primary text-center">
                    Custom theme support coming soon
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Keyboard Shortcuts</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaKeyboard className="text-primary" size={20} />
                <h3 className="font-medium">Customize Keybindings</h3>
              </div>
              <div className="p-4 bg-accent/30 rounded-lg text-center">
                <p className="text-sm text-primary font-medium mb-2">
                  Coming Soon
                </p>
                <p className="text-sm text-muted-foreground">
                  Custom keybinding support is currently under development. Soon you&apos;ll be able to modify existing shortcuts and create your own custom keybindings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Plugins</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaPlug className="text-primary" size={20} />
                <h3 className="font-medium">Plugin Management</h3>
              </div>
              <div className="p-4 bg-accent/30 rounded-lg text-center">
                <p className="text-sm text-primary font-medium mb-2">
                  Coming Soon
                </p>
                <p className="text-sm text-muted-foreground">
                  Plugin support is currently under development. Soon you&apos;ll be able to extend AsterIDE functionality with plugins and extensions including language support, themes, linters, formatters, and more.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Configuration Files</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground mb-4">
                For advanced users, AsterIDE stores configuration in JSON files:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded">
                  <code className="text-sm font-mono">~/.asteride/settings.json</code>
                  <p className="text-xs text-muted-foreground mt-1">Main application settings</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Warning:</strong> Manual editing of configuration files is recommended for advanced users only. Always backup before making changes.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
