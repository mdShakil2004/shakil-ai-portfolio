export function preloadAssets(assets, onProgress) {
  const entries = Object.values(assets);
  let loaded = 0;

  const update = () => {
    loaded++;
    const percent = Math.round((loaded / entries.length) * 90); // ⬅ cap at 90
    onProgress(percent);
  };

  return Promise.all(
    entries.map((src) => {
      return new Promise((resolve) => {
        if (typeof src === "string" && src.endsWith(".pdf")) {
          fetch(src).finally(() => {
            update();
            resolve();
          });  
          return;
        }

        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
          update();
          resolve();
        };
      });
    })
  );
}
