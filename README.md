# ShopHelten's Junior Frontend Prøve

Hej ShopHelten,

Jeg har hermed løst jeres opgave som beskrevet.

Jeg startede med at undersøge forskellige løsninger. Selvom jeg har erfaring med React, valgte jeg i denne opgave at holde mig til HTML, CSS og JavaScript, da det eksisterende projekt allerede er bygget op omkring dem.

Jeg håber, at resultatet stemmer overens med jeres forventninger i forhold til det den mockup i har givet.

Med venlig hilsen

Oliver Alex Kruse Schjelde

## Implementerede funktioner efter opgavebeskrivelsen

### Features Sektion
- Responsiv sektion med tre kolonner implementeret med CSS Grid
- Guld farvetema (#C5A572) med mørk baggrund (#1C1C1C)
- Guld ramme omkring hele sektionen
- SVG ikoner i guld farve med grid, stjerne og leveringsmotiver

### Animationer
- Fade-in animation for hver kolonne med forskudt timing
- Hover effekter på ikoner:
- Smooth transitions på alle interaktive elementer

### Pop-up Modal
- Responsiv modal med guld ramme og mørk baggrund lavet i samme stil som det andet.
- Lukkeknap i øverste højre hjørne
- Emoji-baserede ikoner for bedre brugeroplevelse
- Nedtoning af baggrund ved åbning

### Nedtællingstimer
- Aktiv mellem 08:00 og 15:00 på hverdage
- Forskellige beskeder baseret på tidspunkt:
  - Før 08:00: "Vores pakkeshop åbner kl. 08:00 🌅"
  - Normal drift: "Bestil inden kl. 15 i dag, og få din ordre sendt afsted samme dag 🚚"
  - Sidste 30 minutter: "Skynd dig! Bestil nu for at få din ordre afsendt i dag 🏃‍♂️"
  - Efter 15:00: "Dagens forsendelser er afsendt. Bestil inden kl. 15 i morgen..."
  - Weekend: "Bestil inden kl. 15 på hverdage..."
- Real-time opdatering med requestAnimationFrame
- Timer format: HH:MM:SS


---

## Opgaveoversigt

Implementér en responsiv sektion med tekst og ikoner i henhold til det medfølgende design.

## Krav

### Sektionens Struktur

- **Layout**: Tre kolonner, hver med et ikon, en overskrift og en beskrivelse
- **Responsivitet**: Fuld responsivitet til både desktop og mobile enheder
    - Kolonnerne skal stables lodret på mobile enheder

### Særligt Element

- **CTA-knap**: Tilføj en call-to-action-knap i kolonnen "Hurtig levering"
- **Pop-up Indhold**: Når der klikkes, skal knappen åbne en pop-up med:
    - **Overskrift**: Hurtig levering 🚀
    - **Indhold**:

```text
  Vi sender lynhurtigt, så du får dine varer uden unødig ventetid! 📦✨
  ✔ Fri fragt ved køb over 999,95,-
  ✔ 30 dages returret – så du kan handle trygt 🛍️

  Bestil inden kl 15, og så sender vi dine vare afsted allerede i dag 🚚
```

## Ekstra Funktioner (Ikke krav)

1. **Animation**:
    - Tilføj diskrete animationer som fade-in-effekter
    - Implementér hover-effekter på ikoner

2. **Nedtællingstimer**:
    - Tilføj en nedtællingstimer i pop-uppen, der tæller ned til kl. 15:00
    - Når timeren udløber, skal teksten automatisk ændres til:  
      "Bestil inden kl. 15 på hverdage, og få din ordre sendt afsted samme dag."
