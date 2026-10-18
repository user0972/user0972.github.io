REVIVAL routing update

Upload the contents of this folder into the root of your GitHub Pages repository, merging with existing files. Keep the existing site assets and platformname.txt at repository root. This creates /signup/ as the landing/signup page and adds a route guard to root index.html: visitors without a valid sessionStorage revival_session are redirected to /signup/.

Important: the current login stores the session in sessionStorage, so it only persists in that browser tab and may be lost when the tab is closed. The root page still contains the existing page design for signed-in users until a separate logged-in homepage is built.
