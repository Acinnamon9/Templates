export const triggerFlair = (x: number, y: number) => {
    window.dispatchEvent(new CustomEvent('trigger-flair', { detail: { x, y } }));
};
