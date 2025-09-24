(() => {
  const render = () => {
    if (!window.mermaid) return;
    window.mermaid.initialize({
      startOnLoad: false,
      theme: 'dark', // looks better with your "slate" site theme
      themeVariables: {
        fontSize: '20px'   // <— try 18–22px to taste
      },
      flowchart: { useMaxWidth: true }
    });
    window.mermaid.init(undefined, '.mermaid');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
  if (window.document$) window.document$.subscribe(render);
})();
