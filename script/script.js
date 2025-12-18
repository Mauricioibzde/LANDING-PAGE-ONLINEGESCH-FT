// ==========================================
// MOBILE SIDEBAR NAVIGATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const body = document.body;

  // Função para abrir a sidebar
  function openSidebar() {
    mobileSidebar.classList.add('active');
    mobileMenuBtn.classList.add('active');
    body.classList.add('sidebar-open');
  }

  // Função para fechar a sidebar
  function closeSidebarMenu() {
    mobileSidebar.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    body.classList.remove('sidebar-open');
  }

  // Event listeners
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (mobileSidebar.classList.contains('active')) {
        closeSidebarMenu();
      } else {
        openSidebar();
      }
    });
  }

  if (closeSidebar) {
    closeSidebar.addEventListener('click', closeSidebarMenu);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebarMenu);
  }

  // Fechar ao pressionar ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
      closeSidebarMenu();
    }
  });

  // Fechar ao clicar em um link da sidebar
  const sidebarLinks = document.querySelectorAll('.mobile-sidebar__nav a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebarMenu);
  });
});
