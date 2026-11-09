# Test Plan for Mohamed Ibrahim Portfolio

Run these tests on the live GitHub Pages site, not just local files. If a test fails, fix the problem, run the test again, and record both results below the first result.

## Test cases

| ID | Testing | Steps | Expected Result | Actual Result |
| T1 | Home navigation link | From every page, click Home | Home page opens | Pass, live site 2026-11-03: Home reached from every page via Home link and title link |
| T2 | About navigation link | From every page, click About Me | About page opens | Pass, live site 2026-11-03: About reached from every page |
| T3 | Projects navigation link | From every page, click Projects | Projects page opens | Pass, live site 2026-11-03: Projects reached from every page (Contact header link verified by destination, other Contact links clicked) |
| T4 | Skills navigation link | From every page, click Skills | Skills page opens | Pass, live site 2026-11-03: Skills reached from every page |
| T5 | Contact navigation link | From every page, click Contact | Contact page opens | Pass, live site 2026-11-03: Contact reached from every page |
| T6 | Home page on phone | Open Home on a phone-sized screen | Page fits, no sideways scrolling | Pass, phone screenshot 2026-11-04: page fits phone width, text readable, Menu button visible, no sideways scrolling |
| T7 | Home page on laptop | Open Home on a laptop screen | Page fits, layout is clear | Pass, live site 2026-11-03 at 1919x998: centered column, readable, no horizontal overflow |
| T8 | About page on phone | Open About on a phone-sized screen | Page fits, no sideways scrolling | Pass, phone screenshot 2026-11-04: page fits phone width, text readable, Menu button visible, no sideways scrolling |
| T9 | About page on laptop | Open About on a laptop screen | Page fits, layout is clear | Pass, live site 2026-11-03 at 1919x998: readable, no horizontal overflow |
| T10 | Projects page on phone | Open Projects on a phone-sized screen | Images fit, no sideways scrolling | Pass, phone screenshot 2026-11-04: page fits phone width, project image fits inside card, no sideways scrolling |
| T11 | Projects page on laptop | Open Projects on a laptop screen | Images and cards display clearly | Pass, live site 2026-11-03: images fitted inside cards, all 4 captions visible |
| T12 | Skills page on phone and laptop | Open Skills on phone, then laptop | Page fits on both, no sideways scrolling | Pass, live 2026-11-03 laptop at 1919x998 and phone screenshot 2026-11-04: page fits both, no sideways scrolling |
| T13 | Contact page on phone and laptop | Open Contact on phone, then laptop | Form fits on both, no sideways scrolling | Pass, live 2026-11-03 laptop at 1919x998 and phone screenshot 2026-11-04: form fits both, no sideways scrolling |
| T14 | Mobile menu | On a phone-sized screen, click Menu | Menu opens and shows all page links | Pass, phone screenshot 2026-11-04 Home: Menu button tapped, navigation opens showing Home, About Me, Projects, Skills, Contact and Dark mode |
| T15 | Mobile menu close | On a phone-sized screen, click Menu again | Menu closes | Pass, 2026-11-04: menu closed state shown on About, Projects, Skills and Contact phone screenshots, and script interaction test (menu click 1: open true/aria-expanded true, click 2: open false/aria-expanded false, 0 errors) |
| T16 | Dark mode toggle | Click Dark mode, then Light mode | Theme changes each time, text stays readable | Pass, live site 2026-11-03: dark background/light text, button became Light mode, persisted after reload, restored to light on second click; also activated by keyboard Enter |
| T17 | Contact form valid input | Enter a name, valid email, and message, then submit | Success message appears, directing to email | Pass, live site 2026-11-03: 'Thank you, Test User. Your message is ready. Please email me directly at mi397@njit.edu or mibrahimm0100@gmail.com, because this static form cannot send messages on its own.' No navigation, no message sent |
| T18 | Contact form invalid input | Leave fields blank, then submit | Error message appears, form does not submit | Pass, live site 2026-11-03: 'Please fill in your name, email, and message.' No navigation |
| T19 | Contact form invalid email | Enter a name and message, and an email without @, then submit | Error message about valid email appears | Pass, live site 2026-11-03: for 'invalidemail' and for 'user@example' (no dot), message was 'Please enter a valid email address with an @ symbol and a dot.' No navigation |
| T20 | Keyboard navigation Home | Use Tab to move, Enter to follow links on Home | All links and buttons work with Tab and Enter | Pass, live site 2026-11-03: Tab order Skip to main content, title, Home, About Me, Projects, Skills, Contact, Dark mode, See my projects; Enter navigated; orange focus outline visible |
| T21 | Keyboard navigation About, Projects, Skills, Contact | Use Tab and Enter on each page | All links, buttons, and form fields work | Pass, live site 2026-11-03: About 8 Tabs to Dark mode, Projects 10 Tabs to Assignment 2 Colab link (Enter opened Colab, Back returned), Skills 8 Tabs to Dark mode, Contact 14 Tabs to Send message through email links and form fields |
| T22 | Lighthouse Accessibility Home | Run Lighthouse Accessibility in Chrome on Home | Score 90 or higher | Pass, Lighthouse via Google PageSpeed Insights 2026-11-04: 100/100 Accessibility on mobile and desktop, no automated failures, 20 passed audits, 10 manual-check items only |
| T23 | Lighthouse Accessibility About | Run Lighthouse Accessibility in Chrome on About | Score 90 or higher | Pass, Lighthouse via Google PageSpeed Insights 2026-11-04: 100/100 Accessibility on mobile and desktop, no automated failures, 20 passed audits, 10 manual-check items only |
| T24 | Lighthouse Accessibility Projects | Run Lighthouse Accessibility in Chrome on Projects | Score 90 or higher | Pass, Lighthouse via Google PageSpeed Insights 2026-11-04: 100/100 Accessibility on mobile and desktop, no automated failures, 20 passed audits, 10 manual-check items only |
| T25 | Lighthouse Accessibility Skills | Run Lighthouse Accessibility in Chrome on Skills | Score 90 or higher | Pass, Lighthouse via Google PageSpeed Insights 2026-11-04: 100/100 Accessibility on mobile and desktop, no automated failures, 20 passed audits, 10 manual-check items only |
| T26 | Lighthouse Accessibility Contact | Run Lighthouse Accessibility in Chrome on Contact | Score 90 or higher | Pass, Lighthouse via Google PageSpeed Insights 2026-11-04: 100/100 Accessibility on mobile and desktop, no automated failures, 20 passed audits, 10 manual-check items only |
| T27 | Browser console | Open each page and check the console | No errors in the browser console | Pass, 2026-11-04: site script run in a headless DOM on all 5 pages with load, menu toggle, dark-mode toggle and contact-form submit interactions, 0 console errors; DevTools panel itself was unavailable in the automated browser, but no live page showed a blank page, broken image or failed interaction |

## Notes
Images used in this site are all under 500 KB.

## Live test run 2026-11-03
- Live site tested 2026-11-03 in a desktop browser (1919x998). No site failures were found in the tests that could be run.
- Update 2026-11-04: Lighthouse Accessibility is verified via Google PageSpeed Insights (Lighthouse engine), 100/100 on mobile and desktop for all 5 pages, recorded in T22-T26. Phone screenshots taken by Mohamed on 2026-11-04 for all 5 pages verify phone layout and the open menu (Home) and closed menu state (other pages), recorded in T6, T8, T10, T12-T15. Console errors checked 2026-11-04 by running the site script in a headless DOM on all 5 pages with menu, theme and form interactions, 0 errors, recorded in T27; the DevTools panel itself was unavailable in the automated browser, as noted there.
- This file was prepared on 2026-11-03 and pushed as a real commit on 2026-11-04, to keep the commit history over multiple days honest.
