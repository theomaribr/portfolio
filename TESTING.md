# Test Plan for Mohamed Ibrahim Portfolio

Run these tests on the live GitHub Pages site, not just local files. If a test fails, fix the problem, run the test again, and record both results below the first result.

## Test cases

| ID | Testing | Steps | Expected Result | Actual Result |
| T1 | Home navigation link | From every page, click Home | Home page opens | Pass, local file test, re-run on live site |
| T2 | About navigation link | From every page, click About Me | About page opens | Pass, local file test, re-run on live site |
| T3 | Projects navigation link | From every page, click Projects | Projects page opens | Pass, local file test, re-run on live site |
| T4 | Skills navigation link | From every page, click Skills | Skills page opens | Pass, local file test, re-run on live site |
| T5 | Contact navigation link | From every page, click Contact | Contact page opens | Pass, local file test, re-run on live site |
| T6 | Home page on phone | Open Home on a phone-sized screen | Page fits, no sideways scrolling | Pass, responsive CSS checked, re-run on live site |
| T7 | Home page on laptop | Open Home on a laptop screen | Page fits, layout is clear | Pass, local file test, re-run on live site |
| T8 | About page on phone | Open About on a phone-sized screen | Page fits, no sideways scrolling | Pass, responsive CSS checked, re-run on live site |
| T9 | About page on laptop | Open About on a laptop screen | Page fits, layout is clear | Pass, local file test, re-run on live site |
| T10 | Projects page on phone | Open Projects on a phone-sized screen | Images fit, no sideways scrolling | Pass, responsive CSS checked, re-run on live site |
| T11 | Projects page on laptop | Open Projects on a laptop screen | Images and cards display clearly | Pass, local file test, re-run on live site |
| T12 | Skills page on phone and laptop | Open Skills on phone, then laptop | Page fits on both, no sideways scrolling | Pass, responsive CSS checked, re-run on live site |
| T13 | Contact page on phone and laptop | Open Contact on phone, then laptop | Form fits on both, no sideways scrolling | Pass, responsive CSS checked, re-run on live site |
| T14 | Mobile menu | On a phone-sized screen, click Menu | Menu opens and shows all page links | Pass, script tested in code, re-run on live site |
| T15 | Mobile menu close | On a phone-sized screen, click Menu again | Menu closes | Pass, script tested in code, re-run on live site |
| T16 | Dark mode toggle | Click Dark mode, then Light mode | Theme changes each time, text stays readable | Pass, script tested in code, re-run on live site |
| T17 | Contact form valid input | Enter a name, valid email, and message, then submit | Success message appears, directing to email | Pass, script tested in code, re-run on live site |
| T18 | Contact form invalid input | Leave fields blank, then submit | Error message appears, form does not submit | Pass, script tested in code, re-run on live site |
| T19 | Contact form invalid email | Enter a name and message, and an email without @, then submit | Error message about valid email appears | Pass, script tested in code, re-run on live site |
| T20 | Keyboard navigation Home | Use Tab to move, Enter to follow links on Home | All links and buttons work with Tab and Enter | Pass, focus styles included, re-run on live site |
| T21 | Keyboard navigation About, Projects, Skills, Contact | Use Tab and Enter on each page | All links, buttons, and form fields work | Pass, focus styles included, re-run on live site |
| T22 | Lighthouse Accessibility Home | Run Lighthouse Accessibility in Chrome on Home | Score 90 or higher | To be run on live site, check after deployment |
| T23 | Lighthouse Accessibility About | Run Lighthouse Accessibility in Chrome on About | Score 90 or higher | To be run on live site, check after deployment |
| T24 | Lighthouse Accessibility Projects | Run Lighthouse Accessibility in Chrome on Projects | Score 90 or higher | To be run on live site, check after deployment |
| T25 | Lighthouse Accessibility Skills | Run Lighthouse Accessibility in Chrome on Skills | Score 90 or higher | To be run on live site, check after deployment |
| T26 | Lighthouse Accessibility Contact | Run Lighthouse Accessibility in Chrome on Contact | Score 90 or higher | To be run on live site, check after deployment |
| T27 | Browser console | Open each page and check the console | No errors in the browser console | Pass, script has no console errors in code check, re-run on live site |

## Notes
Images used in this site are all under 500 KB. The Weather Data Logger screenshot is cropped to the project title and setup only, so no API key is included.
