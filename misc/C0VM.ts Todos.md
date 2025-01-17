# C0VM.ts ToDo List

## C0VM.ts Main Functionality

- [x] **Function**: `NativeIO::Readline`
- [ ] **Function**: Change `NativeIO::Readline` to `async` function **[Important]**
- [x] **Function**: Type Inference System during runtime
- [x] **Function**: Show local variable’s value during runtime
- [ ] <s>**Function**: Heap allocator garbage collection based on ref count</s>
- [x] **Debug**: Check the bug when running `buggy_SSA_test.bc0` problem.
- [x] **Parser**: Deal with “dummy return value” (occurs at `void` functions)
- [x] **Future**: Map the source code line number to bytecode line number **@Iliano**
- [x] **Type Inference**: Resolve `typedef` in C0 source code automatically
- [x] **Function**: Support `NativeParse` functions
- [x] **Function**: Partially support `NativeFloat` functions (`printint` and `printhex`)
- [ ] **Debugger**: Add `Details` panel in debugger options. Show all C0VM details (`V`, `S`, etc.)
- [ ] **Error Handling**: Friendly Error Message

## UI/UX Enhancements

- [x] **UI**: Optimize workflow
- [x] **UI**: File import based on popup window dialog
- [x] **UI**: Enable/Disable buttons in main function area based on input area
- [x] **UI**: Fix CSS style of the react application page
- [ ] **UI**: Add gap between rows in `stacknode` of graphical debugger
- [ ] **UI**: Add border to values in `stacknode`
- [x] **UI**: Right aligned variable names in stack
- [x] **UI**: Right aligned struct field names
- [ ] **React**: Encapsulate the application using `shadowRoot` in HTML
- [x] **React**: Add breakpoint as a component state instead of global variable (which may lead to strange problems, sometimes toggled breakpoint does not work at all)
- [x] **React**: Add execution line (highlight line) as component state instead of global state
- [x] **Debugger**: Show function call stack
- [x] **Debugger**: Show struct field value whenever possible
- [x] **Debugger**: Show array content (elements in `arr`) whenever possible
- [ ] <del>**Debugger**: Add a “step over” option?</del> [Maybe in “advanced options”]
- [x] **Debugger**: change pointer value display
- [x] **Debugger**: Expand first level by default
- [x] **Debugger**: Make struct debug display more compact
- [x] **Debugger**: Add a button/arrow on func name collapse/expand
- [x] **Debugger**: When array is not initialized, it’s by default an empty array (currently displayed as NULL)
- [x] **Debugger**: Just show the function name on debug console (not `f main` as it currently shows)
- [ ] **Debugger**: Show ptr address on hover on struct component
- [ ] **Debugger**: Store break point state when user switch between BC0 and C0 mode using `toJSON` and `fromJSON` serialization methods in Codemirror.
- [x] **Debugger**: Darken breakpoint column on hover
- [ ] <s>**UX**: Shortcut key for Run and Step</s>
- [ ] <s>**Debugger**: flexible grid proportion</s>

## Feature Enhancements

- [x] **Feature**: Breakpoint, Step and Run
- [x] **Feature**: Show execution position
- [x] **Feature**: Compile Multiple Files
- [x] **Feature**: Compile with flags

## Editor Enhancement

- [ ] <del>**Editor**: Auto language-detection & switch</del>
- [x] **Editor**: Refresh & Render problem when scrolling
- [x] **Editor**: Syntax Highlighting (BC0)
- [x] **Editor**: Middle comment in BC0 in another color
- [x] **Editor**: Syntax Highlighting (C0)
- [ ] **Editor**: Autocomplete for C0 Language
- [x] **Editor**: Multiple File Editors (Tabs?)
- [ ] **Editor**: Jump to the line executing
- [x] **Syntax Highlighting**: Swap the syntax highlight between instruction and comment
- [ ] **Syntax Highlighting**: Rewrite the parser generator profile to match with formal definition in `C0Reference.pdf`

## C0VM.ts Backend Server

- [x] **Server**: Change the synchronous system-calls to `async`.
- [x] **Server**: Support the -d flag option
- [x] **Server**: Documentation of Compile-code API

