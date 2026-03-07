You are a senior frontend engineer, product designer, and interaction designer.
Your task is to build a highly interactive, premium website for:
Veda Educational Services
This is not a basic website.
It must feel like a modern product experience with immersive interactions.
The goal is to make students feel like they are exploring top colleges through an interactive digital journey.
Tech Stack
Frontend
Next.js
React
TailwindCSS
Animation libraries
Framer Motion for UI transitions
GSAP for scroll and timeline animations
Three.js for immersive 3D interactions
React Three Fiber for React + Three.js integration
react-parallax-tilt for 3D tilt cards
Book animation library
StPageFlip or Turn.js for realistic page flipping
Backend
API route
Save leads to Google Sheets or Supabase
Deployment
Vercel ready
Design Style
Visual theme must be:
Modern
Premium
Minimal
Soft gradients
Glassmorphism cards
Subtle shadows
Micro-interactions everywhere
Inspiration:
Apple
Stripe
Linear
The UI must feel smooth, intelligent, and alive.
SECTION 1 — HERO LANDING
Full screen hero section.
Top navigation:
Home
Colleges
About
Contact
Main headline:
Veda Educational Services
Subheading:
Helping students access scholarships and top colleges across India.
Animated College Pin Cluster
Hero visual must show a map-like cluster of college pins.
Animation:
Pins appear gradually.
When the cursor moves:
Pins subtly move with parallax.
Pins group together and expand.
When scrolling:
The pins transition into the college card section below.
This creates a story flow from exploration → discovery.
SECTION 2 — SCHOLARSHIP SECTION
Content block explaining:
"We offer scholarships and free laptops for students admitted to top colleges in India."
Layout:
Left side
Text + icons
Right side
Floating interactive college cards.
Best UI Layout for College Cards
Cards must be arranged in a floating asymmetric grid.
Example layout:
Copy code

Card 1        Card 2

       Card 3

   Card 4        Card 5
Cards must appear like floating glass tiles.
Each card contains:
College image
College name
Ranking badge
Short tagline
Card styling:
Rounded corners
Glassmorphism background
Gradient glow border
Depth shadows
Card Interactions
Cursor Tilt Interaction
Use react-parallax-tilt
When cursor moves:
Card tilts in 3D.
Lighting reflection moves with cursor.
Subtle depth effect.
Hover Interaction
When hovering:
Card lifts upward.
Shadow increases.
Glow border appears.
College logo slightly zooms.
Click Interaction
When clicking a card:
Card performs a 3D transformation into a book.
Animation sequence:
1 Card expands
2 Card rotates on Y-axis
3 Card splits into two halves
4 Book opens with page flip animation
The opened book appears centered in the screen.
SECTION 3 — COLLEGE BOOK EXPERIENCE
Each college opens as an interactive digital book.
Use:
StPageFlip or Turn.js.
Pages flip realistically.
Each page represents a college accomplishment.
Example pages:
Page 1
College overview
Page 2
Campus gallery
Page 3
Placement statistics
Page 4
Scholarship opportunities
Page 5
Alumni success
Page 6
Rankings and achievements
Book Interaction
Users can:
Click next page
Drag page corner
Swipe pages (mobile)
Pages flip with realistic physics.
When closing the book:
Book folds and transforms back into the card.
If another card is clicked:
The previous book closes smoothly.
Only one book open at a time.
SECTION 4 — CONTACT / LEAD FORM
Minimal and premium form.
Fields:
Name
Phone
State
Email
Course interest
Options:
BTech
Degree
Other
CTA button:
Book Consultation Call
When submitted:
Show success animation.
Store data in backend.
Send data to Google Sheets.
Micro-Interactions Across Site
Add multiple small interactions.
Examples:
Scroll-triggered animations.
Counters for statistics.
Images reveal on scroll.
Soft glow hover effects.
Section transitions.
Everything must feel fluid and polished.
Next-Level Interaction (Rare in Education Websites)
Add an "Explore Your Future" mode.
This is an immersive experience.
When user clicks Explore Colleges:
The screen transitions into a 3D space of floating college cards.
Cards float in depth space.
Users move cursor and cards move with parallax.
Clicking a floating card opens the college book.
This interaction can be built with:
Three.js
React Three Fiber
This makes the site feel like a college exploration universe instead of a static page.
Performance Requirements
Animations must stay smooth.
Use:
Lazy loading
Optimized assets
GPU animations
Target performance:
60 FPS.
Mobile Behavior
On mobile:
Cards still tilt slightly.
Book pages flip with swipe gestures.
Layout adapts to vertical scroll.
Deliverables
Generate:
Full project folder structure
Reusable components
Animation logic
Example college data
Google Sheets integration
Deployment instructions
Important Instruction
Do not simplify animations.
Prioritize immersive storytelling and interactive design.
The website must feel like a premium product experience, not a static education portal.