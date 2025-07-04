// Funcionalidad de búsqueda global
class SearchManager {
  constructor() {
    this.searchTimeout = null;
    this.currentController = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchLoading = document.getElementById('search-loading');

    if (!searchInput || !searchResults || !searchLoading) {
      // Los elementos no están presentes en esta página
      return;
    }

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      
      // Cancelar búsqueda anterior
      if (this.currentController) {
        this.currentController.abort();
      }
      clearTimeout(this.searchTimeout);
      
      // Ocultar resultados si la query es muy corta
      if (query.length < 2) {
        this.hideResults();
        return;
      }

      // Mostrar loading
      this.showLoading();

      // Debounce la búsqueda
      this.searchTimeout = setTimeout(async () => {
        await this.performSearch(query);
      }, 300);
    });

    // Ocultar resultados al hacer clic fuera o presionar Escape
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && 
          !searchResults.contains(e.target) &&
          !searchLoading.contains(e.target)) {
        this.hideResults();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideResults();
        searchInput.blur();
      }
    });

    this.isInitialized = true;
  }

  async performSearch(query) {
    try {
      // Crear nuevo AbortController para esta búsqueda
      this.currentController = new AbortController();
      
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
        signal: this.currentController.signal
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const results = await response.json();
      
      // Solo mostrar resultados si esta es la búsqueda más reciente
      if (!this.currentController.signal.aborted) {
        this.displayResults(results, query);
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // Búsqueda cancelada, no hacer nada
        return;
      }
      console.error('Error en la búsqueda:', err);
      this.displayError();
    } finally {
      this.hideLoading();
    }
  }

  displayResults(results, query) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;

    this.hideLoading();
    
    if (results.length === 0) {
      searchResults.innerHTML = `
        <li class="px-4 py-3 text-gray-500 border-b-2 border-black">
          No se encontraron resultados para "${query}"
        </li>
      `;
    } else {
      searchResults.innerHTML = results.map(article => `
        <li class="border-b-2 border-black last:border-b-0 hover:bg-gray-100 transition-colors">
          <a href="/antropologia-Agnosticismo/${article.id}" class="block px-4 py-3">
            <div class="font-bold text-black">${this.highlightText(article.titulo, query)}</div>
            <div class="text-sm text-gray-600 mt-1">${article.categoria}</div>
          </a>
        </li>
      `).join('');
    }
    
    searchResults.classList.remove('hidden');
  }

  displayError() {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;

    this.hideLoading();
    searchResults.innerHTML = `
      <li class="px-4 py-3 text-red-500 border-b-2 border-black">
        Error al realizar la búsqueda. Inténtalo de nuevo.
      </li>
    `;
    searchResults.classList.remove('hidden');
  }

  showLoading() {
    const searchResults = document.getElementById('search-results');
    const searchLoading = document.getElementById('search-loading');
    
    if (searchResults) searchResults.classList.add('hidden');
    if (searchLoading) searchLoading.classList.remove('hidden');
  }

  hideLoading() {
    const searchLoading = document.getElementById('search-loading');
    if (searchLoading) searchLoading.classList.add('hidden');
  }

  hideResults() {
    const searchResults = document.getElementById('search-results');
    if (searchResults) searchResults.classList.add('hidden');
    this.hideLoading();
  }

  highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
  }

  // Reinicializar cuando cambie la página
  reinit() {
    this.isInitialized = false;
    this.init();
  }
}

// Crear instancia global
const searchManager = new SearchManager();

// Inicializar en carga de página
document.addEventListener('DOMContentLoaded', () => {
  searchManager.init();
});

// Si usas ViewTransitions, reinicializar en cada navegación
document.addEventListener('astro:page-load', () => {
  searchManager.reinit();
});

// Hacer disponible globalmente
window.searchManager = searchManager;
