export function tocAnnotations(text: string): string {
    return text
        .replace(/注始/g, '<span class="toc-annotation">')
        .replace(/注終/g, '</span>')
}

