async function sidebarHandler() {
  if (document.getElementById('sidebar').classList.contains('opened-sidebar')) {
    document.getElementById('sidebar').classList.remove('opened-sidebar');
    document.getElementById('sb-button').classList.remove('close-sidebar');
    await new Promise(r => setTimeout(r, 600));
    document.getElementById('sb-button').classList.remove('closing');
  } else {
    document.getElementById('sidebar').classList.add('opened-sidebar');
    document.getElementById('sb-button').classList.add('close-sidebar');
    await new Promise(r => setTimeout(r, 600));
    document.getElementById('sb-button').classList.add('closing');
  }
}