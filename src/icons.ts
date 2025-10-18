import { addIcon } from "obsidian";
import { Align } from "settings";

export const ICONS = {
	"text-align-start": `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-start-icon lucide-text-align-start">
		<path d="M21 5H3"/>
		<path d="M15 12H3"/>
		<path d="M17 19H3"/>
	</svg>
	`,
	"text-align-center": `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-center-icon lucide-text-align-center">
		<path d="M21 5H3"/>
		<path d="M17 12H7"/>
		<path d="M19 19H5"/>
	</svg>
	`,
	"text-align-end": `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-end-icon lucide-text-align-end">
		<path d="M21 5H3"/>
		<path d="M21 12H9"/>
		<path d="M21 19H7"/>
	</svg>
	`,
} as Record<Align, string>;

export default function addIcons() {
	for (const icon in ICONS) {
		addIcon(icon, ICONS[icon as Align]);
	}
}
