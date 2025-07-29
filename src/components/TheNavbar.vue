<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-left">
        <div class="icon-container">
          <!-- BookOpen icon - if using Lucide -->
          <i data-lucide="book-open" class="book-icon"></i>
        </div>
        <div class="title-container">
          <h1 class="title">My Library</h1>
          <p class="subtitle">Book Tracker</p>
        </div>
      </div>

      <div class="nav-right">
        <span class="tagline"> Track your reading journey </span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff; /* bg-card - adjust to your theme */
  border-bottom: 1px solid #e2e8f0; /* border-border - adjust to your theme */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  width: 100%;
}

.nav-container {
  max-width: 42rem; /* max-w-2xl */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
}

/* Left side of navbar */
.nav-left {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* space-x-3 */
}

.icon-container {
  background-color: #3b82f6; /* bg-primary */
  color: #ffffff; /* text-primary-foreground */
  padding: 0.5rem; /* p-2 */
  border-radius: 0.5rem; /* rounded-lg */
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-icon {
  height: 1.5rem; /* h-6 */
  width: 1.5rem; /* w-6 */
}

.title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #1a202c; /* text-foreground - */
  margin: 0;
}

.subtitle {
  font-size: 0.75rem; /* text-xs */
  color: #718096; /* text-muted-foreground */
  margin: 0;
}

/* Right side of navbar */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem; /* space-x-4 */
}

.tagline {
  font-size: 0.875rem; /* text-sm */
  color: #718096; /* text-muted-foreground */
}

/* Main navbar container */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem; /* h-16 */
}
</style>
