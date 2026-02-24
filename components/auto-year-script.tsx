'use client';

import { useEffect } from 'react';

/**
 * AutoYear Script
 *
 * class="auto-year" — Marks every place a year should appear.
 *   Add this class to <span> or any element where the year is displayed.
 *   Example: © <span className="auto-year">2026</span> Company Name
 *
 * getFullYear() — Fetches the real current year from the browser.
 *   Returns a 4-digit year (e.g., 2026) based on the user's system date.
 *   Usage: new Date().getFullYear()
 *
 * querySelectorAll('.auto-year') — Finds and updates all instances at once.
 *   Returns a NodeList of all elements with class "auto-year".
 *   .forEach() loops over each one and sets its textContent to the current year.
 */
export function AutoYearScript() {
  useEffect(() => {
    const year = new Date().getFullYear();
    document.querySelectorAll('.auto-year').forEach((el) => {
      el.textContent = String(year);
    });
  }, []);

  return null;
}
