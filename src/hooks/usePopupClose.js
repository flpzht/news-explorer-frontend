import { useEffect } from 'react';

export function usePopupClose(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) onClose();
  }

  return { handleOverlayClick };
}