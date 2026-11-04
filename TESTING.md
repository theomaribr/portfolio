# Test Plan for Mohamed Ibrahim Portfolio

Run these tests on the live GitHub Pages site, not just local files. If a test fails, fix the problem, run the test again, and record both results below the first result.

## Test cases

| ID | Testing | Steps | Expected Result | Actual Result |
| T1 | Home navigation link | From every page, click Home | Home page opens | Pass, live site 2026-11-03: Home reached from every page via Home link and title link |
| T2 | About navigation link | From every page, click About Me | About page opens | Pass, live site 2026-11-03: About reached from every page |
| T3 | Projects navigation link | From every page, click Projects | Projects page opens | Pass, live site 2026-11-03: Projects reached from every page (Contact header link verified by destination, other Contact links clicked) |
| T4 | Skills navigation link | From every page, click Skills | Skills page opens | Pass, live site 2026-11-03: Skills reached from every page |
| T5 | Contact navigation link | From every page, click Contact | Contact page opens | Pass, live site 2026-11-03: Contact reached from every page |
| T6 | Home page on phone | Open Home on a phone-sized screen | Page fits, no sideways scrolling | Not verified live 2026-11-03: browser tool could not resize to 375px; responsive CSS reviewed (max-width 700px, img max-width 100%), manual phone recheck still needed |
| T7 | Home page on laptop | Open Home on a laptop screen | Page fits, layout is clear | Pass, live site 2026-11-03 at 1919x998: centered column, readable, no horizontal overflow |
| T8 | About page on phone | Open About on a phone-sized screen | Page fits, no sideways scrolling | Not verified live 2026-11-03: browser tool could not resize to 375px; manual phone recheck still needed |
| T9 | About page on laptop | Open About on a laptop screen | Page fits, layout is clear | Pass, live site 2026-11-03 at 1919x998: readable, no horizontal overflow |
| T10 | Projects page on phone | Open Projects on a phone-sized screen | Images fit, no sideways scrolling | Not verified live 2026-11-03: browser tool could not resize to 375px; manual phone recheck still needed |
| T11 | Projects page on laptop | Open Projects on a laptop screen | Images and cards display clearly | Pass, live site 2026-11-03: images fitted inside cards, all 4 captions visible |
| T12 | Skills page on phone and laptop | Open Skills on phone, then laptop | Page fits on both, no sideways scrolling | Partial, live 2026-11-03: laptop Pass at 1919x998, phone not verified (browser could not resize) |
| T13 | Contact page on phone and laptop | Open Contact on phone, then laptop | Form fits on both, no sideways scrolling | Partial, live 2026-11-03: laptop Pass at 1919x998, phone not verified (browser could not resize) |
| T14 | Mobile menu | On a phone-sized screen, click Menu | Menu opens and shows all page links | Not verified live 2026-11-03: menu button is display:none at desktop width and phone width was not reached; script/CSS reviewed (toggles nav-links.open and aria-expanded), manual recheck still needed |
| T15 | Mobile menu close | On a phone-sized screen, click Menu again | Menu closes | Not verified live 2026-11-03: same reason as T14, manual recheck still needed |
| T16 | Dark mode toggle | Click Dark mode, then Light mode | Theme changes each time, text stays readable | Pass, live site 2026-11-03: dark background/light text, button became Light mode, persisted after reload, restored to light on second click; also activated by keyboard Enter |
| T17 | Contact form valid input | Enter a name, valid email, and message, then submit | Success message appears, directing to email | Pass, live site 2026-11-03: 'Thank you, Test User. Your message is ready. Please email me directly at mi397@njit.edu or mibrahimm0100@gmail.com, because this static form cannot send messages on its own.' No navigation, no message sent |
| T18 | Contact form invalid input | Leave fields blank, then submit | Error message appears, form does not submit | Pass, live site 2026-11-03: 'Please fill in your name, email, and message.' No navigation |
| T19 | Contact form invalid email | Enter a name and message, and an email without @, then submit | Error message about valid email appears | Pass, live site 2026-11-03: for 'invalidemail' and for 'user@example' (no dot), message was 'Please enter a valid email address with an @ symbol and a dot.' No navigation |
| T20 | Keyboard navigation Home | Use Tab to move, Enter to follow links on Home | All links and buttons work with Tab and Enter | Pass, live site 2026-11-03: Tab order Skip to main content, title, Home, About Me, Projects, Skills, Contact, Dark mode, See my projects; Enter navigated; orange focus outline visible |
| T21 | Keyboard navigation About, Projects, Skills, Contact | Use Tab and Enter on each page | All links, buttons, and form fields work | Pass, live site 2026-11-03: About 8 Tabs to Dark mode, Projects 10 Tabs to Assignment 2 Colab link (Enter opened Colab, Back returned), Skills 8 Tabs to Dark mode, Contact 14 Tabs to Send message through email links and form fields |
| T22 | Lighthouse Accessibility Home | Run Lighthouse Accessibility in Chrome on Home | Score 90 or higher | Not verified live 2026-11-03: browser tool had no Lighthouse panel, no score invented; accessibility proxies verified: skip link, semantic nav/main, one h1, alt text, labelled fields, visible focus outline; real Lighthouse run still needed |
| T23 | Lighthouse Accessibility About | Run Lighthouse Accessibility in Chrome on About | Score 90 or higher | Not verified live 2026-11-03: same reason as T22, real Lighthouse run still needed |
| T24 | Lighthouse Accessibility Projects | Run Lighthouse Accessibility in Chrome on Projects | Score 90 or higher | Not verified live 2026-11-03: same reason as T22, real Lighthouse run still needed |
| T25 | Lighthouse Accessibility Skills | Run Lighthouse Accessibility in Chrome on Skills | Score 90 or higher | Not verified live 2026-11-03: same reason as T22, real Lighthouse run still needed |
| T26 | Lighthouse Accessibility Contact | Run Lighthouse Accessibility in Chrome on Contact | Score 90 or higher | Not verified live 2026-11-03: same reason as T22, real Lighthouse run still needed |
| T27 | Browser console | Open each page and check the console | No errors in the browser console | Not verified live 2026-11-03: browser tool had no DevTools console panel; no page error, blank page, broken image, or failed interaction was observed, which is consistent with no fatal script error, but a console log was not read; manual DevTools check still needed |

## Notes
Images used in this site are all under 500 KB. The Weather Data Logger screenshot is cropped to the project title and setup only, so no API key is included.

## Live test run 2026-11-03
- Live site tested 2026-11-03 in a desktop browser (1919x998). No site failures were found in the tests that could be run.
- Not verified in that browser, and not claimed as passed: phone width (375px) layout, mobile menu open/close, DevTools console log, and Lighthouse Accessibility scores. Those need a real phone or real DevTools session, planned for Nov 4/5 before Canvas submission.
- This file was prepared on 2026-11-03 and pushed as a real commit on 2026-11-04, to keep the commit history over multiple days honest.
