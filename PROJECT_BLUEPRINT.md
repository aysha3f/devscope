# DevScope – Developer Job & Learning Explorer
## Production-Grade Project Blueprint

---

## 1. PROJECT OVERVIEW

### Problem Statement
Developers (especially junior devs and students) spend hours scattered across multiple job boards, LinkedIn, and learning platforms to find relevant opportunities. They lack a **unified, focused platform** designed specifically for developer jobs and learning paths with smart filtering and personalization.

### Solution
**DevScope** is a modern, mobile-first web application that aggregates developer job opportunities and learning resources in one place. Users can search, filter, save, and explore positions matched to their skill level and interests—all without leaving a single application.

### Target Users
- **Primary:** Junior developers (0-2 years exp), bootcamp graduates, computer science students
- **Secondary:** Career changers transitioning into tech, freelancers exploring full-time roles
- **Value Prop:** Save time, discover curated opportunities, build a personalized job watchlist

### Business Value
- **Portfolio Impact:** Demonstrates real-world frontend skills (API integration, state management, UX patterns)
- **User Retention:** Favorites system and local persistence encourage repeat visits
- **Scalability:** Architecture supports adding learning resources, saved searches, notifications later
- **Recruiter Message:** "Built a production-grade job discovery platform with real API integration, clean architecture, and smooth UX"

---

## 2. CORE FEATURES (MVP)

### Must-Have (Launch Features)
1. **Job Listing Page** - Display jobs in a paginated/infinite scroll grid
2. **Search & Filter Panel**
   - Search by keyword (role, company, skill)
   - Filter by location (remote, on-site, hybrid)
   - Filter by job type (full-time, internship, contract)
   - Filter by experience level (entry-level, mid, senior)
3. **Job Detail View** - Click a job card to see full description, requirements, salary, apply link
4. **Favorites System** - Save/unsave jobs to localStorage with visual indicator
5. **Favorites Page** - View all saved jobs in one place
6. **Loading & Error States** - Skeleton loaders, error messages, empty states
7. **Responsive Design** - Mobile-first, works on all screen sizes

### Nice-to-Have (Phase 2)
- Dark mode toggle
- Sort by date posted, salary, relevance
- Advanced filters (salary range slider, tech stack tags)
- Job alerts / saved searches
- Share job links

---

## 3. USER EXPERIENCE FLOW

### Happy Path User Journey

```
Landing → Browse/Search → Found Job → Save → View Later → Apply
```

### Detailed Flow

**Entry Point (App Load)**
- User lands on home page with hero section: "Find Your Next Developer Role"
- Above the fold: Search bar + popular filter chips (Remote, Entry-Level, Internship)
- Below: Grid of featured jobs (latest 12-15)

**Discovery (Search/Filter)**
- User types keyword "React" or "Frontend" in search bar
- Sidebar filters update results in real-time (or on "Apply Filters" click)
- Results update instantly with loading skeleton cards
- User sees: Job card title, company, location, job type badge, "Save" button

**Job Details**
- Click any job card → drawer/modal/new page slides in
- Shows: Full description, requirements list, salary (if available), company logo, direct apply button
- "Save Job" button with heart icon, already filled if saved
- "← Back to Results" to close and stay in search context

**Favorites Management**
- Click heart icon on any card to save → instant visual feedback
- View all saved jobs on dedicated Favorites page
- Search/filter works on favorites too
- "Remove from favorites" with confirmation toast

**Empty States & Error Handling**
- No results → "No jobs found. Try different filters or check back later."
- API error → "Something went wrong. Please refresh the page."
- No saved jobs → "You haven't saved any jobs yet. Start exploring!"

---

## 4. UI/UX DESIGN PLAN

### Design System

#### Color Palette (Professional Tech Theme)
```
Primary:     #0066FF (Trust blue - CTA, highlights)
Secondary:   #6C5CE7 (Purple - accents, badges)
Success:     #27AE60 (Green - positive states, saved)
Warning:     #F39C12 (Orange - alerts)
Danger:      #E74C3C (Red - destructive actions)
Neutral:     #2C3E50 (Dark text)
Light BG:    #F8F9FA (Cards, light backgrounds)
Dark BG:     #FFFFFF (Main content)
Border:      #DDD (Subtle dividers)
```

#### Typography
```
Headings:    Inter Bold, 24px (h1), 20px (h2), 16px (h3)
Body:        Inter Regular, 14-16px
Label:       Inter Medium, 12px (filters, badges)
Mono:        JetBrains Mono, 13px (tech stacks, code snippets)
```

