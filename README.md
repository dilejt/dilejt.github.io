# dilejt.github.io

## TigerClaw

Polskie biuro turystyczne TigerClaw oferujące podróże w głąb azjatyckich dżungli na prawdziwie niebezpieczną wyprawę. W ofercie dostępni są doświadczeni podróżnicy mogący zabrać klienta w każdy zakątek tej majestatycznej krainy. Na stronie biura znajdują się również informacje o najgroźniejszych zwierzętach występujących w tym regionie.

Adres strony: https://dilejt.github.io

Instrukcja uruchomienia:

Po wejściu w link https://dilejt.github.io pokaże się przygotowana witryna internetowa z :
- nawigacją pod przycisk dla mniejszych rozdzielczości, 
- różą wiatrów, która po kliknięciu obraca się w sposób losowy, 
- wskaźnikami, które po kliknięciu pokazują divy z informacjami w sposób animowany. Aby je wyłączyć można kliknąć zarówno w diva z informacją jak i w wskaźnik,
- galerią opartą o angulara z kilkoma opcjami do sortowania,
- slider ze zdjęciami docelowych miejsc podróży,
- formularzem kontaktowym opartym o walidację wprowadzanych danych,
- sekcją informacyjną z tłem, które rozmazuje się po zjechaniu scrollem do miejsca tej sekcji,
- stopką z polityką prywatności,
- dla szerokości okna ok.1920px pokazuje się obrazek kapelusza w sekcji informacyjnej na dole strony gdzie po kliknięciu w niego uruchamia się animacja zanikania elementu i w efekcie końcowym pojawienia się na górze strony,
- responsywnością oczywiście zarówno tekstu, obrazków jak i wszystkich innych komponentów na całej stronie

W folderze js znajdują się pliki:
- animations.js z:
  - animowanym scrollowaniem strony po naciśnięciu odnośnika w nawigacji,
  - obracaniem róży wiatrów,
  - obsługą wskaźników pokazujących informacje w sposób animowany,
  - rozmazywaniem tła sekcji informacyjnej po zjechaniu scrollem do miejsca tej sekcji
- forms.js z:
  - walidacją danych formularza
- controllers.js z:
  - obsługą galerii za pomocą angulara
 
W folderze css znajdują się pliki:
- style.css z:
  - modyfikacją wyglądu całej witryny

W folderze json znajduje się plik:
- galleries.json z:
  - danymi do angularowej galerii

