import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { FaKeyboard, FaMousePointer, FaFile, FaSearch, FaCopy, FaUndo } from "react-icons/fa";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function UsagePage() {
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
            Basic Usage
          </h1>
          <p className={`${instrumentSerif.className} mb-12 text-xl text-muted-foreground`}>
            Learn the fundamentals of using AsterIDE effectively.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground mb-4">
                When you first launch AsterIDE, you&apos;ll see the main editor interface with a welcome screen. Here&apos;s how to get started:
              </p>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Create a new file or open an existing one</li>
                <li>Start typing to add content</li>
                <li>Use the menu bar or keyboard shortcuts for common actions</li>
                <li>Save your work frequently</li>
                <li>Explore the command palette for quick access to features</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">File Operations</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaFile className="text-primary" size={20} />
                  <h3 className="font-medium">Creating and Opening Files</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <p className="text-sm font-medium mb-1">New File</p>
                    <p className="text-xs text-muted-foreground mb-2">Create a new empty file</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Menu: <kbd className="bg-muted px-2 py-1 rounded">File → New</kbd></li>
                      <li>• Shortcut: <kbd className="bg-muted px-2 py-1 rounded">Ctrl + N</kbd> (Windows/Linux) or <kbd className="bg-muted px-2 py-1 rounded">Cmd + N</kbd> (macOS)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="text-sm font-medium mb-1">Open File</p>
                    <p className="text-xs text-muted-foreground mb-2">Open an existing file</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Menu: <kbd className="bg-muted px-2 py-1 rounded">File → Open</kbd></li>
                      <li>• Shortcut: <kbd className="bg-muted px-2 py-1 rounded">Ctrl + O</kbd> (Windows/Linux) or <kbd className="bg-muted px-2 py-1 rounded">Cmd + O</kbd> (macOS)</li>
                      <li>• Drag and drop files into the editor</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="text-sm font-medium mb-1">Save File</p>
                    <p className="text-xs text-muted-foreground mb-2">Save your current file</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Menu: <kbd className="bg-muted px-2 py-1 rounded">File → Save</kbd></li>
                      <li>• Shortcut: <kbd className="bg-muted px-2 py-1 rounded">Ctrl + S</kbd> (Windows/Linux) or <kbd className="bg-muted px-2 py-1 rounded">Cmd + S</kbd> (macOS)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaFile className="text-primary" size={20} />
                  <h3 className="font-medium">File Management</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="text-sm font-medium mb-2">Open File</h4>
                      <p className="text-xs text-muted-foreground mb-2">Open a file for editing</p>
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Cmd + O</kbd>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="text-sm font-medium mb-2">Open Folder</h4>
                      <p className="text-xs text-muted-foreground mb-2">Open a folder as workspace</p>
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Cmd + Shift + O</kbd>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Save As:</strong> Save file with a new name or location</li>
                    <li>• <strong>Close File:</strong> Close the current file</li>
                    <li>• <strong>Recent Files:</strong> Access recently opened files</li>
                    <li>• <strong>File Explorer:</strong> Browse and open files from the sidebar</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Text Editing</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaKeyboard className="text-primary" size={20} />
                  <h3 className="font-medium">Basic Text Operations</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Selection</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Click and drag to select text</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + A</kbd> - Select all</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Shift + Click</kbd> - Extend selection</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + Shift + ←/→</kbd> - Select by word</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Movement</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Arrow keys - Move cursor</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Home/End</kbd> - Line start/end</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + Home/End</kbd> - Document start/end</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + ←/→</kbd> - Move by word</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCopy className="text-primary" size={20} />
                  <h3 className="font-medium">Copy, Cut, and Paste</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="text-sm font-medium mb-2">Copy</h4>
                    <p className="text-xs text-muted-foreground mb-2">Copy selected text</p>
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Ctrl + C</kbd>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="text-sm font-medium mb-2">Cut</h4>
                    <p className="text-xs text-muted-foreground mb-2">Cut selected text</p>
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Ctrl + X</kbd>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="text-sm font-medium mb-2">Paste</h4>
                    <p className="text-xs text-muted-foreground mb-2">Paste from clipboard</p>
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Ctrl + V</kbd>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUndo className="text-primary" size={20} />
                  <h3 className="font-medium">Undo and Redo</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="text-sm font-medium mb-2">Undo</h4>
                    <p className="text-xs text-muted-foreground mb-2">Revert last action</p>
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Cmd + Z</kbd>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="text-sm font-medium mb-2">Redo</h4>
                    <p className="text-xs text-muted-foreground mb-2">Restore undone action</p>
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Cmd + Shift + Z</kbd>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Search and Replace</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaSearch className="text-primary" size={20} />
                <h3 className="font-medium">Finding and Replacing Text</h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded">
                  <h4 className="text-sm font-medium mb-2">Quick Find</h4>
                  <p className="text-xs text-muted-foreground mb-2">Search within current file</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Shortcut: <kbd className="bg-muted px-2 py-1 rounded">Cmd + Shift + F</kbd> (macOS) or <kbd className="bg-muted px-2 py-1 rounded">Ctrl + Shift + F</kbd> (Windows/Linux)</li>
                    <li>• Type search term in the find bar</li>
                    <li>• Use <kbd className="bg-muted px-1 py-0.5 rounded">Enter</kbd> to find next occurrence</li>
                    <li>• Use <kbd className="bg-muted px-1 py-0.5 rounded">Shift + Enter</kbd> to find previous</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded">
                  <h4 className="text-sm font-medium mb-2">Replace</h4>
                  <p className="text-xs text-muted-foreground mb-2">Replace text in current file</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Shortcut: <kbd className="bg-muted px-2 py-1 rounded">Cmd + Shift + F</kbd> (macOS) or <kbd className="bg-muted px-2 py-1 rounded">Ctrl + Shift + F</kbd> (Windows/Linux)</li>
                    <li>• Enter search and replace text</li>
                    <li>• Replace individual occurrences or all at once</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded">
                  <h4 className="text-sm font-medium mb-2">Search Options</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• <strong>Case Sensitive:</strong> Match exact case</li>
                    <li>• <strong>Whole Word:</strong> Match complete words only</li>
                    <li>• <strong>Regular Expression:</strong> Use regex patterns</li>
                    <li>• <strong>Search in Selection:</strong> Limit search to selected text</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Navigation</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaMousePointer className="text-primary" size={20} />
                <h3 className="font-medium">Moving Around Your Code</h3>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Line Navigation</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + G</kbd> - Go to line number</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + L</kbd> - Select current line</li>
                      <li>• Double-click line number - Select entire line</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Code Navigation</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Ctrl + Click</kbd> - Go to definition</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">F12</kbd> - Go to definition</li>
                      <li>• <kbd className="bg-muted px-1 py-0.5 rounded">Shift + F12</kbd> - Peek definition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Command Palette</h2>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground mb-4">
                The command palette provides quick access to all AsterIDE features without navigating menus.
              </p>
              <div className="p-3 bg-muted rounded mb-4">
                <p className="text-sm font-medium mb-2">Opening Command Palette</p>
                <kbd className="bg-muted px-2 py-1 rounded">Ctrl + Shift + P</kbd> (Windows/Linux) or <kbd className="bg-muted px-2 py-1 rounded">Cmd + Shift + P</kbd> (macOS)
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Type to search for commands</li>
                <li>• Use arrow keys to navigate results</li>
                <li>• Press <kbd className="bg-muted px-1 py-0.5 rounded">Enter</kbd> to execute command</li>
                <li>• Use <kbd className="bg-muted px-1 py-0.5 rounded">Esc</kbd> to close palette</li>
              </ul>
              <div className="mt-4 p-4 bg-accent/30 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Pro Tip:</strong> The command palette is the fastest way to access any feature in AsterIDE. Learn common commands to boost your productivity!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