#### Spacing System (8px base)
```
xs: 4px   | sm: 8px   | md: 16px  | lg: 24px
xl: 32px  | 2xl: 48px | 3xl: 64px
```

### Page & Layout Structure

#### 1. **Home/Landing Page**
- Navigation bar (Logo, Favorites link, Settings)
- Hero section (headline, search bar, featured filters)
- Job listings grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Sidebar filter panel (collapsible on mobile)
- Footer with links

#### 2. **Job Detail Page/Modal**
- Header with job title, company, location, badges
- Left column: Description, requirements, nice-to-haves
- Right column: Company info, salary, job meta, apply button (sticky on scroll)
- Close button / back navigation

#### 3. **Favorites Page**
- Same grid as home, but filtered to saved jobs
- Filter/search still available
- "No favorites" state with CTA to browse jobs

#### 4. **Settings/About Page** (Optional)
- Dark mode toggle
- Clear favorites
- About DevScope

### Component Hierarchy

```
App
├── Header/Navigation
│   ├── Logo
│   ├── Nav Links
│   └── Dark Mode Toggle
├── Hero Section (Home only)
│   ├── Headline
│   ├── Search Bar
│   └── Quick Filters
├── FilterPanel (Sidebar)
│   ├── SearchInput
│   ├── LocationFilter
│   ├── JobTypeFilter
│   ├── ExperienceLevelFilter
│   └── Apply/Reset Buttons
├── JobListings
│   ├── JobCard (Repeating)
│   │   ├── JobTitle
│   │   ├── CompanyName
│   │   ├── Location
│   │   ├── BadgeGroup (type, level)
│   │   ├── SaveButton
│   │   └── Salary (if available)
│   └── Pagination/LoadMore
├── JobDetailModal/Drawer
│   ├── JobHeader
│   ├── Description
│   ├── Requirements
│   ├── Company Info
│   └── ApplyButton
├── LoadingState/Skeleton
├── ErrorBoundary
└── Footer
```

### Responsive Breakpoints

```
Mobile:   320px - 640px  (1 column, stacked layout)
Tablet:   641px - 1024px (2 columns, sidebar collapses)
Desktop:  1025px+        (3 columns, sidebar visible)
```

---

## 5. TECH STACK

### Framework & Build
- **React 18** (hooks-based, functional components)
- **Vite** (fast dev server, optimized build) — preferred for speed
  - *Alternative:* Create React App if you prefer it
- **JavaScript** (ES6+) — no TypeScript (keep it simple for now)

### API Source

#### Option A: JSearch API (Recommended)
```
Provider: RapidAPI (free tier available)
Endpoint: GET https://jsearch.p.rapidapi.com/search
Features: Job title, company, location, salary, description, apply link
Free Tier: 100 requests/day (enough for development)
Setup: Get API key from RapidAPI dashboard
```

#### Option B: Mock API (If you want zero dependencies)
```
Create a local jobs.json file with 50-100 job objects
Simulates API responses with setTimeout for realism
Perfect for building UI without API rate limits
```

### Styling
- **CSS Modules** or **Tailwind CSS**
  - *Recommendation:* CSS Modules for learning (more explicit, better for portfolio)
  - *Alternative:* Tailwind for speed if comfortable

### State Management
- **React Hooks** (useState, useContext, custom hooks)
- **localStorage** for favorites persistence
- No Redux needed for MVP (keep it simple)

### Routing
- **React Router v6** - for Home, Favorites, Job Detail pages
- Clean URL structure: `/`, `/favorites`, `/jobs/:id`

### Utilities & Libraries
- **axios** or **fetch API** (fetch recommended for learning)
- **uuid** (generate unique IDs if needed)
- **date-fns** (format job posting dates)
- **react-icons** (Feather icons library, lightweight)

### Development Tools
- **ESLint** (code quality, catch bugs)
- **Prettier** (code formatting, consistency)
- **Vite dev tools** (built-in performance monitoring)

### Optional (Phase 2)
- **Zustand** or **Jotai** (state management if complexity grows)
- **React Query** (data fetching, caching)
- **Framer Motion** (animations, micro-interactions)

---

## 6. COMPONENT ARCHITECTURE

### Component Breakdown & Responsibilities

