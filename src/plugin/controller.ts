figma.showUI(__html__);

// TODO: figure out how to make responsive
figma.ui.resize(400, 500);

figma.ui.onmessage = (msg) => {
  if (msg.type === 'focus-component') {
    const id = decodeURIComponent(msg.link.substring(msg.link.search(/node-id/) + 8));

    const node = figma.getNodeById(id);

    if (node) {
      figma.viewport.scrollAndZoomIntoView([node]);

      figma.ui.postMessage({
        type: 'focus-component',
        message: `found component with id ${id}`,
      });
    }
  }

  figma.closePlugin();
};
