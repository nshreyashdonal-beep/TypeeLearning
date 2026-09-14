# Progress

## Units (from the reference project's actual file structure)
- [~] 0. Project skeleton — index.html, main.jsx, index.css, App.jsx (routing/state hub, nav) — IN PROGRESS (see below)
- [ ] 1. Landing.jsx (presentational, props only)
- [ ] 2. GuideHand.jsx (presentational SVG component)
- [ ] 3. data/ as a toolbox — fingerMap.js, idleMessages.js, sampleText.js, keyNeighbors.js
- [ ] 4. useUserFingerMap.js (custom hook: state + useEffect + localStorage)
- [ ] 5. Calibrate.jsx (state + events)
- [ ] 6. FullKeyboard.jsx + KeyNeighborhood.jsx
- [ ] 7. Guide.jsx (composes GuideHand + FullKeyboard + KeyNeighborhood)
- [ ] 8. MistakeHint.jsx
- [ ] 9. data/typingInsights.js
- [ ] 10. Practice.jsx (biggest unit)
- [ ] 11. Report.jsx
- [ ] 12. App.jsx revisited (full data-flow review)

## Status: Unit 0 in progress

Built and understood so far, piece by piece:
- [x] Bare component skeleton (`function App() { return <div>...</div> }`)
- [x] Hardcoded button with `className={page === "landing" ? "active" : ""}` ternary (no state yet)
- [x] Converted `page` to real state: `const [page, setPage] = useState("landing")`
- [x] Understood *why* state exists (plain variables don't trigger re-renders; `setPage` does)
- [x] Wired `onClick={() => setPage(...)}` on one button, confirmed it re-renders
- [x] Added all three nav buttons (Home / Practice / Finger guide), each with its own `setPage(...)`
- [x] Wrapped everything in `<nav>` + added the "Typee" logo button
- [x] `index.css` stripped down to just the page-wide foundation (`:root` variables, `*` reset, `html/body` base) — rest is being added piece by piece alongside its JSX
- [x] `nav` / `.logo` CSS added and understood (flex layout, `space-between`)
- [x] `.nav-links` / `.nav-links button` / `.nav-links button.active` CSS added and understood — specifically the "invisible reserved border" trick: every button gets `border-bottom: 2px solid transparent` so the space is always reserved, and `.active` only overrides `border-bottom-color` (not the whole shorthand) so nothing shifts position when switching pages

Not yet done for Unit 0:
- [ ] The `{page === "landing" && (...)}` conditional blocks that swap the placeholder page content below the nav
- [ ] `.page` and `footer` CSS
- [ ] Final full-file review of `App.jsx` + `index.css` together once all pieces are in

## Teaching process (see also the continuation prompt)
- No full-file copy-paste — one small piece at a time, confirmed ("green") before advancing
- Plan explained before starting a unit's pieces
- Each piece pairs its React (JSX) part with its matching CSS part, since the goal is learning to build with React AND CSS together, not React alone

## Notes for updating "known concepts"
Genuinely new this session (beyond what the personal notes already covered):
- Why a plain variable vs. `useState` differs in re-render behavior — rebuilt from first principles with a tiny Counter example (this echoes Lecture 3 in the personal notes, but was retaught since it had been forgotten)
- The CSS "invisible reserved border" pattern (`border-bottom: 2px solid transparent`, then override just `border-bottom-color` on the active state) to avoid layout shift — this is a CSS technique, not strictly React, but came up as part of understanding the nav's active-tab underline

## Sticking points
- Earlier in the session, state updates appeared not to work in the browser; root cause was a stale browser tab — a hard refresh fixed it. Worth remembering Vite normally auto-updates via Hot Module Replacement (HMR) without needing manual refreshes; if that ever stops working it usually signals a real syntax error rather than being routine.