```
📦 DevScope/
├── src/
│   ├── components/
│   │   ├── Header.jsx                (Navigation, logo, dark mode)
│   │   ├── SearchBar.jsx             (Input + submit, filters bar)
│   │   ├── FilterPanel.jsx           (Sidebar: location, type, level)
│   │   ├── JobCard.jsx               (Individual job listing card)
│   │   ├── JobGrid.jsx               (Grid layout + pagination)
│   │   ├── JobDetailModal.jsx        (Full job details view)
│   │   ├── FavoritesButton.jsx       (Heart icon, save toggle)
│   │   ├── LoadingSkeletons.jsx      (Skeleton cards while fetching)
│   │   ├── ErrorMessage.jsx          (Error state display)
│   │   ├── EmptyState.jsx            (No results, no favorites)
│   │   └── Footer.jsx                (Links, info)
│   ├── pages/
│   │   ├── HomePage.jsx              (Search + grid + filters)
│   │   ├── FavoritesPage.jsx         (Saved jobs grid)
│   │   └── SettingsPage.jsx          (Dark mode, clear data)
│   ├── hooks/
│   │   ├── useJobs.js                (Fetch + state for jobs)
│   │   ├── useFavorites.js           (localStorage + state)
│   │   └── useFilters.js             (Filter logic, state)
│   ├── api/
│   │   ├── jobsAPI.js                (API calls to JSearch)
│   │   └── mockData.js               (Fallback mock jobs)
│   ├── styles/
│   │   ├── index.css                 (Global styles, CSS variables)
│   │   ├── Header.module.css         (Header component)
│   │   ├── JobCard.module.css        (Job card styling)
│   │   └── ... (other modules)
│   ├── utils/
│   │   ├── formatDate.js             (Date formatting)
│   │   ├── filterHelpers.js          (Filter logic functions)
│   │   └── constants.js              (Magic strings, filters config)
│   ├── context/
│   │   ├── FavoritesContext.jsx      (Global favorites state)
│   │   └── ThemeContext.jsx          (Dark mode state)
│   ├── App.jsx                       (Routes, root layout)
│   └── main.jsx                      (Vite entry point)
└── vite.config.js                    (Vite configuration)
```

### Key Components Deep Dive

#### **useJobs.js (Custom Hook)**
```javascript
Responsibility: Fetch jobs from API, manage loading/error states
Returns: { jobs, loading, error, refetch }
Handles: API calls, caching, retry logic
```

#### **useFavorites.js (Custom Hook)**
```javascript
Responsibility: CRUD favorites from localStorage
Returns: { favorites, addFavorite, removeFavorite, isFavorited }
Persists: localStorage['devscope_favorites'] = JSON array
```

#### **useFilters.js (Custom Hook)**
```javascript
Responsibility: Manage filter state, apply/reset filters
Returns: { filters, updateFilter, resetFilters }
State: { keyword, location, type, level }
```

#### **JobCard.jsx (Presentational Component)**
```
Props: job (object), isFavorited (bool), onFavorite (fn)
Actions: Display job + save button
No side effects, pure UI
```

#### **HomePage.jsx (Container Component)**
```
Responsibilities:
- Orchestrate useJobs hook
- Orchestrate useFilters hook
- Pass filtered results to JobGrid
- Handle search input
- Manage modal state
```

### State Management Architecture

```
Global State:
├── Favorites (localStorage + Context)
├── Theme (localStorage + Context)
└── User Preferences (localStorage)

Local State:
├── Filters (component state)
├── Search term (component state)
├── Current page (component state)
├── Selected job detail (component state)
└── Modal open/close (component state)
```

**Why this approach?**
- Simple, no Redux complexity
- localStorage handles persistence
- Context only for theme + favorites (used across app)
- Rest is local component state (easier to debug)
- Scale to Zustand/Redux if app grows

---

## 7. API HANDLING

### Data Fetching Strategy

#### **Fetching Flow**
```
1. Component mounts → useJobs hook triggered
2. Loading state = true (show skeletons)
3. Fetch jobs from API with filters
4. Transform API response to app data format
5. Loading state = false
6. Render jobs
```

#### **Request Example (JSearch API)**
```javascript
// Raw API call
const response = await fetch(
  `https://jsearch.p.rapidapi.com/search?query=${keyword}&location=${location}`,
  {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  }
);
const data = await response.json();
```

#### **Data Normalization** (Transform API data → app format)
```javascript
// Raw API response
{
  "data": [
    {
      "job_id": "abc123",
      "job_title": "React Developer",
      "employer_name": "TechCorp",
      "job_location": "Remote",
      "job_description": "...",
      "job_salary_currency": "USD",
      "job_salary_max": 120000,
      "job_posted_at_datetime_utc": "2026-01-20T10:00:00Z"
    }
  ]
}

