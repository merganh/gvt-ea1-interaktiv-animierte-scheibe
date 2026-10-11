# EA 1: Interaktiv animierte Scheibe

Einsendeaufgabe 1, Modul Graphical Visualisation Technologies, TH Lübeck, Wintersemester 2026/27.

Eine einseitige Web-App mit einer sich drehenden 2D-Scheibe aus Einzelbildern.
Die Bilder (Sprite-Sheet) werden mit JavaScript geladen und in einem
`<img>`-Element gezeigt (kein Canvas, kein WebGL). Mit den Tasten `l` und `r`
dreht sich die Scheibe um ein Bild nach links bzw. rechts, mit `a` startet und
stoppt die kontinuierliche Drehung. Zusätzlich hüpft ein Hase als zweites
animiertes Sprite-Sheet.

## Live-Demo

Öffentlich erreichbar unter:
<https://merganh.github.io/gvt-ea1-interaktiv-animierte-scheibe/>

## Lokal ausführen

Kein Build-Schritt. Die Seite lässt sich über einen lokalen Server öffnen:

```bash
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

## Deployment via GitHub Pages

Im Repo liegt ein Workflow unter `.github/workflows/pages.yml`, der die Seite bei
jedem Push auf `main` automatisch nach GitHub Pages deployt. Einmalig im Repo
unter **Settings → Pages → Build and deployment → Source** `GitHub Actions`
wählen.

## Aufbau

- `index.html`: gesamte Anwendung in einer Datei (HTML, CSS, JS inline)
- `textures/disc.webp`: Sprite-Sheet der Scheibe, 36 Bilder (0°, 10° … 350°), 6 × 6 à 420 px
- `textures/bunny.png`: Sprite-Sheet des Hasen, 24 Bilder, 6 × 4 à 360 px
- `tools/`: Generator der Sprite-Sheets (`sprites.html`, ausgeführt über `node tools/build-sprites.mjs` mit Chrome)

Das Bildmaterial ist vollständig selbst erstellt, es werden keine externen
Bibliotheken oder Fremdbilder verwendet.

## Bedienung

- **l**: Scheibe ein Bild nach links drehen
- **r**: Scheibe ein Bild nach rechts drehen
- **a**: Auto-Rotation (nach rechts) starten bzw. anhalten

Jede Taste hat einen gleichnamigen Button. Gedrückthalten löst keinen Dauerlauf aus.

## Quelltext-Markierung

Die für die Aufgabe geschriebenen JavaScript-Stellen sind mit
`// START EA1_INTERAKTIV_ANIMIERTE_SCHEIBE` und
`// END EA1_INTERAKTIV_ANIMIERTE_SCHEIBE` markiert.
