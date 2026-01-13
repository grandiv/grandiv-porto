/**
 * Project Filter Module
 * Handles filtering and pagination of project cards
 */

export class ProjectFilter {
  constructor(config = {}) {
    this.VISIBLE_CLASS = config.visibleClass || "project-visible";
    this.HIDDEN_CLASS = config.hiddenClass || "project-hidden";
    this.HIDE_TIMEOUT = config.hideTimeout || 300;
    this.INITIAL_VISIBLE = config.initialVisible || 12;

    this.itemsToShow = this.INITIAL_VISIBLE;
    this.activeFilter = "all";
    this.cards = [];
    this.filterButtons = [];
    this.loadMoreBtn = null;
  }

  init() {
    this.queryElements();
    this.attachFilterEvents();
    this.attachLoadMore();
    this.applyFilter("all");
  }

  queryElements() {
    this.cards = Array.from(document.querySelectorAll("[data-index]"));
    this.filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
    this.loadMoreBtn = document.getElementById("load-more");
  }

  showCard(card) {
    card.style.display = "flex";
    requestAnimationFrame(() => {
      card.classList.remove(this.HIDDEN_CLASS);
      card.classList.add(this.VISIBLE_CLASS);
    });
  }

  hideCard(card) {
    card.classList.remove(this.VISIBLE_CLASS);
    card.classList.add(this.HIDDEN_CLASS);
    setTimeout(() => {
      if (card.classList.contains(this.HIDDEN_CLASS)) {
        card.style.display = "none";
      }
    }, this.HIDE_TIMEOUT);
  }

  setActiveButton(btn) {
    this.filterButtons.forEach((b) => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
  }

  applyFilter(filter) {
    this.activeFilter = filter ?? "all";
    const normalized = this.activeFilter.toLowerCase();

    // Re-query cards to ensure we have the latest DOM state
    this.cards = Array.from(document.querySelectorAll("[data-index]"));

    const filteredCards = this.cards.filter((card) => {
      const category = (card.dataset.category ?? "").toLowerCase();
      return normalized === "all" || category === normalized;
    });

    // Hide all cards first
    this.cards.forEach((c) => this.hideCard(c));

    // Show filtered cards up to itemsToShow
    filteredCards.forEach((card, i) => {
      if (i < this.itemsToShow) this.showCard(card);
    });

    // Update load more button visibility
    this.updateLoadMoreButton(filteredCards.length);
  }

  updateLoadMoreButton(totalFiltered) {
    if (!this.loadMoreBtn) return;
    this.loadMoreBtn.style.display =
      totalFiltered > this.itemsToShow ? "block" : "none";
  }

  attachFilterEvents() {
    if (!this.filterButtons.length) return;

    this.filterButtons.forEach((btn) => {
      btn.onclick = () => {
        this.itemsToShow = this.INITIAL_VISIBLE;
        const filter = btn.dataset.filter || "all";
        this.setActiveButton(btn);
        this.applyFilter(filter);
      };
    });

    // Activate "All" button at start
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    this.setActiveButton(allBtn);
  }

  attachLoadMore() {
    if (!this.loadMoreBtn) return;

    this.loadMoreBtn.onclick = () => {
      this.itemsToShow += this.INITIAL_VISIBLE;
      this.applyFilter(this.activeFilter);
    };
  }

  destroy() {
    this.filterButtons.forEach((btn) => {
      btn.onclick = null;
    });
    if (this.loadMoreBtn) {
      this.loadMoreBtn.onclick = null;
    }
  }
}

// Singleton instance for easy usage
let filterInstance = null;

export function initProjectFilter(config = {}) {
  // Clean up existing instance
  if (filterInstance) {
    filterInstance.destroy();
  }

  filterInstance = new ProjectFilter(config);
  filterInstance.init();
}

// Auto-initialize on page load and Astro navigation
if (typeof window !== "undefined") {
  document.addEventListener("astro:page-load", () => initProjectFilter());
  window.addEventListener("load", () => initProjectFilter());
}