// Normalized format (app uses this)
{
  "id": "abc123",
  "title": "React Developer",
  "company": "TechCorp",
  "location": "Remote",
  "description": "...",
  "salary": { currency: "USD", max: 120000 },
  "postedDate": "2026-01-20T10:00:00Z",
  "source": "jsearch"
}
```

**Why normalize?** Decouples UI from API structure. If you switch APIs later, only normalization changes.

### Error Handling

#### **Network Errors**
```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
} catch (error) {
  setError(error.message);
  // Show: "Failed to load jobs. Check your connection."
}
```

#### **API Rate Limiting** (Graceful degradation)
```javascript
if (error.code === 'RAPIDAPI_RATE_LIMIT') {
  // Fall back to mock data or cached results
  return useMockData();
}
```

#### **No Results** (Not an error, expected state)
```javascript
if (jobs.length === 0 && filters.applied) {
  // Show: "No jobs found. Try adjusting your filters."
}
```

### Pagination & Infinite Scroll

#### **Option A: Pagination (Beginner-Friendly)**
```javascript
State: { currentPage, pageSize = 12, totalJobs }
Display: "Page 1 of 5" + Previous/Next buttons
Action: Fetch new page on button click
```

#### **Option B: Infinite Scroll (Advanced)**
```javascript
Intersection Observer watches bottom of page
Auto-fetches next 12 jobs when user scrolls 80% down
Shows "Loading more..." indicator
Simpler UX, but harder to implement
```

**Recommendation:** Start with pagination, upgrade to infinite scroll in Phase 2.

### Caching Strategy

```javascript
// Simple cache: Reuse results if filters haven't changed
const cache = new Map();

