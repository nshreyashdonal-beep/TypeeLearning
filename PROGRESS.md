# Progress

## Units (from the reference project's actual file structure)

- [x] 0. Project skeleton — index.html, main.jsx, index.css, App.jsx (routing/state hub, nav) — DONE
- [ ] 1. Landing.jsx (presentational, props only) — NEXT
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

## Status: Unit 0 complete

Built and understood, piece by piece:

- [x] Bare component skeleton (`function App() { return <div>...</div> }`)
- [x] Hardcoded button with `className={page === "landing" ? "active" : ""}` ternary (no state yet)
- [x] Converted `page` to real state: `const [page, setPage] = useState("landing")`
- [x] Understood *why* state exists (plain variables don't trigger re-renders; `setPage` does)
- [x] Wired `onClick={() => setPage(...)}` on one button, confirmed it re-renders
- [x] Added all three nav buttons (Home / Practice / Finger guide), each with its own `setPage(...)`
- [x] Wrapped everything in `<nav>` + added the "Typee" logo button
- [x] `index.css` stripped down to just the page-wide foundation (`:root` variables, `*` reset, `html/body` base) — rest added piece by piece alongside its JSX
- [x] `nav` / `.logo` CSS added and understood (flex layout, `space-between`)
- [x] `.nav-links` / `.nav-links button` / `.nav-links button.active` CSS added and understood — the "invisible reserved border" trick: every button gets `border-bottom: 2px solid transparent` so the space is always reserved, and `.active` only overrides `border-bottom-color` so nothing shifts position when switching pages
- [x] Wrapped `App`'s return in a fragment (`<>...</>`) to allow multiple sibling root elements
- [x] Added the three `{page === "..." && (...)}` conditional blocks that swap placeholder page content below the nav — understood `&&` short-circuit evaluation (truthy left side evaluates and returns the right side; falsy left side short-circuits and returns itself) and that React renders `false`/`null`/`undefined` as nothing on screen
- [x] `.page` CSS added — reuses `nav`'s `max-width: 1040px; margin: 0 auto;` centering recipe so page content lines up with the nav
- [x] `<footer>` JSX added as a sibling of `nav` and the page blocks, with matching CSS (`max-width: 1040px; margin: 0 auto; padding: 32px;`) — same centering recipe applied a third time
- [x] Final full-file review of `App.jsx` + `index.css` together — confirmed the single `page` state variable drives three things in sync: the active nav underline, which `.page` block renders, and nothing else; `nav`, `.page`, and `footer` all stay visually locked to the same centered column independently via the repeated `max-width` + `margin: 0 auto` pattern

Unit 0 is fully done. No items remaining.

## Teaching process (see also the continuation prompt)

- No full-file copy-paste — one small piece at a time, confirmed ("green") before advancing
- Plan explained before starting a unit's pieces
- Each piece pairs its React (JSX) part with its matching CSS part, since the goal is learning to build with React AND CSS together, not React alone

## Notes for updating "known concepts"

Genuinely new this session (beyond what the personal notes already covered):

- `&&` conditional rendering: short-circuit evaluation rule (truthy left side → evaluates and returns the right side, unchanged, whatever type it is; falsy left side → returns the left side itself, right side never evaluated) and the React-specific rule that `false`/`null`/`undefined`/`true` render as nothing while `0`/`""` render as visible text
- React fragments (`<>...</>`) — needed the moment a component's return has more than one top-level sibling element
- The "centered column" CSS pattern (`max-width: 1040px; margin: 0 auto;`) is not automatic between siblings — each block-level sibling (`nav`, `.page`, `footer`) has to opt in individually to stay visually aligned

## Sticking points

- Initially conflated the `&&` conditional block with the earlier `? :` ternary used for the active-tab className, expecting `&&` to evaluate to the string `"active"`. Resolved by working through plain-JS `&&` examples before returning to the JSX case. Worth a quick sanity check next session if similar ternary/`&&` mixups come up again.
- Earlier in the session (pre-Unit 0 completion), state updates appeared not to work in the browser; root cause was a stale browser tab — a hard refresh fixed it. Worth remembering Vite normally auto-updates via Hot Module Replacement (HMR) without needing manual refreshes; if that ever stops working it usually signals a real syntax error rather than being routine.