function fetchJobs(filters) {
  const key = JSON.stringify(filters);
  if (cache.has(key)) return cache.get(key);
  
  const results = await api.search(filters);
  cache.set(key, results);
  return results;
}
```

---

## 8. STEP-BY-STEP DEVELOPMENT PLAN

### Phase 1: Foundation (Week 1)
**Goal:** Static UI, no data

- [ ] Setup Vite + React project
- [ ] Create folder structure
- [ ] Design CSS (global styles, variables, colors)
- [ ] Build Header component (logo, nav, theme toggle)
- [ ] Build FilterPanel component (inputs, labels, layout)
- [ ] Build JobCard component (mock data displayed)
- [ ] Build HomePage layout (hero, filters, grid)
- [ ] **Checkpoint:** App looks good, fully responsive, but no API yet

### Phase 2: API Integration (Week 2)
**Goal:** Real data flowing through app

- [ ] Get RapidAPI key or setup mock API
- [ ] Create jobsAPI.js with fetch function
- [ ] Build useJobs hook (fetching, loading, error states)
- [ ] Create LoadingSkeletons component (fancy loading UX)
- [ ] Connect HomePage to useJobs
- [ ] Test with real data, handle errors
- [ ] **Checkpoint:** App displays real jobs with loading states

### Phase 3: Search & Filters (Week 2-3)
**Goal:** Users can find jobs

- [ ] Build useFilters hook
- [ ] Connect filter inputs to state
- [ ] Implement filtering logic in useJobs
- [ ] Add filter badge display (active filters shown)
- [ ] Build "Reset Filters" button
- [ ] Test filter combinations
- [ ] **Checkpoint:** All filters work, results update in real-time

### Phase 4: Favorites System (Week 3)
**Goal:** Users can save jobs

- [ ] Build useFavorites hook (localStorage CRUD)
- [ ] Create FavoritesContext for global state
- [ ] Add FavoritesButton component (heart icon toggle)
- [ ] Build FavoritesPage component (saved jobs grid)
- [ ] Add Route for /favorites
- [ ] Implement localStorage persistence
- [ ] Add visual indicator (filled heart) for saved jobs
- [ ] **Checkpoint:** Users can save/unsave jobs, persists on refresh

### Phase 5: Job Details (Week 4)
**Goal:** Users see full job information

- [ ] Build JobDetailModal component
- [ ] Add modal state to HomePage
- [ ] Handle modal open/close on card click
- [ ] Implement "Apply" button (links to job URL or coming soon)
- [ ] Test modal responsiveness on mobile
- [ ] **Checkpoint:** Click job → full details appear

### Phase 6: Polish & Edge Cases (Week 4)
**Goal:** Production quality

- [ ] Add EmptyState components (no results, no favorites)
- [ ] Add ErrorMessage component (API errors)
- [ ] Implement pagination (or infinite scroll)
- [ ] Dark mode toggle (Theme Context)
- [ ] Test on mobile thoroughly
- [ ] Accessibility review (labels, keyboard nav, contrast)
- [ ] **Checkpoint:** App feels complete and polished

### Phase 7: Deployment & Documentation (Week 5)
**Goal:** Live, shareable project

- [ ] Deploy to Vercel or Netlify (free tier)
- [ ] Setup environment variables for API key
- [ ] Create comprehensive README.md
- [ ] Add demo video or screenshots
- [ ] Write commit history (clean, meaningful messages)
- [ ] **Final Checkpoint:** Project live, fully documented

---

## 9. RECRUITER IMPACT

### Skills Demonstrated

| Skill | How DevScope Shows It |
|-------|----------------------|
| **React Hooks** | Custom hooks (useJobs, useFavorites, useFilters) managing complex state |
| **Component Design** | Clear separation: presentational vs container components |
| **API Integration** | Real API calls, error handling, data normalization |
| **State Management** | Context API for theme + favorites, local state for filters |
| **localStorage/Persistence** | Favorites system saves across sessions |
| **UX/Design** | Responsive, accessible, polished UI |
| **Async Handling** | Loading states, skeleton screens, error boundaries |
| **CSS/Styling** | CSS Modules or Tailwind, mobile-first responsive design |
| **Problem Solving** | Normalized API data, pagination logic, filter combinations |

### Architectural Decisions to Explain

When interviewer asks "Tell me about your architecture":

**1. Why Custom Hooks?**
- "I created `useJobs`, `useFavorites`, and `useFilters` to separate concerns. Each hook is reusable and testable. Makes the component logic easier to reason about."

**2. Why Context API, not Redux?**
- "For the MVP, Context is perfect. Theme + Favorites are app-wide but don't change frequently. I'd add Redux/Zustand only when state becomes more complex (notifications, user auth, etc.). KISS principle."

**3. Why Data Normalization?**
- "The JSearch API returns deeply nested objects. I transform the data into a flat, predictable format. This decouples UI from API structure—if we switch APIs, only the normalization layer changes."

**4. Why CSS Modules + no Tailwind?**
- "I wanted to demonstrate CSS fundamentals and explicit styling. Tailwind is faster, but CSS Modules show I understand how styles scope and avoid naming conflicts."

**5. Why Pagination over Infinite Scroll?**
- "Pagination is simpler to implement and test. It gives users control (they can go to page 5 directly). Infinite scroll is more 'modern' but adds complexity—I prioritize shipping value first."

### Resume Bullet Points

**Strong Points (Use These):**
- ✅ "Engineered a React job discovery app integrating a public API with real-time search/filter (100+ jobs, <2sec response)"
- ✅ "Built custom React hooks for data fetching, state management, and favorites persistence using localStorage"
- ✅ "Designed responsive component architecture (10+ components) following presentational vs container patterns"
- ✅ "Implemented robust error handling, loading states, and skeleton screens for smooth UX"
- ✅ "Deployed full-stack React app to Vercel with environment-based API configuration"

**Avoid These (Overstatement):**
- ❌ "Built a production app used by 1000+ users" (Not true for portfolio)
- ❌ "Architected enterprise-level state management" (Overkill for MVP)
- ❌ "Optimized for 99.9% uptime" (Not relevant for a portfolio project)

### GitHub Presentation Checklist

- [ ] **README.md** - Clear problem statement, features, tech stack, screenshots
- [ ] **Well-organized file structure** - Reviewers see professionalism immediately
- [ ] **Meaningful commit messages** - "Add job filtering logic" vs "stuff"
- [ ] **Clean code** - Consistent formatting, no commented-out code, descriptive variables
- [ ] **Env example file** - Show how to setup API keys without exposing secrets
- [ ] **.gitignore** - Ignore node_modules, env files, build outputs
- [ ] **Live demo link** - "🚀 Live Demo" button in README pointing to deployed site
- [ ] **Setup instructions** - Clear steps to run locally (npm install, npm run dev)

### Talking Points in Interview

**Q: "What was the hardest part?"**
- A: "Handling the API data structure. JSearch returns nested objects with inconsistent naming. I built a normalization layer to transform it into a predictable format. Took time but made the rest of the app cleaner."

**Q: "What would you do differently?"**
- A: "I'd add React Query for data fetching instead of raw hooks. It handles caching and refetching automatically. Also, I'd add unit tests with Vitest—right now I tested manually."

**Q: "How does your app handle errors?"**
- A: "Three layers: Network errors show 'Connection failed'; API errors show 'Try again later'; Filter results with no matches show helpful empty state. LoadingSkeletons show while fetching. Tried to handle every edge case."

---

## 10. BONUS FEATURES (OPTIONAL)

### Tier 1: Quick Wins (If time allows)
- [ ] **Dark Mode** - Toggle in Header, persists to localStorage
- [ ] **Sort Options** - By date posted, salary (high to low), relevance
- [ ] **Salary Range Filter** - Slider component
- [ ] **Job Type Badges** - Visual indicators (Full-time, Internship, Contract)
- [ ] **Saved Search Feature** - Users can save filter combinations

### Tier 2: Medium Effort
- [ ] **Advanced Filters** - Salary range slider, multi-select for tech stack
- [ ] **Bookmark Page** - Dedicated view for saved jobs with stats ("5 Saved", "Added 3 days ago")
- [ ] **Share Job Link** - Copy link or share to Twitter
- [ ] **Toast Notifications** - "Added to favorites" → animated toast
- [ ] **Job Alerts** - Email digest of matching jobs (requires backend)

### Tier 3: Complex (Phase 2+)
- [ ] **User Accounts** - Auth via Google/GitHub, sync favorites across devices
- [ ] **AI Job Recommendations** - ML model suggests jobs based on saved history
- [ ] **Learning Resources** - Link to courses for missing skills
- [ ] **Company Reviews/Ratings** - Integrate Glassdoor API
- [ ] **Full-Text Search** - Search within job descriptions, not just titles
- [ ] **Performance Optimization** - Service workers, lazy loading, code splitting

### Recommended First Bonus: **Dark Mode**
```javascript
// Why? Simple to implement, looks impressive, very common
// Steps:
// 1. Add toggle button in Header
// 2. Create ThemeContext with isDark state
// 3. Wrap app in ThemeProvider
// 4. Use CSS variables: --bg-primary, --text-primary
// 5. Persist to localStorage
// Effort: 2-3 hours, big visual impact
```

---

## Quick Reference: Design & API

### Sample Job Object (Normalized)
```javascript
{
  id: "job_abc123",
  title: "Senior React Developer",
  company: "TechCorp",
  location: "San Francisco, CA",
  locationType: "hybrid",  // remote, on-site, hybrid
  jobType: "full-time",    // full-time, internship, contract
  experienceLevel: "mid",  // entry-level, mid, senior
  description: "We're looking for a React dev to...",
  requirements: ["React", "Node.js", "PostgreSQL"],
  salary: {
    currency: "USD",
    min: 100000,
    max: 150000
  },
  postedDate: "2026-01-15T09:00:00Z",
  applyUrl: "https://techcorp.com/careers/job123",
  source: "jsearch"
}
```

### Sample Filter State
```javascript
{
  keyword: "React",
  location: "remote",
  jobType: "full-time",
  experienceLevel: "entry-level",
  salaryMin: 0,
  salaryMax: 200000
}
```

### Environment Variables (.env.local)
```
VITE_RAPIDAPI_KEY=your_key_here
VITE_RAPIDAPI_HOST=jsearch.p.rapidapi.com
VITE_API_BASE_URL=https://jsearch.p.rapidapi.com
```

---

## Success Criteria

Your project is **ready to show recruiters** when:

- ✅ App loads smoothly, 0-2 sec response time
- ✅ All filters work and update results instantly
- ✅ Favorites persist after browser refresh
- ✅ Mobile view is polished (not broken)
- ✅ Error states are friendly (not blank screens)
- ✅ Code is clean (consistent style, no warnings)
- ✅ README explains what it does in 30 seconds
- ✅ Live demo link in GitHub repo
- ✅ You can explain every architectural choice
- ✅ Commit history shows progressive development (not one massive commit)

---

## Next Steps

1. **Create Vite project** → `npm create vite@latest devscope -- --template react`
2. **Setup folder structure** (use the Component Architecture section above)
3. **Create GitHub repo** → Push initial commit
4. **Build Phase 1: Foundation** (Header, layout, CSS)
5. **Share Phase 1 checkpoint** → Get feedback before API integration

**You've got this! 🚀**

---

*Last Updated: January 21, 2026*
*Skill Level: Beginner to Early-Intermediate Frontend Developer*
